"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2, Shield, Layers, Zap, Cpu, Aperture,
  Settings, HardDrive, ArrowRight, Download, Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
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

const BOARD_TYPES = [
  { icon: Layers, title: "Standard Rigid PCBs", desc: "1 to 8 layers for consumer electronics, IoT devices, and standard industrial applications." },
  { icon: Cpu, title: "Multilayer PCBs", desc: "Up to 32 layers with complex stack-ups for servers, aerospace, and defense systems." },
  { icon: Zap, title: "HDI Boards", desc: "High Density Interconnects with microvias, blind/buried vias, and fine 3mil lines." },
  { icon: Aperture, title: "Flexible PCBs", desc: "Polyimide-based boards for wearables, medical devices, and compact form factors." },
  { icon: Settings, title: "Rigid-Flex PCBs", desc: "Combining rigid and flexible technologies for robust, space-saving 3D designs." },
  { icon: Shield, title: "Metal Core (MCPCB)", desc: "Aluminum and copper-backed boards for high-power LED and power electronics." },
  { icon: HardDrive, title: "High Frequency RF", desc: "Specialized materials (Rogers, Teflon) for RF, microwave, and telecom applications." },
  { icon: CheckCircle2, title: "Heavy Copper", desc: "Up to 6oz copper weight for power supplies, bus bars, and automotive power stages." },
];

const CAPABILITIES = [
  ["Layer Count", "1 – 16 Layers", "Up to 32 Layers"],
  ["Board Material", "FR4 (Tg 130–170)", "Rogers, Teflon, Polyimide, Aluminum"],
  ["Board Thickness", "0.4mm – 3.2mm", "0.2mm – 6.0mm"],
  ["Min Trace / Space", "4mil / 4mil", "3mil / 3mil"],
  ["Min Hole Size", "0.2mm Mechanical", "0.15mm Mech / 0.10mm Laser Via"],
  ["Copper Weight", "0.5oz – 2oz", "Up to 6oz"],
  ["Surface Finish", "HASL, LF-HASL, ENIG", "OSP, IAg, ISn, Hard Gold"],
  ["Solder Mask", "Green, White, Black, Red", "Blue, Yellow, Matte Green / Black"],
  ["Testing", "100% AOI, Flying Probe", "Impedance (TDR), Microsection, X-Ray"],
];

const QA_ITEMS = [
  "100% Automated Optical Inspection (AOI)",
  "Electrical Testing — Flying Probe & Bed of Nails",
  "Impedance Control Measurement (TDR)",
  "Microsection Analysis",
  "Solderability Testing (J-STD-003)",
  "UL Certification & IPC Class 2 / 3 Compliance",
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-secondary text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className={`${C} relative z-10`}>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <span className="w-6 h-0.5 bg-primary" /> PCB Manufacturing
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              High-Precision<br />
              <span className="text-primary">PCB Fabrication</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 mb-10 leading-relaxed max-w-xl">
              From rapid prototypes to mass production — industrial-grade bare boards fabricated with unrivaled precision. We specialise in complex, high-layer-count, and HDI boards for critical applications.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25">
                <Link href="/contact">Get Instant Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold">
                <a href="#capabilities">View Capabilities</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Board Types ───────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className={C}>
          <InView>
            <motion.div variants={stagger}>
              <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                <span className="w-6 h-0.5 bg-primary" /> Board Types
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-secondary mb-3">
                Boards We Manufacture
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground mb-12 max-w-2xl">
                Comprehensive fabrication capabilities to support any engineering requirement — from a single prototype to high-volume production.
              </motion.p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BOARD_TYPES.map((type, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-secondary text-base mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </InView>
        </div>
      </section>

      {/* ── Technical Capabilities ────────────────────────────── */}
      <section id="capabilities" className="py-24 bg-white">
        <div className={C}>
          <InView>
            <motion.div variants={stagger}>
              <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                <span className="w-6 h-0.5 bg-primary" /> Specifications
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-secondary mb-10">
                Technical Capabilities
              </motion.h2>

              <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                {/* Table header */}
                <div className="bg-secondary text-white px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg">Manufacturing Tolerances</h3>
                    <p className="text-sm text-white/55 mt-0.5">Standard and advanced capability ranges</p>
                  </div>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 shrink-0 text-sm">
                    <Download className="w-4 h-4 mr-2" /> Download PDF
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-6 py-3.5 font-semibold text-secondary/70 text-xs uppercase tracking-wide">Parameter</th>
                        <th className="text-left px-6 py-3.5 font-semibold text-secondary/70 text-xs uppercase tracking-wide">Standard</th>
                        <th className="text-left px-6 py-3.5 font-semibold text-secondary/70 text-xs uppercase tracking-wide">Advanced</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CAPABILITIES.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-primary/3 transition-colors`}>
                          <td className="px-6 py-4 font-semibold text-secondary text-sm">{row[0]}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row[1]}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          </InView>
        </div>
      </section>

      {/* ── Quality Assurance ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className={C}>
          <InView>
            <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  <span className="w-6 h-0.5 bg-primary" /> Quality Assurance
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-5">
                  Zero-Defect Manufacturing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our facility operates under ISO 9001:2015 standards with complete traceability and reliability for mission-critical applications. Every board is inspected and tested before dispatch.
                </p>
                <ul className="space-y-4 mb-8">
                  {QA_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-secondary font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 font-semibold">
                  <Link href="/contact">Request Quality Audit <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="bg-secondary rounded-2xl p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                      <Eye className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-3">State-of-the-Art AOI</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-6">
                      Our automated optical inspection systems capture 3D images of every solder joint and component, detecting defects invisible to the human eye.
                    </p>
                  </div>
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    {[
                      { label: "Inspection Points", value: "100%" },
                      { label: "Defect Detection", value: "99.98%" },
                      { label: "AOI Speed", value: "≤ 60s/board" },
                      { label: "IPC Class", value: "Class 2 & 3" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <div className="text-primary font-bold text-lg font-display">{stat.value}</div>
                        <div className="text-white/50 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </InView>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className={C}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Start Your PCB Project Today</h2>
            <p className="text-muted-foreground mb-8">Upload your Gerber files and receive a detailed quote within 2 hours.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-md shadow-primary/20">
                <Link href="/contact">Get Instant Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white font-semibold">
                <Link href="/contact">Talk to an Engineer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
