"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import {
    Zap, Layers, Cpu, MapPin, BadgePercent, ShieldCheck,
    Check, ChevronDown, CheckCircle2, ChevronRight
} from "lucide-react";

export default function Page() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Prototype PCB" }
    ];

    const chooseUsItems = [
        {
            icon: Zap,
            title: "Fast Turnaround",
            desc: "Get prototypes in 24 hours to 7 days"
        },
        {
            icon: Layers,
            title: "Custom Solutions",
            desc: "Tailored PCBs for any complexity (1-32 layers)"
        },
        {
            icon: Cpu,
            title: "Advanced Technology",
            desc: "Laser drilling, impedance control, and high-precision fabrication"
        },
        {
            icon: MapPin,
            title: "Local Expertise",
            desc: "Based in Ahmedabad, serving Gujarat & all of India"
        },
        {
            icon: BadgePercent,
            title: "Affordable Pricing",
            desc: "Competitive rates for startups & enterprises"
        },
        {
            icon: ShieldCheck,
            title: "Full Assembly Support",
            desc: "SMT, Through-Hole, and Testing services"
        }
    ];

    const processSteps = [
        { step: "1", title: "Design Review", desc: "DFM checks & optimization" },
        { step: "2", title: "Material Selection", desc: "FR-4, Rogers, Aluminum, Flex PCBs" },
        { step: "3", title: "Precision Fabrication", desc: "Laser-cut traces, micro-vias, tight tolerances" },
        { step: "4", title: "Assembly (Optional)", desc: "SMT/THT component mounting" },
        { step: "5", title: "Rigorous Testing", desc: "Electrical, AOI, and functional tests" },
        { step: "6", title: "Fast Delivery", desc: "Shipped to Ahmedabad, Gujarat & worldwide" }
    ];

    const industries = [
        { name: "Consumer Electronics", desc: "Wearables, IoT devices" },
        { name: "Automotive", desc: "ECUs, sensors, LED systems" },
        { name: "Medical Devices", desc: "Diagnostic tools, patient monitors" },
        { name: "Aerospace & Defense", desc: "Avionic controls, communication modules" },
        { name: "Industrial Automation", desc: "Robotics, control systems" }
    ];

    const comparisonData = [
        { feature: "Purpose", breadboard: "Temporary testing", pcb: "Pre-production validation" },
        { feature: "Durability", breadboard: "Reusable, non-permanent", pcb: "Permanent, robust" },
        { feature: "Complexity", breadboard: "Low (for basic circuits)", pcb: "High (multi-layer, HDI)" },
        { feature: "Best For", breadboard: "Early-stage testing", pcb: "Final design verification" }
    ];

    const faqs = [
        {
            question: "How long does prototype PCB manufacturing take?",
            answer: "24-hours to 7 days, depending on complexity."
        },
        {
            question: "Do you offer PCB assembly with prototyping?",
            answer: "Yes! We provide full PCB assembly (SMT & Through-hole)."
        },
        {
            question: "What file formats do you accept?",
            answer: "Gerber, ODB++, Eagle, Altium, KiCad and many more."
        },
        {
            question: "Can you handle high-frequency or flexible pcb?",
            answer: "Absolutely! We support RF, HDI, Flex, and Rigid-Flex PCBs."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Prototype PCB Manufacturing"
                subtitle="High-Quality Prototype PCB Manufacturing Services in Ahmedabad, India"
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
                                    Prototype PCB Manufacturing in <span className="text-primary">Ahmedabad, India</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    MEGABYTE CIRCUIT is your trusted partner for precision prototype PCB manufacturing in Ahmedabad, Gujarat, and across India. We specialize in delivering fast, reliable, and customized prototype circuit boards to help engineers, startups, and businesses test, validate, and refine their designs before full-scale production.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Whether you need a single-layer prototype or a complex multi-layer PCB, our advanced manufacturing facility and expert team ensure high-performance boards that meet global industry standards.
                                </p>
                            </div>

                            {/* What is Prototype PCB */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4">
                                    What is a <span className="text-primary">Prototype PCB</span>?
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    A Prototype PCB (Printed Circuit Board) is a preliminary version of a circuit board used to:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700 font-medium">Test functionality & performance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700 font-medium">Identify design flaws before mass production</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700 font-medium">Validate concepts in custom layers, layout, size, and material selection</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    At <span className="font-bold text-secondary">MEGABYTE CIRCUIT</span>, we offer end-to-end prototype PCB services, from simple breadboard prototypes to advanced multi-layer designs, ensuring your product development stays on track.
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
                                            Why Choose Megabyte Circuit For <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">Prototype PCB Manufacturing</span>?
                                        </h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                        {chooseUsItems.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={index} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group">
                                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-display font-bold text-base text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                                        <p className="text-xs text-white/60 mt-1 leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Manufacturing Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our Prototype PCB <span className="text-primary">Manufacturing Process</span>
                                </h2>
                                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/40 bg-white">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-white">
                                                <th className="text-left px-6 py-4 font-semibold text-white/80 text-xs uppercase tracking-wider w-1/3">
                                                    Step
                                                </th>
                                                <th className="text-left px-6 py-4 font-semibold text-white/80 text-xs uppercase tracking-wider">
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {processSteps.map((step, idx) => (
                                                <tr key={idx} className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-primary/5 transition-colors`}>
                                                    <td className="px-6 py-4 text-sm font-bold text-secondary">
                                                        {step.step}. {step.title}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">
                                                        {step.desc}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Industries We Serve */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Industries <span className="text-primary">We Serve</span>
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {industries.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 animate-pulse" />
                                            <div>
                                                <span className="text-sm font-bold text-secondary block">{item.name}</span>
                                                <span className="text-xs text-slate-500">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Breadboard vs Prototype PCB */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Prototype Breadboard vs. <span className="text-primary">Prototype PCB</span>
                                </h2>
                                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/40 bg-white">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-white">
                                                <th className="text-left px-6 py-4 font-semibold text-white/80 text-xs uppercase tracking-wider">
                                                    Feature
                                                </th>
                                                <th className="text-left px-6 py-4 font-semibold text-white/80 text-xs uppercase tracking-wider">
                                                    Breadboard
                                                </th>
                                                <th className="text-left px-6 py-4 font-semibold text-white/80 text-xs uppercase tracking-wider">
                                                    Prototype PCB
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparisonData.map((row, idx) => (
                                                <tr key={idx} className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-primary/5 transition-colors`}>
                                                    <td className="px-6 py-4 text-sm font-bold text-secondary">
                                                        {row.feature}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">
                                                        {row.breadboard}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                                        {row.pcb}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* FAQs */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    FAQs – <span className="text-primary">Prototype PCB Manufacturing</span>
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

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="prototype-pcb" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}