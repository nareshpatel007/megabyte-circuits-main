"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import {
    Zap, Layers, Cpu, MapPin, BadgePercent, ShieldCheck,
    Check, ChevronDown, CheckCircle2, ChevronRight, Settings,
    Sliders, DollarSign, Activity, FileCheck, Shield, Hammer,
    Activity as PerformanceIcon, Calendar, BarChart3
} from "lucide-react";

export default function Page() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "PCB Developing Services" }
    ];

    const chooseUsItems = [
        {
            icon: Cpu,
            title: "Expertise & Experience",
            desc: "Expert layout design from simple single-sided boards to complex multilayer panels"
        },
        {
            icon: Settings,
            title: "Cutting-Edge Tech",
            desc: "Optimized designs using Altium Designer, Eagle, and KiCad software"
        },
        {
            icon: BadgePercent,
            title: "Competitive Pricing",
            desc: "Affordable solutions tailored to prototypes and batch builds"
        },
        {
            icon: Calendar,
            title: "On-Time Delivery",
            desc: "Committed project managers keeping development processes on schedule"
        },
        {
            icon: ShieldCheck,
            title: "Quality Assurance",
            desc: "Compliant Design Rule Checking (DRC) and layout thermal simulations"
        }
    ];

    const processSteps = [
        { step: "01", title: "Initial Consultation", desc: "Understanding functionality, space dimensions, and performance goals." },
        { step: "02", title: "Schematic Capture", desc: "Creating structural circuit schematics to serve as the blueprint." },
        { step: "03", title: "Layout Design", desc: "Placing components and routing pathways for optimal thermal flow." },
        { step: "04", title: "DRC & Simulation", desc: "Running detailed design validation checks and signal integrity tests." },
        { step: "05", title: "Prototyping & Bringup", desc: "Fabricating prototype boards to evaluate physical performance." },
        { step: "06", title: "Mass Production", desc: "Scaling verified layouts to automated manufacturing lines." }
    ];

    const developmentServices = [
        { title: "Single & Double Sided PCB", desc: "Highly efficient trace layout for low-complexity hardware." },
        { title: "Multilayer PCB Design", desc: "Complex routing, layer stack-up, and signal grounding design." },
        { title: "Flexible & Rigid-Flex Design", desc: "Bespoke connections for space-constrained wearable gadgets." },
        { title: "High-Speed PCB Design", desc: "Signal loss minimization and impedance matching for routers and servers." }
    ];

    const industries = [
        "Telecommunications – High-speed data servers, signal base-stations",
        "Consumer Electronics – IoT devices, wearable technologies",
        "Medical Devices – Diagnostic imaging, healthcare monitors",
        "Automotive Systems – ECU boards, BMS panels, sensors",
        "Industrial Machinery – Robotics, high-power drivers, automation units"
    ];

    const faqs = [
        {
            question: "Do you assist with firmware programming?",
            answer: "Yes, our hardware development support includes microcontroller firmware configuration (ARM, STM32, ESP32) for prototype verification."
        },
        {
            question: "What software do you use for PCB simulations?",
            answer: "We perform thermal and electrical signal integrity checks using SPICE tools and specialized layout calculators."
        },
        {
            question: "Do you supply complete design files?",
            answer: "Yes, we provide full Gerber files, ODB++ outputs, schematics in PDF, and the bill of materials (BOM)."
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
                title="PCB Developing Services"
                subtitle="Comprehensive board development, firmware integration, and hardware engineering solutions in Ahmedabad, India"
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
                                    End-to-End PCB Design & Development in <span className="text-primary">Ahmedabad</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    In the ever-evolving world of electronics, the Printed Circuit Board (PCB) is the heart of every electronic device, from mobile phones to medical equipment and industrial machinery. At MEGABYTE CIRCUIT SYSTEMS, we specialize in providing cutting-edge PCB design services and PCB development solutions tailored to meet the growing demands of industries worldwide.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Whether you are a small startup or a large enterprise, our team in Ahmedabad, India, is committed to delivering high-quality and cost-effective PCB design & manufacturing services that empower businesses to succeed.
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
                                            Why Choose Megabyte Circuit For <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">PCB Development</span>?
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

                            {/* Development Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our PCB Design & <span className="text-primary">Development Process</span>
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

                            {/* Service Offerings */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Comprehensive Development <span className="text-primary">Services We Provide</span>
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {developmentServices.map((item, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{item.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Industries Serviced */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Industries <span className="text-primary">Benefiting From Our Services</span>
                                </h3>
                                <ul className="space-y-4">
                                    {industries.map((item, index) => (
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
                                    FAQs – <span className="text-primary">Development & Hardware Bringup</span>
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
                                            PCB Developing in {city}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="pcb-developing-services" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
