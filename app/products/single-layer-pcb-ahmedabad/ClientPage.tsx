"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import {
    Zap, Layers, Cpu, Check, ChevronDown, CheckCircle2, ChevronRight, Settings, ShieldCheck
} from "lucide-react";

export default function SingleLayerPCBPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" },
        { label: "Single Layer PCB" }
    ];

    const specs = [
        { name: "Base Material", value: "FR-4, CEM-1, CEM-3, Aluminum Substrate" },
        { name: "Board Thickness", value: "0.4mm to 3.2mm" },
        { name: "Copper Thickness", value: "0.5 oz to 4.0 oz" },
        { name: "Min. Line Width / Spacing", value: "4 mil / 4 mil (0.1mm / 0.1mm)" },
        { name: "Min. Hole Size", value: "0.2mm" },
        { name: "Solder Mask Color", value: "Green, Blue, Black, White, Red, Yellow" },
        { name: "Surface Finish", value: "HASL (Lead-Free), ENIG (Gold), OSP, Immersion Silver" }
    ];

    const faqs = [
        {
            q: "What substrates are available for single-sided PCBs?",
            a: "We offer FR-4 for standard circuits, CEM-1 and CEM-3 for cost-effective mass production, and Aluminum Core substrate (Metal Clad) for high-power LED and heat dissipation applications."
        },
        {
            q: "Are single-layer PCBs cost-effective for mass production?",
            a: "Yes, single-layer PCBs are the most economical option for low-complexity circuits, enabling extremely low per-unit costs for high-volume manufacturing runs."
        },
        {
            q: "What is the typical lead time for single-layer prototypes?",
            a: "Standard prototype turnarounds range from 24 hours to 3 days depending on complexity, surface finish, and whether express delivery is selected."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Single Layer PCB"
                subtitle="Cost-effective, reliable single-sided printed circuit boards suitable for simple designs, LED illumination, and consumer electronics."
                badge="Product Range"
                breadcrumbs={breadcrumbs}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-12 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
                        
                        {/* Section 1: Overview */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                High-Quality Single-Sided PCB Manufacturing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Single-layer (single-sided) PCBs are the starting point of printed circuit board technology. They feature a single layer of conductive copper bonded on one side of a non-conductive substrate. Components are typically soldered on one side, with the conductive traces routed on the opposite side.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Megabytes Circuit Systems manufactures high-grade single-layer PCBs designed for reliability and cost-efficiency. Our boards find usage across diverse industries, from lighting and home appliances to power regulation modules and instrumentation.
                            </p>
                        </div>

                        {/* Section 2: Key Features */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-display font-bold text-secondary border-l-4 border-primary pl-3">
                                Why Choose Single Layer PCBs?
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Most cost-effective choice for low-density designs",
                                    "Rapid prototyping and high-speed manufacturing turnaround",
                                    "Excellent heat dissipation with Aluminum substrates",
                                    "Ideal for LED panels, power supplies, and simple sensor boards",
                                    "Solder mask color customisation options",
                                    "Compliant with international RoHS and Lead-Free standards"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 3: Technical Specs */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-display font-bold text-secondary border-l-4 border-primary pl-3">
                                Technical Specifications
                            </h3>
                            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Parameter</th>
                                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Capability</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm">
                                        {specs.map((spec, i) => (
                                            <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                                                <td className="p-4 font-bold text-slate-700">{spec.name}</td>
                                                <td className="p-4 text-slate-600 font-medium">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Section 4: FAQs */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-display font-bold text-secondary border-l-4 border-primary pl-3">
                                FAQs about Single Layer PCBs
                            </h3>
                            <div className="space-y-3">
                                {faqs.map((faq, i) => {
                                    const isOpen = activeFaq === i;
                                    return (
                                        <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => setActiveFaq(isOpen ? null : i)}
                                                className="w-full flex items-center justify-between p-4 font-display font-bold text-slate-800 hover:text-primary transition-colors text-left"
                                            >
                                                <span>{faq.q}</span>
                                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-sm text-slate-600 leading-relaxed font-medium">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4">
                        <ProductSidebar currentSlug="single-layer-pcb" />
                    </div>

                </div>
            </div>
        </div>
    );
}
