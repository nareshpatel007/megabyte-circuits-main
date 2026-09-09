"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { Check, ChevronDown } from "lucide-react";

export default function DoubleLayerPCBPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Double Layer PCB" }
    ];

    const specs = [
        { name: "Number of Layers", value: "2" },
        { name: "Board Type", value: "Double-Sided Circuit Board" },
        { name: "Material", value: "FR-4 (Flame Retardant Grade 4)" },
        { name: "Board Thickness", value: "1.6 mm" },
        { name: "Minimum Hole Size", value: "0.3 mm" },
        { name: "Trace Width/Spacing", value: "0.2 mm" },
        { name: "Solder Mask Color", value: "Blue" },
        { name: "Applications", value: "Telecommunications, Automotive Electronics, Medical Devices, Prototyping, Industrial Controls" }
    ];

    const whyChooseUs = [
        "High-Quality FR-4 Material: Our boards use flame-retardant FR-4, ensuring excellent heat resistance and durability for demanding applications.",
        "Precision Engineering: With a minimum hole size of 0.3 mm and trace width/spacing of 0.2 mm, our PCBs support intricate circuit designs and reliable performance.",
        "Enhanced Connectivity: Double-sided designs allow for more components and complex routing, ideal for advanced electronics.",
        "Blue Solder Mask: Protects circuits from oxidation and improves visibility during assembly, ensuring long-term reliability.",
        "Efficient Production: Our streamlined processes ensure fast turnaround times for both prototypes and bulk orders.",
        "Made in India Excellence: Manufactured in Gujarat, our PCBs reflect local craftsmanship while meeting international standards.",
        "Customizable Solutions: We offer tailored options for board size, thickness, and specifications to suit your project requirements."
    ];

    const applications = [
        {
            title: "Telecommunications",
            desc: "Powering devices like routers, modems, and signal amplifiers with reliable, high-density circuits."
        },
        {
            title: "Automotive Electronics",
            desc: "Used in control units, infotainment systems, and sensors, offering durability in harsh environments."
        },
        {
            title: "Medical Devices",
            desc: "Supports diagnostic equipment, monitoring systems, and portable devices with compact, efficient designs."
        },
        {
            title: "Prototyping and R&D",
            desc: "Perfect for engineers and innovators developing advanced prototypes with complex circuitry."
        },
        {
            title: "Industrial Controls",
            desc: "Enables precise control systems, automation equipment, and monitoring devices for industrial applications."
        }
    ];

    const manufacturingProcess = [
        { title: "Material Selection", desc: <>We use high-grade <a href="https://en.wikipedia.org/wiki/FR-4" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline"><b>FR-4</b></a> for a durable, heat-resistant substrate.</> },
        { title: "Copper Cladding", desc: "Copper layers are applied to both sides of the substrate for dual-sided conductivity." },
        { title: "Via Drilling", desc: "Plated-through holes (vias) are drilled to connect top and bottom layers." },
        { title: "Etching", desc: "Excess copper is removed to create precise circuit patterns on both sides." },
        { title: "Solder Mask Application", desc: "A blue solder mask is applied to protect circuits and enhance assembly clarity." },
        { title: "Quality Testing", desc: "Each board undergoes rigorous testing to verify functionality, connectivity, and durability." }
    ];

    const faqs = [
        {
            q: "What is a double layer PCB?",
            a: "A double layer PCB, or double-sided circuit board, has conductive tracks on both sides of a substrate, connected via vias, ideal for complex circuits."
        },
        {
            q: "How does a double layer PCB differ from a single layer PCB?",
            a: (
                <>
                    Double layer PCBs have tracks on both sides, supporting more complex circuits, while{" "}
                    <Link href="/products/single-layer-pcb-ahmedabad" className="text-primary font-semibold hover:underline">
                        <b>single layer PCBs</b>
                    </Link>{" "}
                    have tracks on one side, suitable for simpler designs.
                </>
            )
        },
        {
            q: "Are double layer PCBs suitable for high-power applications?",
            a: "Yes, our FR-4-based double layer PCBs offer excellent heat resistance and durability for high-power and high-density applications."
        },
        {
            q: "Can I customize my double layer PCB?",
            a: "Yes, we offer customizable options for size, thickness, and specifications to meet your project needs."
        },
        {
            q: "Do you ship double layer PCBs outside India?",
            a: "We prioritize India-wide delivery, with fast service in Ahmedabad and Gujarat. Contact us to discuss international shipping options."
        },
        {
            q: "What materials are used in your double layer PCBs?",
            a: "We use high-grade FR-4, a flame-retardant substrate, ensuring durability and safety for diverse applications."
        }
    ];

    const tags = [
        "Double Layer PCB", "Double Sided PCB", "Double Layer PCB Manufacturer", "Double Sided PCB Manufacturer",
        "Double Layer PCB Fabrication", "Double Sided PCB Fabrication", "Double Layer PCB Supplier", "Double Sided PCB Supplier",
        "Two Layer PCB", "Two Sided PCB", "2 Layer PCB", "2 Sided PCB", "Double Layer Printed Circuit Board",
        "Double Sided Printed Circuit Board", "Double Layer PCB Maker", "Double Sided PCB Maker", "Double Layer PCB Assembly",
        "Double Sided PCB Assembly", "High Quality Double Layer PCB", "Low Cost Double Layer PCB", "Affordable Double Sided PCB",
        "Double Layer FR4 PCB", "Double Layer Rigid PCB", "Double Sided Copper PCB", "Double Layer LED PCB",
        "Double Sided LED PCB", "Custom Double Layer PCB", "Prototype Double Layer PCB", "Quick Turn Double Layer PCB",
        "Urgent Double Layer PCB", "Double Layer PCB Production", "Best Double Layer PCB", "Top Double Sided PCB Manufacturer",
        "Double Layer PCB Exporter", "Industrial Double Layer PCB", "Electronic Double Layer PCB", "Double Layer PCB for OEMs",
        "Double Layer PCB Design", "Double Layer PCB Printing", "PCB Board Double Layer", "Bare Double Layer PCB",
        "Double Layer PCB Supplier Near Me", "Double Layer PCB Manufacturer in Ahmedabad", "Double Sided PCB Manufacturer in Ahmedabad",
        "2 Layer PCB Manufacturer in Ahmedabad", "Two Layer PCB Manufacturer in Ahmedabad", "Double Layer PCB Fabricator in Ahmedabad",
        "Double Sided PCB Fabricator in Ahmedabad", "Double Layer PCB Supplier in Ahmedabad", "Double Layer Printed Circuit Board in Ahmedabad",
        "Double Sided PCB in Ahmedabad", "Double Layer PCB Maker in Ahmedabad", "Double Layer PCB Company in Ahmedabad",
        "Custom Double Layer PCB in Ahmedabad", "Prototype Double Layer PCB Manufacturer in Ahmedabad", "Quick Turn Double Layer PCB in Ahmedabad",
        "Urgent Double Layer PCB in Ahmedabad", "High Quality Double Layer PCB in Ahmedabad", "Low Cost Double Layer PCB in Ahmedabad",
        "Affordable Double Sided PCB in Ahmedabad", "Double Layer FR4 PCB in Ahmedabad", "Double Layer Rigid PCB in Ahmedabad",
        "Double Layer LED PCB in Ahmedabad", "Industrial Double Layer PCB Manufacturer in Ahmedabad", "Electronic Double Layer PCB in Ahmedabad",
        "Best Double Layer PCB Manufacturer in Ahmedabad", "Top Double Layer PCB Manufacturer in Ahmedabad", "Double Layer PCB Production in Ahmedabad",
        "Double Layer PCB Board Manufacturer in Ahmedabad"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Double Layer PCB Manufacturer in Ahmedabad: Megabyte Circuit Systems"
                subtitle="Megabyte Circuit Systems stands as a leading double layer PCB manufacturer in Ahmedabad, Gujarat, delivering high-performance, dual-sided circuit boards for a wide range of electronic applications."
                badge="Product Range"
                breadcrumbs={breadcrumbs}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-12 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">

                        {/* Section 1: Overview & Intro */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                                Double Layer PCB Manufacturer in Ahmedabad: Megabyte Circuit Systems
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Megabyte Circuit Systems stands as a leading <b>double layer PCB manufacturer in Ahmedabad</b>, Gujarat, delivering high-performance, dual-sided circuit boards for a wide range of electronic applications. Catering to engineers, innovators, and businesses across India, our double layer PCBs offer enhanced functionality, reliability, and precision for projects requiring more complex circuitry than single-layer boards. Based in Ahmedabad, we combine local expertise with cutting-edge technology to provide cost-effective, high-quality solutions tailored to your needs.
                            </p>
                        </div>

                        {/* Section 2: What is a Double Layer PCB? */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                What is a Double Layer PCB?
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                A double layer PCB, also known as a double-sided circuit board, features conductive copper tracks on both sides of a non-conductive substrate, typically FR-4. This design allows for more complex circuits by enabling connections between the top and bottom layers through vias, making it ideal for applications like telecommunications, automotive electronics, and advanced prototyping. At Megabyte Circuit Systems, our double layer PCBs are engineered to deliver superior performance, durability, and versatility for modern electronic designs.
                            </p>
                        </div>

                        {/* Section 3: Why Choose Megabyte Circuit Systems as Your Double Layer PCB Manufacturer? */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Why Choose Megabyte Circuit Systems as Your Double Layer PCB Manufacturer?
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                As a trusted <b>double layer PCB manufacturer in Ahmedabad</b>, we prioritize quality, innovation, and customer satisfaction. Here’s what sets us apart:
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

                        {/* Section 4: Technical Specifications */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Technical Specifications of Our Double Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our double layer PCBs are designed to meet the needs of complex electronic projects. Below are the key specifications:
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
                            <p className="text-slate-600 leading-relaxed">
                                These specifications ensure our double-sided circuit boards are robust, precise, and suitable for both manual and automated assembly, making them a versatile choice for various industries.
                            </p>
                        </div>

                        {/* Section 5: Applications */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Applications of Double Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our double layer PCBs are ideal for projects requiring enhanced circuitry and connectivity. Common applications include:
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {applications.map((app, idx) => (
                                    <div key={idx} className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 space-y-1">
                                        <h3 className="font-bold text-slate-800 text-base">{app.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{app.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Our double layer PCBs provide the flexibility and performance needed to drive innovation across these sectors.
                            </p>
                        </div>

                        {/* Section 6: Double Layer vs. Single Layer PCBs */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Double Layer PCBs vs. Single Layer PCBs: Key Differences
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Understanding the difference between double layer and{" "}
                                <Link href="/products/single-layer-pcb-ahmedabad" className="text-primary font-semibold hover:underline">
                                    <b>single layer PCBs</b>
                                </Link>{" "}
                                is crucial for selecting the right board. A double layer PCB features conductive tracks on both sides, connected via plated-through holes (vias), allowing for more complex circuits and higher component density. In contrast, single layer PCBs have tracks on one side, suitable for simpler, cost-sensitive applications. Benefits of double layer PCBs include:
                            </p>
                            <ul className="space-y-2 text-slate-600 list-disc pl-5">
                                <li><strong>Increased Circuit Density:</strong> Supports more components and intricate routing for advanced designs.</li>
                                <li><strong>Improved Performance:</strong> Enables efficient signal transmission and power distribution.</li>
                                <li><strong>Compact Design:</strong> Reduces board size by utilizing both sides, ideal for space-constrained devices.</li>
                                <li><strong>Versatile Applications:</strong> Suitable for complex electronics requiring robust connectivity.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed">
                                For projects demanding enhanced functionality, our double layer PCBs offer superior performance and reliability.
                            </p>
                        </div>

                        {/* Section 7: Our Manufacturing Process */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Our Double Layer PCB Manufacturing Process in Ahmedabad
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                At Megabyte Circuit Systems, our <b>double layer PCB manufacturing</b> process is designed to ensure precision and quality:
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
                            <p className="text-slate-600 leading-relaxed">
                                This meticulous process ensures our double-sided circuit boards meet the highest standards for performance and reliability.
                            </p>
                        </div>

                        {/* Section 8: Why Ahmedabad Trusts Our Double Layer PCB Manufacturing */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Why Ahmedabad Trusts Our Double Layer PCB Manufacturing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                As a leading double layer PCB manufacturer in Ahmedabad, we leverage Gujarat’s industrial expertise to serve clients across India. Our advantages include:
                            </p>
                            <ul className="space-y-2 text-slate-600 list-disc pl-5">
                                <li><strong>Localized Expertise:</strong> Fast, personalized support for businesses and innovators in Ahmedabad and Gujarat.</li>
                                <li><strong>Nationwide Reach:</strong> Reliable shipping to customers throughout India.</li>
                                <li><strong>Competitive Pricing:</strong> Cost-effective solutions tailored to the Indian market.</li>
                                <li><strong>Indian Craftsmanship:</strong> High-quality PCBs reflecting Gujarat’s manufacturing excellence.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed">
                                Whether you’re a startup in Ahmedabad or a large manufacturer elsewhere in India, we deliver double layer PCBs that meet your technical and budgetary requirements.
                            </p>
                        </div>

                        {/* Section 9: Commitment to Sustainable PCB Production */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Commitment to Sustainable PCB Production
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                At Megabyte Circuit Systems, sustainability is a priority. We use eco-friendly materials and processes to minimize environmental impact, ensuring our double layer PCBs are durable and reduce the need for frequent replacements. Our manufacturing practices align with global sustainability standards, balancing quality with environmental responsibility.
                            </p>
                        </div>

                        {/* Section 10: How to Order Double Layer PCBs from Megabyte Circuit Systems */}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                How to Order Double Layer PCBs from Megabyte Circuit Systems
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Ready to power your project with our double layer PCBs? Here’s how to get started with Megabyte Circuit Systems, a trusted double layer PCB manufacturer in Ahmedabad:
                            </p>
                            <ol className="space-y-2 text-slate-600 list-decimal pl-5">
                                <li><strong>Request a Quote:</strong> Contact our team directly.</li>
                                <li><strong>Customize Your Order:</strong> Specify board size, quantity, or unique requirements for tailored solutions.</li>
                                <li><strong>Fast Delivery:</strong> Enjoy prompt shipping across Ahmedabad, Gujarat, and India.</li>
                            </ol>
                            <p className="text-slate-600 leading-relaxed">
                                Our double layer PCBs are perfect for complex circuit designs, advanced prototypes, and production runs. Partner with us to bring your ideas to life.
                            </p>
                        </div>

                        {/* Section 11: Frequently Asked Questions */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-secondary">
                                Frequently Asked Questions About Double Layer PCB Manufacturing
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
                                Contact Megabyte Circuit Systems for Double Layer PCBs
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Power your electronics with high-quality{" "}
                                <a href="https://www.megabytecircuit.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                                    <b>double layer PCBs from Megabyte Circuit Systems</b>
                                </a>, a trusted{" "}
                                <Link href="/" className="text-primary font-semibold hover:underline">
                                    <b>double layer PCB manufacturer in Ahmedabad</b>
                                </Link>. Whether you’re developing advanced prototypes or scaling up production, we deliver reliable, cost-effective, and precision-engineered circuit boards. Contact us today to request a quote or learn more about our services. Call us or visit our PCB Price Calculator to start your project!
                            </p>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Megabyte Circuit Systems – Your reliable partner for double layer PCB manufacturing in Ahmedabad, Gujarat, and across India.
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
                        <ProductSidebar currentSlug="double-layer-pcb" />
                    </div>

                </div>
            </div>
        </div>
    );
}
