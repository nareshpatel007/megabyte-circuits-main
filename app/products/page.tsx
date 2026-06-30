import React from "react";
import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ArrowRight, Layers, Cpu, CircuitBoard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Products - Megabytes Circuit Systems Ahmedabad",
    description: "Explore Single, Double, And Multilayer PCBs At Megabytes Circuit Systems, Ahmedabad. Discover Reliable, High-performance Circuit Boards For Your Electronics Needs.",
};

export default function ProductsPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" }
    ];

    const products = [
        {
            title: "Single Layer PCBs",
            slug: "single-layer-pcb-ahmedabad",
            desc: "Highly reliable and cost-effective single-sided boards, ideal for simple power supplies, sensors, and consumer electronics.",
            icon: CircuitBoard,
            features: ["1.6mm FR-4 Base", "1oz/2oz Copper Thickness", "HASL or Lead-free finishes", "100% AOI & Flying Probe Tested"]
        },
        {
            title: "Double Layer PCBs",
            slug: "double-layer-pcb-ahmedabad",
            desc: "Advanced double-sided circuits utilizing high-precision plated through-holes to connect components on both sides.",
            icon: Layers,
            features: ["FR-4 High-Tg material", "Up to 4oz copper weight", "Impedance matching control", "ENIG & OSP surface finishes"]
        },
        {
            title: "Multi Layer PCBs",
            slug: "multi-layer-pcb-ahmedabad",
            desc: "High-density multi-layer boards from 4 up to 32 layers for complex computing, telecommunications, and aerospace systems.",
            icon: Cpu,
            features: ["High-density interconnects (HDI)", "Blind & buried vias", "Controlled dielectric stackups", "Advanced thermal management"]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Range of Products"
                subtitle="Explore our comprehensive range of high-performance single-sided, double-sided, and multi-layer circuit boards."
                badge="Products"
                breadcrumbs={breadcrumbs}
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, i) => {
                            const Icon = product.icon;
                            return (
                                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/30 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
                                    <div>
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/5">
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary mb-4 leading-snug">{product.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.desc}</p>
                                        <ul className="space-y-2 mb-8">
                                            {product.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="text-xs text-slate-500 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                                        <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
