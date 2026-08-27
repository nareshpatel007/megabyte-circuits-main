"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServiceHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
    breadcrumbs: BreadcrumbItem[];
}

export function ServiceHeader({ title, subtitle, badge = "Our Services", breadcrumbs }: ServiceHeaderProps) {
    return (
        <section className="relative pt-16 pb-3 md:pt-20 md:pb-4 overflow-hidden bg-secondary">
            {/* Grid pattern background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="service-header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22C55E" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#service-header-grid)" />
                </svg>
            </div>

            {/* Glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                {/* Breadcrumbs */}
                <nav className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                    {breadcrumbs.map((crumb, idx) => {
                        const isLast = idx === breadcrumbs.length - 1;
                        return (
                            <React.Fragment key={idx}>
                                {crumb.href && !isLast ? (
                                    <Link href={crumb.href} className="hover:text-primary transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className={isLast ? "text-primary font-bold" : "text-white/30"}>
                                        {crumb.label}
                                    </span>
                                )}
                                {!isLast && <ChevronRight className="w-3 h-3" />}
                            </React.Fragment>
                        );
                    })}
                </nav>

                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <span className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/25 text-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {badge}
                    </span>
                    <h1 className="text-xl md:text-2xl font-display font-bold text-white mb-0.5 leading-tight">
                        {title}
                    </h1>
                    <p className="text-xs md:text-sm text-white/70 leading-snug font-medium max-w-xl">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}
