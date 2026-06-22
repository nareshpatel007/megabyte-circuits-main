import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Wrench, Package, Truck, Activity, ArrowRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Assembly() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 px-4 md:px-6 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#0B7A33_25%,transparent_25%,transparent_75%,#0B7A33_75%,#0B7A33),linear-gradient(45deg,#0B7A33_25%,transparent_25%,transparent_75%,#0B7A33_75%,#0B7A33)] [background-size:20px_20px]" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Complete PCB Assembly Services</h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              End-to-end PCBA solutions. From component procurement to SMT assembly, testing, and box build. We act as your extended manufacturing arm, accelerating your time-to-market.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">Get Assembly Quote</Button>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6 space-y-24">
        {/* Assembly Services */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Our Assembly Capabilities</h2>
            <p className="text-muted-foreground">Advanced surface mount and through-hole technology for complex assemblies.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">SMT Assembly</h3>
              <p className="text-muted-foreground mb-4">
                High-speed automated Surface Mount Technology lines capable of placing components down to 01005 packages, BGAs, and fine-pitch QFPs with 100% AOI inspection.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> BGA & Micro-BGA Placement</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> 01005, 0201 Components</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> Double-sided SMT</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Through-Hole & Mixed</h3>
              <p className="text-muted-foreground mb-4">
                Precision wave soldering and selective soldering for through-hole components, combined with manual soldering stations for specialized connectors and heavy components.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> Wave Soldering</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> Selective Soldering</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> Mixed Tech (SMT + THT)</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Turnkey & Box Build</h3>
              <p className="text-muted-foreground mb-4">
                Full-service solution: we manufacture the PCB, source all components, assemble the board, burn firmware, run functional tests, and assemble the final enclosure.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> Global Component Sourcing</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> Firmware Flashing</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-primary mr-2" /> Final Enclosure Assembly</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Turnkey Process */}
        <section className="bg-secondary rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">The Turnkey Assembly Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/20" />
            
            {[
              { icon: Truck, title: "1. Procurement", desc: "We source authentic components globally, checking for end-of-life and alternates." },
              { icon: Cpu, title: "2. PCB Fabrication", desc: "Bare boards are manufactured to exact DFM specifications." },
              { icon: Settings, title: "3. SMT/THT Assembly", desc: "Automated placement, reflow, and wave soldering." },
              { icon: Activity, title: "4. Testing & QA", desc: "AOI, X-Ray, and Functional Testing before final packaging." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="bg-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-secondary shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
