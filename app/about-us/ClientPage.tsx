"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    Globe, Award, Target, Zap, CheckCircle2,
    ArrowRight, Users, Factory, Clock, Star,
    Plane, Car, Briefcase, Radio, GraduationCap, Heart, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHeader } from "@/components/services/ServiceHeader";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function InView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

export default function About() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About Us" }
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ──────────────────────────────────────────────── */}
            <ServiceHeader
                title="About Megabytes Circuit Systems"
                subtitle="Ahmedabad-based premier manufacturer of high-quality PCB Circuits, Double Sided PCBs, and Single Sided Circuit Boards catering to global standards."
                badge="About Us"
                breadcrumbs={breadcrumbs}
            />

            {/* ── Stats ─────────────────────────────────────────────── */}
            <section className="bg-white pt-16 pb-8">
                <div className={C}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, value: "5+", label: "Years of Experience" },
                            { icon: Factory, value: "10,000+", label: "Projects Delivered" },
                            { icon: Users, value: "5,000+", label: "Happy Customers" },
                            { icon: Globe, value: "40+", label: "Countries Served" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 text-center"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <stat.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-secondary/70">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Company Profile Detailed Text ─────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="grid lg:grid-cols-12 gap-12 items-start">
                            <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6">
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Established 2021
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
                                    ABOUT <span className="text-primary underline decoration-2 underline-offset-8">MEGABYTES CIRCUIT SYSTEMS</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed font-normal">
                                    Established in the year <strong>2021 at Ahmedabad - 382350, (Gujarat, India)</strong>. We <strong>"Megabytes Circuit Systems"</strong> a Proprietorship firm, are engaged as the foremost Manufacturer of <strong>PCB Circuits, Double Sided PCBs, Single Sided Circuit Boards</strong>, and many more such products. Our company specializes in the design and production of printed circuit boards (PCBs) that cater to a diverse range of industries, including telecommunications, automotive, consumer electronics, and medical devices. With a commitment to innovation and precision, we utilize state-of-the-art technology and advanced manufacturing processes to ensure that each circuit board meets the highest standards of reliability and performance. Our team of skilled engineers and technicians works diligently to deliver products that not only meet but exceed customer expectations.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed font-normal">
                                    Our PCB Circuits are designed with versatility in mind, accommodating various specifications and complexities. We offer a wide array of options, including single-sided, double-sided, and multi-layer boards, tailored to suit specific project requirements. Each circuit board is manufactured using high-grade materials that enhance durability and conductivity, ensuring optimal functionality in even the most demanding environments. Additionally, we provide comprehensive services, from prototyping to mass production, allowing clients to streamline their development processes and bring their products to market efficiently.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="lg:col-span-5 bg-gray-50 border border-gray-150 rounded-3xl p-8 shadow-sm space-y-6">
                                <h3 className="text-xl font-display font-bold text-secondary">
                                    Quality Assurance & Commitment
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    At our Ahmedabad facility, we prioritize quality control and customer satisfaction. Our rigorous testing protocols ensure that every PCB Circuit undergoes thorough inspections for electrical performance, thermal management, and mechanical integrity.
                                </p>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    We are dedicated to fostering long-term partnerships with our clients by offering exceptional support and flexible solutions that adapt to their evolving needs. By choosing our PCB Circuit services, you are investing in a reliable and innovative partner that is committed to driving your success in the competitive landscape of technology and electronics.
                                </p>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Location Facility</p>
                                    <p className="text-sm font-bold text-secondary">Ahmedabad, Gujarat, India</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Industries We Serve (whyus.php) ────────────────────── */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Megabytes Circuit Systems
                            </motion.span>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
                                Industries We Serve
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed mb-3">
                                Our company specializes in the design and production of printed circuit boards (PCBs) that cater to a diverse range of industries.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-gray-500 text-sm leading-relaxed">
                                We deliver innovative products and services that enhance operational efficiency and drive growth. By understanding the specific challenges faced by these industries, we are committed to offering high-quality, reliable solutions that empower our clients to achieve their goals.
                            </motion.p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: "Aerospace and Defense", icon: Plane },
                                { label: "Automotive", icon: Car },
                                { label: "Commercial", icon: Briefcase },
                                { label: "Industrial", icon: Factory },
                                { label: "Lighting", icon: Zap },
                                { label: "Medical", icon: Heart },
                                { label: "Telecom", icon: Radio },
                                { label: "Educational Institutes", icon: GraduationCap },
                            ].map((ind, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center gap-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                        <ind.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-display font-bold text-secondary text-base group-hover:text-primary transition-colors duration-200">
                                        {ind.label}
                                    </h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Key Strengths & Quality (serv_lists2.php) ──────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Quality Assurance */}
                            <motion.div variants={fadeUp} className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                                <div>
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Star className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-secondary mb-4">
                                        Quality Assurance
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        To become the customer-oriented organization, we are engaged in offering best quality products at reasonable prices. In order to maintain high quality standards in our range, we have hired skilled quality analysts, who keep close eye on procurement process and ensure that only flawless range is procured. We lay great emphasis on packaging of our range, so that products reach safely to the clients end.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Why Us? */}
                            <motion.div variants={fadeUp} className="bg-primary text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
                                <div>
                                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                        <HelpCircle className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                                        Why Us?
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                                        Our tremendous industrial experience and knowledge has enabled us to gain a prominent position in industry. Our friendly policies and timely deliveries have enabled us to become the first choice of the clients nationwide.
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-white/20">
                                    <p className="text-xs uppercase tracking-wider text-white/80 font-bold mb-3">
                                        Following are the reasons for our success:
                                    </p>
                                    <ul className="space-y-2">
                                        {[
                                            "Prompt delivery of order",
                                            "Ethical business deals",
                                            "Transparency",
                                            "Flexible payment modes",
                                            "Huge distribution network"
                                        ].map((reason, index) => (
                                            <li key={index} className="flex items-center gap-2 text-xs font-semibold text-white">
                                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                                                <span>{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Team of Experts */}
                            <motion.div variants={fadeUp} className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                                <div>
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Users className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-secondary mb-4">
                                        Team of Experts
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        We have selected a group of experts and professionals in our team to ensure timely completion of productivity. By providing specialized training sessions for these employees, we will ensure that the professionals are always updated themselves with current market demands and customer behavior. All individuals working under the supervision of highly experienced supervisors and inspectors.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Mission & Vision ──────────────────────────────────── */}
            <section className="py-24 bg-gray-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-10 mb-16">
                            <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-secondary mb-4">Our Mission</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    To simplify the hardware development lifecycle by providing seamless, high-quality, and rapid PCB manufacturing and assembly services. We aim to be the silent partner behind the world's most innovative electronic products.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-secondary mb-4">Our Vision</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    To establish India as a premier hub for global electronics manufacturing, setting new benchmarks for precision, reliability, and technological advancement in the PCB industry worldwide.
                                </p>
                            </motion.div>
                        </motion.div>
                    </InView>

                    {/* Company values */}
                    <InView>
                        <motion.div variants={stagger}>
                            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                <span className="w-6 h-0.5 bg-primary" /> Core Values
                            </motion.p>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-secondary mb-10">
                                What Drives Us Every Day
                            </motion.h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: Star, title: "Quality First", desc: "Every board ships only after passing 100% AOI and electrical testing. No exceptions." },
                                    { icon: Zap, title: "Speed & Agility", desc: "Prototype turnarounds in 24 hours. Production schedules that match your roadmap." },
                                    { icon: Users, title: "Customer Focus", desc: "Dedicated account managers and engineering support at every project stage." },
                                    { icon: Globe, title: "Global Mindset", desc: "Serving 40+ countries with internationally recognized quality certifications." },
                                ].map((v, i) => (
                                    <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                            <v.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h4 className="font-display font-bold text-secondary mb-2">{v.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Company Timeline ──────────────────────────────────── */}
            <section className="py-24 bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className={`${C} relative z-10`}>
                    <InView>
                        <motion.div variants={stagger}>
                            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                <span className="w-6 h-0.5 bg-primary" /> Our Journey
                            </motion.p>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-12">
                                Building Trust Since 2021
                            </motion.h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { year: "2021", title: "Founded", desc: "Started with a small prototype PCB lab in Ahmedabad with 5 employees." },
                                    { year: "2022", title: "UL Standards Compliance", desc: "Achieved full compliance with UL safety and manufacturing standards." },
                                    { year: "2024", title: "Global Expansion", desc: "Reached 1,000+ clients across India and started exporting to 20+ countries." },
                                    { year: "2026", title: "Industry Leader", desc: "10,000+ boards delivered, 5,000+ customers, 40+ countries served globally." },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeUp} className="relative">
                                        <div className="text-4xl font-display font-bold text-primary mb-3">{item.year}</div>
                                        <h4 className="font-display font-bold text-white text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Certifications ────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center mb-14">
                            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3 justify-center">
                                <span className="w-6 h-0.5 bg-primary" /> Certifications
                            </motion.p>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-secondary">
                                Enterprise-Grade Certifications
                            </motion.h2>
                        </motion.div>

                        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Award, title: "IPC-A-600 Compliant", sub: "Acceptability of Printed Boards" },
                                { icon: CheckCircle2, title: "UL Certified", sub: "Product Safety Standards" },
                                { icon: Globe, title: "RoHS Compliant", sub: "Lead-Free Manufacturing" },
                            ].map((cert, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <cert.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h4 className="font-display font-bold text-secondary text-lg mb-1">{cert.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cert.sub}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────────── */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className={C}>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-display font-bold text-secondary mb-4">Ready to Partner With Us?</h2>
                        <p className="text-muted-foreground mb-8">Let our engineering team handle your next PCB project — from prototype to production.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild className="bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 font-semibold">
                                <Link href="/pcb-calculator">PCB Calculator <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                            <Button asChild variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white font-semibold">
                                <Link href="/why-us">View Capabilities</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

