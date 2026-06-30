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
        { label: "Testing & Quality Assurance" }
    ];

    const chooseUsItems = [
        {
            icon: ShieldCheck,
            title: "100% Electrical Verification",
            desc: "Every single board undergoes flying probe or dedicated fixture electrical continuity testing."
        },
        {
            icon: Cpu,
            title: "Advanced AOI Inspections",
            desc: "High-resolution automated optical scanners catching micro-shorts and trace offsets."
        },
        {
            icon: Activity,
            title: "Thermal Stress Testing",
            desc: "Validating solder joint integrity under extreme temperature chamber cycling."
        }
    ];

    const testingServices = [
        { title: "Electrical Testing", desc: "Verifying trace routing continuity and high-voltage isolation using flying probes." },
        { title: "Functional Testing", desc: "Powering up populated assemblies to test actual physical system operations." },
        { title: "Thermal Testing", desc: "Validating thermal dissipation and thermal stress resilience." },
        { title: "Mechanical Testing", desc: "Testing board strength, solder joint shear resistance, and vibration tolerances." },
        { title: "Environmental Testing", desc: "Exposing boards to strict humidity and high heat profiles." },
        { title: "Automated Optical Inspection (AOI)", desc: "Scanning component alignment, solder fillets, and polarity markings." }
    ];

    const qaProcesses = [
        { step: "01", title: "Incoming Inspection", desc: "Checking raw FR-4 laminates, copper foils, and chemicals for purity." },
        { step: "02", title: "In-Process Controls", desc: "Monitoring plating thickness, trace widths, and alignment throughout fabrication." },
        { step: "03", title: "Final Inspection", desc: "100% visual checks and electrical tests before vacuum packaging." },
        { step: "04", title: "Yield Improvements", desc: "Analyzing test feedback logs to optimize machinery drill and exposure settings." }
    ];

    const faqs = [
        {
            question: "Do all PCBs undergo electrical testing?",
            answer: "Yes, we perform 100% electrical continuity testing on all bare boards (via flying probe) to guarantee zero open or short circuits before shipment."
        },
        {
            question: "What testing reports are provided?",
            answer: "We provide DFM reports, flying probe electrical logs, AOI clearance charts, and microsection analysis reports upon request."
        },
        {
            question: "Do you support X-ray inspection?",
            answer: "Yes, we run X-ray inspections on all BGA and QFN assemblies to verify solder joint alignment under components."
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
                title="Testing & Quality Assurance"
                subtitle="Thorough electrical testing, optical inspections, thermal cycling, and compliance reviews in Ahmedabad, India"
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
                                    Our Commitment to <span className="text-primary">Flawless Performance</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    Megabyte Circuit Systems understands that the reliability and performance of printed circuit boards (PCBs) are critical to the success of your products. Our Testing and Quality Assurance services are designed to ensure that every PCB we produce meets the highest standards of functionality, durability, and precision.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Based in Ahmedabad, Gujarat, India, we offer a full range of testing services, from prototype checking to full-scale production. Quality is at the core of everything we do, allowing us to identify and address potential issues before they leave our facility.
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
                                            Why Choose Megabyte Circuit For <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">Testing & QA Services</span>?
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

                            {/* Testing Offerings */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Comprehensive <span className="text-primary">Testing Services</span>
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {testingServices.map((item, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{item.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* QA Process Workflow */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our QA & Quality <span className="text-primary">Assurance Process</span>
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {qaProcesses.map((step, idx) => (
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

                            {/* FAQs */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    FAQs – <span className="text-primary">Testing & Reliability Standards</span>
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
                                            Testing & QA in {city}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="testing-and-quality-assurance" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
