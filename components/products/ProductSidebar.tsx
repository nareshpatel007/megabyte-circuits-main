"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Loader2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

// Correct Input import
import { Input as FormInput } from "@/components/ui/input";

export function ProductSidebar({ currentSlug }: { currentSlug: string }) {
    const [formState, setFormState] = useState({ name: "", email: "", mobile: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormState({ name: "", email: "", mobile: "", message: "" });
        }, 1500);
    };

    const productLinks = [
        { slug: "single-layer-pcb", label: "Single Layer PCB" },
        { slug: "double-layer-pcb", label: "Double Layer PCB" },
        { slug: "multi-layer-pcb", label: "Multi Layer PCB" }
    ];

    return (
        <div className="space-y-8">
            {/* Other Products Navigation */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100/50">
                <h3 className="font-display font-bold text-secondary text-lg mb-4 pb-3 border-b border-slate-100">
                    Our Products
                </h3>
                <ul className="space-y-2.5">
                    {productLinks.map((link) => {
                        const isActive = currentSlug === link.slug;
                        return (
                            <li key={link.slug}>
                                <Link
                                    href={((slug: string) => { const map: Record<string, string> = { "single-layer-pcb": "/products/single-layer-pcb-ahmedabad", "double-layer-pcb": "/products/double-layer-pcb-ahmedabad", "multi-layer-pcb": "/products/multi-layer-pcb-ahmedabad" }; return map[slug] || `/products/${slug}`; })(link.slug)}
                                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all ${isActive
                                            ? "bg-primary text-white shadow-md shadow-primary/20"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                        }`}
                                >
                                    <span>{link.label}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Quick Quote Form */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100/50">
                <h3 className="font-display font-bold text-secondary text-lg mb-4 pb-3 border-b border-slate-100">
                    Quick Inquiry
                </h3>
                {success ? (
                    <div className="text-center py-6 space-y-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                            ✓
                        </div>
                        <h4 className="font-display font-bold text-secondary">Enquiry Sent!</h4>
                        <p className="text-xs text-muted-foreground">Our team will get back to you shortly.</p>
                        <Button size="sm" variant="outline" onClick={() => setSuccess(false)}>
                            Send Another
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                            <FormInput
                                required
                                value={formState.name}
                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                className="h-10 bg-slate-50/50 border-slate-100"
                                placeholder="Rajesh Kumar"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Mobile Number</label>
                            <FormInput
                                required
                                value={formState.mobile}
                                onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                                className="h-10 bg-slate-50/50 border-slate-100"
                                placeholder="e.g. +91 98988 42942"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                            <FormInput
                                required
                                type="email"
                                value={formState.email}
                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                className="h-10 bg-slate-50/50 border-slate-100"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Requirements</label>
                            <textarea
                                required
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                className="w-full p-3 rounded-lg bg-slate-50/50 border border-slate-100 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary h-20 resize-none"
                                placeholder="Specify layer count, quantity..."
                            />
                        </div>
                        <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            Send Inquiry
                        </Button>
                    </form>
                )}
            </div>

            {/* Direct Contacts Info */}
            <div className="bg-gradient-to-br from-secondary to-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-xl pointer-events-none" />
                <h3 className="font-display font-bold text-white text-base mb-4">Direct Support</h3>
                <div className="space-y-3">
                    <a href="tel:+919898842942" className="flex items-center gap-3 text-xs text-white/70 hover:text-white transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <span>+91-9898842942</span>
                    </a>
                    <a href="mailto:quote@megabytecircuit.com" className="flex items-center gap-3 text-xs text-white/70 hover:text-white transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <span>quote@megabytecircuit.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
