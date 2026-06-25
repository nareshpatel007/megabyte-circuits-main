"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  CircuitBoard, Cpu, Settings, Activity, Zap, CheckCircle2,
  Shield, Truck, Wrench, Package, ArrowRight, Star, Globe,
  Upload, ChevronRight, Layers, FlaskConical, Gauge, Award,
  Car, Heart, Plane, Factory, Wifi, Smartphone, Bot, Radio,
  FileCheck, Search, Calculator, Hammer, Eye, Box
} from "lucide-react";
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
import { useCalculateQuote } from "@workspace/api-client-react";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
        ISO 9001:2015
      </motion.div>
      <motion.div
        className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-3 py-2 text-sm font-semibold text-secondary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        24hr Turnaround
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

  function onSubmit(values: z.infer<typeof calculatorSchema>) {
    calculateQuote.mutate({ data: values });
  }

  /* ── HERO ─────────────────────────────────────────────────────────────── */
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-secondary">
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

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl xl:text-7xl font-display font-bold leading-[1.08] text-white mb-6">
                India's Trusted
                <span className="block text-gradient">PCB Manufacturing</span>
                Partner
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/65 mb-10 max-w-xl leading-relaxed">
                High-precision PCB Fabrication, Assembly, and Component Sourcing for Startups, Engineers, and Enterprises — delivered from Ahmedabad, India.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white font-semibold h-13 px-8 text-base shadow-lg shadow-primary/25">
                  <Link href="/contact"><Calculator className="w-4 h-4 mr-2" /> Get Instant Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/8 font-semibold h-13 px-8 text-base backdrop-blur-sm">
                  <Link href="/contact"><Upload className="w-4 h-4 mr-2" /> Upload Gerber Files</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                {[
                  { value: "10K+", label: "PCBs Delivered" },
                  { value: "5K+", label: "Happy Customers" },
                  { value: "99.9%", label: "Quality Rate" },
                  { value: "24/7", label: "Tech Support" },
                ].map((s, i) => (
                  <StatItem key={i} value={s.value} label={s.label} />
                ))}
              </motion.div>
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

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
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
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CircuitBoard,
                  title: "PCB Manufacturing",
                  desc: "Prototype, Production, Multilayer, HDI, Flexible, and Rigid-Flex boards fabricated to exact specifications.",
                  items: ["Prototype PCB", "Multilayer PCB", "Flexible PCB", "HDI PCB"],
                  link: "/manufacturing",
                  color: "from-green-50 to-emerald-50",
                },
                {
                  icon: Cpu,
                  title: "PCB Assembly",
                  desc: "SMT, Through-Hole, Mixed Technology, and complete Turnkey assembly services under one roof.",
                  items: ["SMT Assembly", "Through-Hole", "Turnkey Assembly", "Box Build"],
                  link: "/assembly",
                  color: "from-blue-50 to-sky-50",
                },
                {
                  icon: Package,
                  title: "Component Sourcing",
                  desc: "BOM management, global procurement from authorized distributors, and alternate component recommendations.",
                  items: ["BOM Management", "Global Procurement", "Supply Chain", "Alternates"],
                  link: "/contact",
                  color: "from-purple-50 to-violet-50",
                },
              ].map((service, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={service.link}>
                    <div className="group gradient-border-card border border-gray-100 h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-secondary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                      <ul className="space-y-2 mb-6">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-secondary/80">
                            <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
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
                  <Link href="/manufacturing">Explore Capabilities <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>

              <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Instant Quotation", desc: "Accurate pricing in seconds online" },
                  { icon: FlaskConical, title: "Automated DFM", desc: "Design-for-manufacture checks before production" },
                  { icon: Truck, title: "Fast Turnaround", desc: "Prototypes ready in as little as 24 hours" },
                  { icon: Shield, title: "Premium Quality", desc: "100% AOI + electrical testing on every board" },
                  { icon: Award, title: "ISO Certified", desc: "ISO 9001:2015 certified manufacturing facility" },
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
                    <Link href="/manufacturing">View All Specs</Link>
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
      {/* 6. INDUSTRIES */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-gray-50">
        <div className="section-container">
          <InViewSection>
            <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
              <motion.p variants={fadeUp} className="section-eyebrow justify-center">Industries</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-secondary mb-5">
                Powering Critical Industries
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
                Trusted by engineers and procurement managers in the world's most demanding sectors.
              </motion.p>
            </motion.div>
          </InViewSection>

          <InViewSection>
            <motion.div variants={staggerFast} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Car, name: "Automotive Electronics", desc: "ADAS, EV controllers, body electronics", color: "from-amber-500 to-orange-600" },
                { icon: Heart, name: "Medical Devices", desc: "ISO 13485 compliant, life-critical boards", color: "from-red-500 to-rose-600" },
                { icon: Plane, name: "Aerospace Systems", desc: "High-reliability, certified materials", color: "from-blue-500 to-indigo-600" },
                { icon: Factory, name: "Industrial Automation", desc: "PLCs, motor drives, industrial controls", color: "from-gray-600 to-slate-700" },
                { icon: Wifi, name: "IoT Devices", desc: "Miniaturized, HDI RF boards", color: "from-cyan-500 to-teal-600" },
                { icon: Smartphone, name: "Consumer Electronics", desc: "High-volume, cost-optimized production", color: "from-violet-500 to-purple-600" },
                { icon: Bot, name: "Robotics", desc: "Rigid-flex, high-density robotic PCBs", color: "from-green-500 to-emerald-600" },
                { icon: Radio, name: "Telecom Infrastructure", desc: "High-frequency, low-loss substrates", color: "from-pink-500 to-fuchsia-600" },
              ].map((ind, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-transparent"
                >
                  <div className={`h-2 bg-gradient-to-r ${ind.color} group-hover:h-3 transition-all duration-300`} />
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-4 shadow-md`}>
                      <ind.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-display font-bold text-secondary mb-2 text-sm">{ind.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
                </motion.div>
              ))}
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
                                <SelectItem value="Standard Rigid">Standard Rigid</SelectItem>
                                <SelectItem value="Flexible PCB">Flexible PCB</SelectItem>
                                <SelectItem value="Rigid-Flex PCB">Rigid-Flex PCB</SelectItem>
                                <SelectItem value="Metal Core PCB">Metal Core PCB</SelectItem>
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

      {/* ─────────────────────────────────────────────────────── */}
      {/* 9. CASE STUDIES */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-gray-50">
        <div className="section-container">
          <InViewSection>
            <motion.div variants={stagger} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <motion.div variants={fadeLeft}>
                <p className="section-eyebrow">Case Studies</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">
                  Real-World<br />Project Highlights
                </h2>
              </motion.div>
              <motion.div variants={fadeRight}>
                <Button variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white transition-all">
                  View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </InViewSection>

          <InViewSection>
            <motion.div variants={staggerFast} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "EV Controller PCB", tag: "Automotive", desc: "Heavy copper 6oz board for EV motor drive.", color: "from-emerald-400 via-green-500 to-teal-600", icon: Car },
                { title: "IoT Smart Device", tag: "IoT", desc: "HDI board with 0.10mm microvias for wearable.", color: "from-blue-400 via-sky-500 to-cyan-600", icon: Wifi },
                { title: "Medical Monitor", tag: "Medical", desc: "ISO 13485 compliant rigid-flex PCBA.", color: "from-rose-400 via-red-500 to-pink-600", icon: Heart },
                { title: "Industrial PLC", tag: "Industrial", desc: "12-layer impedance-controlled board.", color: "from-orange-400 via-amber-500 to-yellow-600", icon: Factory },
              ].map((study, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group cursor-pointer"
                >
                  <div className={`h-52 rounded-2xl bg-gradient-to-br ${study.color} mb-4 relative overflow-hidden flex items-center justify-center shadow-lg`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <study.icon className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors duration-300" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/20 text-white border-0 text-xs backdrop-blur-sm">{study.tag}</Badge>
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-secondary text-lg mb-1.5 group-hover:text-primary transition-colors">{study.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{study.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </InViewSection>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 10. BLOG / RESOURCES */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="section-container">
          <InViewSection>
            <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
              <motion.p variants={fadeUp} className="section-eyebrow justify-center">Resources</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-secondary mb-5">
                PCB Engineering Insights
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
                Technical guides and best practices from our engineering team.
              </motion.p>
            </motion.div>
          </InViewSection>

          <InViewSection>
            <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { tag: "Design", title: "PCB Design Tips for Signal Integrity", desc: "Essential trace routing, impedance matching, and ground plane strategies for high-speed designs.", color: "from-primary/10 to-emerald-50" },
                { tag: "Manufacturing", title: "Complete PCB Manufacturing Process Guide", desc: "From bare substrate to finished board: understanding every step of the PCB fabrication process.", color: "from-blue-50 to-sky-50/50" },
                { tag: "Assembly", title: "SMT Assembly Best Practices", desc: "Stencil design, paste deposition, reflow profiles, and defect prevention in surface-mount assembly.", color: "from-purple-50 to-violet-50/50" },
                { tag: "Components", title: "Component Selection for Harsh Environments", desc: "How to choose components rated for automotive, industrial, and military temperature ranges.", color: "from-orange-50 to-amber-50/50" },
              ].map((blog, i) => (
                <motion.div key={i} variants={fadeUp} className="group cursor-pointer">
                  <div className={`rounded-2xl bg-gradient-to-br ${blog.color} border border-gray-100 p-6 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
                    <Badge variant="secondary" className="self-start mb-4 bg-primary/10 text-primary border-0 hover:bg-primary/10">{blog.tag}</Badge>
                    <h4 className="font-display font-bold text-secondary text-base mb-3 leading-snug group-hover:text-primary transition-colors">{blog.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{blog.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all mt-auto">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </InViewSection>
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
                  <Link href="/contact"><Calculator className="w-5 h-5 mr-2" /> Get Instant Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold h-14 px-10 text-base backdrop-blur-sm">
                  <Link href="/contact">Contact Sales Team <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} className="mt-14 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
                {["ISO 9001:2015 Certified", "RoHS Compliant", "100% Electrical Testing", "24hr Prototype Available", "Global Shipping"].map((badge) => (
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
