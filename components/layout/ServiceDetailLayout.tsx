"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Wrench, Settings, CircuitBoard, Cpu, Activity,
    Hammer, FileCheck, Shield, ChevronRight, Calculator,
    Phone, Mail, CheckCircle2, ChevronDown, ArrowRight, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServiceHeader } from "../services/ServiceHeader";
import { servicesData, ServiceDetail } from "../data/servicesData";

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

interface ServiceDetailLayoutProps {
    service: ServiceDetail;
    children?: React.ReactNode;
}

export function ServiceDetailLayout({ service, children }: ServiceDetailLayoutProps) {
    const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || CircuitBoard;
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    // Quick Quote Form State
    const [formState, setFormState] = useState({ name: "", email: "", mobile: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormState({ name: "", email: "", mobile: "", message: "" });
        }, 1500);
    };

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title.split(" in ")[0] }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title={service.title}
                subtitle={service.subtitle}
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
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
                                <p className="text-sm text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
                                    {service.introduction}
                                </p>
                                {service.paragraphs.map((p, idx) => (
                                    <p key={idx} className="text-sm text-slate-800 leading-relaxed mb-4 last:mb-0">
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {children}

                            {/* Key Features */}
                            {service.features && service.features.length > 0 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-display font-bold text-secondary">
                                        Key Features & Advantages
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {service.features.map((feat, idx) => (
                                            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                                </div>
                                                <h4 className="font-display font-bold text-secondary text-sm mb-2">{feat.title}</h4>
                                                <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tables (Specification / Comparative) */}
                            {service.tables && service.tables.length > 0 && (
                                <div className="space-y-6">
                                    {service.tables.map((table, tIdx) => {
                                        const headers = table[0];
                                        const rows = table.slice(1);
                                        return (
                                            <div key={tIdx} className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/40 bg-white">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="bg-secondary text-white">
                                                            {headers.map((h, hIdx) => (
                                                                <th key={hIdx} className="text-left px-6 py-4 font-semibold text-white/80 text-xs uppercase tracking-wider">
                                                                    {h}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {rows.map((row, rIdx) => (
                                                            <tr key={rIdx} className={`border-b border-slate-100 ${rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-primary/5 transition-colors`}>
                                                                {row.map((cell, cIdx) => (
                                                                    <td key={cIdx} className={`px-6 py-4 text-sm ${cIdx === 0 ? "font-bold text-secondary" : "text-slate-600"}`}>
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Process Steps */}
                            {service.process && service.process.length > 0 && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-display font-bold text-secondary">
                                        Our Operational Workflow
                                    </h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {service.process.map((step, idx) => (
                                            <div key={idx} className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:border-primary/20 transition-all duration-300">
                                                <span className="absolute top-4 right-4 text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                    Step {step.step}
                                                </span>
                                                <h4 className="font-display font-bold text-secondary text-sm mb-2 mt-4">{step.title}</h4>
                                                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* FAQs Section */}
                            {service.faqs && service.faqs.length > 0 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-display font-bold text-secondary">
                                        Frequently Asked Questions
                                    </h2>
                                    <div className="space-y-4">
                                        {service.faqs.map((faq, idx) => {
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
                            )}
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">

                            {/* Other Services Navigation */}
                            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100/50">
                                <h3 className="font-display font-bold text-secondary text-lg mb-4 pb-3 border-b border-slate-100">
                                    All Services
                                </h3>
                                <div className="space-y-2">
                                    {Object.values(servicesData).map((navItem) => {
                                        const isCurrent = navItem.slug === service.slug;
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
                                        const displayLabel = cleanLabels[navItem.slug] || navItem.title.split(" in ")[0];
                                        return (
                                            <Link
                                                key={navItem.slug}
                                                href={`/services/${navItem.slug}`}
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isCurrent
                                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                                    }`}
                                            >
                                                <span>{displayLabel}</span>
                                                <ChevronRight className={`w-4 h-4 ${isCurrent ? "text-white" : "text-slate-400"}`} />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Quick Contact Form */}
                            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100/50">
                                <h3 className="font-display font-bold text-secondary text-lg mb-2 leading-none">
                                    Get Instant Estimate
                                </h3>
                                <p className="text-xs text-slate-500 mb-6">Leave us a message, we reply within 1 hour.</p>

                                {success ? (
                                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-5 text-center">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-sm mb-1">Message Sent!</h4>
                                        <p className="text-xs text-emerald-700">Thank you. We will get in touch shortly.</p>
                                        <Button
                                            onClick={() => setSuccess(false)}
                                            variant="outline"
                                            className="mt-4 text-xs h-8 border-emerald-300 hover:bg-emerald-100/50 text-emerald-800"
                                        >
                                            Send another message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                                            <Input
                                                required
                                                value={formState.name}
                                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                className="h-10 bg-slate-50/50 border-slate-100"
                                                placeholder="e.g. John Doe"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Mobile Number</label>
                                            <Input
                                                required
                                                value={formState.mobile}
                                                onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                                                className="h-10 bg-slate-50/50 border-slate-100"
                                                placeholder="e.g. +91 98988 42942"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                            <Input
                                                required
                                                type="email"
                                                value={formState.email}
                                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                className="h-10 bg-slate-50/50 border-slate-100"
                                                placeholder="e.g. name@company.com"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Requirements / Message</label>
                                            <textarea
                                                required
                                                value={formState.message}
                                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                                className="w-full p-3 rounded-lg bg-slate-50/50 border border-slate-100 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary h-24 resize-none"
                                                placeholder="Describe your board layers, dimensions, quantity or component needs..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 h-11"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending Request...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <ArrowRight className="w-4 h-4 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>

                            {/* Direct Contacts Info */}
                            <div className="bg-gradient-to-br from-secondary to-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-xl pointer-events-none" />
                                <h3 className="font-display font-bold text-white text-base mb-4">Direct Support</h3>
                                <div className="space-y-3">
                                    <a href="tel:+919898842942" className="flex items-center gap-3 text-xs text-white/70 hover:text-white transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                            <Phone className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>+91 98988 42942</span>
                                    </a>
                                    <a href="mailto:quote@megabytecircuit.com" className="flex items-center gap-3 text-xs text-white/70 hover:text-white transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                            <Mail className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>quote@megabytecircuit.com</span>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
