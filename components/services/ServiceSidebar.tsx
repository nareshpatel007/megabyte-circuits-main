"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ServiceSidebarProps {
    currentSlug: string;
}

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
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

    const serviceLinks = [
        { slug: "prototype-pcb", label: "Prototype PCB" },
        { slug: "pcb-design", label: "PCB Design" },
        { slug: "pcb-manufacturing", label: "PCB Manufacturing" },
        { slug: "pcb-developing-services", label: "PCB Developing Services" },
        { slug: "pcb-fabrication", label: "PCB Fabrication" },
        { slug: "design-for-manufacturability-dfm-support", label: "DFM Support" },
        { slug: "testing-and-quality-assurance", label: "Testing & Quality Assurance" }
    ];

    return (
        <div className="space-y-8">
            {/* Other Services Navigation */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100/50">
                <h3 className="font-display font-bold text-secondary text-lg mb-4 pb-3 border-b border-slate-100">
                    All Services
                </h3>
                <div className="space-y-2">
                    {serviceLinks.map((navItem) => {
                        const isCurrent = navItem.slug === currentSlug;
                        return (
                            <Link
                                key={navItem.slug}
                                href={`/services/${navItem.slug}`}
                                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                                    isCurrent
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                }`}
                            >
                                <span>{navItem.label}</span>
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
    );
}
