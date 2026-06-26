"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import {
    Zap, Layers, Cpu, Check, ChevronDown, CheckCircle2, ChevronRight, Settings, ShieldCheck
} from "lucide-react";

export default function DoubleLayerPCBPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" },
        { label: "Double Layer PCB" }
    ];

    const specs = [
        { name: "Base Material", value: "FR-4 High TG, FR-4 Standard, CEM-3, PTFE" },
        { name: "Board Thickness", value: "0.6mm to 3.2mm" },
        { name: "Copper Thickness", value: "0.5 oz to 6.0 oz" },
        { name: "Min. Line Width / Spacing", value: "3.5 mil / 3.5 mil (0.088mm / 0.088mm)" },
        { name: "Min. Hole Size", value: "0.15mm" },
        { name: "Solder Mask Color", value: "Green, Blue, Black, White, Red, Yellow, Matte colors" },
        { name: "Surface Finish", value: "HASL (Lead-Free), ENIG (Gold), OSP, Immersion Silver, Hard Gold" }
    ];

    const faqs = [
        {
            q: "What are plated through holes (PTH) in double-sided PCBs?",
            a: "Plated through holes are copper-coated vias drilled through the board. They establish electrical connections between trace patterns on the top layer and those on the bottom layer, enabling routing crossovers."
        },
        {
            q: "Why are double-sided PCBs preferred over single-sided ones?",
            a: "They allow conductive traces to cross over each other via through-hole vias. This dramatically increases layout density and reduces space requirements, making it suitable for more complex, compact circuits."
        },
        {
            q: "What industries use double-sided PCBs?",
            a: "They are standard in industrial controls, power converters, instrumentation electronics, UPS components, amplifiers, and automotive control assemblies."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Double Layer PCB"
                subtitle="Double-sided printed circuit boards offering increased design density, plated through-holes (vias), and high flexibility for standard electronic layouts."
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
                                Professional Double-Sided PCB Manufacturing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Double-layer (double-sided) PCBs are the gateway to intermediate electronics design. Featuring copper layers on both sides of a central substrate, these boards use vias (drilled holes coated with copper) to interconnect signals.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Megabytes Circuit Systems produces premium double-sided boards utilizing high-quality FR-4 epoxy glass laminates. We utilize computer-guided CNC drilling and precise chemical plating techniques to ensure flawless continuity across all vias.
                            </p>
                        </div>

                        {/* Section 2: Key Features */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-display font-bold text-secondary border-l-4 border-primary pl-3">
                                Why Choose Double Layer PCBs?
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Higher wiring density compared to single-layer",
                                    "Compact layouts via double-sided component placement",
                                    "High mechanical durability and dimensional stability",
                                    "Plated through-holes (vias) for complex routing paths",
                                    "Ideal for power supply systems, control panels, and modems",
                                    "RoHS compliant lead-free surface finishes (ENIG, HASL)"
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
                                FAQs about Double Layer PCBs
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
                        <ProductSidebar currentSlug="double-layer-pcb" />
                    </div>

                </div>
            </div>
        </div>
    );
}
