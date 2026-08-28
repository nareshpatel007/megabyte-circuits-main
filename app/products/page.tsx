"use client";

import React, { useEffect, useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { Search, Loader2, ExternalLink, ShoppingCart, Info, CheckCircle2, ChevronRight, Layers, X } from "lucide-react";
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

    async function loadData(keyword: string, category: string) {
        setLoading(true);
        try {
            const catParam = category === "All" ? "" : category;
            const res = await fetch(`/api/digikey/products?keywords=${encodeURIComponent(keyword)}&category=${encodeURIComponent(catParam)}&count=100`);
            if (res.ok) {
                const data = await res.json();
                setProducts(data.Products || []);
            }
        } catch (err) {
            console.error("Error loading parts:", err);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadData(activeQuery, selectedCategory);
    }, [activeQuery, selectedCategory]);

    // Live search debounce effect as user types
    useEffect(() => {
        const handler = setTimeout(() => {
            setActiveQuery(searchQuery.trim());
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    const handleAddToCart = async (product: DigiKeyProduct) => {
        const partNum = product.ManufacturerProductNumber || "Part";
        const desc = product.Description?.DetailedDescription || product.Description?.ProductDescription || "High quality component";
        const imageUrl = product.PhotoUrl || "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg";
        const rawUnitPrice = product.UnitPrice ? (product.UnitPrice > 1 ? product.UnitPrice : product.UnitPrice * 80) : 10;

        // Respect minimum required order quantity
        const minQty = product.MinimumOrderQuantity || product.ProductVariations?.[0]?.MinimumOrderQuantity || getMinCartQuantity();
        const standardPricing = product.StandardPricing || product.ProductVariations?.[0]?.StandardPricing;

        try {
            const savedCart = localStorage.getItem("megabyte_cart");
            let items: any[] = savedCart ? JSON.parse(savedCart) : [];

            const existingIndex = items.findIndex(
                (item) => item.productType === "part" && item.partNumber === partNum
            );

            if (existingIndex > -1) {
                const newQty = (items[existingIndex].qty || 0) + minQty;
                const { unitPrice: calcUnitPrice, price: calcTotalPrice } = calculatePartPrice(rawUnitPrice, newQty, standardPricing);
                items[existingIndex] = {
                    ...items[existingIndex],
                    qty: newQty,
                    price: calcTotalPrice,
                    unitPrice: calcUnitPrice,
                    baseUnitPrice: rawUnitPrice,
                    photoUrl: imageUrl,
                };
            } else {
                const { unitPrice: calcUnitPrice, price: calcTotalPrice } = calculatePartPrice(rawUnitPrice, minQty, standardPricing);
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
            setAddedCartIds((prev) => ({ ...prev, [partNum]: true }));
            setTimeout(() => {
                setAddedCartIds((prev) => ({ ...prev, [partNum]: false }));
            }, 2000);
        } catch (e) {
            console.error("Failed to add part to cart:", e);
        }
    };


    const totalProductCount = products.length;

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/60">
            <ServiceHeader
                title="Parts & Electronics Components Catalog"
                subtitle="Browse through electronic parts, microcontrollers, resistors, and hardware components."
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
                                onClick={() => setSelectedCategory("All")}
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
                                            onClick={() => setSelectedCategory(cat.name)}
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
                        </div>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <Loader2 className="w-10 h-10 text-primary animate-spin mb-3" />
                                <p className="text-slate-600 text-sm font-semibold">Loading parts catalog from database...</p>
                            </div>
                        ) : products.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                                <Info className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                                <h4 className="text-lg font-bold text-slate-700 mb-1">No Parts Found</h4>
                                <p className="text-slate-500 text-sm">
                                    No parts match your criteria. Try selecting another category or clear your search term.
                                </p>
                                <Button
                                    onClick={() => { setSelectedCategory("All"); setActiveQuery(""); setSearchQuery(""); }}
                                    className="mt-4 bg-primary text-white text-xs font-semibold px-4 py-2"
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                {products.map((product, idx) => {
                                    const partNum = product.ManufacturerProductNumber || "Part";
                                    const mfg = product.Manufacturer?.Name || "Manufacturer";
                                    const desc = product.Description?.DetailedDescription || product.Description?.ProductDescription || "High quality component";
                                    const price = product.UnitPrice
                                        ? `₹${(product.UnitPrice > 1 ? product.UnitPrice : product.UnitPrice * 80).toFixed(2)}`
                                        : "₹10.00";
                                    const imageUrl = product.PhotoUrl || "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg";
                                    const isAdded = addedCartIds[partNum];

                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                                        >
                                            <div>
                                                {/* Header Category & Mfg */}
                                                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                                    <span className="font-semibold text-slate-600 truncate max-w-[140px]">{mfg}</span>
                                                    {product.Category && (
                                                        <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md capitalize">
                                                            {product.Category}
                                                        </span>
                                                    )}
                                                </div>

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
                                                        <h4 className="font-bold text-slate-800 text-sm leading-tight line-clamp-1 mb-1 group-hover:text-primary transition-colors">
                                                            {partNum}
                                                        </h4>
                                                        <p className="text-xs text-slate-500 line-clamp-3 leading-snug mb-2">
                                                            {desc}
                                                        </p>
                                                        <p className="text-xs font-semibold text-slate-700">
                                                            Price: <span className="font-extrabold text-slate-900">{price}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Buttons: View Details & Add to Cart */}
                                            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full text-xs font-semibold border-slate-200 text-slate-700 hover:bg-slate-50 h-9"
                                                >
                                                    <a
                                                        href={product.ProductUrl || product.DatasheetUrl || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-1"
                                                    >
                                                        View Details <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                </Button>

                                                <Button
                                                    onClick={() => handleAddToCart(product)}
                                                    size="sm"
                                                    className={`w-full text-xs font-bold h-9 transition-colors ${isAdded
                                                        ? "bg-green-600 text-white hover:bg-green-700"
                                                        : "bg-primary text-white hover:bg-primary/90"
                                                        }`}
                                                >
                                                    {isAdded ? (
                                                        <span className="flex items-center gap-1">
                                                            <CheckCircle2 className="w-3.5 h-3.5" /> Added
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center gap-1">
                                                            <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                                                        </span>
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
