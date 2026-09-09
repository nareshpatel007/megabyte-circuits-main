"use client";

import React, { useState } from "react";
import Link from "next/link";
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
        { label: "DFM Support" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Comprehensive Design Review",
            desc: "Our DFM process begins with a detailed review of your PCB design files, including schematics, layouts, and bill of materials (BOM). Using advanced design software, we analyze your design for potential manufacturing challenges, such as incorrect trace widths, inadequate spacing, or misaligned components. Our thorough analysis ensures that your design is optimized for efficient production and long-term reliability."
        },
        {
            step: "02",
            title: "Component Selection Guidance",
            desc: "Selecting the right components is critical to the success of your PCB. Our DFM experts provide recommendations on choosing components that are cost-effective, readily available, and compatible with your design requirements. We also identify alternatives for obsolete or hard-to-source components, helping you avoid supply chain issues and minimize production costs."
        },
        {
            step: "03",
            title: "PCB Layout Optimization",
            desc: "An optimized PCB layout is essential for efficient manufacturing and reliable performance. Our DFM Support services include recommendations for improving trace routing, via placement, and component positioning to enhance signal integrity, thermal management, and manufacturability. We ensure that your layout adheres to industry standards, such as IPC guidelines, while meeting the specific needs of your application."
        },
        {
            step: "04",
            title: "Design Rule Checks (DRC)",
            desc: "We conduct rigorous Design Rule Checks (DRC) to verify that your PCB design complies with manufacturing constraints and industry standards. This includes checking minimum trace widths, clearances, drill sizes, and other critical parameters. By addressing potential issues early, we reduce the risk of costly rework and ensure a smooth production process."
        },
        {
            step: "05",
            title: "Prototyping and Validation",
            desc: "Prototyping is a vital step in validating your PCB design. Our DFM Support services include rapid prototyping to test and refine your design before full-scale production. We provide detailed feedback on prototype performance, identifying areas for improvement to ensure that your final product is optimized for manufacturability and reliability."
        },
        {
            step: "06",
            title: "Cost Optimization Strategies",
            desc: "Cost efficiency is a core focus of our DFM services. We analyze your design to identify opportunities for reducing material costs, simplifying assembly processes, and improving yield rates. By optimizing your PCB for manufacturability, we help you achieve significant cost savings without compromising quality or performance."
        }
    ];

    const benefits = [
        {
            title: "Accelerated Time-to-Market",
            desc: "By resolving manufacturing issues during the design phase, we help you streamline development and bring your products to market faster."
        },
        {
            title: "Cost Efficiency",
            desc: "Our DFM recommendations reduce material waste, minimize rework, and optimize production processes, saving you time and money."
        },
        {
            title: "Enhanced Reliability",
            desc: "Optimized designs lead to higher-quality PCBs that perform reliably, reducing the risk of failures or costly recalls."
        },
        {
            title: "Tailored Solutions",
            desc: "We customize our DFM services to meet the unique needs of your project, ensuring compatibility with your industry and application."
        },
        {
            title: "Seamless Collaboration",
            desc: "Our team works closely with your designers to ensure that DFM recommendations align with your project goals and manufacturing capabilities."
        },
        {
            title: "Comprehensive Support",
            desc: "From initial design review to final production, we provide end-to-end DFM support to guide you through every stage of the ",
            linkText: "PCB development process.",
            linkHref: "/pcb-developing-services-ahmedabad"
        }
    ];

    const faqs = [
        {
            question: "What does DFM stand for?",
            answer: "DFM stands for Design for Manufacturability. It is the practice of designing components or circuit layouts to make them easy and cost-effective to manufacture."
        },
        {
            question: "When should a DFM check be performed?",
            answer: "Ideally, DFM checks should be conducted continuously during layout design, but a final check is mandatory right before exporting Gerber files for fabrication."
        },
        {
            question: "Does Megabyte Circuit charge for DFM reviews?",
            answer: "No, we provide a complimentary Design for Manufacturability (DFM) verification check with every prototyping or fabrication order we receive."
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
                title="Design for Manufacturability (DFM) Support at Megabyte Circuit Systems"
                subtitle="Expert guidance to optimize your PCB design for manufacturability, cost-efficiency, and performance."
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
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Megabyte Circuit Systems, established in 2021 in Ahmedabad, Gujarat, is a leading manufacturer of high-quality printed circuit boards (PCBs) serving industries such as telecommunications, automotive, consumer electronics, and medical devices. Our Design for Manufacturability (DFM) Support services are crafted to optimize your PCB designs, ensuring they are cost-effective, reliable, and seamlessly integrated into the manufacturing process. By leveraging our expertise, advanced technology, and customer-centric approach, we help you streamline production, reduce costs, and deliver products that meet the highest standards of performance and quality.
                                </p>
                            </div>

                            {/* Understanding DFM */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary leading-snug">
                                    Understanding <span className="text-primary">Design for Manufacturability (DFM)</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Design for Manufacturability (DFM) is a strategic approach to designing products that are easy to manufacture, cost-efficient, and reliable. In PCB production, DFM focuses on optimizing the design to align with manufacturing capabilities, minimizing errors, and enhancing overall efficiency. At Megabyte Circuit Systems, our DFM Support services ensure that your PCB designs are not only functional but also optimized for smooth production, whether you’re creating single-sided, double-sided, or multi-layer boards. By addressing potential manufacturing challenges early in the design phase, we help you avoid costly revisions and accelerate your time-to-market.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Our DFM services are tailored to meet the specific needs of your project, from small-scale prototypes to high-volume production runs. With our Ahmedabad facility equipped with cutting-edge design tools and a team of skilled engineers, we provide comprehensive DFM support that empowers you to achieve superior results in the competitive electronics industry.
                                </p>
                            </div>

                            {/* Importance of DFM Support */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary leading-snug">
                                    The Importance of <span className="text-primary">DFM Support</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    In today’s fast-paced electronics market, efficient manufacturing is critical to staying competitive. Poorly optimized PCB designs can lead to production delays, increased costs, and reliability issues that impact your product’s success. Our DFM Support services address these challenges by identifying potential issues during the design phase and providing actionable solutions to resolve them. This proactive approach ensures that your PCBs are manufactured efficiently, meet industry standards, and perform reliably in their intended applications.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    By partnering with Megabyte Circuit Systems, you benefit from our deep understanding of{" "}
                                    <Link href="/pcb-manufacturing-ahmedabad" className="text-primary hover:underline font-semibold">
                                        PCB manufacturing
                                    </Link>{" "}
                                    and our commitment to quality. Our DFM services help you reduce material waste, improve yield rates, and create designs that are optimized for both performance and cost-efficiency. Whether you’re developing a new telecommunications system, an automotive control unit, or a medical device, our DFM Support services provide the foundation for a successful product launch.
                                </p>
                            </div>

                            {/* Our DFM Support Services */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                        Our DFM <span className="text-primary">Support Services</span>
                                    </h2>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        At Megabyte Circuit Systems, we offer a comprehensive suite of DFM Support services to optimize your PCB designs for manufacturability. Our experienced engineers work closely with your design team to ensure that your PCBs are production-ready, cost-effective, and built to perform. Below are the key components of our DFM Support services:
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {processSteps.map((step, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                                            <div>
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                    {step.step}
                                                </span>
                                                <h3 className="font-display font-bold text-secondary text-base mb-2 mt-4">{step.title}</h3>
                                                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits of Our DFM Support Services */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                        Benefits of Our <span className="text-primary">DFM Support Services</span>
                                    </h2>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        Choosing Megabyte Circuit Systems for DFM Support offers numerous advantages that enhance the success of your PCB projects:
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {benefits.map((feat, idx) => (
                                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-display font-bold text-secondary text-base mb-2">{feat.title}</h3>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                {feat.desc}
                                                {feat.linkText && feat.linkHref && (
                                                    <Link href={feat.linkHref} className="text-primary hover:underline font-semibold">
                                                        {feat.linkText}
                                                    </Link>
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Megabyte Circuit Systems? */}
                            <div className="bg-gradient-to-br from-secondary to-slate-950 text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden space-y-4">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-4">
                                    <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide leading-tight text-white/95">
                                        Why Choose Megabyte <span className="text-primary">Circuit Systems?</span>
                                    </h2>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        Located in Ahmedabad, Gujarat, Megabyte Circuit Systems is a trusted partner for PCB manufacturing and design optimization. Since our inception in 2021, we have been committed to delivering high-quality single-sided, double-sided, and multi-layer PCBs that meet the needs of diverse industries. Our DFM Support services are backed by our state-of-the-art facility, advanced design tools, and a team of experienced engineers who are passionate about driving your success.
                                    </p>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        We understand the challenges of developing PCBs for industries like telecommunications, automotive, consumer electronics, and medical devices. Our DFM services are designed to address these challenges, providing you with the expertise and tools needed to create reliable, cost-effective, and production-ready PCBs. By choosing Megabyte Circuit Systems, you gain a partner dedicated to delivering innovative solutions and exceptional support.
                                    </p>
                                </div>
                            </div>

                            {/* Partner with Us for DFM Success */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary leading-snug">
                                    Partner with Us for <span className="text-primary">DFM Success</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    At Megabyte Circuit Systems, we are committed to helping you create PCBs that are optimized for manufacturing, performance, and cost-efficiency. Our Design for Manufacturability Support services empower you to overcome design challenges, reduce production costs, and deliver high-quality products to market faster. Whether you’re developing a prototype or scaling up production, we have the expertise and technology to support your success.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Contact Megabyte Circuit Systems today to learn more about our DFM Support services and discover how we can help you optimize your PCB designs for efficient manufacturing and reliable performance. Let us be your trusted partner in driving innovation and success in the dynamic world of electronics.
                                </p>
                            </div>

                            {/* FAQs */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Frequently Asked Questions <span className="text-primary">(FAQs)</span>
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
                                            DFM Support in {city}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <ServiceSidebar currentSlug="design-for-manufacturability-dfm-support" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
