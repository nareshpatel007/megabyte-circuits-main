"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import {
    Search,
    Loader2,
    ShoppingCart,
    Info,
    CheckCircle2,
    ChevronRight,
    Layers,
    ChevronLeft,
    ChevronsLeft,
    ChevronsRight,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DigiKeyProduct } from "@/lib/digikey";
import { saveCartToBackend, getMinCartQuantity, calculatePartPrice } from "@/lib/cartSession";


interface CategoryCount {
    name: string;
    count: number;
}

export default function PartsPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Parts" }
    ];

    const [products, setProducts] = useState<DigiKeyProduct[]>([]);
    const [categories, setCategories] = useState<CategoryCount[]>([]);
    const [categorySearch, setCategorySearch] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeQuery, setActiveQuery] = useState<string>("");
    const [addedCartIds, setAddedCartIds] = useState<Record<string, boolean>>({});

    // Pagination State
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [totalProductCount, setTotalProductCount] = useState<number>(0);
    const perPage = 12;

    useEffect(() => {
        let isMounted = true;
        async function loadCategories() {
            try {
                const res = await fetch("/api/digikey/categories");
                if (res.ok) {
                    const data = await res.json();
                    if (isMounted && data.Categories && data.Categories.length > 0) {
                        setCategories(data.Categories);
                    }
                }
            } catch (err) {
                console.error("Failed to load categories:", err);
            }
        }
        loadCategories();
        return () => {
            isMounted = false;
        };
    }, []);

    async function loadData(keyword: string, category: string, page: number) {
        setLoading(true);
        try {
            const catParam = category === "All" ? "" : category;
            const res = await fetch(
                `/api/digikey/products?keywords=${encodeURIComponent(keyword)}&category=${encodeURIComponent(catParam)}&count=${perPage}&page=${page}`
            );
            if (res.ok) {
                const data = await res.json();
                setProducts(data.Products || []);
                setTotalProductCount(data.ProductsCount || (data.Products || []).length);
                setTotalPages(data.TotalPages || Math.ceil((data.ProductsCount || 1) / perPage));
            }
        } catch (err) {
            console.error("Error loading parts:", err);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadData(activeQuery, selectedCategory, currentPage);
    }, [activeQuery, selectedCategory, currentPage]);

    // Live search debounce effect as user types
    useEffect(() => {
        const handler = setTimeout(() => {
            setCurrentPage(1);
            setActiveQuery(searchQuery.trim());
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    const handleCategorySelect = (categoryName: string) => {
        setSelectedCategory(categoryName);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 300, behavior: "smooth" });
        }
    };

    const [cartPartNumbers, setCartPartNumbers] = useState<string[]>([]);

    const updateCartPartNumbers = () => {
        try {
            const savedCart = localStorage.getItem("megabyte_cart");
            if (savedCart) {
                const items: any[] = JSON.parse(savedCart);
                const partNums = items
                    .filter((item) => item.productType === "part" && item.partNumber)
                    .map((item) => item.partNumber);
                setCartPartNumbers(partNums);
            } else {
                setCartPartNumbers([]);
            }
        } catch {
            setCartPartNumbers([]);
        }
    };

    useEffect(() => {
        updateCartPartNumbers();
        const handleCartUpdate = () => updateCartPartNumbers();
        window.addEventListener("megabyte_cart_updated", handleCartUpdate);
        window.addEventListener("storage", handleCartUpdate);
        return () => {
            window.removeEventListener("megabyte_cart_updated", handleCartUpdate);
            window.removeEventListener("storage", handleCartUpdate);
        };
    }, []);

    const handleAddToCart = async (product: DigiKeyProduct) => {
        const partNum = product.ManufacturerProductNumber || "Part";
        const desc = product.Description?.DetailedDescription || product.Description?.ProductDescription || "High quality component";
        const imageUrl = product.PhotoUrl || "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg";
        const rawUnitPrice = product.UnitPrice ? (product.UnitPrice > 1 ? product.UnitPrice : product.UnitPrice * 80) : 10;
        const minQty = getMinCartQuantity();

        try {
            const savedCart = localStorage.getItem("megabyte_cart");
            let items: any[] = savedCart ? JSON.parse(savedCart) : [];

            // Check if product already exists in cart
            const existingIndex = items.findIndex(
                (item) => item.productType === "part" && item.partNumber === partNum
            );

            if (existingIndex > -1) {
                // Increment quantity by minQty
                const newQty = (items[existingIndex].qty || 0) + minQty;
                const { unitPrice: calcUnitPrice, price: calcTotalPrice } = calculatePartPrice(rawUnitPrice, newQty);
                items[existingIndex] = {
                    ...items[existingIndex],
                    qty: newQty,
                    price: calcTotalPrice,
                    unitPrice: calcUnitPrice,
                    baseUnitPrice: rawUnitPrice,
                    photoUrl: imageUrl,
                };
            } else {
                // Add new part item with minimum configured quantity
                const { unitPrice: calcUnitPrice, price: calcTotalPrice } = calculatePartPrice(rawUnitPrice, minQty);
                const newItem = {
                    id: `part_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
                    productType: "part",
                    boardName: partNum,
                    partNumber: partNum,
                    description: desc,
                    photoUrl: imageUrl,
                    qty: minQty,
                    unitPrice: calcUnitPrice,
                    price: calcTotalPrice,
                    baseUnitPrice: rawUnitPrice,
                    date: new Date().toISOString().split("T")[0],
                };
                items.push(newItem);
            }

            await saveCartToBackend(items);
            updateCartPartNumbers();
        } catch (e) {
            console.error("Failed to add part to cart:", e);
        }
    };


    return (
        <div className="flex flex-col min-h-screen bg-slate-50/60">
            <ServiceHeader
                title="Parts & Electronics Components Catalog"
                subtitle="Browse through electronic parts, microcontrollers, resistors, and hardware components."
                badge="Parts Catalog"
                breadcrumbs={breadcrumbs}
            />

            <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Top Search Header */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-3 sm:p-4 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-8 transition-all">
                    <div className="relative flex items-center w-full group">
                        <Search className="w-5 h-5 text-slate-400 dark:text-zinc-500 absolute left-4 pointer-events-none group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Type to search by part number, description, manufacturer, keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-12 h-12 bg-slate-50/70 dark:bg-zinc-800/50 rounded-xl border border-slate-200/90 dark:border-zinc-700 text-sm font-medium text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all"
                        />
                        <div className="absolute right-3.5 flex items-center gap-2">
                            {loading && (
                                <Loader2 className="w-4 h-4 text-primary animate-spin" />
                            )}
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchQuery("");
                                        setActiveQuery("");
                                        setCurrentPage(1);
                                    }}
                                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                    title="Clear search"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Layout: Left Sidebar Categories & Right Center Parts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                    {/* LEFT SIDEBAR: Categories */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm lg:sticky lg:top-28">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" /> Categories
                            </h3>
                            <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                {categories.length}
                            </span>
                        </div>

                        {/* Search Input inside Categories Sidebar */}
                        <div className="relative mb-3">
                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search categories..."
                                value={categorySearch}
                                onChange={(e) => setCategorySearch(e.target.value)}
                                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
                            <button
                                onClick={() => handleCategorySelect("All")}
                                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all flex items-center justify-between ${selectedCategory === "All"
                                    ? "bg-primary text-white font-bold shadow-md shadow-primary/20"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <span>All Categories</span>
                                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                            </button>

                            {categories
                                .filter((cat) =>
                                    cat.name.toLowerCase().includes(categorySearch.toLowerCase().trim())
                                )
                                .map((cat, idx) => {
                                    const isActive = selectedCategory === cat.name;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleCategorySelect(cat.name)}
                                            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs md:text-sm transition-all flex items-center justify-between capitalize ${isActive
                                                ? "bg-primary text-white font-bold shadow-md shadow-primary/20"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                }`}
                                        >
                                            <span className="truncate pr-2">{cat.name}</span>
                                            <span className={`text-[11px] px-2 py-0.5 rounded-full shrink-0 ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                                                }`}>
                                                {cat.count}
                                            </span>
                                        </button>
                                    );
                                })}
                        </div>
                    </div>

                    {/* RIGHT CENTER: Parts List Grid */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs md:text-sm text-slate-500 font-medium">
                                Showing <span className="font-bold text-slate-800">{totalProductCount}</span> parts
                                {selectedCategory !== "All" && (
                                    <span> in <span className="text-primary font-bold capitalize">{selectedCategory}</span></span>
                                )}
                            </p>
                            {totalPages > 1 && (
                                <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-lg">
                                    Page {currentPage} of {totalPages}
                                </span>
                            )}
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 animate-pulse">
                                {[...Array(6)].map((_, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between h-[230px]"
                                    >
                                        <div>
                                            <div className="flex items-center justify-end mb-4">
                                                <div className="w-16 h-4 bg-slate-200 rounded-md" />
                                            </div>
                                            <div className="flex gap-3 mb-4">
                                                <div className="w-20 h-20 bg-slate-200 rounded-xl shrink-0" />
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                                                    <div className="h-3 bg-slate-150 bg-slate-100 rounded w-full" />
                                                    <div className="h-3 bg-slate-150 bg-slate-100 rounded w-2/3" />
                                                    <div className="h-4 bg-slate-200 rounded w-1/2 pt-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                                            <div className="h-9 bg-slate-200 rounded-xl" />
                                            <div className="h-9 bg-slate-200 rounded-xl" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : products.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                                <Info className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                                <h4 className="text-lg font-bold text-slate-700 mb-1">No Parts Found</h4>
                                <p className="text-slate-500 text-sm">
                                    No parts match your criteria. Try selecting another category or clear your search term.
                                </p>
                                <Button
                                    onClick={() => { setSelectedCategory("All"); setActiveQuery(""); setSearchQuery(""); setCurrentPage(1); }}
                                    className="mt-4 bg-primary text-white text-xs font-semibold px-4 py-2"
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                    {products.map((product, idx) => {
                                        const partNum = product.ManufacturerProductNumber || "Part";
                                        const desc = product.Description?.DetailedDescription || product.Description?.ProductDescription || "High quality component";
                                        const price = product.UnitPrice
                                            ? `₹${(product.UnitPrice > 1 ? product.UnitPrice : product.UnitPrice * 80).toFixed(2)}`
                                            : "₹10.00";
                                        const imageUrl = product.PhotoUrl || "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg";
                                        const isAdded = cartPartNumbers.includes(partNum);

                                        return (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                                            >
                                                <div>
                                                    {/* Photo & Main Details */}
                                                    <div className="flex gap-3 mb-4">
                                                        <div className="w-20 h-20 bg-slate-50 rounded-xl p-1.5 flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden">
                                                            <img
                                                                src={imageUrl}
                                                                alt={partNum}
                                                                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                                                onError={(e) => {
                                                                    (e.target as HTMLElement).setAttribute("src", "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg");
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <Link href={`/parts/${encodeURIComponent(partNum)}`} target="_blank" rel="noopener noreferrer">
                                                                <h4 className="font-bold text-slate-800 text-sm leading-tight line-clamp-1 mb-1 group-hover:text-primary transition-colors cursor-pointer">
                                                                    {partNum}
                                                                </h4>
                                                            </Link>
                                                            <p className="text-xs text-slate-500 line-clamp-3 leading-snug mb-2">
                                                                {desc}
                                                            </p>
                                                            <p className="text-xs font-semibold text-slate-700">
                                                                Price: <span className="font-extrabold text-slate-900">{price}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action Buttons: View Details (opens in new tab) & Add to Cart */}
                                                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full text-xs font-semibold border-slate-200 text-slate-700 hover:bg-slate-50 h-9"
                                                    >
                                                        <Link
                                                            href={`/parts/${encodeURIComponent(partNum)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center gap-1"
                                                        >
                                                            View Details <ChevronRight className="w-3 h-3" />
                                                        </Link>
                                                    </Button>

                                                    {isAdded ? (
                                                        <Button
                                                            disabled
                                                            size="sm"
                                                            className="w-full text-xs font-bold h-9 bg-green-600/90 text-white cursor-default opacity-100"
                                                        >
                                                            <span className="flex items-center gap-1">
                                                                <CheckCircle2 className="w-3.5 h-3.5" /> Added
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            onClick={() => handleAddToCart(product)}
                                                            size="sm"
                                                            className="w-full text-xs font-bold h-9 bg-primary text-white hover:bg-primary/90 transition-colors"
                                                        >
                                                            <span className="flex items-center gap-1">
                                                                <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                                                            </span>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* PAGINATION CONTROLS */}
                                {totalPages > 1 && (
                                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                                        <p className="text-xs text-slate-500 font-medium">
                                            Page <span className="font-bold text-slate-800">{currentPage}</span> of{" "}
                                            <span className="font-bold text-slate-800">{totalPages}</span>
                                        </p>

                                        <div className="flex items-center gap-1.5">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handlePageChange(1)}
                                                disabled={currentPage === 1}
                                                className="h-9 w-9 p-0 rounded-xl"
                                                title="First Page"
                                            >
                                                <ChevronsLeft className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="h-9 px-3 rounded-xl text-xs font-semibold"
                                            >
                                                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                                            </Button>

                                            {/* Page numbers around current page */}
                                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                                .filter(
                                                    (p) =>
                                                        p === 1 ||
                                                        p === totalPages ||
                                                        (p >= currentPage - 2 && p <= currentPage + 2)
                                                )
                                                .map((p, idx, arr) => {
                                                    const prev = arr[idx - 1];
                                                    const showEllipsis = prev && p - prev > 1;

                                                    return (
                                                        <React.Fragment key={p}>
                                                            {showEllipsis && (
                                                                <span className="px-1 text-slate-400 text-xs font-bold">...</span>
                                                            )}
                                                            <Button
                                                                variant={currentPage === p ? "default" : "outline"}
                                                                size="sm"
                                                                onClick={() => handlePageChange(p)}
                                                                className={`h-9 w-9 p-0 rounded-xl text-xs font-bold ${currentPage === p
                                                                    ? "bg-primary text-white"
                                                                    : "text-slate-700 hover:bg-slate-50"
                                                                    }`}
                                                            >
                                                                {p}
                                                            </Button>
                                                        </React.Fragment>
                                                    );
                                                })}

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="h-9 px-3 rounded-xl text-xs font-semibold"
                                            >
                                                Next <ChevronRight className="w-4 h-4 ml-1" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handlePageChange(totalPages)}
                                                disabled={currentPage === totalPages}
                                                className="h-9 w-9 p-0 rounded-xl"
                                                title="Last Page"
                                            >
                                                <ChevronsRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
