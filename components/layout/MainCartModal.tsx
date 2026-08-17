"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, ShoppingCart, Trash2, ArrowRight } from "lucide-react";

interface CartItem {
    id: string;
    productType: "pcb" | "stencil";
    boardName: string;
    layers: string;
    dimensions: string;
    qty: number;
    buildTime: string;
    price: number;
    material: string;
    thickness: string;
    date: string;
}

interface MainCartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MainCartModal({ isOpen, onClose }: MainCartModalProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const loadCart = () => {
        try {
            const savedCart = localStorage.getItem("megabyte_cart");
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            } else {
                setCartItems([]);
            }
        } catch (e) {
            console.error("Failed to load cart from localStorage", e);
        }
    };

    useEffect(() => {
        if (isOpen) {
            loadCart();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleCartUpdate = () => loadCart();
        window.addEventListener("megabyte_cart_updated", handleCartUpdate);
        window.addEventListener("storage", handleCartUpdate);
        return () => {
            window.removeEventListener("megabyte_cart_updated", handleCartUpdate);
            window.removeEventListener("storage", handleCartUpdate);
        };
    }, []);

    const handleRemoveItem = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            const updated = cartItems.filter((item) => item.id !== id);
            localStorage.setItem("megabyte_cart", JSON.stringify(updated));
            setCartItems(updated);
            window.dispatchEvent(new Event("megabyte_cart_updated"));
        } catch (e) {
            console.error("Failed to remove item", e);
        }
    };

    if (!isOpen) return null;

    const merchandiseTotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={onClose} />

            {/* Cart Dropdown Modal */}
            <div className="absolute right-0 top-full mt-2.5 z-50 w-80 sm:w-96 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200/90 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in slide-in-from-top-2 duration-200">
                {/* Triangle indicator */}
                <div className="absolute top-0 right-4 -mt-1.5 w-3 h-3 bg-white dark:bg-zinc-900 border-t border-l border-gray-200/90 dark:border-zinc-800 rotate-45 z-10" />

                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between bg-gray-50/80 dark:bg-zinc-800/50 relative z-20">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary dark:text-emerald-400 flex items-center justify-center">
                            <ShoppingCart className="w-3.5 h-3.5" />
                        </div>
                        <div>
                            <h2 className="text-xs font-extrabold text-gray-900 dark:text-white leading-tight">
                                Shopping Cart
                            </h2>
                            <p className="text-[10px] text-gray-500 dark:text-zinc-400 font-medium">
                                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 hover:bg-gray-200/60 dark:hover:bg-zinc-700/60 transition-colors cursor-pointer"
                        title="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-zinc-800 p-2 relative z-20">
                    {cartItems.length === 0 ? (
                        <div className="py-10 px-4 text-center">
                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-zinc-500 flex items-center justify-center mx-auto mb-3">
                                <ShoppingCart className="w-6 h-6" />
                            </div>
                            <p className="text-xs font-semibold text-gray-700 dark:text-zinc-300">
                                Your cart is empty
                            </p>
                            <p className="text-[11px] text-gray-400 dark:text-zinc-500 mt-1">
                                Calculate your custom PCB quote to get started!
                            </p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="p-3 hover:bg-gray-50/80 dark:hover:bg-zinc-800/50 rounded-xl transition-colors group relative flex items-start justify-between gap-3"
                            >
                                <div className="space-y-1 flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                                            {item.productType || "PCB"}
                                        </span>
                                        <h3 className="text-xs font-bold text-gray-900 dark:text-white truncate">
                                            {item.boardName || "Custom PCB"}
                                        </h3>
                                    </div>
                                    <p className="text-[11px] text-gray-500 dark:text-zinc-400 leading-tight">
                                        {item.layers} Layer | {item.dimensions} | Qty: {item.qty}
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] text-gray-400 dark:text-zinc-500">
                                        <span>{item.material}</span>
                                        <span>•</span>
                                        <span>{item.thickness}</span>
                                    </div>
                                    <p className="text-xs font-extrabold text-primary dark:text-emerald-400 pt-0.5">
                                        ₹{item.price ? item.price.toLocaleString("en-IN") : "0"}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={(e) => handleRemoveItem(item.id, e)}
                                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors shrink-0 cursor-pointer"
                                    title="Remove item"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-800/40 space-y-3 relative z-20">
                        <div className="flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-zinc-300">
                            <span>Subtotal:</span>
                            <span className="text-sm font-extrabold text-gray-900 dark:text-white">
                                ₹{merchandiseTotal.toLocaleString("en-IN")}
                            </span>
                        </div>
                        <a
                            href="https://quote.megabytecircuit.com/cart"
                            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold shadow-md shadow-primary/20 transition-all cursor-pointer active:scale-98"
                        >
                            <span>Go to Quote Cart & Checkout</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}
