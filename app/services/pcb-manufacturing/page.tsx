"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import { Layers, ShieldCheck, ChevronDown, CheckCircle2, Sliders } from "lucide-react";

export default function Page() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "PCB Manufacturing" }
    ];

    const chooseUsItems = [
        {
            icon: Layers,
            title: "Advanced Materials",
            desc: "FR4, Rogers, High-Tg, Aluminum Core, Flexible, and Rigid-Flex materials"
        },
        {
            icon: Sliders,
            title: "Strict Tolerances",
            desc: "Min trace/space down to 3mil with high-accuracy routing"
        },
        {
            icon: ShieldCheck,
            title: "Custom Finishes",
            desc: "ENIG, HASL, Lead-Free HASL, OSP, Immersion Silver, and Immersion Tin"
        }
    ];

    const processSteps = [
        { step: "01", title: "Schematic Design & Layout", desc: "Our design team provides expert layout optimization and routing." },
        { step: "02", title: "Material Selection & Layering", desc: "Choosing proper core dielectric materials and stacking configurations." },
        { step: "03", title: "Fabrication & Etching", desc: "Chemical copper subtraction and laser direct imaging patterns." },
        { step: "04", title: "Quality Inspections", desc: "AOI, flying probe electrical tests, and X-ray checking." },
        { step: "05", title: "Assembly & Testing", desc: "Mounting SMD components via reflow ovens and final verification." }
    ];

    const industries = [
        { name: "Automotive Electronics", desc: "ECU modules, sensors, lighting systems, and BMS boards." },
        { name: "Medical Devices", desc: "Biocompatible surface finishes for diagnostic imaging & monitors." },
        { name: "Aerospace & Defense", desc: "High-reliability conformal coatings & signal shielding." },
        { name: "Consumer & Industrial", desc: "Smart home wearables, industrial automation, and robotics." }
    ];

    const capabilities = [
        { name: "Layer Count", value: "1 to 32 Layers" },
        { name: "Base Materials", value: "FR-4, Rogers, Polyimide, Aluminum Core" },
        { name: "Min Trace / Space", value: "3mil / 3mil (0.075mm)" },
        { name: "Surface Finishes", value: "ENIG, HASL (Leaded/Lead-free), OSP, Gold Plating" },
        { name: "Board Thickness", value: "0.2mm to 6.0mm" },
        { name: "Min Hole Size", value: "0.15mm (Laser vias)" }
    ];

    const advantages = [
        "Local convenience in Ahmedabad for quick physical meetings",
        "State-of-the-art automated production lines minimizing human error",
        "Direct communication channels with layout and fabrication engineers",
        "Logistical connections to ship prototypes and mass runs swiftly across India"
    ];

    const faqs = [
        {
            question: "What is the typical turnaround time for PCB manufacturing?",
            answer: "Standard production batches take 7-10 working days. Prototyping batches can be expedited within 24-48 hours."
        },
        {
            question: "What certifications do your manufacturing processes hold?",
            answer: "Our facility complies with ISO 9001:2015 standards, RoHS regulations, and UL specifications."
        },
        {
            question: "Do you perform electrical testing on all boards?",
            answer: "Yes, 100% of manufactured boards undergo flying probe electrical testing or custom bed-of-nails fixture testing."
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
                title="PCB Manufacturing"
                subtitle="High-quality single layer, double layer, and complex multilayer PCB production in Ahmedabad, India"
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
                                    Empowering Innovation Through Advanced <span className="text-primary">PCB Manufacturing</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    At Megabyte Circuit, we specialize in PCB manufacturing in Ahmedabad, serving clients across India and globally. Our commitment to engineering excellence and unmatched quality has positioned us as one of the top circuit board manufacturing companies in India.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Our 30,000 sq. ft. ISO-certified facility in Ahmedabad is equipped with German-engineered automation and the latest in PCB fabrication technology. We support a broad range of industries—from automotive, medical, and defense to industrial IoT.
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
                                            Why Choose Megabyte Circuit For <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">PCB Manufacturing</span>?
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

                            {/* Manufacturing Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Complete Circuit Board <span className="text-primary">Manufacturing Process</span>
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

                            {/* Capabilities */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    High-Performance <span className="text-primary">Capabilities At A Glance</span>
                                </h2>
                                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/40">
                                    <div className="grid sm:grid-cols-2 divide-y divide-slate-100 sm:divide-y-0 sm:divide-x divide-slate-100">
                                        <div className="divide-y divide-slate-100">
                                            {capabilities.slice(0, 3).map((cap, idx) => (
                                                <div key={idx} className="flex justify-between items-center px-6 py-4 text-sm">
                                                    <span className="font-bold text-secondary">{cap.name}</span>
                                                    <span className="text-slate-600 text-right">{cap.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="divide-y divide-slate-100">
                                            {capabilities.slice(3).map((cap, idx) => (
                                                <div key={idx} className="flex justify-between items-center px-6 py-4 text-sm">
                                                    <span className="font-bold text-secondary">{cap.name}</span>
                                                    <span className="text-slate-600 text-right">{cap.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PCB Solutions for Industry */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    PCB Solutions For <span className="text-primary">Every Industry</span>
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {industries.map((item, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{item.name}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Advantages of Choosing Ahmedabad */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Advantages of Choosing <span className="text-primary">PCB Manufacturing in Ahmedabad</span>
                                </h3>
                                <ul className="space-y-4">
                                    {advantages.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* FAQs */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    FAQs – <span className="text-primary">PCB Fabrication & Manufacturing</span>
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
                                            PCB Manufacturing in {city}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="pcb-manufacturing" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
