"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { Check, ChevronDown } from "lucide-react";

export default function SingleLayerPCBPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Single Layer PCB" }
    ];

    const specs = [
        { name: "Number of Layers", value: "1" },
        { name: "Board Type", value: "Single-Sided Circuit Board" },
        { name: "Material", value: "FR-4 (Flame Retardant Grade 4)" },
        { name: "Board Thickness", value: "1.6 mm" },
        { name: "Minimum Hole Size", value: "0.4 mm" },
        { name: "Trace Width/Spacing", value: "0.25 mm" },
        { name: "Solder Mask Color", value: "Green" },
        { name: "Applications", value: "Consumer Electronics, LED Lighting, Automotive, Prototyping, Industrial Equipment" }
    ];

    const whyChooseUs = [
        "High-Grade FR-4 Material: Our PCBs use flame-retardant FR-4, providing excellent heat resistance and durability for long-term reliability.",
        "Precision Design: With a minimum hole size of 0.4 mm and trace width/spacing of 0.25 mm, our boards ensure accurate component placement and consistent performance.",
        "Cost-Effective Solutions: Single-sided designs reduce production costs, making our PCBs ideal for budget-conscious projects without compromising quality.",
        "Green Solder Mask: Protects copper tracks from oxidation and improves visibility during assembly, ensuring dependable operation.",
        "Fast Delivery: Our efficient manufacturing process enables quick turnaround, perfect for prototypes and bulk orders.",
        "Indian Expertise: Proudly made in Gujarat, our PCBs reflect local craftsmanship while adhering to global standards.",
        "Custom Options: We offer tailored solutions for specific sizes, configurations, or application requirements."
    ];

    const applications = [
        {
            title: "Consumer Electronics",
            desc: "From calculators and remote controls to toys and radios, our boards provide efficient circuits for everyday devices."
        },
        {
            title: "LED Lighting",
            desc: "Ideal for residential lighting, automotive headlights, and signage, delivering compact and cost-effective solutions."
        },
        {
            title: "Automotive Systems",
            desc: "Used in sensors, control modules, and lighting, offering durability in demanding environments."
        },
        {
            title: "Prototyping and Education",
            desc: "Perfect for students, engineers, and DIY enthusiasts building functional prototypes or learning circuit design."
        },
        {
            title: "Industrial Equipment",
            desc: "Supports control units, timers, and monitoring systems, ensuring reliable performance at a low cost."
        }
    ];

    const manufacturingProcess = [
        { title: "Material Selection", desc: "We use premium FR-4 for a durable, heat-resistant base." },
        { title: "Copper Cladding", desc: "A single copper layer is applied to one side of the substrate." },
        { title: "Etching", desc: "Excess copper is precisely removed to form the circuit pattern." },
        { title: "Drilling", desc: "Holes as small as 0.4 mm are drilled for accurate component placement." },
        { title: "Solder Mask Application", desc: "A green solder mask protects circuits and enhances visibility." },
        { title: "Quality Testing", desc: "Each board undergoes thorough checks for functionality and reliability." }
    ];

    const faqs = [
        {
            q: "1. What is a single layer PCB?",
            a: "A single layer PCB, or single-sided circuit board, has conductive tracks on one side of a non-conductive substrate, perfect for simple, cost-effective circuits."
        },
        {
            q: "2. How does a single layer PCB differ from a double-layer PCB?",
            a: (
                <>
                    Single layer PCBs have tracks on one side, while{" "}
                    <Link href="/products/double-layer-pcb-ahmedabad" className="text-primary font-semibold hover:underline">
                        double-layer PCBs
                    </Link>{" "}
                    have tracks on both sides, supporting more complex circuits. Single-sided boards are simpler and more affordable.
                </>
            )
        },
        {
            q: "3. Can single layer PCBs handle high-power applications?",
            a: "Yes, with proper design, our FR-4 boards offer excellent heat resistance for various applications, including high-power uses."
        },
        {
            q: "4. Can I customize my single layer PCB?",
            a: "Yes, we offer customizable options for size, configuration, and specifications to meet your project requirements."
        },
        {
            q: "5. Do you ship single layer PCBs outside India?",
            a: "We focus on India-wide delivery, with priority service in Ahmedabad and Gujarat. Contact us to discuss international shipping options."
        },
        {
            q: "6. What materials are used in your single layer PCBs?",
            a: "We use high-grade FR-4, a flame-retardant substrate, ensuring durability and safety for diverse applications."
        }
    ];

    const tags = [
        "Single Layer PCB Manufacturer in Ahmedabad", "Single Sided PCB Manufacturer in Ahmedabad",
        "Single Layer PCB Fabrication in Ahmedabad", "Single Sided PCB Fabricator in Ahmedabad",
        "Single Layer PCB Maker in Ahmedabad", "Single Sided PCB Supplier in Ahmedabad",
        "One Layer PCB Manufacturer in Ahmedabad", "Low Cost Single Layer PCB in Ahmedabad",
        "Affordable Single Sided PCB in Ahmedabad", "Prototype Single Layer PCB Manufacturer in Ahmedabad",
        "Single Layer Printed Circuit Board in Ahmedabad", "Single Layer PCB Manufacturer Near Me in Ahmedabad",
        "Single Sided PCB Production in Ahmedabad", "Quick Turn Single Layer PCB in Ahmedabad",
        "Express Single Layer PCB Fabrication in Ahmedabad", "Urgent Single Layer PCB Manufacturer in Ahmedabad",
        "Single Sided Circuit Board Manufacturer in Ahmedabad", "Best Single Layer PCB Manufacturer in Ahmedabad",
        "Top Single Layer PCB Fabricator in Ahmedabad", "High Quality Single Layer PCB in Ahmedabad",
        "Single Sided PCB with FR4 in Ahmedabad", "Paper Phenolic PCB Manufacturer in Ahmedabad",
        "CEM-1 Single Layer PCB in Ahmedabad", "FR1 Single Layer PCB in Ahmedabad",
        "Single Layer LED PCB in Ahmedabad", "Rigid Single Layer PCB in Ahmedabad",
        "PCB Prototype Single Sided in Ahmedabad", "Single Layer PCB Assembly in Ahmedabad",
        "Custom Single Layer PCB Manufacturer in Ahmedabad", "Single Layer PCB Exporter in Ahmedabad",
        "PCB Design for Single Layer Board in Ahmedabad", "Simple PCB Manufacturer in Ahmedabad",
        "Single Sided Copper PCB in Ahmedabad", "PCB Board Single Layer in Ahmedabad",
        "Bare Single Layer PCB in Ahmedabad", "Single Layer PCB Board Printing in Ahmedabad"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Single Layer PCB Manufacturer in Ahmedabad by Megabyte Circuit Systems"
                subtitle="Megabyte Circuit Systems is your trusted partner for single layer PCB manufacturing, delivering high-quality, cost-effective single-sided circuit boards from our state-of-the-art facility in Ahmedabad, Gujarat."
                badge="Product Range"
                breadcrumbs={breadcrumbs}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-12 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">

                        {/* Section 1: Overview & Intro */}
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Single Layer PCB Manufacturer in Ahmedabad by Megabyte Circuit Systems
                            </h1>
                            <p className="text-slate-600 leading-relaxed">
                                Megabyte Circuit Systems is your trusted partner for <b>single layer PCB manufacturing</b>, delivering high-quality, cost-effective single-sided circuit boards from our state-of-the-art facility in Ahmedabad, Gujarat. Serving hobbyists, engineers, and manufacturers across India, we specialize in crafting reliable PCBs that power electronics, prototypes, and industrial applications. Our commitment to precision, affordability, and local expertise makes us a leading choice for businesses and innovators seeking dependable circuit board solutions.
                            </p>
                        </div>

                        {/* Section 2: Understanding Single Layer PCBs */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Understanding Single Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                A single layer PCB, or single-sided circuit board, is a foundational component in electronics, featuring conductive copper tracks on one side of a non-conductive substrate, typically FR-4. These boards are ideal for simple circuits, offering an affordable and reliable solution for applications like LED lighting, consumer electronics, and prototyping. At Megabyte Circuit Systems, we design our single layer PCBs to deliver exceptional performance, ensuring durability and precision for your projects.
                            </p>
                        </div>

                        {/* Section 3: Why Partner with MCS */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Why Partner with Megabyte Circuit Systems for Single Layer PCBs?
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                As a premier <b>single layer PCB manufacturer in Ahmedabad</b>, we combine advanced technology with Indian craftsmanship to deliver boards that meet your needs. Here’s why clients choose us:
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {whyChooseUs.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 4: Technical Specs */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Technical Specifications of Our Single Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our single layer PCBs are engineered for versatility and reliability. Below are the key specifications:
                            </p>
                            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Parameter</th>
                                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Specification</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm">
                                        {specs.map((spec, i) => (
                                            <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                                                <td className="p-4 font-bold text-slate-700">{spec.name}</td>
                                                <td className="p-4 text-slate-600 font-medium">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Section 5: Applications */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Applications of Single Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our single layer PCBs power a wide range of industries, offering affordability and performance:
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {applications.map((app, idx) => (
                                    <div key={idx} className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 space-y-1">
                                        <h3 className="font-bold text-slate-800 text-base">{app.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{app.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 6: Single Layer vs. Multi-Layer PCBs */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Single Layer vs. Multi-Layer PCBs: Key Differences
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Choosing the right PCB is essential for your project. A single layer PCB has one conductive copper layer on a non-conductive substrate, making it simpler and more affordable than{" "}
                                <Link href="/products/multi-layer-pcb-ahmedabad" className="text-primary font-semibold hover:underline">
                                    <b>multi-layer PCBs</b>
                                </Link>, which feature multiple layers for complex, high-density circuits like those in smartphones or computers. Benefits of single layer PCBs include:
                            </p>
                            <ul className="space-y-2 text-slate-600 list-disc pl-5">
                                <li><strong>Lower Cost:</strong> Fewer materials and simpler manufacturing reduce expenses.</li>
                                <li><strong>Simplified Design:</strong> Ideal for basic circuits with minimal components.</li>
                                <li><strong>Faster Production:</strong> Single-sided designs streamline fabrication, enabling quick delivery.</li>
                                <li><strong>Easy Troubleshooting:</strong> One-sided layouts simplify diagnostics and repairs.</li>
                            </ul>
                        </div>

                        {/* Section 7: Our Manufacturing Process */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Our Manufacturing Process for Single Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                At Megabyte Circuit Systems, quality is at the heart of our <b>single layer PCB manufacturing</b> process. We follow a rigorous approach to ensure every board meets high standards:
                            </p>
                            <ol className="space-y-3">
                                {manufacturingProcess.map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shrink-0 mt-0.5">
                                            {idx + 1}
                                        </span>
                                        <div className="text-sm text-slate-700 leading-relaxed">
                                            <strong>{step.title}:</strong> {step.desc}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Section 8: Why Choose Megabyte for Single Layer PCB Manufacturing? */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Why Choose Megabyte for a Single Layer PCB Manufacturing?
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Based in Ahmedabad, Gujarat, Megabyte Circuit Systems is a trusted <b>single layer PCB manufacturer</b> offering localized expertise and nationwide reach. Our advantages include:
                            </p>
                            <ul className="space-y-2 text-slate-600 list-disc pl-5">
                                <li><strong>Local Support:</strong> Fast, personalized service for clients in Ahmedabad and Gujarat.</li>
                                <li><strong>India-Wide Delivery:</strong> Reliable shipping to customers across India.</li>
                                <li><strong>Competitive Pricing:</strong> Affordable solutions tailored to the Indian market.</li>
                                <li><strong>Indian Craftsmanship:</strong> High-quality PCBs reflecting Gujarat’s industrial excellence.</li>
                            </ul>
                        </div>

                        {/* Section 9: Commitment to Sustainable PCB Manufacturing */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Commitment to Sustainable PCB Manufacturing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Sustainability is a core value at Megabyte Circuit Systems. We prioritize eco-friendly practices, using sustainable materials and minimizing waste during production. Our FR-4 boards are designed for durability, reducing the need for frequent replacements, while our manufacturing processes align with global environmental standards, ensuring responsible production without sacrificing quality.
                            </p>
                        </div>

                        {/* Section 10: How to Start Your Single Layer PCB Project */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                How to Start Your Single Layer PCB Project
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Ready to bring your project to life with high-quality single layer PCBs? Partner with Megabyte Circuit Systems, a leading single layer PCB manufacturer in Ahmedabad, and follow these steps:
                            </p>
                            <ol className="space-y-2 text-slate-600 list-decimal pl-5">
                                <li><strong>Get a Quote:</strong> Use our online PCB Price Calculator or contact our team directly.</li>
                                <li><strong>Customize Your Order:</strong> Specify size, quantity, or unique requirements for tailored solutions.</li>
                                <li><strong>Fast Delivery:</strong> Enjoy prompt shipping across Ahmedabad, Gujarat, and India.</li>
                            </ol>
                        </div>

                        {/* Section 11: Frequently Asked Questions */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Frequently Asked Questions About Single Layer PCBs
                            </h2>
                            <div className="space-y-3">
                                {faqs.map((faq, i) => {
                                    const isOpen = activeFaq === i;
                                    return (
                                        <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => setActiveFaq(isOpen ? null : i)}
                                                className="w-full flex items-center justify-between p-4 font-display font-bold text-slate-800 hover:text-primary transition-colors text-left"
                                            >
                                                <span>{faq.q}</span>
                                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-sm text-slate-600 leading-relaxed font-medium">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Section 12: Contact Section */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Contact Megabyte Circuit Systems for Single Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Power your electronics with high-quality single layer PCBs from{" "}
                                <a href="https://g.co/kgs/DyuSWhp" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                                    <b>Megabyte Circuit Systems</b>
                                </a>, a trusted{" "}
                                <Link href="/" className="text-primary font-semibold hover:underline">
                                    <b>single layer PCB manufacturer in Ahmedabad</b>
                                </Link>. Whether you’re prototyping a new idea or scaling up production, we deliver reliable, affordable, and precision-engineered circuit boards. Contact us today to request a quote or learn more about our services. Call us or visit our PCB Price Calculator to kickstart your project!
                            </p>
                        </div>

                        {/* Section 13: Search Tags */}
                        {/* <div className="space-y-3 pt-4 border-t border-slate-100">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                                Related Keywords
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div> */}

                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4">
                        <ProductSidebar currentSlug="single-layer-pcb" />
                    </div>

                </div>
            </div>
        </div>
    );
}
