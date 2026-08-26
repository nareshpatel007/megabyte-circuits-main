"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Mail, Phone,
    Facebook, Linkedin, Instagram,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
    { label: "Prototype PCB", href: "/prototype-pcb" },
    { label: "PCB Design", href: "/pcb-design-ahmedabad" },
    { label: "PCB Manufacturing", href: "/pcb-manufacturing-ahmedabad" },
    { label: "PCB Assembly", href: "/pcb-assembly-ahmedabad" },
    { label: "PCB Developing Services", href: "/pcb-developing-services-ahmedabad" },
    { label: "PCB Fabrication", href: "/pcb-fabrication-ahmedabad" },
    { label: "DFM Support", href: "/design-for-manufacturability-dfm-support" },
    { label: "Testing & Quality Assurance", href: "/testing-and-quality-assurance" },
];

const QUICK_LINKS = [
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "PCB Calculator", href: "/pcb-calculator" },
    { label: "Components", href: "/parts" },
    { label: "Contact Support", href: "/contact" },
];

const SOCIAL = [
    { icon: Facebook, href: "https://www.facebook.com/people/Megabytes-Circuit-Systems/100090711935963/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/megabytescircuit/?hl=en", label: "Instagram" },
    { icon: Linkedin, href: "https://in.linkedin.com/in/megabytes-circuit-systems-598908237", label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer className="bg-secondary text-white dark:bg-zinc-950 dark:border-t dark:border-zinc-800">
            {/* ── CTA strip ───────────────────────────────────────────── */}
            <div className="border-b border-white/8 bg-white/3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div>
                            <p className="font-display font-bold text-lg text-white">Ready to start your PCB project?</p>
                            <p className="text-sm text-white/50 mt-0.5">Upload Gerber files for an instant quote — no obligation.</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 text-sm">
                                <Link href="/pcb-calculator">PCB Calculator <ArrowRight className="w-4 h-4 ml-1.5" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main footer grid ─────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Col 1 – Brand (wider) */}
                    <div className="sm:col-span-2 lg:col-span-4">
                        <Link href="/" className="inline-flex items-center mb-5 group">
                            <Image
                                src="/images/logo.png"
                                alt="MegaByte's Circuits"
                                width={240}
                                height={64}
                                className="h-14 sm:h-16 md:h-18 lg:h-22 w-auto object-contain brightness-0 invert"
                            />
                        </Link>

                        <p className="text-sm text-white/50 leading-relaxed mb-2 max-w-xs">
                            India's trusted PCB manufacturing partner delivering precision-engineered boards for startups, engineers, and enterprises.
                        </p>
                        <p className="text-xs text-primary font-semibold italic mb-6">"From Imagination To Innovation"</p>

                        {/* Social */}
                        <div className="flex items-center gap-2">
                            {SOCIAL.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-8 h-8 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 – PCB Services */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
                            PCB Services
                        </h4>
                        <ul className="space-y-3">
                            {SERVICES.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        href={s.href}
                                        className="text-sm text-white/50 hover:text-primary transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors shrink-0" />
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 – Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-white/50 hover:text-primary transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors shrink-0" />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 – Contact */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
                            Contact Details
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-sm text-white/50 hover:text-primary transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors mt-0.5">
                                        <MapPin className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="leading-relaxed">
                                        Megabytes Circuit Systems<br />
                                        C/10, Yogeshwar Estate, B/H Madhuram Estate, Nr. Vishala Estate, Sardar Patel Ring Rd, Odhav, Ahmedabad, Gujarat - 382430, India
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919898842942"
                                    className="flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                                        <Phone className="w-4 h-4 text-primary" />
                                    </div>
                                    +91-9898842942
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:quote@megabytecircuit.com"
                                    className="flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                                        <Mail className="w-4 h-4 text-primary" />
                                    </div>
                                    quote@megabytecircuit.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ───────────────────────────────────────────── */}
            <div className="border-t border-white/8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
                        <p>Copyright © {new Date().getFullYear()} MegaByte's Circuit Systems. All Rights Reserved.</p>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <span className="text-white/15">|</span>
                            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
