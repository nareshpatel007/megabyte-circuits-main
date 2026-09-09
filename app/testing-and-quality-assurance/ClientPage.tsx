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
        { label: "Testing & Quality Assurance" }
    ];

    const chooseUsItems = [
        {
            icon: ShieldCheck,
            title: "Industry Expertise",
            desc: "With years of experience in PCB manufacturing, our team understands the unique challenges of industries like telecommunications, automotive, consumer electronics, and medical devices."
        },
        {
            icon: Cpu,
            title: "Advanced Technology",
            desc: "Our Ahmedabad facility is equipped with state-of-the-art testing equipment, enabling us to deliver precise and reliable results."
        },
        {
            icon: Activity,
            title: "Customized Solutions",
            desc: "We tailor our testing and quality assurance services to meet the specific needs of your project, ensuring optimal performance for your application."
        },
        {
            icon: Shield,
            title: "Customer-Centric Approach",
            desc: "We prioritize customer satisfaction, offering flexible solutions and exceptional support to help you succeed in a competitive market."
        },
        {
            icon: FileCheck,
            title: "End-to-End Services",
            desc: "From prototyping to mass production, we provide comprehensive testing and quality assurance services to streamline your development process."
        }
    ];

    const testingServices = [
        {
            title: "1. Electrical Testing",
            desc: "Electrical performance is critical to the functionality of any PCB. We conduct thorough electrical tests to verify connectivity, signal integrity, and power distribution. Using automated test equipment (ATE) and flying probe testers, we check for open circuits, short circuits, and other electrical faults. Our electrical testing protocols ensure that every PCB operates within the specified parameters, delivering consistent performance in real-world applications."
        },
        {
            title: "2. Functional Testing",
            desc: "To ensure that your PCBs perform as intended in their final application, we offer functional testing services. This involves simulating real-world operating conditions to evaluate the board’s performance under various scenarios. Whether your PCB is destined for a telecommunications device, an automotive system, or a medical instrument, our functional tests verify that it meets the required specifications and performs reliably under stress."
        },
        {
            title: "3. Thermal Testing",
            desc: "Thermal management is a critical factor in PCB performance, especially for applications in high-temperature or high-power environments. Our thermal testing services assess the board’s ability to dissipate heat and maintain performance under elevated temperatures. By using advanced thermal imaging and simulation tools, we identify potential hot spots and ensure that your PCBs are designed for optimal thermal efficiency."
        },
        {
            title: "4. Mechanical Testing",
            desc: "PCBs must withstand physical stresses such as vibration, shock, and mechanical wear. Our mechanical testing services evaluate the structural integrity of your circuit boards, ensuring they can endure the rigors of their intended environment. From drop tests to vibration analysis, we verify that your PCBs are built to last, even in challenging conditions."
        },
        {
            title: "5. Environmental Testing",
            desc: "For PCBs used in harsh environments, such as automotive or industrial applications, we conduct environmental testing to assess performance under extreme conditions. This includes exposure to humidity, temperature fluctuations, and corrosive elements. Our environmental tests ensure that your PCBs remain reliable and functional, no matter the operating conditions."
        },
        {
            title: "6. Automated Optical Inspection (AOI)",
            desc: "To ensure precision in manufacturing, we use Automated Optical Inspection systems to detect defects in solder joints, component placement, and board assembly. AOI allows us to identify issues that may not be visible to the naked eye, ensuring that every PCB meets our stringent quality standards before it leaves our facility.",
            linkHref: "/pcb-assembly",
            linkText: "board assembly"
        }
    ];

    const qaProcesses = [
        {
            step: "01",
            title: "Incoming Material Inspection",
            desc: "We begin by inspecting all raw materials used in PCB manufacturing, including substrates, copper, and components. By sourcing high-grade materials from trusted suppliers, we ensure that every PCB is built on a foundation of quality."
        },
        {
            step: "02",
            title: "In-Process Quality Control",
            desc: "During manufacturing, we conduct real-time quality checks at every stage of production. From etching to soldering, our technicians monitor the process to ensure that each step meets our exacting standards. This proactive approach minimizes defects and ensures consistency across all batches."
        },
        {
            step: "03",
            title: "Final Inspection and Testing",
            desc: "Before shipping, every PCB undergoes a final round of inspection and testing. This includes visual inspections, electrical tests, and functional evaluations to confirm that the board meets all specifications. Only after passing these rigorous checks is a PCB approved for delivery."
        },
        {
            step: "04",
            title: "Continuous Improvement",
            desc: "At Megabyte Circuit Systems, we are committed to continuous improvement. We regularly review our testing and quality assurance processes to incorporate the latest industry standards and technological advancements. This ensures that our clients benefit from the most reliable and up-to-date solutions available."
        }
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
                title="Testing and Quality Assurance Services at Megabyte Circuit Systems"
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

                            {/* H1 Heading */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h1 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-6 leading-snug">
                                    Testing and Quality Assurance Services at Megabyte <span className="text-primary">Circuit Systems</span>
                                </h1>
                                <p className="text-sm text-slate-800 leading-relaxed mb-6">
                                    At Megabyte Circuit Systems, we understand that the reliability and performance of printed circuit boards (PCBs) are critical to the success of your products. Our <strong className="font-semibold text-slate-900">Testing and Quality Assurance services</strong> are designed to ensure that every PCB we produce meets the highest standards of functionality, durability, and precision. Based in Ahmedabad, Gujarat, since 2021, we have built a reputation as a trusted manufacturer of single-sided, double-sided, and multi-layer PCBs for industries such as telecommunications, automotive, consumer electronics, and medical devices. Our commitment to quality drives us to implement rigorous testing protocols and advanced quality assurance processes, ensuring that our clients receive products that perform flawlessly in even the most demanding environments.
                                </p>

                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary mt-8 mb-4">
                                    Our Commitment <span className="text-primary">to Quality</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed mb-4">
                                    At Megabyte Circuit Systems, quality is at the heart of everything we do. We recognize that PCBs are the backbone of modern electronic devices, and any defect or inconsistency can lead to costly failures or compromised performance. Our Testing and Quality Assurance services are meticulously designed to eliminate risks and deliver PCBs that meet or exceed industry standards. By combining state-of-the-art technology, skilled engineering expertise, and comprehensive testing methodologies, we ensure that every circuit board we produce is reliable, efficient, and ready to meet the unique demands of your project.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Our Ahmedabad facility is equipped with cutting-edge testing equipment and staffed by a team of experienced technicians who are dedicated to upholding the highest quality standards. From prototyping to mass production, we integrate quality assurance at every stage of the manufacturing process. This proactive approach allows us to identify and address potential issues early, ensuring that your PCBs perform optimally and contribute to the success of your products.
                                </p>
                            </div>

                            {/* Testing Offerings */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                    Comprehensive <span className="text-primary">Testing Services</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed mb-4">
                                    Our Testing and Quality Assurance services cover every aspect of PCB performance, including electrical functionality, thermal management, and mechanical integrity. We employ a range of advanced testing methods to evaluate the quality and reliability of our circuit boards, ensuring they meet the specific requirements of your application. Below are the key testing services we offer:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {testingServices.map((item, index) => (
                                        <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <h3 className="font-display font-bold text-secondary text-sm mb-2">{item.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">
                                                {item.desc.includes("board assembly") && item.linkHref ? (
                                                    <>
                                                        To ensure precision in manufacturing, we use Automated Optical Inspection systems to detect defects in solder joints, component placement, and{" "}
                                                        <Link href={item.linkHref} className="text-primary font-medium hover:underline">
                                                            {item.linkText}
                                                        </Link>
                                                        . AOI allows us to identify issues that may not be visible to the naked eye, ensuring that every PCB meets our stringent quality standards before it leaves our facility.
                                                    </>
                                                ) : (
                                                    item.desc
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* QA Process Workflow */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                                <h2 className="text-2xl font-display font-bold text-secondary text-center md:text-left">
                                    Our Quality <span className="text-primary">Assurance Process</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed mb-4">
                                    In addition to our comprehensive testing services, we implement a robust quality assurance process to maintain consistency and reliability across all our products. Our quality assurance protocols are designed to catch potential issues before they become problems, ensuring that every PCB we deliver is of the highest quality. Key elements of our quality assurance process include:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {qaProcesses.map((step, idx) => (
                                        <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-primary/20 hover:bg-white transition-all duration-300">
                                            <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                Step {step.step}
                                            </span>
                                            <h3 className="font-display font-bold text-secondary text-sm mb-2 mt-4">{step.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-secondary to-slate-950 text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-8">
                                    <div className="text-center md:text-left">
                                        <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide leading-tight text-white/95">
                                            Why Choose Megabyte Circuit Systems for Testing and <span className="text-primary bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 inline-block md:inline mt-2 md:mt-0">Quality Assurance?</span>
                                        </h2>
                                        <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
                                            When you partner with Megabyte Circuit Systems, you gain access to a team of experts who are dedicated to delivering exceptional quality and performance. Here’s why our Testing and Quality Assurance services stand out:
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {chooseUsItems.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={index} className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group">
                                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-display font-bold text-sm text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                                        <p className="text-xs text-white/60 mt-1.5 leading-relaxed">
                                                            {item.title === "End-to-End Services" ? (
                                                                <>
                                                                    From prototyping to mass production, we provide comprehensive testing and quality assurance services to streamline{" "}
                                                                    <Link href="/pcb-developing-services" className="text-primary font-medium hover:underline">
                                                                        your development process
                                                                    </Link>
                                                                    .
                                                                </>
                                                            ) : (
                                                                item.desc
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Partner with Megabyte Circuit Systems */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <h2 className="text-xl md:text-2xl font-display font-bold text-secondary mb-4">
                                    Partner with Megabyte <span className="text-primary">Circuit Systems</span>
                                </h2>
                                <p className="text-sm text-slate-800 leading-relaxed mb-4">
                                    At Megabyte Circuit Systems, we are more than just a{" "}
                                    <Link href="/" className="text-primary font-medium hover:underline">
                                        PCB manufacturer
                                    </Link>
                                    {" "}we are a partner in your success. Our Testing and Quality Assurance services are designed to give you confidence in the reliability and performance of your circuit boards. Whether you’re developing a cutting-edge telecommunications system, an automotive control unit, or a life-saving medical device, we have the expertise and technology to deliver PCBs that meet your exact specifications.
                                </p>
                                <p className="text-sm text-slate-800 leading-relaxed mb-0">
                                    Located in Ahmedabad, Gujarat, our facility is ready to support your project with high-quality PCBs and unparalleled testing services. Let us help you bring your products to market with confidence, knowing that every circuit board has been rigorously tested and built to perform. Contact Megabyte Circuit Systems today to learn more about our Testing and Quality Assurance services and discover how we can drive your success in the world of electronics.
                                </p>
                            </div>

                            {/* FAQs */}
                            {/* <div className="space-y-6">
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
                            </div> */}

                            {/* Other Cities Serviced */}
                            {/* <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
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
                            </div> */}

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
