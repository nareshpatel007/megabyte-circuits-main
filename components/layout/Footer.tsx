"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Mail, Phone,
    Facebook, Twitter, Linkedin, Instagram, Youtube,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
    { label: "PCB Fabrication", href: "/manufacturing" },
    { label: "PCB Assembly", href: "/assembly" },
    { label: "Multilayer PCBs", href: "/manufacturing" },
    { label: "HDI PCBs", href: "/manufacturing" },
    { label: "Flexible PCBs", href: "/manufacturing" },
    { label: "Rigid-Flex PCBs", href: "/manufacturing" },
    { label: "Component Sourcing", href: "/assembly" },
];

const QUICK_LINKS = [
    { label: "About Us", href: "/about" },
    { label: "Manufacturing Capabilities", href: "/manufacturing" },
    { label: "Get Instant Quote", href: "/contact" },
    { label: "Contact Support", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
];

const SOCIAL = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
    return (
        <footer className="bg-secondary text-white">
            {/* ── CTA strip ───────────────────────────────────────────── */}
            <div className="border-b border-white/8 bg-white/3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div>
                            <p className="font-display font-bold text-lg text-white">Ready to start your PCB project?</p>
                            <p className="text-sm text-white/50 mt-0.5">Upload Gerber files for an instant quote — no obligation.</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 font-semibold text-sm"
                            >
                                <Link href="/contact">Upload Gerber</Link>
                            </Button>
                            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 text-sm">
                                <Link href="/contact">Get Instant Quote <ArrowRight className="w-4 h-4 ml-1.5" /></Link>
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
                                width={180}
                                height={48}
                                className="h-12 w-auto object-contain"
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
                                        GIDC Electronics Estate, Sector 25,<br />
                                        Gandhinagar, Ahmedabad,<br />
                                        Gujarat 382024, India
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                                        <Phone className="w-4 h-4 text-primary" />
                                    </div>
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@megabytecircuits.com"
                                    className="flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                                        <Mail className="w-4 h-4 text-primary" />
                                    </div>
                                    info@megabytecircuits.com
                                </a>
                            </li>
                        </ul>

                        {/* Certifications */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {["ISO 9001:2015", "RoHS Compliant", "ISO 14001"].map((cert) => (
                                <span
                                    key={cert}
                                    className="inline-flex items-center text-xs font-semibold bg-white/6 border border-white/10 text-white/60 px-2.5 py-1 rounded-md"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ───────────────────────────────────────────── */}
            <div className="border-t border-white/8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
                        <p>Copyright © 2026 MegaByte's Circuit Systems. All Rights Reserved.</p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <span className="text-white/15">|</span>
                            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <span className="text-white/15">|</span>
                            <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
