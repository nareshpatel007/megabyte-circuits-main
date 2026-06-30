"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import {
    Zap, Layers, Cpu, Check, ChevronDown, CheckCircle2, ChevronRight, Settings, ShieldCheck
} from "lucide-react";

export default function MultiLayerPCBPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" },
        { label: "Multi Layer PCB" }
    ];

    const specs = [
        { name: "Layer Count", value: "4 to 32 Layers" },
        { name: "Base Material", value: "High TG FR-4 (TG170, TG180), Rogers, PTFE, Polyimide" },
        { name: "Board Thickness", value: "0.4mm to 4.0mm" },
        { name: "Copper Thickness", value: "0.5 oz to 5.0 oz" },
        { name: "Min. Trace Width / Space", value: "3.0 mil / 3.0 mil (0.075mm / 0.075mm)" },
        { name: "Min. Drill Hole Size", value: "0.15mm" },
        { name: "Via Types", value: "Blind Vias, Buried Vias, Microvias (Laser), Through-Hole Vias" },
        { name: "Impedance Control", value: "Yes, Tolerance ±10% (standard) or ±5% (high-precision)" }
    ];

    const faqs = [
        {
            q: "What are blind and buried vias in multilayer boards?",
            a: "Blind vias connect an outer layer to one or more inner layers, but do not go through the entire board. Buried vias connect two or more inner layers together without touching outer layers. This saves valuable surface routing space for high-density component layouts."
        },
        {
            q: "Why is High TG substrate material used for multilayer boards?",
            a: "Multilayer boards have complex internal trace layups. High Glass Transition temperature (High TG) materials are used to withstand higher temperatures during soldering/re-work and operating cycles without suffering thermal deformation or layer separation."
        },
        {
            q: "What is impedance control and why is it important?",
            a: "Impedance control is the design and manufacturing of circuit board traces with specific electromagnetic resistance. It is critical for high-speed signal integrity in telecommunications, computing, and high-frequency RF boards, preventing signals from reflecting or distorting."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Multi Layer PCB"
                subtitle="High-density multilayer printed circuit boards supporting up to 32 layers with impedance control, blind/buried vias, and advanced high-speed signals."
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
                                Advanced Multilayer PCB Manufacturing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Multilayer PCBs consist of three or more conductive layers separated by pre-impregnated dielectric core layers. These stack-ups are compressed under extreme heat and pressure to create a single integrated board. Inner layers are used for power planes, ground loops, and high-density signal routes.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Megabytes Circuit Systems manufactures multilayer PCBs of up to 32 layers with strict quality compliance. We offer high-frequency substrates, impedance matching, sequential lamination cycles, and high-precision laser microvias to meet the requirements of modern aerospace, computing, and medical systems.
                            </p>
                        </div>

                        {/* Section 2: Key Features */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-display font-bold text-secondary border-l-4 border-primary pl-3">
                                Why Choose Multilayer PCBs?
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Extremely high packaging density for complex systems",
                                    "Significant reduction in total size and weight of devices",
                                    "Superior shielding and reduced electromagnetic interference",
                                    "Integration of blind, buried, and laser-drilled microvias",
                                    "Support for High-Speed Digital (HSD) and RF signals",
                                    "Precision impedance control options for signal integrity"
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
                                FAQs about Multilayer PCBs
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
                        <ProductSidebar currentSlug="multi-layer-pcb" />
                    </div>

                </div>
            </div>
        </div>
    );
}
