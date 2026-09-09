"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
            title: "Comprehensive Expertise",
            desc: "Our team excels in custom PCB design, high-speed PCB design, and multilayer PCB design, ensuring your board meets industry standards."
        },
        {
            title: "Advanced Tools",
            desc: "We use cutting-edge PCB design software to create precise schematics and layouts, optimizing for signal integrity and manufacturability."
        },
        {
            title: "Fast Turnaround",
            desc: "We prioritize quick delivery to keep your project on schedule, without compromising quality."
        },
        {
            title: "Local Support",
            desc: "Based in Ahmedabad, we offer personalized service to clients in Gujarat and nationwide, with seamless communication and reliable delivery."
        },
        {
            title: "Cost-Effective Solutions",
            desc: "Our competitive pricing makes high-quality PCB design services accessible to startups and established businesses alike."
        },
        {
            title: "End-to-End Services",
            desc: "From design to PCB prototyping, we provide a complete solution to streamline your development process."
        }
    ];

    const processSteps = [
        { step: "1", title: "Requirement Analysis", desc: "We begin by understanding your project goals, including functionality, size constraints, and performance requirements. This ensures the design aligns with your vision." },
        { step: "2", title: "Schematic Design", desc: "Our engineers create a detailed schematic, defining the electrical connections and component placement to ensure optimal circuit performance." },
        { step: "3", title: "PCB Layout Design", desc: "Using advanced tools, we develop a precise PCB layout, optimizing for signal integrity, thermal management, and manufacturability. This includes single-layer, double-layer, and multilayer PCB designs." },
        { step: "4", title: "Design Rule Check (DRC)", desc: "We perform rigorous checks to ensure the design meets manufacturing standards and is free of errors, such as spacing violations or connectivity issues." },
        { step: "5", title: "Prototyping and Validation", desc: "We offer PCB prototyping services to test the design in real-world conditions, ensuring it performs as expected before production." },
        { step: "6", title: "Documentation and Delivery", desc: "We provide comprehensive design files, including Gerber files and BOM, along with fast delivery of prototypes to Ahmedabad, Gujarat, and across India." }
    ];

    const typesOfServices = [
        { title: "Custom PCB Design", desc: "Tailored solutions for unique project requirements, ensuring optimal performance and functionality." },
        { title: "High-Speed PCB Design", desc: "Specialized designs for high-frequency applications, focusing on signal integrity and impedance control." },
        { title: "Multilayer PCB Design", desc: "Complex, high-density boards for advanced electronics, such as IoT devices and medical equipment." },
        { title: "Single and Double-Layer PCB Design", desc: "Cost-effective solutions for simpler circuits, ideal for consumer electronics and prototyping." },
        { title: "Flexible and Rigid-Flex PCB Design", desc: "Innovative designs for compact and dynamic applications, such as wearables and automotive systems." }
    ];

    const applications = [
        "Consumer Electronics: Smartphones, tablets, and smart home devices.",
        "Automotive: Engine control units, sensors, and infotainment systems.",
        "Medical Devices: Diagnostic equipment, wearable monitors, and imaging systems.",
        "IoT: Connected devices, smart sensors, and communication modules.",
        "Industrial Automation: Robotics, control panels, and monitoring systems."
    ];

    const benefits = [
        { title: "Improved Performance", desc: "Optimized layouts ensure signal integrity, thermal management, and reliable operation." },
        { title: "Cost Efficiency", desc: "Early design validation reduces costly revisions during manufacturing." },
        { title: "Faster Time-to-Market", desc: "Our efficient design process accelerates your product development cycle." },
        { title: "Scalability", desc: "Designs are optimized for both prototyping and full-scale production." },
        { title: "Expert Support", desc: "Our team provides guidance on design optimization, material selection, and manufacturing requirements." }
    ];

    const localServices = [
        { title: "Direct Communication", desc: "Work closely with our team for quick feedback and support." },
        { title: "Faster Delivery", desc: "Local proximity ensures prompt delivery of design files and prototypes." },
        { title: "Market Knowledge", desc: "We understand the needs of India’s tech and manufacturing sectors." },
        { title: "Cost Savings", desc: "Avoid international shipping costs and delays with our local services." }
    ];

    const faqs = [
        {
            question: "What are PCB design services?",
            answer: "PCB design services involve creating schematics and layouts for printed circuit boards, ensuring optimal component placement, electrical connectivity, and manufacturability."
        },
        {
            question: "How long does PCB design take?",
            answer: "Design timelines depend on complexity, but we typically complete designs within 5-10 business days. Contact us for a precise estimate."
        },
        {
            question: "Do you offer multilayer PCB design?",
            answer: "Yes, we specialize in multilayer PCB design for high-density, high-performance applications like IoT and medical devices."
        },
        {
            question: "Can you provide PCB prototyping with design services?",
            answer: "Absolutely. We offer integrated PCB prototyping to validate your design before production."
        },
        {
            question: "What file formats do you accept for PCB design?",
            answer: "We accept standard formats like Gerber, Eagle, and Altium. Our team can assist with file preparation."
        },
        {
            question: "Do you serve clients outside Ahmedabad?",
            answer: "Yes, we provide PCB design services across Gujarat, India, and internationally, with reliable delivery and support."
        }
    ];

    const internalLinksCol1 = [
        { title: "PCB Design Service in Delhi", href: "https://www.megabytecircuit.com/blog/pcb-design-services-delhi/" },
        { title: "PCB Design Services in Mumbai", href: "https://www.megabytecircuit.com/blog/pcb-design-services-mumbai/" },
        { title: "PCB Design Services in kolkata", href: "https://www.megabytecircuit.com/blog/pcb-design-services-kolkata/" },
        { title: "PCB Design Service in Kanpur", href: "https://www.megabytecircuit.com/blog/pcb-design-services-in-kanpur-tailored-pcb-design-solutions-for-kanpurs-diverse-industries/" },
        { title: "PCB Design Service Gandhinagar", href: "https://www.megabytecircuit.com/blog/pcb-design-service-gandhinagar/" }
    ];

    const internalLinksCol2 = [
        { title: "PCB Design Service in Banglore", href: "https://www.megabytecircuit.com/blog/pcb-design-service-bangalore/" },
        { title: "PCB Design Service in Chennai", href: "https://www.megabytecircuit.com/blog/pcb-design-service-chennai/" },
        { title: "PCB Design Service in Hyderabad", href: "https://www.megabytecircuit.com/blog/pcb-design-service-hyderabad/" },
        { title: "PCB Design Service in Noida", href: "https://www.megabytecircuit.com/blog/pcb-design-services-noida/" },
        { title: "PCB Design Service in Rajkot", href: "https://www.megabytecircuit.com/blog/pcb-design-service-rajkot/" }
    ];

    const internalLinksCol3 = [
        { title: "PCB Design Service in Pune", href: "https://www.megabytecircuit.com/blog/pcb-design-service-pune/" },
        { title: "PCB Design Service in Surat", href: "https://www.megabytecircuit.com/blog/pcb-design-service-surat/" },
        { title: "PCB Design Service in Jaipur", href: "https://www.megabytecircuit.com/blog/pcb-design-service-jaipur/" },
        { title: "PCB Design Service in Vadodara", href: "https://www.megabytecircuit.com/blog/pcb-design-service-vadodara/" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="PCB Design Services in Ahmedabad, India"
                subtitle="Professional PCB design and layout services in Ahmedabad, Gujarat, and across India"
                badge="Our Services"
                breadcrumbs={breadcrumbs}
            />

            {/* ─── Main Content & Sidebar ─────────────────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* H1 & Intro Section */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h1 className="text-2xl md:text-4xl font-display font-bold text-secondary leading-tight">
                                    PCB Design Services in <br />
                                    <span className="text-primary">Ahmedabad, India</span>
                                </h1>

                                <div className="my-6 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative h-64 md:h-80 w-full bg-slate-100">
                                    <Image
                                        src="/images/pcb-design.jpg"
                                        alt="PCB design in ahmedabad"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Megabytes Circuit Systems is a premier PCB design company in Ahmedabad, Gujarat, offering professional PCB design services to engineers, innovators, and businesses across India. Our expertise in printed circuit board design ensures your projects achieve optimal performance, reliability, and manufacturability. From custom PCB design to high-speed and multilayer PCB solutions, we deliver tailored services to meet your unique requirements.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Based in Ahmedabad, we combine local accessibility with global standards, providing end-to-end PCB layout services and prototyping support. Whether you’re developing consumer electronics, medical devices, or IoT systems, our team is committed to turning your ideas into reality with precision and efficiency.
                                </p>
                            </div>

                            {/* What is PCB Design */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    What is <span className="text-primary">PCB Design?</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    PCB design, or printed circuit board design, is the process of creating a schematic and layout for a circuit board that connects electronic components. It involves defining the board’s structure, placing components, and routing electrical connections to ensure functionality and performance. Effective PCB design is critical for industries like automotive, telecommunications, and medical technology, where reliability and efficiency are paramount.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    At Megabytes Circuit Systems, our PCB design services cover everything from initial concept to final layout, ensuring your board is optimized for manufacturing and performance. We specialize in custom PCB design, multilayer PCB design, and high-speed PCB design to support diverse applications.
                                </p>
                            </div>

                            {/* Why Choose Megabytes Circuit Systems */}
                            <div className="bg-gradient-to-br from-secondary to-slate-950 text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide leading-tight text-white/95">
                                        Why Choose Megabytes Circuit Systems for <span className="text-primary">PCB Design Services?</span>
                                    </h2>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        As a leading PCB design company in India, we offer unmatched expertise and customer-focused solutions. Here’s why clients in Ahmedabad, Gujarat, and beyond trust us:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 pt-4">
                                        {chooseUsItems.map((item, index) => (
                                            <div key={index} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group">
                                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-display font-bold text-base text-white group-hover:text-primary transition-colors">{item.title}:</h4>
                                                    <p className="text-xs text-white/60 mt-1 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-sm text-white/90 pt-4">
                                        Ready to start your PCB design project? Contact us for a free consultation and quote.
                                    </p>
                                </div>
                            </div>

                            {/* Our PCB Design Process */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our PCB Design <span className="text-primary">Process</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Creating a high-quality PCB requires a meticulous process. At Megabytes Circuit Systems, we follow a structured approach to deliver exceptional results:
                                </p>

                                <div className="space-y-4">
                                    {processSteps.map((step, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300">
                                            <h3 className="font-display font-bold text-secondary text-base mb-2">
                                                {step.step}. {step.title.includes("DRC") ? (
                                                    <>Design Rule <span className="text-primary">Check (DRC)</span></>
                                                ) : (
                                                    <>
                                                        {step.title.split(" ")[0]} <span className="text-primary">{step.title.split(" ").slice(1).join(" ")}</span>
                                                    </>
                                                )}
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                {step.desc}
                                                {step.step === "3" && (
                                                    <> This includes <Link href="/products/single-layer-pcb" className="text-primary font-bold hover:underline">single-layer</Link>, <Link href="/products/double-layer-pcb" className="text-primary font-bold hover:underline">double-layer</Link>, and multilayer PCB designs.</>
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-slate-700 pt-2">
                                    Learn more about our PCB prototyping services to see how we support your project from design to testing.
                                </p>
                            </div>

                            {/* Types of PCB Design Services We Offer */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Types of PCB Design <span className="text-primary">Services We Offer</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Our PCB design and layout services cater to a wide range of applications and industries. Key offerings include:
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {typesOfServices.map((type, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{type.title}:</h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">{type.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-slate-800 font-medium pt-2">
                                    Explore our <Link href="/products/multi-layer-pcb" className="text-primary font-bold hover:underline">Multilayer PCB Design Services</Link> for advanced, high-performance solutions.
                                </p>
                            </div>

                            {/* Applications of PCB Design */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Applications of <span className="text-primary">PCB Design</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Effective PCB design is essential for a wide range of industries. Our services support applications such as:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {applications.map((item, index) => {
                                        const parts = item.split(":");
                                        return (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                <span className="text-xs text-slate-700">
                                                    <strong className="text-slate-900">{parts[0]}:</strong>{parts[1]}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p className="text-sm text-slate-700 pt-2">
                                    Our PCB design services are tailored to meet the specific needs of these industries, ensuring reliability and performance.
                                </p>
                            </div>

                            {/* PCB Design Company in Ahmedabad, Gujarat, and India */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    PCB Design Company in Ahmedabad, <span className="text-primary">Gujarat, and India</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    As a leading PCB design company in Ahmedabad, Megabytes Circuit Systems serves clients across Gujarat and India. Our local presence in Ahmedabad allows us to offer personalized support, fast communication, and reliable delivery to businesses in Gujarat. At the same time, our nationwide reach ensures clients across India benefit from our expertise in printed circuit board design.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Whether you’re a startup in Ahmedabad developing an innovative product or an established company in India seeking a reliable PCB design partner, we provide the expertise and resources to succeed. Our ISO-certified processes and commitment to quality make us a trusted choice for PCB design services in India.
                                </p>
                            </div>

                            {/* Benefits of Professional PCB Design Services */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Benefits of Professional <span className="text-primary">PCB Design Services</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Partnering with a professional PCB design company offers significant advantages:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {benefits.map((feat, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{feat.title}:</h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Local PCB Design Services Matter */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Why Local PCB Design <span className="text-primary">Services Matter</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Choosing a <Link href="/" className="text-primary font-bold hover:underline">PCB design company in Ahmedabad</Link> offers unique benefits for clients in Gujarat and India:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {localServices.map((item, idx) => (
                                        <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h4 className="font-display font-bold text-secondary text-sm mb-2">{item.title}:</h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-800 leading-relaxed pt-2">
                                    Our Ahmedabad-based facility combines local expertise with global standards, making us the ideal partner for PCB design services in India.
                                </p>
                            </div>

                            {/* Frequently Asked Questions (FAQs) */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Frequently <span className="text-primary">Asked Questions (FAQs)</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Have questions about our PCB design services? Here are answers to common queries:
                                </p>
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

                            {/* Start Your PCB Design Project Today */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Start Your PCB Design <span className="text-primary">Project Today</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    <a href="https://g.co/kgs/uUamaSd" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Megabytes Circuit Systems</a> is your trusted partner for expert PCB design services in Ahmedabad, Gujarat, and India. With our focus on quality, speed, and customization, we help you bring your ideas to life with precision and efficiency.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    <Link href="/contact" className="text-primary font-bold hover:underline">Contact us</Link> now to discuss your project and receive a free quote. Let’s create the perfect PCB design for your next innovation.
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
                            <ServiceSidebar currentSlug="pcb-design" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
