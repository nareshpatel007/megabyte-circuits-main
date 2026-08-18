"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    CircuitBoard, Cpu, Settings, Activity, Zap, CheckCircle2,
    Shield, Truck, Wrench, Package, ArrowRight, Star, Globe,
    Upload, ChevronRight, Layers, FlaskConical, Gauge, Award,
    Car, Heart, Plane, Factory, Wifi, Smartphone, Bot, Radio,
    FileCheck, Search, Calculator, Hammer, Eye, Box, Briefcase, GraduationCap, HelpCircle, Users,
    Calendar, Clock, Phone, Mail
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCalculateQuote } from "@/lib/api-client";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FeaturedProducts } from "@/components/FeaturedProducts";

/* ─── Animation Presets ─────────────────────────────────────────────────── */

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const staggerFast = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

function InViewSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

/* ─── Count-up Stat ─────────────────────────────────────────────────────── */
function StatItem({ value, label }: { value: string; label: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-1">{value}</div>
            <div className="text-sm text-white/50 uppercase tracking-wide font-medium">{label}</div>
        </motion.div>
    );
}

/* ─── Calculator Schema ──────────────────────────────────────────────────── */
const calculatorSchema = z.object({
    pcbType: z.string().min(1),
    layers: z.coerce.number().min(1),
    boardWidth: z.coerce.number().min(10),
    boardHeight: z.coerce.number().min(10),
    quantity: z.coerce.number().min(1),
    thickness: z.string().optional(),
    copperWeight: z.string().optional(),
    surfaceFinish: z.string().optional(),
});

/* ─── CircuitSVG Background ──────────────────────────────────────────────── */
function CircuitBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34,197,94,0.08)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />

                {/* Animated circuit traces */}
                {[
                    "M 0 180 L 120 180 L 160 140 L 360 140 L 400 180 L 700 180",
                    "M 0 320 L 80 320 L 120 280 L 500 280 L 540 320 L 900 320",
                    "M 200 0 L 200 100 L 260 160 L 260 400",
                    "M 500 0 L 500 60 L 560 120 L 560 300",
                    "M 800 100 L 900 100 L 940 140 L 1280 140",
                ].map((d, i) => (
                    <motion.path
                        key={i}
                        d={d}
                        fill="none"
                        stroke="#22C55E"
                        strokeWidth="1.5"
                        strokeDasharray="8 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 3 + i * 0.5, delay: i * 0.3, ease: "linear", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                    />
                ))}

                {/* Circuit nodes */}
                {[
                    [120, 180], [360, 140], [700, 180],
                    [80, 320], [500, 280], [200, 100],
                    [500, 60], [900, 100],
                ].map(([cx, cy], i) => (
                    <motion.circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill="#22C55E"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0.6] }}
                        transition={{ duration: 1, delay: 1 + i * 0.2, repeat: Infinity, repeatDelay: 3 + i * 0.5 }}
                    />
                ))}
            </svg>

            {/* Radial glow */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[80px] translate-y-1/3" />
        </div>
    );
}

