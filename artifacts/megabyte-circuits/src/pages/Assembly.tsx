import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  CheckCircle2, Cpu, Wrench, Package, Truck,
  Activity, ArrowRight, Settings, Zap, Shield, Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

const SERVICES = [
  {
    icon: Cpu,
    title: "SMT Assembly",
    desc: "High-speed automated Surface Mount Technology lines capable of placing components down to 01005 packages, BGAs, and fine-pitch QFPs with 100% AOI inspection.",
    features: ["BGA & Micro-BGA Placement", "01005, 0201 Ultra-Fine Components", "Double-sided SMT Lines", "Lead-free & leaded reflow"],
  },
  {
    icon: Wrench,
    title: "Through-Hole & Mixed",
    desc: "Precision wave soldering and selective soldering for through-hole components, combined with manual stations for specialized connectors and heavy parts.",
    features: ["Wave & Selective Soldering", "Mixed Technology (SMT + THT)", "Hand soldering by IPC-certified staff", "Connector & press-fit assembly"],
  },
  {
    icon: Package,
    title: "Turnkey & Box Build",
    desc: "Full-service solution: we manufacture the PCB, source all components, assemble the board, burn firmware, run functional tests, and build the final enclosure.",
    features: ["Global Component Sourcing", "Firmware Flashing & Programming", "Functional & ICT Testing", "Final Enclosure Assembly"],
  },
];

const PROCESS_STEPS = [
  { icon: Truck, title: "Procurement", desc: "Source authentic components globally, checking for end-of-life and alternates." },
  { icon: Cpu, title: "PCB Fabrication", desc: "Bare boards manufactured to exact DFM specifications in-house." },
  { icon: Settings, title: "SMT / THT Assembly", desc: "Automated placement, reflow soldering, and wave / selective soldering." },
  { icon: Eye, title: "AOI & X-Ray", desc: "100% automated optical inspection and X-ray for BGA components." },
  { icon: Activity, title: "Functional Testing", desc: "In-circuit and functional test to verify every board performs to spec." },
  { icon: Package, title: "Packaging", desc: "ESD-safe packaging and worldwide shipping via trusted logistics partners." },
];

const CAPABILITIES_TABLE = [
  ["Min Component Size", "01005 (0.4mm × 0.2mm)"],
  ["BGA Pitch", "Down to 0.3mm"],
  ["Placement Accuracy", "±25μm (3σ)"],
  ["Solder Paste", "Lead-free & leaded options"],
  ["Reflow Profiles", "SAC305, SnPb, Low-temp"],
  ["Testing", "AOI, X-Ray, Flying Probe, Functional ICT"],
  ["Certifications", "IPC-A-610 Class 2 & 3, J-STD-001"],
  ["Min MOQ", "1 board (prototype)"],
];

export default function Assembly() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-secondary text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#0B7A33_25%,transparent_25%,transparent_75%,#0B7A33_75%),linear-gradient(45deg,#0B7A33_25%,transparent_25%,transparent_75%,#0B7A33_75%)] [background-size:20px_20px] [background-position:0_0,10px_10px]" />
        <div className={`${C} relative z-10`}>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <span className="w-6 h-0.5 bg-primary" /> PCB Assembly
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Complete PCB<br />
              <span className="text-primary">Assembly Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 mb-10 leading-relaxed max-w-xl">
              End-to-end PCBA solutions — from component procurement and SMT assembly to testing and box build. We act as your extended manufacturing arm.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25">
                <Link href="/contact">Get Assembly Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold">
                <a href="#process">View Process</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Assembly Services ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className={C}>
          <InView>
            <motion.div variants={stagger}>
              <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                <span className="w-6 h-0.5 bg-primary" /> Our Services
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-secondary mb-3">
                Assembly Capabilities
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground mb-12 max-w-2xl">
                Advanced surface-mount and through-hole technology, with full turnkey options for complex assemblies.
              </motion.p>

              <div className="grid lg:grid-cols-3 gap-8">
                {SERVICES.map((service, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-secondary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-sm text-secondary font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </InView>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section id="process" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className={`${C} relative z-10`}>
          <InView>
            <motion.div variants={stagger}>
              <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                <span className="w-6 h-0.5 bg-primary" /> Process
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-12">
                The Turnkey Assembly Process
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-1">Step {String(i + 1).padStart(2, "0")}</div>
                        <h4 className="font-display font-bold text-white text-base mb-2">{step.title}</h4>
                        <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </InView>
        </div>
      </section>

      {/* ── Capabilities Table ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className={C}>
          <InView>
            <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div variants={fadeUp}>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  <span className="w-6 h-0.5 bg-primary" /> Assembly Specs
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-5">
                  Assembly Specifications
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our assembly lines handle the full spectrum of component packages — from massive heat-sink connectors down to the smallest 01005 passives.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Zap, text: "No minimum order quantity for prototypes" },
                    { icon: Shield, text: "IPC-certified assembly technicians" },
                    { icon: CheckCircle2, text: "Full DFM and DFA review included" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-secondary">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                  <div className="bg-secondary px-6 py-4">
                    <h3 className="font-display font-bold text-white">Assembly Capability Data</h3>
                    <p className="text-sm text-white/50 mt-0.5">Standard specifications for SMT and THT lines</p>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {CAPABILITIES_TABLE.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"} hover:bg-primary/3 transition-colors`}>
                          <td className="px-5 py-4 font-semibold text-secondary">{row[0]}</td>
                          <td className="px-5 py-4 text-muted-foreground">{row[1]}</td>
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className={C}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Ready to Assemble Your Board?</h2>
            <p className="text-muted-foreground mb-8">
              Upload your Gerber files and BOM — we'll get back with a detailed assembly quote within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-md shadow-primary/20">
                <Link href="/contact">Request Assembly Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
