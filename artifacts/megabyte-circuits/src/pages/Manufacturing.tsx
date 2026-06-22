import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Layers, Zap, Cpu, Aperture, Settings, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Manufacturing() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 px-4 md:px-6 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">High-Precision PCB Manufacturing</h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              From rapid prototypes to mass production, MegaByte's Circuit Systems delivers industrial-grade bare boards with unrivaled precision. We specialize in complex, high-layer-count, and HDI boards for critical applications.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">Get Instant Quote</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" size="lg">View Capabilities</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6 space-y-24">
        {/* Board Types */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Board Types We Manufacture</h2>
            <p className="text-muted-foreground">Comprehensive fabrication capabilities to support any engineering requirement.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: "Standard PCBs", desc: "1 to 8 layers for consumer electronics and standard industrial applications." },
              { icon: Cpu, title: "Multilayer PCBs", desc: "Up to 32 layers with complex stackups for servers, aerospace, and defense." },
              { icon: Zap, title: "HDI Boards", desc: "High Density Interconnects with microvias, blind/buried vias, and fine lines." },
              { icon: Aperture, title: "Flexible PCBs", desc: "Polyimide-based boards for wearables, medical devices, and compact spaces." },
              { icon: Settings, title: "Rigid-Flex", desc: "Combining the best of rigid and flexible technologies for robust 3D designs." },
              { icon: Shield, title: "Metal Core (MCPCB)", desc: "Aluminum and copper-backed boards for high-power LED and power electronics." },
              { icon: HardDrive, title: "High Frequency", desc: "Specialized materials (Rogers, Teflon) for RF, microwave, and telecom." },
              { icon: CheckCircle2, title: "Heavy Copper", desc: "Up to 6oz copper weight for power supplies and automotive applications." }
            ].map((type, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <type.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Capabilities Table */}
        <section>
          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <div className="bg-secondary text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-display font-bold">Technical Capabilities</h2>
                <p className="text-sm text-white/70 mt-1">Our standard manufacturing tolerances</p>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hidden sm:flex">
                Download PDF
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-4 font-semibold text-secondary">Parameter</th>
                    <th className="p-4 font-semibold text-secondary">Standard Capability</th>
                    <th className="p-4 font-semibold text-secondary">Advanced Capability</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Layer Count", "1 - 16 Layers", "Up to 32 Layers"],
                    ["Board Material", "FR4 (Tg 130-170)", "Rogers, Teflon, Polyimide, Aluminum"],
                    ["Board Thickness", "0.4mm - 3.2mm", "0.2mm - 6.0mm"],
                    ["Min Trace/Space", "4mil / 4mil", "3mil / 3mil"],
                    ["Min Hole Size", "0.2mm (8mil)", "0.15mm (6mil) / Laser Via 0.1mm"],
                    ["Copper Weight", "0.5oz - 2oz", "Up to 6oz"],
                    ["Surface Finish", "HASL, Lead-Free HASL, ENIG", "OSP, Immersion Silver/Tin, Hard Gold"],
                    ["Solder Mask", "Green, White, Black, Red", "Blue, Yellow, Matte Green/Black, Peelable"],
                    ["Testing", "100% AOI, Flying Probe", "Impedance Testing, Microsection, X-Ray"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-medium text-secondary">{row[0]}</td>
                      <td className="p-4 text-muted-foreground">{row[1]}</td>
                      <td className="p-4 text-muted-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Zero-Defect Quality Assurance</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We implement stringent quality control protocols at every stage of fabrication. Our facility operates under ISO 9001:2015 standards, ensuring complete traceability and reliability for mission-critical applications.
            </p>
            <ul className="space-y-4">
              {[
                "100% Automated Optical Inspection (AOI)",
                "Electrical Testing (Flying Probe & Bed of Nails)",
                "Impedance Control Measurement (TDR)",
                "Microsection Analysis",
                "Solderability Testing",
                "UL Certification & IPC Class 2/3 Compliance"
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span className="text-secondary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center border-4 border-white shadow-lg overflow-hidden relative group">
             {/* Placeholder for real image */}
             <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply transition-opacity group-hover:opacity-60" />
             <Aperture className="w-24 h-24 text-white/50" />
             <div className="absolute bottom-6 left-6 text-white font-display font-bold text-xl drop-shadow-md">
               State-of-the-Art AOI Systems
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
