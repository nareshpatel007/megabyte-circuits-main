"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import {
    Zap, Layers, Cpu, Check, ChevronDown, CheckCircle2, ChevronRight, Settings, ShieldCheck
} from "lucide-react";

export default function MultiLayerPCBPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" },
        { label: "Multi Layer PCB" }
    ];

    const specs = [
        { name: "Number of Layers", value: "3–12 (customizable)" },
        { name: "Board Type", value: "Multi Layer Circuit Board" },
        { name: "Material", value: "FR-4 (Flame Retardant Grade 4)" },
        { name: "Board Thickness", value: "0.8–2.4 mm (standard 1.6 mm)" },
        { name: "Minimum Hole Size", value: "0.2 mm" },
        { name: "Trace Width/Spacing", value: "0.15 mm" },
        { name: "Solder Mask Color", value: "Blue" },
        { name: "Applications", value: "Telecommunications, Aerospace, Medical Devices, Industrial Automation, Consumer Electronics" }
    ];

    const faqs = [
        {
            q: "1. What is a multi layer PCB?",
            a: "A multi layer PCB has three or more conductive layers separated by insulating substrates, connected via vias, ideal for complex, high-density circuits."
        },
        {
            q: "2. How does a multi layer PCB differ from single or double layer PCBs?",
            a: "Multi layer PCBs have three or more layers, supporting complex circuits, while single layer PCBs have one layer and double layer PCBs have two, suitable for simpler designs."
        },
        {
            q: "3. Are multi layer PCBs suitable for high-performance applications?",
            a: "Yes, our FR-4 multi layer PCBs offer excellent thermal stability and signal integrity for high-performance applications like telecommunications and aerospace."
        },
        {
            q: "4. Can I customize my multi layer PCB?",
            a: "Yes, we offer customizable options for layer count, board size, and specifications to meet your project requirements."
        },
        {
            q: "5. Do you ship multi layer PCBs outside India?",
            a: "We prioritize India-wide delivery, with fast service in Ahmedabad and Gujarat. Contact us to discuss international shipping options."
        },
        {
            q: "6. What materials are used in your multi layer PCBs?",
            a: "We use high-grade FR-4, a flame-retardant substrate, ensuring durability and safety for advanced applications."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Multi Layer PCB Manufacturer in Ahmedabad: Megabyte Circuit Systems"
                subtitle="Advanced multi layer PCB manufacturing delivering high-density, reliable circuit boards for cutting-edge electronics across India."
                badge="Product Range"
                breadcrumbs={breadcrumbs}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-12 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
                        
                        {/* Intro / Main Overview */}
                        <div className="space-y-4">
                            <p className="text-slate-600 leading-relaxed">
                                Megabyte Circuit Systems is a premier <strong className="text-slate-800">multi layer PCB manufacturer in Ahmedabad</strong>, Gujarat, delivering advanced, high-density circuit boards for cutting-edge electronics. Serving industries across India, from telecommunications to medical devices, our multi layer PCBs are engineered for performance, reliability, and precision. Based in Ahmedabad, we combine local expertise with state-of-the-art technology to provide customized, cost-effective solutions that empower innovators, engineers, and manufacturers to bring complex projects to life.
                            </p>
                        </div>

                        {/* What is a Multi Layer PCB */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                What is a Multi Layer PCB?
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                A multi layer PCB features multiple layers of conductive copper tracks separated by insulating substrates, typically FR-4, connected through plated-through holes (vias). Unlike single or double layer boards, multi layer PCBs (with 3 or more layers) support high-density, complex circuits, making them ideal for advanced applications like smartphones, aerospace systems, and industrial automation. At Megabyte Circuit Systems, our multi layer PCBs are crafted to meet the demands of sophisticated electronics, ensuring superior functionality and durability.
                            </p>
                        </div>

                        {/* Why Choose Megabyte */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Why Choose Megabyte Circuit Systems as Your Multi Layer PCB Manufacturer?
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                As a leading <strong className="text-slate-800">multi layer PCB manufacturer in Ahmedabad</strong>, we are committed to delivering high-quality circuit boards that meet the needs of complex projects. Here’s what sets us apart:
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {[
                                    { title: "Premium FR-4 Material", desc: "Our PCBs use flame-retardant FR-4, offering excellent thermal stability and durability for high-performance applications." },
                                    { title: "High-Precision Design", desc: "With a minimum hole size of 0.2 mm and trace width/spacing of 0.15 mm, our boards support intricate circuit layouts and reliable connectivity." },
                                    { title: "High-Density Interconnects", desc: "Multiple layers enable compact designs with enhanced signal integrity, ideal for advanced electronics." },
                                    { title: "Blue Solder Mask", desc: "Protects circuits from environmental stress and improves assembly visibility for precision manufacturing." },
                                    { title: "Fast Turnaround", desc: "Our advanced processes ensure quick production and delivery for prototypes and large-scale orders." },
                                    { title: "Indian Craftsmanship", desc: "Manufactured in Gujarat, our PCBs combine local expertise with global quality standards." },
                                    { title: "Tailored Solutions", desc: "We offer customizable layer counts, board sizes, and specifications to meet unique project requirements." }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-800 font-semibold">{feature.title}: </strong>
                                            <span className="text-sm text-slate-600 leading-relaxed">{feature.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Specifications */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Technical Specifications of Our Multi Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our multi layer PCBs are designed for complex, high-performance applications. Below are the key specifications:
                            </p>
                            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Specification</th>
                                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Detail</th>
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
                            <p className="text-slate-600 leading-relaxed">
                                These specifications ensure our multi layer PCBs deliver robust performance, precise connectivity, and compatibility with advanced manufacturing processes.
                            </p>
                        </div>

                        {/* Applications */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Applications of Multi Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our multi layer PCBs power a wide range of high-tech industries, offering the flexibility and density needed for complex circuitry:
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {[
                                    { title: "Telecommunications", desc: "Supports high-speed routers, switches, and 5G equipment with reliable signal transmission." },
                                    { title: "Aerospace and Defense", desc: "Used in avionics, radar systems, and navigation equipment, ensuring durability in extreme conditions." },
                                    { title: "Medical Devices", desc: "Powers diagnostic tools, imaging systems, and wearable devices with compact, high-density circuits." },
                                    { title: "Consumer Electronics", desc: "Enables smartphones, laptops, and smart appliances with efficient, multi-layered designs." },
                                    { title: "Industrial Automation", desc: "Drives control systems, robotics, and IoT devices, ensuring precision and reliability." }
                                ].map((app, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-800 font-semibold">{app.title}: </strong>
                                            <span className="text-sm text-slate-600 leading-relaxed">{app.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Our multi layer PCBs are tailored to meet the stringent requirements of these industries, delivering performance and innovation.
                            </p>
                        </div>

                        {/* Key Differences */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Multi Layer PCBs vs. Single/Double Layer PCBs: Key Differences
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Multi layer PCBs differ significantly from single and double layer boards. While single layer PCBs have one conductive layer and <a href="/products/double-layer-pcb-ahmedabad" className="text-primary hover:underline font-semibold">double layer PCBs</a> have two, multi layer PCBs feature three or more layers, enabling high-density circuits and complex interconnections. Key benefits of multi layer PCBs include:
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {[
                                    { title: "Higher Circuit Density", desc: "Supports more components and intricate routing in a compact footprint." },
                                    { title: "Enhanced Signal Integrity", desc: "Multiple layers reduce noise and improve performance for high-speed applications." },
                                    { title: "Space Efficiency", desc: "Enables smaller, lighter devices by stacking circuits vertically." },
                                    { title: "Versatile Applications", desc: "Ideal for advanced electronics requiring robust connectivity and performance." }
                                ].map((diff, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-800 font-semibold">{diff.title}: </strong>
                                            <span className="text-sm text-slate-600 leading-relaxed">{diff.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                For projects demanding complex circuitry, our multi layer PCBs offer unmatched reliability and efficiency.
                            </p>
                        </div>

                        {/* Manufacturing Process */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Our Multi Layer PCB Manufacturing Process in Ahmedabad
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                At Megabyte Circuit Systems, our <strong className="text-slate-800">multi layer PCB manufacturing</strong> process ensures precision and quality for even the most demanding applications:
                            </p>
                            <ol className="space-y-3 list-decimal list-inside text-slate-600 leading-relaxed font-medium">
                                <li className="pl-1"><strong className="text-slate-800">Material Selection:</strong> We use high-grade FR-4 for a stable, heat-resistant substrate.</li>
                                <li className="pl-1"><strong className="text-slate-800">Layer Stacking:</strong> Multiple copper layers are laminated with insulating substrates to form the multi layer structure.</li>
                                <li className="pl-1"><strong className="text-slate-800">Via Drilling:</strong> Micro-vias and plated-through holes are drilled to connect layers with precision.</li>
                                <li className="pl-1"><strong className="text-slate-800">Circuit Etching:</strong> Excess copper is removed to create intricate circuit patterns on each layer.</li>
                                <li className="pl-1"><strong className="text-slate-800">Solder Mask Application:</strong> A blue solder mask protects circuits and enhances assembly accuracy.</li>
                                <li className="pl-1"><strong className="text-slate-800">Quality Assurance:</strong> Rigorous testing, including electrical and thermal checks, ensures functionality and reliability.</li>
                            </ol>
                            <p className="text-slate-600 leading-relaxed">
                                This process guarantees our multi layer PCBs meet the highest standards for performance and durability.
                            </p>
                        </div>

                        {/* Why Ahmedabad Chooses */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Why Ahmedabad Chooses Our Multi Layer PCB Manufacturing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                As a trusted multi layer PCB manufacturer in Ahmedabad, we leverage Gujarat’s industrial expertise to serve clients across India. Our advantages include:
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {[
                                    { title: "Localized Support", desc: "Personalized service and fast response times for businesses in Ahmedabad and Gujarat." },
                                    { title: "Nationwide Delivery", desc: "Reliable shipping to customers throughout India." },
                                    { title: "Competitive Pricing", desc: "Cost-effective solutions tailored to the Indian market." },
                                    { title: "Indian Excellence", desc: "High-quality PCBs reflecting Gujarat’s manufacturing prowess and global standards." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-800 font-semibold">{item.title}: </strong>
                                            <span className="text-sm text-slate-600 leading-relaxed">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Whether you’re a startup in Ahmedabad or a large manufacturer elsewhere in India, we deliver multi layer PCBs that meet your technical and budgetary needs.
                            </p>
                        </div>

                        {/* Eco-Friendly */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Commitment to Eco-Friendly PCB Manufacturing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Sustainability is a core value at Megabyte Circuit Systems. We prioritize eco-friendly materials and processes, minimizing waste and environmental impact. Our FR-4 multi layer PCBs are designed for durability, reducing replacement frequency, while our manufacturing practices align with global sustainability standards, ensuring responsible production without compromising quality.
                            </p>
                        </div>

                        {/* Start Project */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                How to Start Your Multi Layer PCB Project with Us
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Ready to power your next project with advanced multi layer PCBs? Partner with Megabyte Circuit Systems, a leading multi layer PCB manufacturer in Ahmedabad, and follow these steps:
                            </p>
                            <ol className="space-y-3 list-decimal list-inside text-slate-600 leading-relaxed font-medium">
                                <li className="pl-1"><strong className="text-slate-800">Request a Quote:</strong> Use our online PCB Price Calculator or contact our team directly.</li>
                                <li className="pl-1"><strong className="text-slate-800">Customize Your Order:</strong> Specify layer count, board size, or unique requirements for tailored solutions.</li>
                                <li className="pl-1"><strong className="text-slate-800">Fast Delivery:</strong> Enjoy prompt shipping across Ahmedabad, Gujarat, and India.</li>
                            </ol>
                            <p className="text-slate-600 leading-relaxed">
                                Our multi layer PCBs are ideal for high-density designs, advanced prototypes, and production runs. Start your project today with a reliable partner.
                            </p>
                        </div>

                        {/* FAQs */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Frequently Asked Questions About Multi Layer PCB Manufacturing
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

                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Contact Megabyte Circuit Systems for Multi Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Power your electronics with high-quality multi layer PCBs from Megabyte Circuit Systems, a trusted <a href="/" className="text-primary hover:underline font-semibold">multi layer PCB manufacturer in Ahmedabad</a>. Whether you’re developing cutting-edge prototypes or scaling up production, we deliver reliable, high-performance, and precision-engineered circuit boards. Contact us today to request a quote or learn more about our services. Call us or visit our PCB Price Calculator to kickstart your project!
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4">
                        <ProductSidebar currentSlug="multi-layer-pcb" />
                    </div>

                </div>
            </div>
        </div>
    );
}
