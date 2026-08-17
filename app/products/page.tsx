"use client";

import React, { useEffect, useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { Search, Loader2, ExternalLink, ShoppingCart, Info, CheckCircle2, ChevronRight, Layers } from "lucide-react";
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

    async function loadData(keyword: string, category: string) {
        setLoading(true);
        try {
            const catParam = category === "All" ? "" : category;
            const res = await fetch(`/api/digikey/products?keywords=${encodeURIComponent(keyword)}&category=${encodeURIComponent(catParam)}&count=100`);
            if (res.ok) {
                const data = await res.json();
                setProducts(data.Products || []);
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
        loadData(activeQuery, selectedCategory);
    }, [activeQuery, selectedCategory]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveQuery(searchQuery.trim());
    };

    const handleAddToCart = (productNumber: string) => {
        setAddedCartIds((prev) => ({ ...prev, [productNumber]: true }));
        setTimeout(() => {
            setAddedCartIds((prev) => ({ ...prev, [productNumber]: false }));
        }, 2000);
    };

    const totalProductCount = products.length;

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
                                onClick={() => setSelectedCategory("All")}
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
                                        onClick={() => setSelectedCategory(cat.name)}
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
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