/* ─── Floating PCB Visual ────────────────────────────────────────────────── */
function PCBVisual() {
    return (
        <div className="relative w-full max-w-md mx-auto select-none">
            <motion.div
                className="animate-float-slow relative"
                style={{ perspective: 1000 }}
            >
                <div className="w-80 h-56 mx-auto rounded-2xl bg-gradient-to-br from-[#1a3a1a] via-[#0d2a0d] to-[#0a1f0a] border border-green-700/40 relative overflow-hidden shadow-2xl shadow-green-900/50">
                    {/* PCB grid lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="pcb-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22C55E" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#pcb-grid)" />
                    </svg>

                    {/* Traces */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {[
                            "M 40 80 L 100 80 L 130 50 L 200 50",
                            "M 40 120 L 80 120 L 110 90 L 240 90 L 270 120 L 320 120",
                            "M 160 160 L 160 130 L 200 90",
                            "M 40 160 L 100 160 L 130 130",
                        ].map((d, i) => (
                            <motion.path
                                key={i}
                                d={d}
                                fill="none"
                                stroke="#22C55E"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                            />
                        ))}
                    </svg>

                    {/* Components */}
                    {[
                        { x: 45, y: 45, w: 50, h: 30, label: "MCU" },
                        { x: 160, y: 35, w: 30, h: 20, label: "CLK" },
                        { x: 220, y: 100, w: 40, h: 25, label: "PWR" },
                    ].map((comp, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded border border-green-400/40 bg-green-900/60 flex items-center justify-center"
                            style={{ left: comp.x, top: comp.y, width: comp.w, height: comp.h }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.3 }}
                        >
                            <span className="text-green-400 text-[8px] font-mono font-bold">{comp.label}</span>
                        </motion.div>
                    ))}

                    {/* Via holes */}
                    {[[100, 140], [140, 60], [240, 140], [280, 60]].map(([cx, cy], i) => (
                        <div key={i} className="absolute w-3 h-3 rounded-full border-2 border-green-500/60 bg-green-950" style={{ left: cx - 6, top: cy - 6 }} />
                    ))}
                </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 text-sm font-semibold text-secondary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Custom Design and Layout
            </motion.div>
            <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-3 py-2 text-sm font-semibold text-secondary flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Quality Testing
            </motion.div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════════════════════ */
export default function Home() {
    const calculateQuote = useCalculateQuote();
    const form = useForm<z.infer<typeof calculatorSchema>>({
        resolver: zodResolver(calculatorSchema),
        defaultValues: { pcbType: "Standard Rigid", layers: 2, boardWidth: 50, boardHeight: 50, quantity: 10, thickness: "1.6mm", copperWeight: "1oz", surfaceFinish: "HASL" },
    });

    const [activeTab, setActiveTab] = React.useState("prototype");

    const pcbTabs = [
        {
            id: "prototype",
            label: "Prototype PCB",
            desc: "Megabytes circuit Systems is the PCB manufacturer with fast reaction. We offer quick-turn PCB prototypes to turn your prototype boards around fast while still maintaining complete adherence to your design specifications.",
            specs: [
                { name: "Quantity", val: "1-100 pcs" },
                { name: "Quality Grade", val: "Standard IPC 2" },
                { name: "Lead time", val: "1-9 days" },
                { name: "Material", val: "FR4" }
            ]
        },
        {
            id: "design",
            label: "PCB Design",
            desc: "It is recommended to use Standard PCB service when your design is ready to transform from prototype phase to production phase. We have handled hundreds of thousands of PCB projects, and covered almost all kinds of substrate materials including FR4, Aluminum, Rogers, etc.",
            specs: [
                { name: "Quality Grade", val: "Standard IPC 2" },
                { name: "Lead time", val: "1 days- 5 weeks" },
                { name: "Material", val: "FR4" }
            ]
        },
        {
            id: "manufacturing",
            label: "PCB Manufacturing",
            points: [
                "Schematic Capture: We convert your circuit ideas into a detailed schematic diagram.",
                "PCB Layout Design: We design the physical layout of the PCB, optimizing for performance, reliability, and manufacturability.",
                "Design for Manufacturing (DFM): We ensure that your design is ready for efficient and cost-effective production.",
                "Fabrication Files: We generate manufacturing files for you, like Gerber files.",
                "Prototype Testing: We can assist with prototype testing to verify the functionality and performance of the design.",
                "Production Run: We also provide PCB Manufacturing and Assembly Services for your production run."
            ]
        },
        {
            id: "assembly",
            label: "PCB Assembly",
            points: [
                "PCB Assembly with the Highest Quality and on-time delivery for surface mount, through hole and press-Fit technology.",
                "Focus on Engineering prototypes, NPI, Rapid Prototyping, Low-mid Volume manufacturing with Quick turnaround time.",
                "Supports Single-sided, Double-sided, Surface mount assembly and Through-hole PCBA Assembly.",
                "PCBA Assembly of surface mount and through hole components on Rigid, Flexible, and Flex-Rigid PCB's.",
                "Meticulous PCB assembly services backed by highly skilled professionals and processes.",
                "A comprehensive multi-stage QC process ensures consistent quality and high production yield.",
                "Production Process Includes AOI, FPT, X-ray inspection, Conformal Coating.",
                "Press-Fit connector Assembly including Design and manufacturing of press-fit connector assembly."
            ]
        }
    ];

    function onSubmit(values: z.infer<typeof calculatorSchema>) {
        calculateQuote.mutate({ data: values });
    }

    /* ── HERO ─────────────────────────────────────────────────────────────── */
    return (
        <div className="flex flex-col min-h-screen">

            {/* 1. HERO */}
            <section className="relative flex items-center pt-28 sm:pt-32 md:pt-50 pb-12 md:pb-16 overflow-hidden bg-secondary">
                <CircuitBackground />

                <div className="section-container w-full relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.div variants={fadeUp} className="mb-5">
                                <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    From Imagination To Innovation
                                </span>
                            </motion.div>

                            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-[1.1] text-white mb-6">
                                India's Biggest
                                <span className="block text-gradient">PCB Manufacturer</span>
                                in Ahmedabad Megabytes Circuit Systems
                            </motion.h1>

                            <motion.p variants={fadeUp} className="text-lg text-white/65 mb-10 max-w-2xl leading-relaxed">
                                Welcome to Megabytes Circuit Systems, Ahmedabad's trusted PCB manufacturing partner since 2021. We deliver high-quality circuit boards across India, ensuring precision, reliability, and custom solutions for your business.
                            </motion.p>
                        </motion.div>

                        {/* Right – PCB Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="hidden lg:flex justify-center"
                        >
                            <PCBVisual />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 1.2 INSTANT PCB QUOTE WIDGET */}
            <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 border border-slate-200/90 dark:border-zinc-800 shadow-2xl shadow-slate-900/10">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-zinc-800">
                        <div>
                            <span className="text-xs font-black uppercase tracking-widest text-primary dark:text-emerald-400 bg-primary/10 dark:bg-emerald-950/50 px-3 py-1 rounded-md">
                                Instant Online Quote
                            </span>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-1">
                                Calculate PCB Price Instantly
                            </h3>
                        </div>
                    </div>

                    <Form {...form}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const vals = form.getValues();
                                const query = new URLSearchParams({
                                    layers: String(vals.layers || 2),
                                    boardWidth: String(vals.boardWidth || 100),
                                    boardHeight: String(vals.boardHeight || 100),
                                    quantity: String(vals.quantity || 5),
                                    pcbType: vals.pcbType || "Standard Rigid",
                                    thickness: vals.thickness || "1.6mm",
                                    copperWeight: vals.copperWeight || "1oz",
                                    surfaceFinish: vals.surfaceFinish || "HASL",
                                }).toString();

                                const quoteBase = process.env.NEXT_PUBLIC_QUOTE_URL || "http://localhost:3001";
                                window.location.href = `${quoteBase.replace(/\/$/, "")}/?${query}`;
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-end gap-3 w-full"
                        >
                            {/* Layers */}
                            <FormField
                                control={form.control}
                                name="layers"
                                render={({ field }) => (
                                    <FormItem className="w-full min-w-0">
                                        <FormLabel className="text-xs font-bold text-slate-700 block mb-1">Layers</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                                            <FormControl>
                                                <SelectTrigger className="h-11 w-full rounded-xl bg-slate-50/60 border-slate-200 text-xs font-bold text-slate-800 focus:bg-white focus:ring-1 focus:ring-primary">
                                                    <SelectValue placeholder="Layers" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[1, 2, 4, 6, 8, 10].map((l) => (
                                                    <SelectItem key={l} value={String(l)} className="text-xs font-medium cursor-pointer">
                                                        {l} {l === 1 ? "Layer" : "Layers"}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* Width */}
                            <FormField
                                control={form.control}
                                name="boardWidth"
                                render={({ field }) => (
                                    <FormItem className="w-full min-w-0">
                                        <FormLabel className="text-xs font-bold text-slate-700 block mb-1">Width (mm)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                min={10}
                                                {...field}
                                                className="h-11 w-full rounded-xl bg-slate-50/60 border-slate-200 text-xs font-bold text-center text-slate-800 focus:bg-white focus:ring-1 focus:ring-primary"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Height */}
                            <FormField
                                control={form.control}
                                name="boardHeight"
                                render={({ field }) => (
                                    <FormItem className="w-full min-w-0">
                                        <FormLabel className="text-xs font-bold text-slate-700 block mb-1">Height (mm)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                min={10}
                                                {...field}
                                                className="h-11 w-full rounded-xl bg-slate-50/60 border-slate-200 text-xs font-bold text-center text-slate-800 focus:bg-white focus:ring-1 focus:ring-primary"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Quantity */}
                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem className="w-full min-w-0">
                                        <FormLabel className="text-xs font-bold text-slate-700 block mb-1">Quantity (pcs)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                min={1}
                                                {...field}
                                                className="h-11 w-full rounded-xl bg-slate-50/60 border-slate-200 text-xs font-bold text-center text-slate-800 focus:bg-white focus:ring-1 focus:ring-primary"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* PCB Type */}
                            <FormField
                                control={form.control}
                                name="pcbType"
                                render={({ field }) => (
                                    <FormItem className="w-full min-w-0">
                                        <FormLabel className="text-xs font-bold text-slate-700 block mb-1">PCB Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-11 w-full rounded-xl bg-slate-50/60 border-slate-200 text-xs font-bold text-slate-800 focus:bg-white focus:ring-1 focus:ring-primary">
                                                    <SelectValue placeholder="PCB Type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Standard Rigid" className="text-xs font-medium cursor-pointer">FR4 Standard</SelectItem>
                                                <SelectItem value="Flex" className="text-xs font-medium cursor-pointer">Flex</SelectItem>
                                                <SelectItem value="Rogers" className="text-xs font-medium cursor-pointer">Rogers</SelectItem>
                                                <SelectItem value="PTFE Teflon" className="text-xs font-medium cursor-pointer">PTFE Taflon</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* Get Quote Action Button */}
                            <div className="w-full">
                                <Button
                                    type="submit"
                                    className="h-11 w-full px-4 bg-primary hover:bg-primary/90 text-white font-extrabold rounded-xl text-xs shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 whitespace-nowrap"
                                >
                                    Get Quote <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </section>

            {/* 1.5 FEATURED PRODUCTS */}
            <FeaturedProducts />

            {/* ─── Capabilities Tab Section ─── */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="section-container max-w-6xl mx-auto">
                    <InViewSection>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                Capabilities
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
                                Our Core PCB Capabilities
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Toggle through our core offerings to view turnaround times, quantity options, substrate materials, and key deliverables.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        {/* Tabs Navigation */}
                        <div className="w-full bg-[#05141f] rounded-t-2xl flex overflow-hidden border-b-4 border-primary shadow-lg">
                            {pcbTabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 text-center py-5 px-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative ${isActive
                                            ? "bg-primary text-white"
                                            : "bg-[#091b29] text-white/70 hover:text-white hover:bg-[#0c263a]"
                                            }`}
                                    >
                                        {tab.label}
                                        {isActive && (
                                            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[8px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary z-10" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tabs Content Panel */}
                        <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-8 md:p-12 shadow-xl shadow-slate-100/50">
                            {pcbTabs.map((tab) => {
                                if (tab.id !== activeTab) return null;
                                return (
                                    <motion.div
                                        key={tab.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        {tab.desc && (
                                            <p className="text-secondary/80 text-base md:text-lg leading-relaxed mb-6 font-medium">
                                                {tab.desc}
                                            </p>
                                        )}

                                        {tab.specs && (
                                            <ul className="grid sm:grid-cols-2 gap-4">
                                                {tab.specs.map((spec, index) => (
                                                    <li key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                                        <span className="text-sm font-bold text-secondary">{spec.name}:</span>
                                                        <span className="text-sm text-secondary/80">{spec.val}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {tab.points && (
                                            <ul className="space-y-4">
                                                {tab.points.map((point, index) => (
                                                    <li key={index} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100/70">
                                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                        <span className="text-sm text-secondary/80 leading-relaxed font-medium">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────── */}
            {/* 2. SERVICES */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-white">
                <div className="section-container">
                    <InViewSection>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.p variants={fadeUp} className="section-eyebrow justify-center">Our Services</motion.p>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-secondary mb-5">
                                End-to-End Electronics Manufacturing
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                                From a single prototype to full-scale production runs, we cover every step with precision and accountability.
                            </motion.p>
                        </motion.div>
                    </InViewSection>

                    <InViewSection>
                        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Wrench,
                                    title: "Prototype PCB",
                                    desc: "Quick-turn prototype PCB fabrication to test and validate your designs fast.",
                                    link: "/prototype-pcb",
                                    color: "from-green-50 to-emerald-50",
                                },
                                {
                                    icon: Settings,
                                    title: "PCB Design",
                                    desc: "Professional schematic design and high-speed multi-layer PCB layout services.",
                                    link: "/pcb-design-ahmedabad",
                                    color: "from-blue-50 to-sky-50",
                                },
                                {
                                    icon: CircuitBoard,
                                    title: "PCB Manufacturing",
                                    desc: "High-quality single layer, double layer, and complex multilayer PCB production.",
                                    link: "/pcb-manufacturing-ahmedabad",
                                    color: "from-emerald-50 to-teal-50",
                                },
                                {
                                    icon: Cpu,
                                    title: "PCB Assembly",
                                    desc: "Advanced SMT, through-hole, mechanical, and complete turnkey assembly services.",
                                    link: "/pcb-assembly-ahmedabad",
                                    color: "from-sky-50 to-indigo-50",
                                },
                                {
                                    icon: Activity,
                                    title: "PCB Developing Services",
                                    desc: "Comprehensive board development, firmware integration, and hardware engineering solutions.",
                                    link: "/pcb-developing-services-ahmedabad",
                                    color: "from-purple-50 to-violet-50",
                                },
                                {
                                    icon: Hammer,
                                    title: "PCB Fabrication",
                                    desc: "Precision copper routing, micro-drilling, custom profiling, and panelization.",
                                    link: "/pcb-fabrication-ahmedabad",
                                    color: "from-amber-50 to-orange-50",
                                },
                                {
                                    icon: FileCheck,
                                    title: "Design For Manufacturability (DFM) Support",
                                    desc: "Thorough DFM analysis and engineering reviews to prevent production errors.",
                                    link: "/design-for-manufacturability-dfm-support",
                                    color: "from-rose-50 to-red-50",
                                },
                                {
                                    icon: Shield,
                                    title: "Testing And Quality Assurance",
                                    desc: "100% AOI, flying probe testing, electrical checks, and visual inspections.",
                                    link: "/testing-and-quality-assurance",
                                    color: "from-teal-50 to-cyan-50",
                                },
                            ].map((service, i) => (
                                <motion.div key={i} variants={fadeUp}>
                                    <Link href={service.link}>
                                        <div className="group relative bg-gradient-to-b from-white to-slate-50/50 rounded-2xl border border-slate-100 p-6 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-15px_rgba(11,122,51,0.12)] hover:border-primary/25 cursor-pointer overflow-hidden">
                                            {/* Top right subtle glow */}
                                            <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all duration-300 pointer-events-none" />

                                            <div>
                                                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 border border-slate-100 group-hover:border-primary/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                                                    <service.icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                                                </div>
                                                <h3 className="text-lg font-display font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-200">{service.title}</h3>
                                                <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors duration-200">
                                                Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InViewSection>
                </div>
            </section>

            {/* ─── Industries We Serve Section ─── */}
            <section className="py-28 bg-[#0a141d] relative overflow-hidden border-y border-slate-900 text-white">
                {/* Subtle decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[125px] pointer-events-none" />

                <div className="section-container max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <InViewSection>
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                Industries We Serve
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
                                Powering Critical Electronics
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed">
                                We deliver innovative products and services that enhance operational efficiency and drive growth. By understanding the specific challenges faced by these industries, we are committed to offering high-quality, reliable solutions that empower our clients to achieve their goals.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: "Aerospace and Defense", desc: "High-reliability, certified materials for critical applications.", icon: Plane, color: "from-blue-50 to-indigo-50/30" },
                                { label: "Automotive", desc: "ADAS, EV motor controllers, and robust body electronics.", icon: Car, color: "from-amber-50 to-orange-50/30" },
                                { label: "Commercial", desc: "Standard PCBs for smart commercial devices and controllers.", icon: Briefcase, color: "from-sky-50 to-blue-50/30" },
                                { label: "Industrial", desc: "Heavy-duty PCBs for PLCs, motor drives, and automation.", icon: Factory, color: "from-gray-50 to-slate-50/30" },
                                { label: "Lighting", desc: "Custom MCPCB and FR4 solutions for high-power LED systems.", icon: Zap, color: "from-yellow-50 to-amber-50/30" },
                                { label: "Medical", desc: "High-density boards for life-critical healthcare equipment.", icon: Heart, color: "from-red-50 to-rose-50/30" },
                                { label: "Telecom", desc: "High-frequency, low-loss substrates for infrastructure.", icon: Radio, color: "from-pink-50 to-fuchsia-50/30" },
                                { label: "Educational Institutes", desc: "Specialized prototyping support for academic research and R&D.", icon: GraduationCap, color: "from-purple-50 to-violet-50/30" },
                            ].map((ind, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="group relative bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(17,122,51,0.08)] hover:border-primary/25 cursor-pointer overflow-hidden"
                                >
                                    {/* Top right subtle gradient decoration */}
                                    <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all duration-300 pointer-events-none" />

                                    <div>
                                        <div className={`w-12 h-12 bg-gradient-to-br ${ind.color} rounded-xl flex items-center justify-center mb-5 border border-slate-100 group-hover:border-primary/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                                            <ind.icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                                        </div>
                                        <h3 className="text-base font-display font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-200">
                                            {ind.label}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {ind.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────── */}
            {/* 3. WHY CHOOSE US */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-gray-50 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                <div className="section-container relative z-10">
                    <InViewSection>
                        <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                            <motion.div variants={fadeLeft}>
                                <p className="section-eyebrow">Why MegaByte's?</p>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-5">
                                    Engineering Excellence At Every Step
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    We combine cutting-edge manufacturing technology with ISO-certified processes to deliver boards that meet the most demanding specifications — on time, every time.
                                </p>
                                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/25">
                                    <Link href="/why-us">Explore Capabilities <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </motion.div>

                            <motion.div variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    { icon: Zap, title: "Instant Quotation", desc: "Accurate pricing in seconds online" },
                                    { icon: FlaskConical, title: "Automated DFM", desc: "Design-for-manufacture checks before production" },
                                    { icon: Truck, title: "Fast Turnaround", desc: "Prototypes ready in as little as 24 hours" },
                                    { icon: Shield, title: "Premium Quality", desc: "100% AOI + electrical testing on every board" },
                                    { icon: Award, title: "RoHS Compliant", desc: "Eco-friendly, lead-free board manufacturing" },
                                    { icon: Gauge, title: "Competitive Pricing", desc: "Best-value pricing without quality compromise" },
                                    { icon: Wrench, title: "Expert Support", desc: "Engineering assistance available 24/7" },
                                    { icon: Globe, title: "Global Shipping", desc: "Delivered worldwide via trusted logistics" },
                                ].map((feat, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                                            <feat.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h4 className="font-display font-bold text-secondary text-sm mb-1">{feat.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </InViewSection>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────── */}
            {/* 4. MANUFACTURING PROCESS */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-secondary relative overflow-hidden">
                <CircuitBackground />

                <div className="section-container relative z-10">
                    <InViewSection>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-20">
                            <motion.p variants={fadeUp} className="section-eyebrow justify-center text-primary">Our Process</motion.p>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
                                From Concept to Delivery
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-white/60 text-lg">
                                A transparent, streamlined workflow designed for speed, quality, and peace of mind.
                            </motion.p>
                        </motion.div>
                    </InViewSection>

                    <InViewSection>
                        <motion.div variants={stagger} className="relative">
                            {/* Connecting line */}
                            <div className="hidden lg:block absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
                                {[
                                    { icon: Upload, label: "Upload Gerber", step: "01" },
                                    { icon: Search, label: "DFM Analysis", step: "02" },
                                    { icon: Calculator, label: "Instant Quote", step: "03" },
                                    { icon: CircuitBoard, label: "PCB Fabrication", step: "04" },
                                    { icon: Cpu, label: "PCB Assembly", step: "05" },
                                    { icon: Eye, label: "Quality Inspection", step: "06" },
                                    { icon: Box, label: "Packaging & Delivery", step: "07" },
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        transition={{ delay: i * 0.08 }}
                                        className="relative flex flex-col items-center text-center group"
                                    >
                                        {/* Step bubble */}
                                        <div className="relative mb-4">
                                            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                                                <step.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                                                {step.step}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">
                                            {step.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </InViewSection>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────── */}
            {/* 5. PCB CAPABILITIES */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-white">
                <div className="section-container">
                    <InViewSection>
                        <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left – text */}
                            <motion.div variants={fadeLeft}>
                                <p className="section-eyebrow">Specifications</p>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-5">
                                    Industry-Leading Technical Capabilities
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Our state-of-the-art facility manufactures boards that meet the strictest aerospace, medical, and automotive standards — from single-layer prototypes to 32-layer HDI production boards.
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <Button className="bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20">
                                        Download Capability PDF
                                    </Button>
                                    <Button variant="outline" asChild className="border-secondary/20 text-secondary hover:bg-gray-50">
                                        <Link href="/why-us">View All Specs</Link>
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Right – capability table */}
                            <motion.div variants={fadeRight}>
                                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-100">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-white">
                                                <th className="text-left px-6 py-4 font-semibold text-white/70 text-xs uppercase tracking-wider">Parameter</th>
                                                <th className="text-left px-6 py-4 font-semibold text-white/70 text-xs uppercase tracking-wider">Specification</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                ["Layer Count", "1 – 32 Layers"],
                                                ["Minimum Trace/Space", "3mil / 3mil"],
                                                ["Minimum Drill Size", "0.15mm Mechanical / 0.10mm Laser"],
                                                ["Board Thickness", "0.2mm – 6.0mm"],
                                                ["Maximum Copper Weight", "Up to 6oz"],
                                                ["Surface Finish", "ENIG, HASL, LF-HASL, OSP, IAg, ISn"],
                                                ["Board Size", "Up to 610mm × 610mm"],
                                                ["Controlled Impedance", "±5% Tolerance"],
                                            ].map((row, i) => (
                                                <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"} hover:bg-primary/3 transition-colors`}>
                                                    <td className="px-6 py-4 font-semibold text-secondary text-sm">{row[0]}</td>
                                                    <td className="px-6 py-4 text-muted-foreground text-sm">{row[1]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </motion.div>
                    </InViewSection>
                </div>
            </section>



            {/* ─────────────────────────────────────────────────────── */}
            {/* 7. PCB COST CALCULATOR */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-secondary relative overflow-hidden">
                <CircuitBackground />
                <div className="section-container relative z-10">
                    <InViewSection>
                        <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left – text */}
                            <motion.div variants={fadeLeft} className="lg:pt-8">
                                <p className="section-eyebrow text-primary">Pricing</p>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
                                    Instant PCB Cost Estimator
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed mb-8">
                                    Configure your board specifications and get a real-time cost estimate in Indian Rupees. For a formal quote with full DFM analysis, submit your Gerber files.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { icon: Zap, text: "Real-time pricing calculation" },
                                        { icon: FileCheck, text: "Covers layers, dimensions, surface finish" },
                                        { icon: Truck, text: "Lead time estimate included" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white/70">
                                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                                                <item.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-sm">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right – calculator */}
                            <motion.div variants={fadeRight}>
                                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <Calculator className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-secondary text-lg leading-none">PCB Calculator</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">Prices in Indian Rupees (INR)</p>
                                        </div>
                                    </div>

                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                            <div className="grid grid-cols-2 gap-4">
                                                <FormField control={form.control} name="pcbType" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">PCB Type</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl><SelectTrigger className="h-10"><SelectValue /></SelectTrigger></FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="Standard Rigid">FR4 Standard</SelectItem>
                                                                <SelectItem value="Flex">Flex</SelectItem>
                                                                <SelectItem value="Rogers">Rogers</SelectItem>
                                                                <SelectItem value="PTFE Teflon">PTFE Taflon</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="layers" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Layers</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                                            <FormControl><SelectTrigger className="h-10"><SelectValue /></SelectTrigger></FormControl>
                                                            <SelectContent>
                                                                {[1, 2, 4, 6, 8, 10, 12, 16].map(n => (
                                                                    <SelectItem key={n} value={n.toString()}>{n} Layer{n > 1 ? "s" : ""}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="boardWidth" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Width (mm)</FormLabel>
                                                        <FormControl><Input type="number" className="h-10" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="boardHeight" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Height (mm)</FormLabel>
                                                        <FormControl><Input type="number" className="h-10" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="quantity" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Quantity</FormLabel>
                                                        <FormControl><Input type="number" className="h-10" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="surfaceFinish" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Surface Finish</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl><SelectTrigger className="h-10"><SelectValue /></SelectTrigger></FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="HASL">HASL (Lead)</SelectItem>
                                                                <SelectItem value="ENIG">ENIG</SelectItem>
                                                                <SelectItem value="OSP">OSP</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 shadow-lg shadow-primary/25" disabled={calculateQuote.isPending}>
                                                {calculateQuote.isPending ? (
                                                    <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Calculating...</span>
                                                ) : (
                                                    <span className="flex items-center gap-2"><Calculator className="w-4 h-4" /> Calculate Price</span>
                                                )}
                                            </Button>
                                        </form>
                                    </Form>

                                    {calculateQuote.isSuccess && calculateQuote.data && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-green-50 p-5"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-sm font-semibold text-secondary">Estimated Cost</span>
                                                <span className="text-2xl font-display font-bold text-primary">
                                                    ₹{calculateQuote.data.estimatedCost.toLocaleString("en-IN")}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                                <span>Estimated Lead Time</span>
                                                <span className="font-medium text-secondary">{calculateQuote.data.leadTime}</span>
                                            </div>
                                            <div className="border-t border-primary/10 pt-3 space-y-1">
                                                <div className="flex justify-between text-xs text-muted-foreground">
                                                    <span>Base cost</span>
                                                    <span>₹{(calculateQuote.data.breakdown?.baseCost ?? 0).toLocaleString("en-IN")}</span>
                                                </div>
                                                <div className="flex justify-between text-xs text-muted-foreground">
                                                    <span>Layer surcharge</span>
                                                    <span>₹{(calculateQuote.data.breakdown?.layerSurcharge ?? 0).toLocaleString("en-IN")}</span>
                                                </div>
                                                <div className="flex justify-between text-xs text-muted-foreground">
                                                    <span>Surface finish</span>
                                                    <span>₹{(calculateQuote.data.breakdown?.finishSurcharge ?? 0).toLocaleString("en-IN")}</span>
                                                </div>
                                            </div>
                                            <Button asChild size="sm" className="w-full mt-4 bg-primary text-white hover:bg-primary/90">
                                                <Link href="/contact">Request Formal Quote</Link>
                                            </Button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </InViewSection>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────── */}
            {/* 8. TESTIMONIALS */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-white">
                <div className="section-container">
                    <InViewSection>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.p variants={fadeUp} className="section-eyebrow justify-center">Testimonials</motion.p>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-secondary mb-5">
                                Trusted by Engineers Worldwide
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
                                Hear from hardware teams and founders who rely on MegaByte's Circuit Systems.
                            </motion.p>
                        </motion.div>
                    </InViewSection>

                    <InViewSection>
                        <motion.div variants={fadeUp}>
                            <Carousel opts={{ loop: true }} className="w-full max-w-6xl mx-auto">
                                <CarouselContent className="-ml-4">
                                    {[
                                        { name: "Rahul Sharma", role: "Hardware Lead", company: "AeroTech Systems", text: "MegaByte's has been our go-to partner for complex HDI boards. Their DFM feedback caught critical errors before production, saving us thousands of rupees and weeks of delay." },
                                        { name: "Priya Patel", role: "Founder", company: "MediLife IoT", text: "The turnkey assembly service is flawless. We handed over our Gerber and BOM, and received perfectly assembled, tested boards weeks ahead of schedule. Exceptional quality." },
                                        { name: "David Chen", role: "Procurement Manager", company: "Global Auto Parts", text: "Consistent quality and highly competitive pricing on high-volume runs. Their ISO certification and strict QC gives our supply chain total peace of mind." },
                                        { name: "Amit Kumar", role: "Chief Engineer", company: "RoboWorks India", text: "The fastest prototype turnaround we've experienced in India. The rigid-flex boards performed exactly to specification on the very first run — zero rework required." },
                                    ].map((t, i) => (
                                        <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/2">
                                            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                                                <div className="flex text-primary mb-5">
                                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                                                </div>
                                                <p className="text-secondary/80 leading-relaxed mb-8 italic">"{t.text}"</p>
                                                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-green-700 flex items-center justify-center text-white font-bold text-sm">
                                                        {t.name.split(" ").map(n => n[0]).join("")}
                                                    </div>
                                                    <div>
                                                        <p className="font-display font-bold text-secondary text-sm">{t.name}</p>
                                                        <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="flex justify-center gap-3 mt-10">
                                    <CarouselPrevious className="static translate-y-0 bg-gray-50 hover:bg-primary hover:text-white hover:border-primary border-gray-200 text-secondary transition-colors" />
                                    <CarouselNext className="static translate-y-0 bg-gray-50 hover:bg-primary hover:text-white hover:border-primary border-gray-200 text-secondary transition-colors" />
                                </div>
                            </Carousel>
                        </motion.div>
                    </InViewSection>
                </div>
            </section>



            {/* ─── Bottom Info Cards Section ─── */}
            <section className="relative overflow-hidden text-white border-t border-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Quality Assurance Card */}
                    <div className="bg-[#1a2332] p-12 md:p-16 flex flex-col items-center text-center justify-start min-h-[500px] hover:bg-[#1f2a3a] transition-all duration-300 relative group">
                        {/* Decorative glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                            <Star className="w-10 h-10 text-emerald-600 fill-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-display font-extrabold tracking-wider uppercase mb-6 text-white border-b-2 border-primary/20 pb-3 w-full max-w-[200px]">
                            Quality Assurance
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                            To become the customer-oriented organization, we are engaged in offering best quality products at reasonable prices. In order to maintain high quality standards in our range, we have hired skilled quality analysts, who keep close eye on procurement process and ensure that only flawless range is procured. We lay great emphasis on packaging of our range, so that products reach safely to the clients end.
                        </p>
                    </div>

                    {/* Why Us Card */}
                    <div className="bg-primary p-12 md:p-16 flex flex-col items-center text-center justify-start min-h-[500px] hover:bg-primary/95 transition-all duration-300 relative group">
                        {/* Decorative glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                            <HelpCircle className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-display font-extrabold tracking-wider uppercase mb-6 text-white border-b-2 border-white/20 pb-3 w-full max-w-[200px]">
                            Why Us?
                        </h3>
                        <p className="text-sm text-white/90 leading-relaxed font-medium mb-6">
                            Our tremendous industrial experience and knowledge has enabled us to gain a prominent position in industry. Our friendly policies and timely deliveries have enabled us to become the first choice of the clients nationwide.
                        </p>
                        <div className="w-full pt-6 border-t border-white/10 mt-auto">
                            <p className="text-xs uppercase tracking-wider text-white/70 font-bold mb-3">Following are the reasons for our success:</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {["Prompt delivery", "Ethical deals", "Transparency", "Flexible payments", "Huge network"].map((reason, index) => (
                                    <span key={index} className="text-[11px] font-bold bg-white/10 border border-white/15 px-3 py-1 rounded-full text-white">
                                        {reason}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team of Experts Card */}
                    <div className="bg-[#151c28] p-12 md:p-16 flex flex-col items-center text-center justify-start min-h-[500px] hover:bg-[#1a2332] transition-all duration-300 relative group">
                        {/* Decorative glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-display font-extrabold tracking-wider uppercase mb-6 text-white border-b-2 border-primary/20 pb-3 w-full max-w-[200px]">
                            Team of Experts
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                            We have selected a group of experts and professionals in our team to ensure timely completion of productivity. By providing specialized training sessions for these employees, we will ensure that the professionals are always updated themselves with current market demands and customer behavior. All individuals working under the supervision of highly experienced supervisors and inspectors.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────── */}
            {/* 11. FAQ */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-gray-50">
                <div className="section-container">
                    <InViewSection>
                        <motion.div variants={stagger} className="grid lg:grid-cols-5 gap-16 items-start">
                            {/* Left */}
                            <motion.div variants={fadeLeft} className="lg:col-span-2 lg:sticky lg:top-32">
                                <p className="section-eyebrow">FAQ</p>
                                <h2 className="text-4xl font-display font-bold text-secondary mb-5">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Can't find your answer? Speak directly with one of our PCB engineers.
                                </p>
                                <Button asChild className="bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20">
                                    <Link href="/contact">Contact Engineering Team <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </motion.div>

                            {/* Right */}
                            <motion.div variants={fadeRight} className="lg:col-span-3">
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    {[
                                        { q: "What files do I need to submit for a quotation?", a: "We require standard Gerber files (RS-274X or Gerber X2) along with an NC Drill file. For PCB assembly orders, we also need a Bill of Materials (BOM) in Excel/CSV format and a Pick & Place (Centroid) file for SMT components." },
                                        { q: "What is your standard turnaround time?", a: "Standard PCB fabrication is 5–7 business days. Expedited prototype service is available in as fast as 24–48 hours depending on layer count and complexity. Assembly turnaround depends on component availability." },
                                        { q: "Do you offer PCB assembly for prototypes?", a: "Yes, we specialize in prototype assembly with no minimum order quantity (MOQ). We can assemble a single board or scale directly to thousands with the same quality process." },
                                        { q: "Can you source components for my assembly order?", a: "Absolutely. We offer full turnkey services where we procure all components from authorized distributors like DigiKey, Mouser, and direct manufacturers — ensuring 100% authenticity." },
                                        { q: "What quality testing do you perform?", a: "We perform 100% automated optical inspection (AOI) and electrical testing (flying probe or dedicated fixture) on all boards. PCB assembly undergoes additional AOI and optional X-ray inspection for BGA components." },
                                        { q: "Are your PCBs RoHS compliant?", a: "Yes, we offer fully RoHS-compliant, lead-free manufacturing including Lead-Free HASL, ENIG, and OSP surface finishes. We can also produce HASL (leaded) boards when required by specific applications." },
                                    ].map((faq, i) => (
                                        <AccordionItem
                                            key={i}
                                            value={`item-${i}`}
                                            className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
                                        >
                                            <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary py-5 hover:no-underline text-sm">
                                                {faq.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                                                {faq.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        </motion.div>
                    </InViewSection>
                </div>
            </section>

            {/* ─── BLOG / RESOURCES ─── */}
            <section className="py-28 bg-white">
                <div className="section-container">
                    <InViewSection>
                        <motion.div variants={stagger} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                            <motion.div variants={fadeLeft}>
                                <p className="section-eyebrow">Resources</p>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">
                                    PCB Engineering Insights
                                </h2>
                                <p className="text-muted-foreground text-lg mt-2">
                                    Technical guides and best practices from our engineering team.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeRight}>
                                <Button asChild variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white transition-all">
                                    <Link href="/services">More Insights <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </InViewSection>

                    <InViewSection>
                        <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {BLOG_POSTS.slice(0, 3).map((post) => (
                                <motion.div
                                    key={post.slug}
                                    variants={fadeUp}
                                    className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full"
                                >
                                    {/* Card Visual Image */}
                                    <div className="relative h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary text-white border-0 font-bold px-3 py-1 text-xs">
                                                {post.tag}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-500 mb-3">
                                                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                            </div>
                                            <h3 className="font-display font-bold text-secondary text-lg leading-snug group-hover:text-primary transition-colors mb-3">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                                {post.desc}
                                            </p>
                                        </div>

                                        {/* Card Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-xs text-primary">
                                                    {post.author.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-secondary leading-none">{post.author.name}</p>
                                                    <p className="text-[10px] text-muted-foreground">{post.author.role}</p>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                                                Read Article <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InViewSection>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────── */}
            {/* 12. CTA BANNER */}
            {/* ─────────────────────────────────────────────────────── */}
            <section className="py-28 bg-secondary relative overflow-hidden">
                {/* Animated background */}
                <CircuitBackground />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10" />

                {/* Glowing orbs */}
                <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-[100px] -translate-y-1/2 pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[80px] -translate-y-1/2 pointer-events-none" />

                <div className="section-container relative z-10 text-center">
                    <InViewSection>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto">
                            <motion.div variants={fadeUp} className="mb-6">
                                <Badge className="bg-primary/20 text-primary border-primary/30 text-xs uppercase tracking-widest px-4 py-1.5">
                                    Start Your Project Today
                                </Badge>
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                Ready To Build Your Next
                                <span className="block text-gradient">Electronics Product?</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Upload your Gerber files for an instant quote, or speak with our engineering team to discuss your specific requirements.
                            </motion.p>
                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-10 text-base shadow-2xl shadow-primary/30">
                                    <Link href="/pcb-calculator"><Calculator className="w-5 h-5 mr-2" /> PCB Calculator</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold h-14 px-10 text-base backdrop-blur-sm">
                                    <Link href="/contact">Contact Sales Team <ArrowRight className="w-5 h-5 ml-2" /></Link>
                                </Button>
                            </motion.div>

                            {/* Trust badges */}
                            <motion.div variants={fadeUp} className="mt-14 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
                                {["RoHS Compliant", "100% Electrical Testing", "24hr Prototype Available", "Global Shipping"].map((badge) => (
                                    <span key={badge} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> {badge}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </InViewSection>
                </div>
            </section>
        </div>
    );
}
