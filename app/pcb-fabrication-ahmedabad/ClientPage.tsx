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
        { label: "PCB Fabrication" }
    ];

    const chooseUsItems = [
        {
            icon: Cpu,
            title: "Expertise & Experience",
            desc: "Translating complex board schematics and layouts into physical high-yield circuit structures."
        },
        {
            icon: Sliders,
            title: "High-Precision Fabrication",
            desc: "Sub-3mil tracks and clearances using laser direct imaging (LDI)."
        },
        {
            icon: Layers,
            title: "End-to-End Solutions",
            desc: "Cleanroom photo-exposure, mechanical profiling, automated testing, and assembly check."
        },
        {
            icon: BadgePercent,
            title: "Competitive Pricing",
            desc: "Cost-efficient scaling from small batches to high-volume manufacturing."
        }
    ];

    const processSteps = [
        { step: "01", title: "Design & Layout Check", desc: "Verifying Gerber packages and board stack-up compatibility." },
        { step: "02", title: "Lamination & Exposure", desc: "Bonding copper layers onto substrates and photo-exposing circuit tracks." },
        { step: "03", title: "Chemical Etching", desc: "Etching away unexposed copper to leave clean conductive traces." },
        { step: "04", title: "Drilling & Plating", desc: "High-speed CNC drilling of component vias and electrochemical copper plating." },
        { step: "05", title: "Solder Mask & Silkscreen", desc: "Applying protective mask liquid and printing component designators." },
        { step: "06", title: "Surface Finish & Routing", desc: "Applying ENIG or HASL coating, cutting outer board profile contours." }
    ];

    const fabricationTypes = [
        { title: "Single-sided PCB", desc: "Ideal for basic consumer gadgets requiring simple connectivity." },
        { title: "Double-sided PCB", desc: "Dual trace routing layers for compact and cost-effective designs." },
        { title: "Multilayer PCB", desc: "Support for dense layer counts up to 32 layers with blind/buried vias." },
        { title: "High-Frequency PCB", desc: "Rogers or PTFE core materials for high-frequency RF transmission." },
        { title: "Rigid-Flex PCB", desc: "Hybrid boards linking rigid blocks with bendable polyimide ribbon lines." }
    ];

    const industries = [
        "Consumer Electronics – Wearable electronics, IoT nodes, home appliances",
        "Automotive Industry – Vehicle sensors, ECU dashboards, lighting controllers",
        "Medical Devices – Sensitive clinical patient monitors, diagnostic devices",
        "Telecommunications – Signal switches, routers, transmission amplifiers",
        "Industrial Automation – Robotic controllers, high-power drivers, PLC units"
    ];

    const faqs = [
        {
            question: "What base substrates are available for fabrication?",
            answer: "We support standard FR-4 (low/high Tg), Rogers RF laminates, Polyimide for flexible circuits, and Metal Core (Aluminum) for LED power circuits."
        },
        {
            question: "Do you support custom board shapes?",
            answer: "Yes, we utilize precision CNC milling and V-grooving to fabricate any custom shape or panel configuration."
        },
        {
            question: "What color choices do you offer for the solder mask?",
            answer: "We offer Green (standard), Matte Green, Blue, Red, Black, Matte Black, White, and Yellow."
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
                title="PCB Fabrication"
                subtitle="Precision copper routing, micro-drilling, custom profiling, and panelization in Ahmedabad, India"
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
                                    High-Precision PCB Fabrication in <span className="text-primary">Ahmedabad</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    In today's electronic world, PCB (Printed Circuit Board) fabrication plays an essential role in the development of electronic products. Whether it's a consumer electronic device, a medical instrument, or an automotive component, the fabrication of PCBs is a critical step in creating high-quality, reliable products.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    At MEGABYTES CIRCUIT SYSTEMS, based in Ahmedabad, India, we offer comprehensive PCB fabrication services to meet the varied needs of industries around the globe. Our expertise lies in delivering high-precision PCB fabrication solutions tailored to client specifications.
                                </p>
                            </div>

                            {/* What is PCB Fabrication */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4">
                                    What is <span className="text-primary">PCB Fabrication</span>?
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    PCB fabrication refers to the process of manufacturing a PCB from its basic design. It involves several key steps, such as circuit board layout transferring, chemical etching of the conductive copper pathways, high-precision drilling of holes for component pins and vias, applying protective masks, and conducting final electrical parameter testing.
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
                                            Why Choose Megabyte Circuit For <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">PCB Fabrication</span>?
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

                            {/* Fabrication Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our Standard <span className="text-primary">PCB Fabrication Process</span>
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

                            {/* Types of Fabrication We Offer */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Types of <span className="text-primary">PCB Fabrication</span> We Offer
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {fabricationTypes.map((item, index) => (
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
                                    Industries Served By <span className="text-primary">Our Fabrication Lines</span>
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
                                    FAQs – <span className="text-primary">PCB Fabrication & Substrates</span>
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
                                            PCB Fabrication in {city}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="pcb-fabrication" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
