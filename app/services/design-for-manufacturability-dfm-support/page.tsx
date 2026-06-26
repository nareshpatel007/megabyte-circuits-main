"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import {
    Zap, Layers, Cpu, MapPin, BadgePercent, ShieldCheck,
    Check, ChevronDown, CheckCircle2, ChevronRight, Settings,
    Sliders, DollarSign, Activity, FileCheck, Shield, Hammer
} from "lucide-react";

export default function Page() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "DFM Support" }
    ];

    const chooseUsItems = [
        {
            icon: Cpu,
            title: "Advanced DRC Engines",
            desc: "Running design rules validation against actual manufacturing equipment spacing limits."
        },
        {
            icon: Sliders,
            title: "Layout Optimization",
            desc: "Trace width and clearance adjustments to enhance trace yields and signal speed."
        },
        {
            icon: ShieldCheck,
            title: "IPC Standardization",
            desc: "Aligning trace layouts with IPC-2221 and IPC-A-600 quality classifications."
        }
    ];

    const processSteps = [
        { step: "01", title: "Comprehensive Review", desc: "Analyzing Gerber files, drill databases, and BOM lists for compatibility." },
        { step: "02", title: "Component Footprints", desc: "Verifying pad geometry sizing against actual physical component dimensions." },
        { step: "03", title: "Layout Optimization", desc: "Recommending trace changes, pad expansions, and plane isolation improvements." },
        { step: "04", title: "Design Rule Check", desc: "Double-checking clearance limits to eliminate short or open circuits." },
        { step: "05", title: "Prototyping Review", desc: "Verifying thermal flow and physical dimensions before final panelization." },
        { step: "06", title: "Cost Strategies", desc: "Optimizing panel layouts to reduce raw substrate waste and unit costs." }
    ];

    const benefits = [
        { title: "Accelerated Time-to-Market", desc: "Reducing layout revisions prevents manufacturing bottlenecks and schedule slips." },
        { title: "Material Cost Efficiency", desc: "Minimizing board layers and outline configurations to cut manufacturing costs." },
        { title: "Enhanced Board Reliability", desc: "Optimizing trace vias and heat sinks prevents overheating and trace cracks." },
        { title: "Higher Assembly Yields", desc: "Perfect pad spacing and solder mask clearance rules ensure clean stencil printing." }
    ];

    const faqs = [
        {
            question: "What does DFM stand for?",
            answer: "DFM stands for Design for Manufacturability. It is the practice of designing components or circuit layouts to make them easy and cost-effective to manufacture."
        },
        {
            question: "When should a DFM check be performed?",
            answer: "Ideally, DFM checks should be conducted continuously during layout design, but a final check is mandatory right before exporting Gerber files for fabrication."
        },
        {
            question: "Does Megabyte Circuit charge for DFM reviews?",
            answer: "No, we provide a complimentary Design for Manufacturability (DFM) verification check with every prototyping or fabrication order we receive."
        }
    ];

    const otherCities = [
        "Delhi", "Mumbai", "Kolkata", "Kanpur", "Gandhinagar",
        "Bangalore", "Chennai", "Hyderabad", "Noida", "Rajkot",
        "Pune", "Surat", "Jaipur", "Vadodara"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="DFM Support"
                subtitle="Thorough DFM analysis and engineering reviews to prevent production errors in Ahmedabad, India"
                badge="Our Services"
                breadcrumbs={breadcrumbs}
            />

            {/* ─── Main Content & Sidebar ─────────────────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Introduction */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4 leading-snug">
                                    Optimizing Designs with Professional <span className="text-primary">DFM Support</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    Megabyte Circuit Systems, established in 2021 in Ahmedabad, Gujarat, is a leading manufacturer of high-quality printed circuit boards (PCBs) serving industries such as telecommunications, automotive, consumer electronics, and medical devices.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Our Design for Manufacturability (DFM) Support services are crafted to optimize your PCB designs, ensuring they are cost-effective, reliable, and seamlessly integrated into the manufacturing process. By leveraging our expertise, we help you reduce costs and deliver products that meet the highest performance standards.
                                </p>
                            </div>

                            {/* What is DFM */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4">
                                    Understanding <span className="text-primary">Design for Manufacturability</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Design for Manufacturability (DFM) is a strategic approach to designing products that are easy to manufacture, cost-efficient, and reliable. In PCB production, DFM focuses on optimizing the design to align with manufacturing capabilities, minimizing errors, and enhancing overall efficiency. Addressing challenges early in the design phase helps avoid costly revisions.
                                </p>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-secondary to-slate-950 text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-8">
                                    <div className="text-center md:text-left">
                                        <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide leading-tight text-white/95">
                                            Why Choose Megabyte Circuit For <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">DFM Support Services</span>?
                                        </h2>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        {chooseUsItems.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={index} className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group">
                                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-display font-bold text-sm text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                                        <p className="text-xs text-white/60 mt-1.5 leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* DFM Services Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our Comprehensive <span className="text-primary">DFM Support Services</span>
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {processSteps.map((step, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300">
                                            <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                Step {step.step}
                                            </span>
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2 mt-4">{step.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits of DFM */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Benefits of Our <span className="text-primary">DFM Support Services</span>
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {benefits.map((feat, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{feat.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    FAQs – <span className="text-primary">Design for Manufacturability</span>
                                </h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => {
                                        const isOpen = activeFaq === idx;
                                        return (
                                            <div key={idx} className="border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm">
                                                <button
                                                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                                                    className="w-full flex items-center justify-between px-6 py-5 text-left font-display font-bold text-secondary hover:text-primary transition-colors"
                                                >
                                                    <span>{faq.question}</span>
                                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                                                </button>
                                                {isOpen && (
                                                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Other Cities Serviced */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Other Cities We Serve <span className="text-primary">in India</span>
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {otherCities.map((city, index) => (
                                        <div key={index} className="text-xs text-slate-500 bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl text-center font-medium hover:border-primary/20 hover:text-primary transition-colors cursor-default">
                                            DFM Support in {city}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="design-for-manufacturability-dfm-support" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
