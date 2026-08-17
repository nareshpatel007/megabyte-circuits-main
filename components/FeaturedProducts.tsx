"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Loader2 } from "lucide-react";
import { DigiKeyProduct } from "@/lib/digikey";

// Sample fallback items matching screenshot layout if API is loading or encounters issue
const FALLBACK_PRODUCTS: DigiKeyProduct[] = [
    {
        ManufacturerProductNumber: "ATMEGA328PB-ANR",
        Description: {
            ProductDescription: "AVR 32KBYTES Flash, 1KBYTES EEPROM, 2KBYTES Ram, W -...",
            DetailedDescription: "8-bit AVR Microcontroller 20MHz 32KB Flash"
        },
        Manufacturer: { Id: 1, Name: "Microchip Technology" },
        UnitPrice: 176.00,
        ProductUrl: "https://www.digikey.com",
        PhotoUrl: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
    },
    {
        ManufacturerProductNumber: "TAS2770RJQR",
        Description: {
            ProductDescription: "Audio Amplifier Speaker Mono 20W Class-D 26-Pin VQFN-HR T/R",
            DetailedDescription: "Class D Audio Amplifier 1-Channel Mono"
        },
        Manufacturer: { Id: 2, Name: "Texas Instruments" },
        UnitPrice: 157.00,
        ProductUrl: "https://www.digikey.com",
        PhotoUrl: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
    },
    {
        ManufacturerProductNumber: "GLYPH-C3-ESP32-IOT-Dev-Board",
        Description: {
            ProductDescription: "Indias most affordable development board...",
            DetailedDescription: "ESP32-C3 Wi-Fi and Bluetooth Development Board"
        },
        Manufacturer: { Id: 3, Name: "Espressif" },
        UnitPrice: 434.00,
        ProductUrl: "https://www.digikey.com",
        PhotoUrl: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
    },
    {
        ManufacturerProductNumber: "STM32G030C8T6",
        Description: {
            ProductDescription: "MCU 32-Bit STM32G030 ARM Cortex-M0+ RISC 64KB Flash 2V to 3.6V 4...",
            DetailedDescription: "32-bit ARM Cortex-M0+ Microcontroller 64KB Flash"
        },
        Manufacturer: { Id: 4, Name: "STMicroelectronics" },
        UnitPrice: 100.00,
        ProductUrl: "https://www.digikey.com",
        PhotoUrl: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
    }
];

export function FeaturedProducts() {
    const [products, setProducts] = useState<DigiKeyProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;
        async function fetchFeatured() {
            try {
                const res = await fetch("/api/digikey/products?keywords=resistor");
                if (res.ok) {
                    const data = await res.json();
                    if (isMounted && data.Products && data.Products.length > 0) {
                        setProducts(data.Products);
                        setLoading(false);
                        return;
                    }
                }
            } catch (err) {
                console.error("Failed to fetch featured products:", err);
            }
            if (isMounted) {
                setProducts(FALLBACK_PRODUCTS);
                setLoading(false);
            }
        }
        fetchFeatured();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="py-10 bg-slate-50 border-y border-slate-100">
            <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                        Featured Products
                    </h2>
                    <Link
                        href="/parts"
                        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors gap-0.5"
                    >
                        Explore Products <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="flex items-center justify-center py-16">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                        <span className="ml-2 text-sm text-slate-500 font-medium">Loading featured products...</span>
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

                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
                                >
                                    <div>
                                        {/* Content row with image & details */}
                                        <div className="flex items-start gap-3">
                                            {/* Image */}
                                            <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden p-1 border border-slate-100">
                                                <img
                                                    src={imageUrl}
                                                    alt={title}
                                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                                                    onError={(e) => {
                                                        (e.target as HTMLElement).setAttribute("src", "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg");
                                                    }}
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <Link
                                                    href={`/parts/${encodeURIComponent(title)}`}
                                                    className="font-bold text-blue-600 hover:text-blue-800 text-sm leading-tight line-clamp-1 block mb-1"
                                                >
                                                    {title}
                                                </Link>
                                                <p className="text-xs text-slate-500 leading-snug line-clamp-3 mb-3">
                                                    {description}
                                                </p>
                                                <p className="text-xs font-semibold text-slate-800">
                                                    Price: <span className="font-bold text-slate-900">{price}</span>
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
