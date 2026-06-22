import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Award, Target, MapPin, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 px-4 md:px-6 mb-16 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Engineering Excellence, Manufactured in India</h1>
            <p className="text-xl text-primary font-semibold mb-6">"From Imagination To Innovation"</p>
            <p className="text-lg text-white/80 leading-relaxed">
              MegaByte's Circuit Systems is a Tier-1 electronics manufacturer empowering engineers, hardware startups, and global enterprises to bring their innovations to life with unmatched quality and speed.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6 space-y-24">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-24 relative z-20">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "10,000+", label: "Projects Delivered" },
            { value: "5,000+", label: "Happy Customers" },
            { value: "40+", label: "Countries Served" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (i * 0.1) }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-md text-center"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-sm font-medium text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-4 flex items-center">
                <Target className="w-8 h-8 text-primary mr-3" /> Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To simplify the hardware development lifecycle by providing seamless, high-quality, and rapid PCB manufacturing and assembly services. We aim to be the silent partner behind the world's most innovative electronic products.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-4 flex items-center">
                <Zap className="w-8 h-8 text-primary mr-3" /> Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To establish India as a premier hub for global electronics manufacturing, setting new benchmarks for precision, reliability, and technological advancement in the PCB industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-64 rounded-xl"></div>
            <div className="bg-gray-300 h-64 rounded-xl mt-8"></div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white rounded-2xl border p-12 text-center shadow-sm">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8">Enterprise-Grade Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-2 border-primary/20 mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <span className="font-bold text-secondary">ISO 9001:2015</span>
              <span className="text-sm text-muted-foreground">Quality Management</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-2 border-primary/20 mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <span className="font-bold text-secondary">ISO 14001:2015</span>
              <span className="text-sm text-muted-foreground">Environmental Standards</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-2 border-primary/20 mb-4">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <span className="font-bold text-secondary">UL Certified</span>
              <span className="text-sm text-muted-foreground">Safety Standards</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-2 border-primary/20 mb-4">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <span className="font-bold text-secondary">RoHS Compliant</span>
              <span className="text-sm text-muted-foreground">Lead-Free Manufacturing</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// Temporary import fixes
import { Shield, CheckCircle2 } from "lucide-react";
