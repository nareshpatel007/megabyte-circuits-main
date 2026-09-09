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
            title: "Expertise and Experience",
            desc: "With years of experience in PCB development and a team of highly skilled engineers, we provide innovative and precise PCB design services to meet the most complex requirements."
        },
        {
            icon: Settings,
            title: "Cutting-Edge Technology",
            desc: "We use advanced design software like Altium Designer, Eagle, and KiCad, ensuring that every PCB is crafted with the utmost precision and performance."
        },
        {
            icon: BadgePercent,
            title: "Affordable and Competitive Pricing",
            desc: "We provide competitive pricing for all our PCB development services without compromising on quality, offering tailored solutions that align with your budget."
        },
        {
            icon: Calendar,
            title: "On-Time Delivery",
            desc: "Our PCB design & manufacturing services are streamlined to ensure that all projects are completed within agreed timelines."
        },
        {
            icon: ShieldCheck,
            title: "Quality Assurance",
            desc: "We implement stringent quality control checks, from schematic capture to final production, ensuring every PCB meets industry standards."
        }
    ];

    const whyChooseReasons = [
        {
            title: "1. Comprehensive Service Offering",
            desc: "From PCB design to manufacturing and prototyping, we offer a one-stop solution for all your PCB needs. Our expertise spans all types of PCBs, including single-sided, double-layer PCB, multi-layer, flexible, and rigid-flex designs."
        },
        {
            title: "2. Innovative Solutions",
            desc: "We continually invest in the latest technology and tools to provide cutting-edge PCB services. Whether you need high-speed designs, complex multi-layer boards, or custom prototypes, we have the technical expertise to bring your ideas to life."
        },
        {
            title: "3. Cost-Effective Pricing",
            desc: "We offer competitive pricing for all our PCB design services in India, ensuring that you get top-notch quality without breaking the bank. Whether you're a small business or a large corporation, we offer cost-effective solutions tailored to your specific needs."
        },
        {
            title: "4. Skilled Team",
            desc: "Our team comprises highly skilled engineers who are experienced in designing and developing PCBs for a wide range of industries, including telecommunications, consumer electronics, medical devices, automotive, and industrial machinery."
        },
        {
            title: "5. Fast Turnaround Time",
            desc: "With our efficient design and manufacturing processes, we ensure that your PCB design is completed quickly and accurately. We understand the importance of meeting deadlines, and we're committed to delivering high-quality PCBs on time, every time."
        }
    ];

    const processSteps = [
        { step: "01", title: "1. Consultation & Requirement Gathering", desc: "Every successful PCB development project begins with a thorough consultation. Our team works closely with you to understand the product's functionality, design requirements, and performance goals." },
        { step: "02", title: "2. Schematic Capture & Circuit Design", desc: "Once we have all the necessary information, we create a schematic diagram that outlines the electrical circuit of the PCB. This design serves as a blueprint detailing component placements and interconnections." },
        { step: "03", title: "3. PCB Layout & Routing", desc: "In the PCB layout phase, we strategically place components and define their routing paths. We ensure that the layout supports optimal electrical performance, minimizes heat buildup, and complies with design rules." },
        { step: "04", title: "4. Design Rule Check (DRC) & Simulation", desc: "We conduct thorough Design Rule Checks (DRC) to verify that the design complies with industry standards and is free from errors. Additionally, we simulate electrical performance for signal integrity and thermal management." },
        { step: "05", title: "5. Prototyping & Testing", desc: "Before proceeding with mass production, we manufacture a prototype of the PCB. The prototype undergoes electrical, thermal, and mechanical testing to validate performance." },
        { step: "06", title: "6. Mass Production & Delivery", desc: "Once the prototype is validated, we proceed with mass production under strict quality control measures to guarantee consistency across all units." }
    ];

    const developmentServices = [
        {
            title: "1. Single-Sided and Double-Sided PCB Design",
            desc: "For simple and cost-effective applications, we offer single-layer PCB and double-sided PCB design services. Ideal for consumer electronics, medical devices, and home appliances with efficient space utilization and high durability."
        },
        {
            title: "2. Multi-Layer PCB Design",
            desc: "Our multi-layer PCB design services are designed for high-performance applications where space and functionality are critical, including smartphones, medical instruments, and automotive control systems."
        },
        {
            title: "3. Flexible and Rigid-Flex PCB Design",
            desc: "Specialized flexible PCB designs perfect for wearable electronics and compact devices. Our rigid-flex PCBs combine benefits of flexible and rigid designs for space optimization and durability."
        },
        {
            title: "4. High-Speed PCB Design",
            desc: "High-speed PCB design services focusing on minimizing signal loss and ensuring reliable performance for telecommunications, broadcasting, routers, servers, and video processing systems."
        },
        {
            title: "5. Custom PCB Design & Development Solutions",
            desc: "Tailored custom PCB design services optimized for performance, cost, and functionality whether you need a one-off prototype or mass production PCB."
        },
        {
            title: "6. PCB Prototyping and Testing",
            desc: "Creating PCB prototypes to test and validate electrical, thermal, and mechanical performance before full-scale production."
        }
    ];

    const industries = [
        { title: "Telecommunications", desc: "High-performance PCBs for network equipment and communication systems." },
        { title: "Consumer Electronics", desc: "PCBs for smartphones, tablets, home appliances, and other electronic devices." },
        { title: "Medical Devices", desc: "Custom PCBs for diagnostic devices, medical monitoring equipment, and surgical tools." },
        { title: "Automotive", desc: "Durable PCBs for automotive systems, including engine control units (ECUs), infotainment, and more." },
        { title: "Industrial Electronics", desc: "Reliable PCBs for machinery, automation systems, and control devices." }
    ];

    const otherCities = [
        { label: "PCB Developing in Delhi", href: "/blog/pcb-developing-service-delhi" },
        { label: "PCB Developing in Mumbai", href: "/blog/pcb-developing-service-mumbai" },
        { label: "PCB Developing in Kolkata", href: "/blog/pcb-developing-service-kolkata" },
        { label: "PCB Developing in Kanpur", href: "/blog/pcb-developing-services-kanpur" },
        { label: "PCB Developing Gandhinagar", href: "/blog/pcb-developing-services-gandhinagar" },
        { label: "PCB Developing in Bangalore", href: "/blog/pcb-developing-services-bangalore" },
        { label: "PCB Developing in Chennai", href: "/blog/pcb-developing-services-chennai" },
        { label: "PCB Developing in Hyderabad", href: "/blog/pcb-developing-services-hyderabad" },
        { label: "PCB Developing in Noida", href: "/blog/pcb-developing-services-noida" },
        { label: "PCB Developing in Rajkot", href: "/blog/pcb-developing-services-rajkot" },
        { label: "PCB Developing in Pune", href: "/blog/pcb-developing-services-pune" },
        { label: "PCB Developing in Surat", href: "/blog/pcb-developing-services-surat" },
        { label: "PCB Developing in Jaipur", href: "/blog/pcb-developing-services-jaipur" },
        { label: "PCB Developing in Vadodara", href: "/blog/pcb-developing-vadodara" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="PCB Design & Development Services by MEGABYTES CIRCUIT SYSTEMS in Ahmedabad, India"
                subtitle="High-quality, cost-effective PCB design & development services tailored to meet growing electronic demands."
                badge="Our Services"
                breadcrumbs={breadcrumbs}
            />

            {/* ─── Main Content & Sidebar ─────────────────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Introduction & Calculator info */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4 leading-snug">
                                    Our Comprehensive PCB Design <span className="text-primary">& Development Services</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    In the ever-evolving world of electronics, the Printed Circuit Board (PCB) is the heart of every electronic device, from mobile phones to medical equipment and industrial machinery. At <strong>MEGABYTES CIRCUIT SYSTEMS</strong>, we specialize in providing cutting-edge PCB design services and PCB development solutions tailored to meet the growing demands of industries worldwide. Whether you are a small startup or a large enterprise, our team in Ahmedabad, India, is committed to delivering high-quality and cost-effective <strong>PCB design & manufacturing services</strong> that empower businesses to succeed in a highly competitive market.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    To streamline your design process, we also offer an easy-to-use <a href="/pcb-calculator" className="text-primary font-semibold hover:underline">PCB Calculator</a> that helps you quickly estimate the necessary components and specifications for your project. Additionally, our <strong>PCB Calculator Online</strong> tool allows engineers and developers to simplify and optimize their design workflows, ensuring precision and efficiency in every step of the process.
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
                                            Why Choose MEGABYTES CIRCUIT SYSTEMS for <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">PCB Design Services in Ahmedabad, India?</span>
                                        </h2>
                                        <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
                                            In today's fast-paced digital world, the design of a PCB is no longer a mere technical process but a strategic factor that determines the success of any electronic product. Our <strong>PCB design services in Ahmedabad</strong> focus on creating robust, efficient, and reliable PCBs that ensure optimal performance and longevity of your devices. Here are some reasons why our PCB services stand out:
                                        </p>
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

                            {/* Service Offerings */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                        Our Comprehensive PCB <span className="text-primary">Design & Development Services</span>
                                    </h2>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        At MEGABYTES CIRCUIT SYSTEMS, we offer a wide range of <strong>PCB design & development services</strong> that cater to the unique needs of various industries. Here's a breakdown of the services we offer:
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {developmentServices.map((item, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300 space-y-2">
                                            <h3 className="font-display font-bold text-secondary text-base">{item.title}</h3>
                                            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Development Process */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                        Our PCB Design & <span className="text-primary">Development Process</span>
                                    </h2>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Our seamless process is designed to ensure that each project is completed on time and meets the highest standards. Here's a breakdown of our PCB design and manufacturing workflow:
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {processSteps.map((step, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300">
                                            <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                Step {step.step}
                                            </span>
                                            <h3 className="font-display font-bold text-secondary text-sm mb-2 mt-4">{step.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us (Section 2 - Reasons) */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Why Choose MEGABYTES CIRCUIT SYSTEMS for PCB Design & <span className="text-primary">Development Services?</span>
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Here are some compelling reasons why <strong>MEGABYTES CIRCUIT SYSTEMS</strong> should be your go-to partner for <strong>PCB developing services:</strong>
                                </p>
                                <div className="space-y-4">
                                    {whyChooseReasons.map((reason, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                            <h3 className="font-display font-bold text-secondary text-sm mb-1">{reason.title}</h3>
                                            <p className="text-xs text-slate-600 leading-relaxed">{reason.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Industries Serviced */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Industries <span className="text-primary">We Serve</span>
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    At <strong>MEGABYTES CIRCUIT SYSTEMS</strong>, we serve a broad spectrum of industries, offering tailored <strong>PCB design & development</strong> services for their specific needs:
                                </p>
                                <ul className="space-y-4">
                                    {industries.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700 font-medium">
                                                <strong>{item.title}:</strong> {item.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Get in Touch CTA */}
                            <div className="bg-gradient-to-r from-primary/10 via-slate-50 to-primary/5 rounded-3xl p-8 border border-primary/20 shadow-md space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Get in Touch for PCB Design & Development <span className="text-primary">Services in Ahmedabad</span>
                                </h2>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    If you're looking for top-quality <strong>PCB developing services</strong> in Ahmedabad, India, look no further than <a href="/" className="text-primary font-semibold hover:underline">MEGABYTES CIRCUIT SYSTEMS</a>. Our team is ready to assist you with your PCB design and manufacturing needs, delivering solutions that meet the highest standards of quality, performance, and cost-efficiency. <a href="/contact" className="text-primary font-semibold hover:underline">Contact us today</a> to discuss your project requirements and discover how our expertise can bring your electronic products to life.
                                </p>
                            </div>

                            {/* Other Cities Serviced */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Other Cities We Serve <span className="text-primary">in India</span>
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {otherCities.map((city, index) => (
                                        <a key={index} href={city.href} className="text-xs text-slate-600 bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl text-center font-medium hover:border-primary/20 hover:text-primary transition-colors block">
                                            {city.label}
                                        </a>
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
