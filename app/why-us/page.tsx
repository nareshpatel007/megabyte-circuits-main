import React from "react";
import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { CheckCircle2, ShieldCheck, Zap, Factory, Award, Truck, Hammer } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Why Us - Megabytes Circuit Systems Ahmedabad",
    description: "Choose Megabytes Circuit Systems For Advanced PCB Manufacturing, Fast Turnaround, And Custom Solutions. Discover Why Industry Leaders Trust Us In Ahmedabad.",
};

export default function WhyUsPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Why Us" }
    ];

    const reasons = [
        {
            icon: Factory,
            title: "Advanced Manufacturing Facility",
            desc: "Our state-of-the-art facility in Ahmedabad features German-engineered automation and cutting-edge LDI, CNC drilling, and automated plating systems."
        },
        {
            icon: ShieldCheck,
            title: "Uncompromising Quality",
            desc: "We adhere strictly to IPC-A-600 quality standards and offer 100% electrical verification, automated optical inspection (AOI), and thermal cycling."
        },
        {
            icon: Zap,
            title: "Rapid Turnaround",
            desc: "Validate designs fast with our 24-hour prototype turnaround options, followed by smooth scaling into full-scale mass production."
        },
        {
            icon: Award,
            title: "Industry Certifications",
            desc: "We maintain compliance for RoHS, UL quality benchmarks, and international standards, ensuring global benchmarks for every board."
        },
        {
            icon: Truck,
            title: "No Minimum Order Quantity",
            desc: "Whether you need a single PCB prototype for R&D testing or thousands for mass production, we support businesses of all sizes."
        },
        {
            icon: Hammer,
            title: "Complimentary DFM Check",
            desc: "Our experienced layout and fabrication engineers perform a thorough Design for Manufacturability review before production begins."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Why Choose Megabytes for Your Circuit Board Needs"
                subtitle="Discover how our advanced manufacturing facility, rigorous quality assurance, and engineering expertise make us the preferred PCB partner in India."
                badge="Why Us"
                breadcrumbs={breadcrumbs}
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason, i) => {
                            const Icon = reason.icon;
                            return (
                                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/30 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                                    <div>
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-secondary mb-3 leading-snug">{reason.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{reason.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                                        <CheckCircle2 className="w-4 h-4" /> Certified Process
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary relative overflow-hidden text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Experience Premium PCB Manufacturing</h2>
                    <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                        From prototype verification to industrial mass production, we deliver reliable, high-performance circuit boards tailored to your exact specifications.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 font-semibold">
                            <Link href="/pcb-calculator">PCB Calculator</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 font-semibold">
                            <Link href="/contact">Contact Our Engineers</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
