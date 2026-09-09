"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import { Layers, ShieldCheck, ChevronDown, CheckCircle2, Sliders, Cpu, Wrench } from "lucide-react";

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
            desc: "FR4, Rogers, High-Tg, Aluminum Core, Flexible, and Polyimide materials"
        },
        {
            icon: Sliders,
            title: "Strict Tolerances",
            desc: "Min trace/space down to 2.5/2.5 mil (HDI: 1.5/1.5 mil) with high-accuracy routing"
        },
        {
            icon: ShieldCheck,
            title: "Custom Finishes",
            desc: "ENIG, ENEPIG, Immersion Silver, HASL, and Lead-Free options"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "1. Design Engineering and Layout",
            desc: "Our design team provides expert PCB Layout Design services tailored to your device’s specifications. Signal routing, power integrity, and heat management are optimized using advanced CAD tools. The physical layout of the PCB is precisely configured to meet functional and mechanical requirements."
        },
        {
            step: "02",
            title: "2. Material Selection and Layer Configuration",
            desc: "We manufacture single to 32-layer PCBs using materials such as FR-4, Rogers, Aluminum, and Polyimide. Each project begins with a strategic selection of materials and surface finishes that suit your product's environment and functionality."
        },
        {
            step: "03",
            title: "3. Fabrication and Manufacturing",
            desc: "Our manufacturing lines are equipped with LDI (Laser Direct Imaging), laser drilling, AOI (Automated Optical Inspection), plasma treatment, and electrolytic plating. These technologies enable micro-via formation, HDI (High Density Interconnect) routing, and ultra-fine line definition."
        },
        {
            step: "04",
            title: "4. Quality Testing and Validation",
            desc: "All PCBs undergo thorough PCBs Prototype Testing, including electrical performance tests, thermal stress evaluations, and microsection analysis. We ensure reliability across multiple environmental conditions, from high-heat industrial applications to sensitive medical devices."
        },
        {
            step: "05",
            title: "5. Rapid Prototyping and Final Assembly",
            desc: "We offer quick-turn prototyping for new product developments. Our in-house capabilities allow for small-batch assembly, helping startups and OEMs validate designs before mass production."
        }
    ];

    const industries = [
        {
            name: "Automotive Electronics",
            desc: "Our PCBs are built for high-vibration and temperature-resistant applications. We support ECU modules, sensors, lighting systems, and BMS with reliable, thermally stable boards."
        },
        {
            name: "Medical Devices",
            desc: "We manufacture high-precision PCBs for diagnostic, imaging, and monitoring equipment. Biocompatible surface finishes and stringent testing make our PCBs ideal for healthcare technology."
        },
        {
            name: "Aerospace and Defense",
            desc: "Our processes comply with international standards like MIL-PRF-31032. From RF shielding to conformal coatings, we ensure signal integrity and resilience in critical defense systems."
        },
        {
            name: "Consumer and Industrial Electronics",
            desc: "Whether it’s wearable tech, smart home devices, or robotics, our PCBs are designed to perform in high-density, multifunctional environments."
        }
    ];

    const capabilities = [
        { name: "Layers", value: "1 to 32" },
        { name: "Material Options", value: "FR-4, Rogers, Polyimide, Aluminum" },
        { name: "Surface Finishes", value: "ENIG, ENEPIG, Immersion Silver, HASL, Lead-Free" },
        { name: "Minimum Trace/Spacing", value: "2.5/2.5 mil (HDI: 1.5/1.5 mil)" },
        { name: "Prototypes to Volume Production", value: "From 1 unit to 100,000+" }
    ];

    const testingMethods = [
        "Flying Probe and Fixture Testing",
        "AOI and X-Ray Inspection",
        "Environmental Thermal Shock Testing",
        "Solder Float and Peel Strength Evaluations",
        "Cross-Sectional Analysis for Inner Layer Accuracy"
    ];

    const advantages = [
        "Faster design iteration and face-to-face collaboration",
        "Localized support for component sourcing and delivery",
        "Shorter lead times with express manufacturing options",
        "Transparent communication with local language proficiency",
        "On-site inspections and live production monitoring"
    ];

    const cityLinks = [
        { name: "PCB Manufacturing in Delhi", href: "/blog/pcb-manufacturing-delhi" },
        { name: "PCB Manufacturing in Mumbai", href: "/blog/pcb-manufacturing-mumbai" },
        { name: "PCB Manufacturing in Kolkata", href: "/blog/pcb-manufacturing-kolkata" },
        { name: "PCB Manufacturing in Kanpur", href: "/blog/pcb-manufacturing-kanpur" },
        { name: "PCB Manufacturing Gandhinagar", href: "/blog/pcb-manufacturing-gandhinagar" },
        { name: "PCB Manufacturing in Banglore", href: "/blog/pcb-manufacturing-bangalore" },
        { name: "PCB Manufacturing in Chennai", href: "/blog/pcb-manufacturing-chennai" },
        { name: "PCB Manufacturing in Hyderabad", href: "/blog/pcb-manufacturing-hyderabad" },
        { name: "PCB Manufacturing in Noida", href: "/blog/pcb-manufacturing-noida" },
        { name: "PCB Manufacturing in Rajkot", href: "/blog/pcb-manufacturing-rajkot" },
        { name: "PCB Manufacturing in Pune", href: "/blog/pcb-manufacturing-pune" },
        { name: "PCB Manufacturing in Surat", href: "/blog/pcb-manufacturing-surat" },
        { name: "PCB Manufacturing in Jaipur", href: "/blog/pcb-manufacturing-jaipur" },
        { name: "PCB Manufacturing in Vadodra", href: "/blog/pcb-manufacturing-vadodara" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="PCB Manufacturing in Ahmedabad – Precision & Innovation by Megabyte Circuit"
                subtitle="Empowering Innovation Through Advanced PCB Manufacturing in India"
                badge="Our Services"
                breadcrumbs={breadcrumbs}
            />

            {/* ─── Main Content & Sidebar ─────────────────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Section 1: Empowering Innovation */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4 leading-snug">
                                    Empowering Innovation Through Advanced <span className="text-primary">PCB Manufacturing in India</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed mb-4">
                                    At Megabyte Circuit, we specialize in PCB manufacturing in Ahmedabad, serving clients across India and globally. Our commitment to engineering excellence and unmatched quality has positioned us as one of the <strong>top circuit board manufacturing companies in India.</strong> From concept to production, our services span the complete circuit board manufacturing process, enabling businesses to bring their most complex electronic designs to life.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Our 30,000 sq. ft. ISO-certified facility in Ahmedabad is equipped with German-engineered automation and the latest in PCB fabrication technology. We support a broad range of industries—from automotive, medical, and defense to industrial IoT—with high-reliability PCBs, ensuring your products are both functional and future-ready.
                                </p>
                            </div>

                            {/* Section 2: Why Choose Megabyte Circuit */}
                            <div className="bg-gradient-to-br from-secondary to-slate-950 text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide leading-tight text-white/95">
                                        Why Choose Megabyte Circuit for <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">PCB Manufacturing in India</span>
                                    </h2>

                                    <p className="text-sm text-white/80 leading-relaxed">
                                        With years of domain expertise and a focus on cutting-edge practices, Megabyte Circuit is the go-to choice for <strong><Link href="/" className="text-primary hover:underline">PCB manufacturing in India.</Link></strong> Our experienced engineers and process specialists ensure that every board meets global performance standards. Whether you're building a prototype or scaling to mass production, we guarantee high precision, durability, and seamless performance.
                                    </p>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        We don’t just manufacture PCBs—we bring your product ideas to life with a full suite of services, including <strong>PCB Layout Design</strong>, physical layout planning, and thorough <strong><Link href="/prototype-pcb" className="text-primary hover:underline">PCBs Prototype Testing</Link></strong>. Everything is executed under one roof for reduced turnaround time and enhanced quality assurance.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6 pt-4">
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

                            {/* Section 3: Complete Circuit Board Manufacturing Process */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                        Complete Circuit Board <span className="text-primary">Manufacturing Process</span>
                                    </h2>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        We handle all phases of the <strong>circuit board manufacturing process</strong> with accuracy and discipline. From layout design to final testing, every step is engineered for quality and speed.
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {processSteps.map((step, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                                            <div>
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                    Step {step.step}
                                                </span>
                                                <h3 className="font-display font-bold text-secondary text-sm mb-2 mt-4">{step.title}</h3>
                                                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 4: PCB Solutions for Every Industry */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                        PCB Solutions for <span className="text-primary">Every Industry</span>
                                    </h2>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        We serve a diverse client base with specialized PCB solutions for varied sectors:
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {industries.map((item, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h3 className="font-display font-bold text-secondary text-sm mb-2">{item.name}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 5: High-Performance Capabilities at a Glance */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    High-Performance <span className="text-primary">Capabilities at a Glance</span>
                                </h2>
                                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/40">
                                    <div className="divide-y divide-slate-100">
                                        {capabilities.map((cap, idx) => (
                                            <div key={idx} className="flex justify-between items-center px-6 py-4 text-sm hover:bg-slate-50/50 transition-colors">
                                                <span className="font-bold text-secondary">{cap.name}:</span>
                                                <span className="text-slate-600 font-medium text-right">{cap.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Section 6: Expertise in PCB Layout Design and Optimization */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Expertise in PCB Layout <span className="text-primary">Design and Optimization</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Our engineering team brings deep domain knowledge in PCB Layout Design. We help optimize trace paths, impedance control, and layer stack-up to meet EMI/EMC compliance. The <strong>physical layout of the PCB</strong> is modeled using signal integrity analysis and mechanical constraints to ensure flawless integration into your device architecture.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    We support various software platforms, including Altium, Eagle, KiCad, and OrCAD, ensuring compatibility with your existing design workflows.
                                </p>
                            </div>

                            {/* Section 7: Precision and Testing You Can Trust */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                        Precision and Testing <span className="text-primary">You Can Trust</span>
                                    </h2>
                                    <p className="text-sm text-slate-800 leading-relaxed">
                                        Every board goes through meticulous <strong>PCBs Prototype Testing</strong> to validate its real-world performance. We utilize:
                                    </p>
                                </div>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {testingMethods.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Section 8: Advantages of Choosing PCB Manufacturing in Ahmedabad */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                        Advantages of Choosing <span className="text-primary">PCB Manufacturing in Ahmedabad</span>
                                    </h2>
                                    <p className="text-sm text-slate-800 leading-relaxed">
                                        Choosing a local partner like Megabyte Circuit for <strong><Link href="/" className="text-primary hover:underline">pcb manufacturing in Ahmedabad</Link></strong> brings multiple advantages:
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {advantages.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-slate-800 leading-relaxed pt-2">
                                    Our strategic Ahmedabad location also offers logistical convenience, connecting us easily to the rest of India and international ports.
                                </p>
                            </div>

                            {/* Section 9: Why We Stand Out Among Circuit Board Manufacturing Companies */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Why We Stand Out Among Circuit <span className="text-primary">Board Manufacturing Companies</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    What makes Megabyte Circuit one of the most reliable <strong>circuit board manufacturing companies</strong> in India is our unwavering focus on customer success. We are not just fabricators; we are technical partners invested in your product development lifecycle.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    From helping startups design their first proof-of-concept to enabling OEMs with consistent high-volume production, we maintain quality and performance across every engagement. Our ISO 9001:2015, RoHS, and UL certifications further demonstrate our commitment to international quality standards.
                                </p>
                            </div>

                            {/* Section 10: Let's Build Your Next PCB */}
                            <div className="bg-gradient-to-br from-primary/10 to-emerald-50 rounded-3xl p-8 border border-primary/20 shadow-lg space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Let's Build <span className="text-primary">Your Next PCB</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Whether you're an electronics innovator, OEM, or system integrator, Megabyte Circuit offers world-class <strong>PCB manufacturing in Ahmedabad</strong> tailored to your needs. We are here to streamline your circuit board manufacturing process with high-precision fabrication, expert layout design, and dependable testing.
                                </p>
                            </div>

                            {/* Internal Links / Cities Serviced */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    PCB Manufacturing Services <span className="text-primary">Across India</span>
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {cityLinks.map((city, index) => (
                                        <Link key={index} href={city.href} className="text-xs text-slate-700 bg-slate-50 border border-slate-100 px-3 py-2.5 rounded-xl text-center font-bold hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-colors">
                                            {city.name}
                                        </Link>
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
