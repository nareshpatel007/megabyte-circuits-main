"use client";

import React from "react";
import Link from "next/link";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ArrowRight, Wrench, Settings, CircuitBoard, Cpu, Activity, Hammer, FileCheck, Shield } from "lucide-react";
import { servicesData } from "@/components/data/servicesData";

const iconMap = {
    Wrench,
    Settings,
    CircuitBoard,
    Cpu,
    Activity,
    Hammer,
    FileCheck,
    Shield
};

export default function ServicesListPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Our Professional PCB Services"
                subtitle="From fast quick-turn prototyping to full-scale multi-layer manufacturing and assembly, we deliver precision at every stage."
                badge="Comprehensive Solutions"
                breadcrumbs={breadcrumbs}
            />

            {/* ─── Services Grid Section ──────────────────────────────────────────── */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {Object.values(servicesData).map((service, idx) => {
                            const Icon = iconMap[service.iconName as keyof typeof iconMap] || CircuitBoard;
                            return (
                                <Link key={service.slug} href={((slug: string) => { const map: Record<string, string> = { "prototype-pcb": "/prototype-pcb", "pcb-design": "/pcb-design-ahmedabad", "pcb-manufacturing": "/pcb-manufacturing-ahmedabad", "pcb-assembly": "/pcb-assembly-ahmedabad", "pcb-developing-services": "/pcb-developing-services-ahmedabad", "pcb-fabrication": "/pcb-fabrication-ahmedabad", "design-for-manufacturability-dfm-support": "/design-for-manufacturability-dfm-support", "testing-and-quality-assurance": "/testing-and-quality-assurance" }; return map[slug] || `/services/${slug}`; })(service.slug)}>
                                    <div className="group relative bg-gradient-to-b from-white to-slate-50/50 rounded-3xl border border-slate-100 p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(11,122,51,0.08)] hover:border-primary/25 cursor-pointer overflow-hidden min-h-[320px]">
                                        {/* Top right subtle glow */}
                                        <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all duration-300 pointer-events-none" />

                                        <div>
                                            <div className={`w-14 h-14 bg-gradient-to-br ${service.colorClass} rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:border-primary/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm`}>
                                                <Icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                                            </div>
                                            <h3 className="text-xl font-display font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-200 leading-snug">
                                                {(() => {
                                                    const cleanLabels: Record<string, string> = {
                                                        "prototype-pcb": "Prototype PCB",
                                                        "pcb-design": "PCB Design",
                                                        "pcb-manufacturing": "PCB Manufacturing",
                                                        "pcb-assembly": "PCB Assembly",
                                                        "pcb-developing-services": "PCB Developing Services",
                                                        "pcb-fabrication": "PCB Fabrication",
                                                        "design-for-manufacturability-dfm-support": "DFM Support",
                                                        "testing-and-quality-assurance": "Testing & Quality Assurance"
                                                    };
                                                    return cleanLabels[service.slug] || service.title.split(" in ")[0];
                                                })()}
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                                {service.desc || service.introduction.split(".")[0] + "."}
                                            </p>
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-wide uppercase">
                                            Explore Service <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
