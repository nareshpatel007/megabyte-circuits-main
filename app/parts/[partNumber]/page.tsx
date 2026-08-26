"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import {
    ChevronRight,
    Loader2,
    ExternalLink,
    ShoppingCart,
    CheckCircle2,
    ArrowLeft,
    FileText,
    Share2,
    ShieldCheck,
    Truck,
    PackageCheck,
    Layers,
    Info,
    Plus,
    Minus,
    Copy,
    Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { DigiKeyProduct } from "@/lib/digikey";
import { saveCartToBackend, getMinCartQuantity, calculatePartPrice } from "@/lib/cartSession";


interface SingleProductPageProps {
    params: Promise<{
        partNumber: string;
    }>;
}

export default function SingleProductPage({ params }: SingleProductPageProps) {
    const resolvedParams = use(params);
    const rawPartNumber = decodeURIComponent(resolvedParams.partNumber);

    const [product, setProduct] = useState<any>(null);
    const [relatedProducts, setRelatedProducts] = useState<DigiKeyProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [quantity, setQuantity] = useState<number>(getMinCartQuantity());
    const [isAdded, setIsAdded] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<"attributes" | "datasheet">("attributes");
    const [copiedName, setCopiedName] = useState<boolean>(false);

    const handleCopyName = (textToCopy: string) => {
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy);
            setCopiedName(true);
            setTimeout(() => setCopiedName(false), 2000);
        }
    };

    useEffect(() => {
        setQuantity(getMinCartQuantity());
    }, []);

    useEffect(() => {
        let isMounted = true;

        async function fetchProductDetails() {
            setLoading(true);
            try {
                // Fetch product details
                const res = await fetch(`/api/digikey/products/${encodeURIComponent(rawPartNumber)}`);
                let prodData = null;

                if (res.ok) {
                    prodData = await res.json();
                }

                if (isMounted) {
                    setProduct(prodData);
                }

                // Fetch category related parts
                const category = prodData?.Category || prodData?.search_keyword || "resistor";
                const relRes = await fetch(`/api/digikey/products?category=${encodeURIComponent(category)}&count=6`);
                if (relRes.ok) {
                    const relData = await relRes.json();
                    if (isMounted) {
                        setRelatedProducts(
                            (relData.Products || []).filter(
                                (p: any) => p.ManufacturerProductNumber !== rawPartNumber
                            ).slice(0, 6)
                        );
                    }
                }
            } catch (err) {
                console.error("Error fetching single product page:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchProductDetails();
    }, [rawPartNumber]);

    const handleAddToCart = async () => {
        const partNum = mfgNumber;
        const imageUrl = product?.PhotoUrl || "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg";
        const minQty = getMinCartQuantity();
        const addQty = Math.max(minQty, quantity);
        const rawUnitPrice = product?.UnitPrice ? (Number(product.UnitPrice) > 1 ? Number(product.UnitPrice) : Number(product.UnitPrice) * 80) : 1.70;

        try {
            const savedCart = localStorage.getItem("megabyte_cart");
            let items: any[] = savedCart ? JSON.parse(savedCart) : [];

            const existingIndex = items.findIndex(
                (item) => item.productType === "part" && item.partNumber === partNum
            );

            if (existingIndex > -1) {
                const newQty = (items[existingIndex].qty || 0) + addQty;
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
                const { unitPrice: calcUnitPrice, price: calcTotalPrice } = calculatePartPrice(rawUnitPrice, addQty);
                const newItem = {
                    id: `part_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
                    productType: "part",
                    boardName: partNum,
                    partNumber: partNum,
                    description: desc,
                    photoUrl: imageUrl,
                    qty: addQty,
                    unitPrice: calcUnitPrice,
                    price: calcTotalPrice,
                    baseUnitPrice: rawUnitPrice,
                    date: new Date().toISOString().split("T")[0],
                };
                items.push(newItem);
            }

            await saveCartToBackend(items);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        } catch (e) {
            console.error("Failed to add part to cart:", e);
        }
    };


    // Calculate price breaks dynamically
    // Calculate unit price and price tier structure
    const basePrice = product?.UnitPrice ? Number(product.UnitPrice) : 1.70;
    const finalPriceINR = basePrice > 1 ? basePrice : basePrice * 80;

    // Price Breaks (fixed static standard breakdown per unit quantity tiers)
    const priceTier = [
        { qty: "1 - 9", unitPrice: finalPriceINR, totalPrice: finalPriceINR * 6 },
        { qty: "10 - 24", unitPrice: finalPriceINR * 0.92, totalPrice: finalPriceINR * 0.92 * 10 },
        { qty: "25 - 49", unitPrice: finalPriceINR * 0.85, totalPrice: finalPriceINR * 0.85 * 25 },
        { qty: "50 - 99", unitPrice: finalPriceINR * 0.78, totalPrice: finalPriceINR * 0.78 * 50 },
        { qty: "100 - 499", unitPrice: finalPriceINR * 0.70, totalPrice: finalPriceINR * 0.70 * 100 },
        { qty: "500+", unitPrice: finalPriceINR * 0.62, totalPrice: finalPriceINR * 0.62 * 500 },
    ];

    // Determine tier unit price for selected quantity
    let currentUnitPrice = finalPriceINR;
    if (quantity >= 500) currentUnitPrice = finalPriceINR * 0.62;
    else if (quantity >= 100) currentUnitPrice = finalPriceINR * 0.70;
    else if (quantity >= 50) currentUnitPrice = finalPriceINR * 0.78;
    else if (quantity >= 25) currentUnitPrice = finalPriceINR * 0.85;
    else if (quantity >= 10) currentUnitPrice = finalPriceINR * 0.92;

    const calculatedTotalPrice = currentUnitPrice * quantity;

    // Build specs & attributes table list
    const mfgNumber = product?.ManufacturerProductNumber || rawPartNumber;
    const mfgName = product?.Manufacturer?.Name || product?.manufacturer_name || "";
    const desc =
        product?.Description?.DetailedDescription ||
        product?.Description?.ProductDescription ||
        product?.product_description ||
        "High quality electronic component stored in DigiKey product catalog.";

    const attributesList = [
        { topic: "Manufacturer", description: mfgName },
        { topic: "Manufacturer Part Number", description: mfgNumber },
        { topic: "Category", description: product?.Category || "Integrated Circuits (ICs) / Components" },
        { topic: "Description", description: desc },
        { topic: "Stock Availability", description: `${product?.QuantityAvailable ?? 1000} In Stock` },
        { topic: "Package / Case", description: "32-TQFP (7x7) / Surface Mount" },
        { topic: "Core Processor", description: "AVR / ARM Cortex" },
        { topic: "Speed", description: "20 MHz" },
        { topic: "Connectivity", description: "I2C, SPI, UART/USART" },
        { topic: "Peripherals", description: "Brown-out Detect/Reset, POR, PWM, WDT" },
        { topic: "Number of I/O", description: "27" },
        { topic: "Program Memory Size", description: "32KB (16K x 16)" },
        { topic: "RAM Size", description: "2K x 8" },
        { topic: "Voltage - Supply (Vcc/Vdd)", description: "1.8V ~ 5.5V" },
        { topic: "Operating Temperature", description: "-40°C ~ 105°C (TA)" },
        { topic: "Mounting Type", description: "Surface Mount" },
        { topic: "Standard Package Qty", description: "250 Reel / Cut Tape" },
    ];

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Parts", href: "/parts" },
        { label: mfgNumber },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/60">
            <ServiceHeader
                title={mfgNumber}
                subtitle={mfgName}
                badge="Component Details"
                breadcrumbs={breadcrumbs}
            />

            <main className="py-6 md:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {loading ? (
                    /* SKELETON LOADING STATE */
                    <div className="space-y-8 animate-pulse">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-center justify-center h-80">
                                <div className="w-48 h-48 bg-slate-200 rounded-xl" />
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                                <div className="h-6 bg-slate-200 rounded w-3/4" />
                                <div className="h-4 bg-slate-200 rounded w-1/2" />
                                <div className="h-16 bg-slate-100 rounded-xl" />
                                <div className="h-20 bg-slate-100 rounded-xl" />
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                                <div className="h-8 bg-slate-200 rounded w-1/3" />
                                <div className="h-10 bg-slate-200 rounded" />
                                <div className="h-12 bg-slate-300 rounded-xl" />
                                <div className="space-y-2 pt-4">
                                    <div className="h-4 bg-slate-100 rounded" />
                                    <div className="h-4 bg-slate-100 rounded" />
                                    <div className="h-4 bg-slate-100 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Skeleton Table */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
                            <div className="h-6 bg-slate-200 rounded w-1/4 mb-4" />
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="h-10 bg-slate-100 rounded flex gap-4">
                                    <div className="w-1/3 bg-slate-200 rounded h-6 my-auto ml-2" />
                                    <div className="w-2/3 bg-slate-200 rounded h-6 my-auto mr-2" />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* PRODUCT DETAILS CONTENT */
                    <div className="space-y-10">
                        {/* TOP CARDS: Image & Description (Left), Pricing Breakdown (Center), Add to Cart (Right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                            {/* 1. LEFT COLUMN: Product Image & Description Under Image */}
                            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
                                <div>
                                    <div className="w-full aspect-square max-w-[280px] bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden mb-5 mx-auto">
                                        <img
                                            src={
                                                product?.PhotoUrl ||
                                                "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
                                            }
                                            alt={mfgNumber}
                                            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
                                            onError={(e) => {
                                                (e.target as HTMLElement).setAttribute(
                                                    "src",
                                                    "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
                                                );
                                            }}
                                        />
                                    </div>

                                    {/* Description under the image */}
                                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                        <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                                            Description
                                        </h4>
                                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                                    {(product?.DatasheetUrl || product?.Datasheets) && (
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="w-full text-xs font-semibold rounded-xl border-slate-200"
                                        >
                                            <a
                                                href={product.DatasheetUrl || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-1.5"
                                            >
                                                <FileText className="w-4 h-4 text-rose-500" /> View Datasheet
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>

                            {/* 2. CENTER COLUMN: Header & Price Breaks Table */}
                            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-primary/10 text-primary font-bold text-xs px-2.5 py-1 rounded-md">
                                            {product?.Category || "Electronic Part"}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2.5 mb-1">
                                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                                            {mfgNumber}
                                        </h1>
                                        <button
                                            type="button"
                                            onClick={() => handleCopyName(mfgNumber)}
                                            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/40 hover:bg-slate-50 transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold"
                                            title="Copy product name to clipboard"
                                        >
                                            {copiedName ? (
                                                <>
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                    <span className="text-emerald-600 font-bold text-xs">Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3.5 h-3.5" />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <p className="text-sm font-semibold text-slate-600 mb-5">
                                        Manufacturer: <span className="text-slate-900 font-bold">{mfgName}</span>
                                    </p>

                                    {/* Price Breaks Breakdown Table at center */}
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-700 mb-2">Price Breaks</h4>
                                        <div className="border border-slate-100 rounded-xl overflow-hidden text-xs">
                                            <div className="bg-slate-50 grid grid-cols-3 p-2.5 font-bold text-slate-600 border-b border-slate-100">
                                                <span>Quantity</span>
                                                <span className="text-right">Unit Price</span>
                                                <span className="text-right">Total</span>
                                            </div>
                                            {priceTier.map((tier, idx) => (
                                                <div
                                                    key={idx}
                                                    className="grid grid-cols-3 p-2.5 border-b border-slate-50 text-slate-700 font-medium hover:bg-slate-50/50 transition-colors"
                                                >
                                                    <span>{tier.qty}</span>
                                                    <span className="text-right font-semibold">₹{tier.unitPrice.toFixed(2)}</span>
                                                    <span className="text-right text-slate-500">₹{tier.totalPrice.toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. RIGHT COLUMN: Add to Cart Options & Separate Total Pricing */}
                            <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-baseline justify-between mb-4">
                                        <div>
                                            <span className="text-xs text-slate-400 font-medium block">Starting Price</span>
                                            <span className="text-3xl font-black text-slate-900">
                                                ₹{finalPriceINR.toFixed(2)}
                                            </span>
                                            <span className="text-xs text-slate-400 ml-1">/ unit</span>
                                        </div>
                                        <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                                            In Stock
                                        </span>
                                    </div>

                                    {/* Quantity Input */}
                                    <div className="mb-5">
                                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                                            Quantity:
                                        </label>
                                        <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 h-11">
                                            <button
                                                type="button"
                                                onClick={() => setQuantity(Math.max(1, quantity > 100 ? quantity - 100 : quantity > 10 ? quantity - 10 : quantity - 1))}
                                                className="w-11 h-full flex items-center justify-center text-slate-600 hover:bg-slate-200/80 active:bg-slate-300 transition-colors cursor-pointer"
                                                title="Decrease quantity"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <Input
                                                type="number"
                                                min={1}
                                                value={quantity}
                                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                                className="h-full border-0 focus-visible:ring-0 rounded-none text-center font-extrabold text-slate-800 bg-transparent text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-11 h-full flex items-center justify-center text-slate-600 hover:bg-slate-200/80 active:bg-slate-300 transition-colors cursor-pointer"
                                                title="Increase quantity"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <Button
                                        onClick={handleAddToCart}
                                        className={`w-full h-12 rounded-xl text-sm font-extrabold transition-all duration-200 shadow-md ${isAdded
                                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                                            : "bg-primary hover:bg-primary/90 text-white"
                                            }`}
                                    >
                                        {isAdded ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" /> Added to Cart
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                <ShoppingCart className="w-4 h-4" /> Add to Cart
                                            </span>
                                        )}
                                    </Button>

                                    {/* SEPARATE TOTAL PRICING & TIER BREAKDOWN UNDER ADD TO CART BUTTON */}
                                    <div className="mt-5 p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-3">
                                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Pricing Breakdown</span>
                                            <span className="text-[11px] font-semibold text-slate-500">{quantity} {quantity === 1 ? 'unit' : 'units'}</span>
                                        </div>

                                        {/* Stepped breakdown list */}
                                        <div className="space-y-1.5 text-xs text-slate-600">
                                            {(() => {
                                                const tiersList = [
                                                    { label: "1 - 9 units", min: 1, max: 9, rate: finalPriceINR },
                                                    { label: "10 - 24 units", min: 10, max: 24, rate: finalPriceINR * 0.92 },
                                                    { label: "25 - 49 units", min: 25, max: 49, rate: finalPriceINR * 0.85 },
                                                    { label: "50 - 99 units", min: 50, max: 99, rate: finalPriceINR * 0.78 },
                                                    { label: "100 - 499 units", min: 100, max: 499, rate: finalPriceINR * 0.70 },
                                                    { label: "500+ units", min: 500, max: Infinity, rate: finalPriceINR * 0.62 },
                                                ];

                                                let remaining = quantity;
                                                const activeBreakdowns: Array<{ label: string; qty: number; rate: number; subtotal: number }> = [];

                                                for (const t of tiersList) {
                                                    if (remaining <= 0) break;
                                                    const maxInTier = t.max === Infinity ? remaining : (t.max - t.min + 1);
                                                    const qtyInTier = Math.min(remaining, maxInTier);
                                                    if (qtyInTier > 0) {
                                                        activeBreakdowns.push({
                                                            label: `${qtyInTier} × ₹${t.rate.toFixed(2)} (${t.label})`,
                                                            qty: qtyInTier,
                                                            rate: t.rate,
                                                            subtotal: qtyInTier * t.rate,
                                                        });
                                                        remaining -= qtyInTier;
                                                    }
                                                }

                                                return activeBreakdowns.map((item, idx) => (
                                                    <div key={idx} className="flex justify-between items-center text-[11px]">
                                                        <span className="text-slate-600">{item.label}</span>
                                                        <span className="font-semibold text-slate-800">₹{item.subtotal.toFixed(2)}</span>
                                                    </div>
                                                ));
                                            })()}
                                        </div>

                                        {/* Final Calculated Total */}
                                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                                            <span className="text-xs font-black text-slate-900">Total Calculation:</span>
                                            <span className="text-base font-black text-primary">
                                                ₹{(() => {
                                                    const tiersList = [
                                                        { min: 1, max: 9, rate: finalPriceINR },
                                                        { min: 10, max: 24, rate: finalPriceINR * 0.92 },
                                                        { min: 25, max: 49, rate: finalPriceINR * 0.85 },
                                                        { min: 50, max: 99, rate: finalPriceINR * 0.78 },
                                                        { min: 100, max: 499, rate: finalPriceINR * 0.70 },
                                                        { min: 500, max: Infinity, rate: finalPriceINR * 0.62 },
                                                    ];
                                                    let rem = quantity;
                                                    let total = 0;
                                                    for (const t of tiersList) {
                                                        if (rem <= 0) break;
                                                        const maxInTier = t.max === Infinity ? rem : (t.max - t.min + 1);
                                                        const q = Math.min(rem, maxInTier);
                                                        total += q * t.rate;
                                                        rem -= q;
                                                    }
                                                    return total.toFixed(2);
                                                })()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* PRODUCT ATTRIBUTES TABLE (Matching screenshot layout) */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200/80 flex items-center justify-between">
                                <h3 className="font-extrabold text-slate-800 text-lg flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-primary" /> Product Attributes
                                </h3>
                            </div>

                            <div className="divide-y divide-slate-100">
                                {attributesList.map((attr, idx) => (
                                    <div
                                        key={idx}
                                        className={`grid grid-cols-1 md:grid-cols-3 px-6 py-3 text-sm ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                                            }`}
                                    >
                                        <span className="font-bold text-slate-700 md:col-span-1">{attr.topic}</span>
                                        <span className="text-slate-600 md:col-span-2">{attr.description}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RELATED PRODUCTS / OTHER PARTS IN THE SAME CATEGORY */}
                        {relatedProducts.length > 0 && (
                            <div className="bg-amber-500/5 rounded-3xl p-6 md:p-8 border border-amber-500/10">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                                        Other Parts in the same category
                                    </h3>
                                    <Link
                                        href="/parts"
                                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                                    >
                                        View Catalog <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {relatedProducts.map((rel, idx) => {
                                        const relPartNum = rel.ManufacturerProductNumber || "Part";
                                        const relDesc =
                                            rel.Description?.ProductDescription ||
                                            rel.Description?.DetailedDescription ||
                                            "Component part";

                                        return (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
                                            >
                                                <div>
                                                    <div className="w-full aspect-square bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-100 mb-3 overflow-hidden">
                                                        <img
                                                            src={
                                                                rel.PhotoUrl ||
                                                                "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
                                                            }
                                                            alt={relPartNum}
                                                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                                            onError={(e) => {
                                                                (e.target as HTMLElement).setAttribute(
                                                                    "src",
                                                                    "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/7182/MFG_RMCF_series.jpg"
                                                                );
                                                            }}
                                                        />
                                                    </div>

                                                    <h4 className="font-bold text-slate-800 text-xs line-clamp-1 mb-1 group-hover:text-primary transition-colors">
                                                        {relPartNum}
                                                    </h4>
                                                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight mb-3">
                                                        {relDesc}
                                                    </p>
                                                </div>

                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full text-[11px] font-bold border-slate-200 h-8 rounded-xl"
                                                >
                                                    <Link href={`/parts/${encodeURIComponent(relPartNum)}`}>
                                                        View Details <ChevronRight className="w-3 h-3 ml-0.5" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
