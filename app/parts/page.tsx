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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DigiKeyProduct } from "@/lib/digikey";

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

                // Only set/update categories if returned and we haven't initialized or category changed
                if (data.Categories && data.Categories.length > 0) {
                    setCategories(data.Categories);
                }
            }
        } catch (err) {
            console.error("Error loading parts:", err);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadData(activeQuery, selectedCategory, currentPage);
    }, [activeQuery, selectedCategory, currentPage]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
        setActiveQuery(searchQuery.trim());
    };

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

    const handleAddToCart = (productNumber: string) => {
        setAddedCartIds((prev) => ({ ...prev, [productNumber]: true }));
        setTimeout(() => {
            setAddedCartIds((prev) => ({ ...prev, [productNumber]: false }));
        }, 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/60">
            <ServiceHeader
                title="Parts & Electronics Components Catalog"
                subtitle="Browse through real-time stored DigiKey electronic parts, microcontrollers, resistors, and hardware components."
                badge="Parts Catalog"
                breadcrumbs={breadcrumbs}
            />

            <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Top Search & Filter Header */}
                <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200/80 shadow-sm mb-8">
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
                        <div className="relative flex-1">
                            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <Input
                                type="text"
                                placeholder="Search by part number, description, keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-11 h-12 bg-slate-50/50 rounded-xl border-slate-200 text-sm focus:bg-white"
                            />
                        </div>
                        <Button type="submit" className="h-12 bg-primary hover:bg-primary/90 text-white font-bold px-8 rounded-xl shrink-0">
                            Search Parts
                        </Button>
                    </form>
                </div>

                {/* Main Content Layout: Left Sidebar Categories & Right Center Parts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    
                    {/* LEFT SIDEBAR: Categories */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm lg:sticky lg:top-28">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" /> Categories
                            </h3>
                            <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                {categories.length}
                            </span>
                        </div>

                        <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
                            <button
                                onClick={() => handleCategorySelect("All")}
                                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all flex items-center justify-between ${
                                    selectedCategory === "All"
                                        ? "bg-primary text-white font-bold shadow-md shadow-primary/20"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <span>All Categories</span>
                                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                            </button>

                            {categories.map((cat, idx) => {
                                const isActive = selectedCategory === cat.name;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleCategorySelect(cat.name)}
                                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs md:text-sm transition-all flex items-center justify-between capitalize ${
                                            isActive
                                                ? "bg-primary text-white font-bold shadow-md shadow-primary/20"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                    >
                                        <span className="truncate pr-2">{cat.name}</span>
                                        <span className={`text-[11px] px-2 py-0.5 rounded-full shrink-0 ${
                                            isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
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
                                        const isAdded = addedCartIds[partNum];

                                        return (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                                            >
                                                <div>
                                                    {/* Category badge */}
                                                    <div className="flex items-center justify-end text-xs text-slate-400 mb-3">
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

                                                    <Button
                                                        onClick={() => handleAddToCart(partNum)}
                                                        size="sm"
                                                        className={`w-full text-xs font-bold h-9 transition-colors ${
                                                            isAdded
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
                                                                className={`h-9 w-9 p-0 rounded-xl text-xs font-bold ${
                                                                    currentPage === p
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
