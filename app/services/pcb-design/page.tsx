"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import {
    Zap, Layers, Cpu, MapPin, BadgePercent, ShieldCheck,
    Check, ChevronDown, CheckCircle2, ChevronRight, Settings,
    Sliders, DollarSign, Activity, FileCheck, Shield
} from "lucide-react";

export default function Page() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "PCB Design" }
    ];

    const chooseUsItems = [
        {
            icon: Cpu,
            title: "High-Speed Layout",
            desc: "Impedance matching, differential pairs, and signal integrity analysis"
        },
        {
            icon: Layers,
            title: "Multilayer Designs",
            desc: "Expert layering and stackup design for complex products"
        },
        {
            icon: DollarSign,
            title: "Cost Optimization",
            desc: "Layout optimization to reduce manufacturing costs"
        },
        {
            icon: Settings,
            title: "Custom Solutions",
            desc: "Tailored to consumer, automotive, and medical standards"
        },
        {
            icon: MapPin,
            title: "Local & Global Reach",
            desc: "Local support in Ahmedabad with global execution capability"
        },
        {
            icon: ShieldCheck,
            title: "Compliant Standards",
            desc: "ISO and IPC compliant design rules validation"
        }
    ];

    const processSteps = [
        { step: "01", title: "Requirements Gathering", desc: "Understand inputs, board size, and electrical constraints." },
        { step: "02", title: "Schematic Capture", desc: "Creating circuit schematics and BOM list verification." },
        { step: "03", title: "Board Layout", desc: "Component placement and precise trace routing." },
        { step: "04", title: "Design Review & DRC", desc: "Run Design Rule Checks and obtain user signoff." },
        { step: "05", title: "Prototyping", desc: "Validate design in real-world environments." },
        { step: "06", title: "Final Delivery", desc: "Provide comprehensive Gerber files and ODB++ outputs." }
    ];

    const typesOfServices = [
        { title: "Single & Double Sided PCB Design", desc: "Cost-effective layouts for simple consumer devices." },
        { title: "Multilayer PCB Design", desc: "High-density layouts with advanced layer stacking." },
        { title: "High-Speed PCB Design", desc: "Minimizing signal attenuation and electromagnetic interference." },
        { title: "Flexible & Rigid-Flex PCB Design", desc: "Ideal for compact, dynamic, and lightweight systems." }
    ];

    const applications = [
        "Consumer Electronics – Wearables, Smart Home Devices",
        "Automotive – ECU modules, sensors, LED systems",
        "Medical Devices – Diagnostic imaging, patient monitors",
        "Aerospace & Defense – Avionic controls, secure radios",
        "Industrial Automation – Robotics, high-power controllers",
        "Telecommunications – High-speed switches, data servers"
    ];

    const benefits = [
        { title: "Optimized Routing", desc: "Efficient spacing minimizes traces and simplifies assembly." },
        { title: "Signal and Power Integrity", desc: "Proper plane layouts ensure noise immunity and clean power." },
        { title: "Thermal Management", desc: "Strategically placed vias and thermal pads prevent overheating." },
        { title: "Cost-effective Production", desc: "Design validation reduces material wastage and scrap rate." }
    ];

    const faqs = [
        {
            question: "What are PCB design services?",
            answer: "PCB design services involve translating a circuit schematic into a physical layout file (Gerbers) optimized for fabrication and assembly."
        },
        {
            question: "How long does PCB design take?",
            answer: "Depending on complexity, basic boards take 3-5 days, while complex high-speed multilayer designs can take 2-4 weeks."
        },
        {
            question: "Do you offer multilayer PCB design?",
            answer: "Yes, we specialize in high-density multilayer PCB designs ranging from 4 to 32 layers."
        },
        {
            question: "Can you provide PCB prototyping with design services?",
            answer: "Absolutely! We provide complete end-to-end prototyping and fabrication once the design sign-off is completed."
        },
        {
            question: "What file formats do you accept for PCB design?",
            answer: "We support Altium Designer, Autodesk Eagle, KiCad, OrCAD, and Cadence Allegro design files."
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
                title="PCB Design Services"
                subtitle="Professional schematic design and high-speed multi-layer PCB layout services in Ahmedabad, India"
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
                                    Professional PCB Layout & Design in <span className="text-primary">Ahmedabad</span>
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    Megabytes Circuit Systems is a premier PCB design company in Ahmedabad, Gujarat, offering professional PCB design services to engineers, innovators, and businesses across India. Our expertise in printed circuit board design ensures your projects achieve optimal performance, reliability, and manufacturability.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    From custom PCB design to high-speed and multilayer PCB solutions, we deliver tailored services to meet your unique requirements. We combine local accessibility with global standards, providing end-to-end PCB layout services and prototyping support.
                                </p>
                            </div>

                            {/* What is PCB Design */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4">
                                    What is <span className="text-primary">PCB Design</span>?
                                </h3>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6">
                                    PCB design, or printed circuit board design, is the process of creating a schematic and layout for a circuit board that connects electronic components. It involves defining the board’s structure, placing components, and routing electrical connections to ensure functionality and performance.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Effective PCB design is critical for industries like automotive, telecommunications, and medical technology, where reliability and efficiency are paramount. At Megabytes Circuit Systems, our PCB design services cover everything from initial concept to final layout, ensuring your board is optimized for manufacturing and performance.
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
                                            Why Choose Megabyte Circuit For <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">PCB Design Services</span>?
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

                            {/* Design Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our Professional <span className="text-primary">PCB Design Process</span>
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {processSteps.map((step, idx) => (
                                        <div key={idx} className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300">
                                            <span className="absolute top-4 right-4 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                Step {step.step}
                                            </span>
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2 mt-4">{step.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Types of Services */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Types of <span className="text-primary">PCB Design Services</span> We Offer
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {typesOfServices.map((type, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{type.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{type.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Applications of PCB Design */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Applications of <span className="text-primary">PCB Design</span>
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {applications.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span className="text-sm text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Benefits of Professional PCB Design */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Benefits of <span className="text-primary">Professional PCB Design</span>
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
                                    FAQs – <span className="text-primary">PCB Design & Layout</span>
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
                                            PCB Design in {city}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="pcb-design" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
