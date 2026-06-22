import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  Globe, Award, Target, Zap, Shield, CheckCircle2,
  ArrowRight, Users, Factory, Clock, Star,
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

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-secondary text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className={`${C} relative z-10`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <span className="w-6 h-0.5 bg-primary" /> About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Engineering Excellence,<br />
              <span className="text-primary">Manufactured in India</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
              MegaByte's Circuit Systems is a Tier-1 electronics manufacturer empowering engineers, hardware startups, and global enterprises to bring innovations to life with unmatched quality and speed.
            </motion.p>
            <motion.p variants={fadeUp} className="text-primary font-semibold italic text-xl">
              "From Imagination To Innovation"
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className={C}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 -mt-8 relative z-10">
            {[
              { icon: Clock, value: "15+", label: "Years of Experience" },
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
                Building Trust Since 2010
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { year: "2010", title: "Founded", desc: "Started with a small prototype PCB lab in Ahmedabad with 5 employees." },
                  { year: "2014", title: "ISO 9001 Certified", desc: "Earned ISO 9001:2015 certification and expanded to multilayer board production." },
                  { year: "2018", title: "Global Expansion", desc: "Reached 1,000+ clients across India and started exporting to 20+ countries." },
                  { year: "2024", title: "Industry Leader", desc: "10,000+ boards delivered, 5,000+ customers, 40+ countries served globally." },
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

            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "ISO 9001:2015", sub: "Quality Management System" },
                { icon: Shield, title: "ISO 14001:2015", sub: "Environmental Management" },
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
                <Link href="/contact">Get Instant Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white font-semibold">
                <Link href="/manufacturing">View Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
