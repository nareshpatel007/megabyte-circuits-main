"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { DigiKeyProduct } from "@/lib/digikey";

export function FeaturedProducts() {
    const [products, setProducts] = useState<DigiKeyProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        let isMounted = true;
        async function fetchFeatured() {
            try {
                // Fetch products stored in DB table (defaults to count=4 featured items)
                const res = await fetch("/api/digikey/products?count=4");
                if (res.ok) {
                    const data = await res.json();
                    if (isMounted && data.Products && data.Products.length > 0) {
                        setProducts(data.Products.slice(0, 4));
                        setLoading(false);
                        return;
                    }
                }
            } catch (err) {
                console.error("Failed to fetch featured products from database:", err);
            }
            if (isMounted) {
                setLoading(false);
            }
        }
        fetchFeatured();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="py-10 bg-slate-50 dark:bg-zinc-900/60 border-y border-slate-100 dark:border-zinc-800 transition-colors">
            <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                        Featured Products
                    </h2>
                    <Link
                        href="/parts"
                        className="inline-flex items-center text-sm font-semibold text-primary dark:text-emerald-400 hover:underline transition-colors gap-0.5"
                    >
                        Explore Products <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-slate-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between animate-pulse"
                            >
                                <div className="flex items-start gap-3">
                                    {/* Skeleton Thumbnail */}
                                    <div className="w-20 h-20 shrink-0 bg-slate-200 dark:bg-zinc-800 rounded-lg" />

                                    {/* Skeleton Product Details */}
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-slate-200 dark:bg-zinc-800 rounded w-3/4" />
                                        <div className="h-3 bg-slate-200 dark:bg-zinc-800 rounded w-full" />
                                        <div className="h-3 bg-slate-200 dark:bg-zinc-800 rounded w-5/6" />
                                        <div className="h-3 bg-slate-200 dark:bg-zinc-800 rounded w-1/2 pt-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 text-sm">
                        No featured products found in the database.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {products.map((product, idx) => {
                            const title = product.ManufacturerProductNumber || "Product";
                            const description =
                                product.Description?.ProductDescription ||
                                product.Description?.DetailedDescription ||
                                "High quality electronic component";
                            const price = product.UnitPrice
                                ? `₹${(product.UnitPrice > 1 ? product.UnitPrice : product.UnitPrice * 80).toFixed(2)}`
                                : "Contact for Price";
                            const imageUrl = product.PhotoUrl || "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg";
                            const productHref = `/parts/${encodeURIComponent(title)}`;

                            return (
                                <div
                                    key={idx}
                                    onClick={() => router.push(productHref)}
                                    className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group cursor-pointer"
                                >
                                    <div>
                                        {/* Content row with image & details */}
                                        <div className="flex items-start gap-3">
                                            {/* Image */}
                                            <div className="w-20 h-20 shrink-0 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={imageUrl}
                                                    alt={title}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                                                    onError={(e) => {
                                                        (e.target as HTMLElement).setAttribute("src", "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg");
                                                    }}
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <Link
                                                    href={productHref}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="font-bold text-primary dark:text-emerald-400 hover:underline text-sm leading-tight line-clamp-1 block mb-1"
                                                >
                                                    {title}
                                                </Link>
                                                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-snug line-clamp-3 mb-3">
                                                    {description}
                                                </p>
                                                <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200">
                                                    Price: <span className="font-bold text-slate-900 dark:text-white">{price}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
