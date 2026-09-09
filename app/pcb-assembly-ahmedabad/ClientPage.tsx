"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import {
    CheckCircle2, ChevronDown, Check, Cpu, Wrench, Package,
    Truck, ShieldCheck, MapPin, Zap, Settings, Eye, Activity
} from "lucide-react";

export default function Page() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "PCB Assembly" }
    ];

    const smtFeatures = [
        "Automated pick-and-place machines",
        "Reflow soldering with precise thermal profiles",
        "Capable of handling 0201 packages and micro BGAs"
    ];

    const thtApplications = [
        "Automotive systems",
        "Power supplies",
        "Heavy industrial controllers"
    ];

    const doubleSidedApplications = [
        "Industrial Automation",
        "High-Speed Communication Devices",
        "Medical Monitoring Equipment"
    ];

    const processSteps = [
        {
            step: "Step 1",
            title: "PCB Board Preparation",
            items: [
                "Incoming boards are inspected visually and dimensionally",
                "Cleaning to remove dust, oils, or contaminants"
            ]
        },
        {
            step: "Step 2",
            title: "Solder Paste Printing",
            items: [
                "Solder paste accurately applied using stainless steel stencils",
                "Advanced solder paste inspection (SPI) to catch early defects"
            ]
        },
        {
            step: "Step 3",
            title: "Automated Component Placement",
            items: [
                "Pick-and-place machines position components at lightning speed",
                "Vision systems verify component orientation and alignment"
            ]
        },
        {
            step: "Step 4",
            title: "Reflow Soldering",
            items: [
                "Boards pass through controlled temperature zones",
                "Solder paste melts and solidifies, securing the components"
            ]
        },
        {
            step: "Step 5",
            title: "Through-Hole Component Insertion",
            items: [
                "Hand or machine insertion depending on volume",
                "Lead-free wave soldering for RoHS-compliant boards"
            ]
        },
        {
            step: "Step 6",
            title: "Inspection and Testing",
            items: [
                "AOI (Automated Optical Inspection) for solder joint quality",
                "X-Ray inspection for BGA and hidden joints",
                "Functional testing and In-circuit testing (ICT)"
            ]
        },
        {
            step: "Step 7",
            title: "Final Quality Control",
            items: [
                "Full assembly validation",
                "Packaging under anti-static conditions"
            ]
        }
    ];

    const smtCapabilitiesList = [
        "Fine pitch ICs (0.3mm and below)",
        "Passive components (0201/01005)",
        "BGAs, micro-BGAs, and CSPs",
        "Lead-free and leaded assembly options",
        "High-frequency, low-loss board assemblies"
    ];

    const doubleSidedFeatures = [
        "Symmetrical Layer Stacking",
        "Advanced Vias Technology (Blind, Buried)",
        "Design for Manufacturability (DFM) support",
        "Solder Mask Defined Pads for High-Density Components"
    ];

    const applications = [
        { label: "Medical Devices", desc: "Patient monitors, diagnostic equipment" },
        { label: "Automotive", desc: "Engine control units (ECUs), infotainment systems" },
        { label: "Telecom", desc: "Routers, switches, 5G modules" },
        { label: "Industrial Automation", desc: "Robotics, PLCs, HMIs" },
        { label: "Consumer Electronics", desc: "Smart home devices, wearables" },
        { label: "Defense and Aerospace", desc: "Avionics systems, ruggedized electronics" }
    ];

    const chooseUsItems = [
        {
            title: "1. Location Advantage",
            desc: "Operating from Ahmedabad — a rising industrial hub — gives us logistical advantages to deliver your projects faster across India and internationally."
        },
        {
            title: "2. Customized Solutions",
            desc: "From Double-sided PCB Assembly to complex Surface Mount Assembly, we offer custom solutions that reduce costs and improve efficiency."
        },
        {
            title: "3. Fast Turnarounds",
            desc: "With optimized processes and ready material sourcing, we meet urgent deadlines without cutting corners."
        },
        {
            title: "4. Global Quality Standards",
            desc: "We comply with IPC-A-610 Class 2 and Class 3 standards, ISO 9001:2015 QMS Certification, and RoHS and REACH Environmental Regulations."
        },
        {
            title: "5. Full-Service Provider",
            desc: "From design advice to final assembly and testing — we provide full-spectrum services under one roof, simplifying your supply chain."
        }
    ];

    const technologies = [
        "Fuji and Yamaha High-Speed Pick-and-Place Lines",
        "Omron and Koh Young AOI Inspection Systems",
        "Selective Wave Soldering Machines",
        "Automated Stencil Printers with SPI Feedback",
        "BGA Rework Stations",
        "Climate-Controlled ESD Assembly Areas"
    ];

    const faqs = [
        {
            question: "What is the difference between PCB Fabrication and PCB Assembly?",
            answer: "PCB Fabrication is the process of manufacturing the bare board, while PCB Assembly involves soldering components onto that board to make a functional circuit."
        },
        {
            question: "Do you offer RoHS-compliant assembly?",
            answer: "Yes. All our processes, including soldering and materials, are fully RoHS compliant unless specified otherwise by the client."
        },
        {
            question: "What file formats do you accept for PCB Assembly?",
            answer: "We accept Gerber Files, BOM (Bill of Materials), Pick & Place Files, and Assembly Drawings in standard formats like RS-274X, ODB++, and IPC-2581."
        },
        {
            question: "Can you handle small batch production?",
            answer: "Absolutely! We specialize in both prototyping (small batch) and mass production (high volume)."
        },
        {
            question: "What is the typical turnaround time?",
            answer: "Turnaround depends on project complexity but typically ranges from 7-15 working days post final BOM and file approvals."
        }
    ];

    const internalLinksCol1 = [
        { title: "PCB Assembly in Delhi", href: "https://www.megabytecircuit.com/blog/pcb-assembly-delhi/" },
        { title: "PCB Assembly in Mumbai", href: "https://www.megabytecircuit.com/blog/mumbai-pcb-assembly-services/" },
        { title: "PCB Assembly in kolkata", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-kolkata/" },
        { title: "PCB Assembly in Kanpur", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-kanpur/" },
        { title: "PCB Assembly in Gandhinagar", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-gandhinagar/" }
    ];

    const internalLinksCol2 = [
        { title: "PCB Assembly in Banglore", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-bangalore/" },
        { title: "PCB Assembly in chennai", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-chennai/" },
        { title: "PCB Assembly in Hyderabad", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-hyderabad/" },
        { title: "PCB Assembly in Noida", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-noida/" },
        { title: "PCB Assembly in Rajkot", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-rajkot/" }
    ];

    const internalLinksCol3 = [
        { title: "PCB Assembly in Pune", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-pune/" },
        { title: "PCB Assembly in Surat", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-surat/" },
        { title: "PCB Assembly in Jaipur", href: "https://www.megabytecircuit.com/blog/pcb-assembly-services-jaipur/" },
        { title: "PCB Assembly in Vadodra", href: "https://www.megabytecircuit.com/blog/pcb-assembly-vadodara/" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Top PCB Assembly Services in Ahmedabad"
                subtitle="Precision-driven PCB Assembly in Ahmedabad and across India by MEGABYTES CIRCUIT SYSTEMS"
                badge="Our Services"
                breadcrumbs={breadcrumbs}
            />

            {/* ─── Main Content & Sidebar ─────────────────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* H1 & Intro Section / Why Choose Our PCB Assembly Services */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h1 className="text-2xl md:text-4xl font-display font-bold text-secondary leading-tight">
                                    Premium PCB Assembly Services in Ahmedabad, <br />
                                    <span className="text-primary">India MEGABYTES CIRCUIT SYSTEMS</span>
                                </h1>

                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary pt-2">
                                    Why Choose Our PCB <span className="text-primary">Assembly Services in Ahmedabad?</span>
                                </h2>

                                <p className="text-sm text-slate-800 leading-relaxed">
                                    In an era where electronics dominate every sector — from healthcare to smart homes — PCB Assembly stands at the heart of technological innovation.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    At <Link href="/" className="text-primary font-bold hover:underline">MEGABYTES CIRCUIT SYSTEMS</Link>, we bring your electronic visions to life through precision-driven PCB Assembly in Ahmedabad and all over India.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    As an experienced <strong>PCB assembly manufacturer</strong>, we blend technology, expertise, and dedication to deliver seamless <strong>PCB assembly services</strong> for a diverse set of industries.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Whether you require Surface Mount Assembly, Double-sided PCB Assembly, or complex multilayer prototypes, we are your trusted <strong>PCB assembly company</strong> ensuring faster turnarounds, competitive pricing, and uncompromised quality.
                                </p>
                            </div>

                            {/* What is PCB Assembly */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    What is <span className="text-primary">PCB Assembly</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    PCB Assembly refers to the method of soldering and mounting electronic components onto a fabricated printed circuit board (PCB) to create functional circuits. The process involves:
                                </p>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-800">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span>Accurate placement of tiny components</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-800">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span>Strong soldering for reliable conductivity</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-800">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span>Testing to ensure functionality and longevity</span>
                                    </li>
                                </ul>

                                <p className="text-sm text-slate-800 leading-relaxed">
                                    <strong>At MEGABYTES CIRCUIT SYSTEMS</strong>, we combine traditional expertise with automated technology, offering cutting-edge solutions like Surface Mount Technology PCB assembly and through-hole techniques to meet modern electronic demands.
                                </p>
                            </div>

                            {/* Types of PCB Assembly Services We Offer */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Types of PCB Assembly <span className="text-primary">Services We Offer</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Our full range of <strong>PCB assembly services</strong> are engineered to match every stage of product development — from prototyping to full-scale production.
                                </p>

                                <div className="space-y-6 pt-2">
                                    {/* 1. Surface Mount Assembly (SMT) */}
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                                        <h3 className="text-lg font-display font-bold text-secondary">
                                            1. Surface Mount <span className="text-primary">Assembly (SMT)</span>
                                        </h3>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            <strong>Surface Mount Assembly</strong> is ideal for creating compact, high-performance electronics. SMT enables mounting components directly onto the PCB surface, reducing size and improving signal transmission speed.
                                        </p>
                                        <ul className="space-y-2">
                                            {smtFeatures.map((feat, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                                                    <Check className="w-4 h-4 text-primary shrink-0" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            Whether you need mobile circuits, industrial sensors, or consumer gadgets — we deliver Surface Mount Technology PCB solutions with precision and speed.
                                        </p>
                                    </div>

                                    {/* 2. Through-Hole Assembly (THT) */}
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                                        <h3 className="text-lg font-display font-bold text-secondary">
                                            2. Through-Hole <span className="text-primary">Assembly (THT)</span>
                                        </h3>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            For devices exposed to mechanical stress or harsh environments, <strong>Through-Hole Assembly</strong> is indispensable. We offer manual soldering for delicate assemblies and wave soldering for high-volume production, ensuring durability and strength for applications like:
                                        </p>
                                        <ul className="space-y-2">
                                            {thtApplications.map((app, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                                                    <Check className="w-4 h-4 text-primary shrink-0" />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 3. Mixed Technology PCB Assembly */}
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                        <h3 className="text-lg font-display font-bold text-secondary">
                                            3. Mixed Technology <span className="text-primary">PCB Assembly</span>
                                        </h3>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            Often, electronic designs require both surface mount and through-hole components. Our team specializes in <strong>mixed assembly</strong>, blending techniques to create robust hybrid boards fit for real-world conditions.
                                        </p>
                                    </div>

                                    {/* 4. Double-sided PCB Assembly */}
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                                        <h3 className="text-lg font-display font-bold text-secondary">
                                            4. Double-sided <span className="text-primary">PCB Assembly</span>
                                        </h3>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            Need higher circuit density without increasing the board size? We offer advanced Double-sided PCB Assembly, utilizing <Link href="/products/double-layer-pcb" className="text-primary font-bold hover:underline">2 layer PCB manufacturing machines</Link> that allow efficient component mounting on both board surfaces.
                                        </p>
                                        <p className="text-sm font-semibold text-slate-800">Applications include:</p>
                                        <ul className="space-y-2">
                                            {doubleSidedApplications.map((app, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                                                    <Check className="w-4 h-4 text-primary shrink-0" />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Our Detailed PCB Assembly Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our Detailed PCB <span className="text-primary">Assembly Process</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    At <strong>MEGABYTES CIRCUIT SYSTEMS</strong>, the PCB assembly process is refined to ensure world-class reliability and quality.
                                </p>

                                <div className="space-y-4">
                                    {processSteps.map((step, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300">
                                            <h3 className="font-display font-bold text-secondary text-base mb-3">
                                                {step.step}: <span className="text-primary">{step.title}</span>
                                            </h3>
                                            <ul className="space-y-2">
                                                {step.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Surface Mount Technology (SMT) Capabilities */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Surface Mount Technology <span className="text-primary">(SMT) Capabilities</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    As demand for miniaturized, high-functionality electronics rises, <strong>Surface Mount Technology PCB</strong> has become the gold standard.
                                </p>
                                <p className="text-sm font-semibold text-slate-800">We handle:</p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {smtCapabilitiesList.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-slate-800 leading-relaxed pt-2">
                                    Our high-speed SMT lines ensure you meet aggressive time-to-market demands without sacrificing quality.
                                </p>
                            </div>

                            {/* Double-Sided PCB Assembly Expertise */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Double-Sided PCB <span className="text-primary">Assembly Expertise</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    With increasing product complexity, Double-sided PCB Assembly has become critical for achieving performance within compact devices.
                                </p>
                                <p className="text-sm font-semibold text-slate-800">Our double-sided capabilities feature:</p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {doubleSidedFeatures.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-slate-800 leading-relaxed pt-2">
                                    Thanks to our investment in the latest <strong>2 layer PCB manufacturing machines</strong>, we handle projects that require intricate designs and strict tolerance control.
                                </p>
                            </div>

                            {/* Applications of Our PCB Assembly Services */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Applications of Our <span className="text-primary">PCB Assembly Services</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Our PCB assemblies power devices across the world, finding applications in:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {applications.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span className="text-xs text-slate-700">
                                                <strong className="text-slate-900">{item.label}:</strong> {item.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-slate-700 pt-2">
                                    No matter your industry, we tailor our <a href="https://en.wikipedia.org/wiki/Printed_circuit_board" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">PCB assembly services</a> to meet your specific operational and environmental requirements.
                                </p>
                            </div>

                            {/* Why Choose MEGABYTES CIRCUIT SYSTEMS? (Styled Dark Box) */}
                            <div className="bg-gradient-to-br from-secondary to-slate-950 text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide leading-tight text-white/95">
                                        Why Choose <span className="text-primary">MEGABYTES CIRCUIT SYSTEMS?</span>
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                                        {chooseUsItems.map((item, index) => (
                                            <div key={index} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group">
                                                <h3 className="font-display font-bold text-base text-white group-hover:text-primary transition-colors mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Technologies We Support */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Technologies <span className="text-primary">We Support</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    We constantly invest in state-of-the-art infrastructure:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {technologies.map((tech, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span>{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Frequently Asked Questions (FAQs) */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Frequently Asked <span className="text-primary">Questions (FAQs)</span>
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

                            {/* Partner with a Trusted PCB Assembly Company in Ahmedabad */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Partner with a Trusted PCB <span className="text-primary">Assembly Company in Ahmedabad</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    When your product’s success depends on the quality of your PCB assembly, trust only the experts.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    At <strong>MEGABYTES CIRCUIT SYSTEMS</strong>, we bring together technology, experience, and dedication to deliver unmatched <strong>PCB Assembly in Ahmedabad</strong> and across India.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Whether it's a startup prototype or a mass production run, we are equipped to scale with your needs.
                                </p>

                                {/* Internal links grid */}
                                <div className="pt-6 border-t border-slate-100 grid md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        {internalLinksCol1.map((link, idx) => (
                                            <a key={idx} href={link.href} className="block text-xs font-bold text-slate-700 hover:text-primary transition-colors">
                                                {link.title}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        {internalLinksCol2.map((link, idx) => (
                                            <a key={idx} href={link.href} className="block text-xs font-bold text-slate-700 hover:text-primary transition-colors">
                                                {link.title}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        {internalLinksCol3.map((link, idx) => (
                                            <a key={idx} href={link.href} className="block text-xs font-bold text-slate-700 hover:text-primary transition-colors">
                                                {link.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="pcb-assembly" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
