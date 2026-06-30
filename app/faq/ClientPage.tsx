"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { 
  HelpCircle, ChevronDown, Search, ArrowRight, MessageSquare, 
  Settings, ShieldAlert, Cpu, Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface FAQItem {
  id: string;
  category: "production" | "design" | "capabilities" | "general";
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    id: "lead-time",
    category: "production",
    question: "What's the lead time for PCB production?",
    answer: "Our lead time depends on the complexity and quantity of the order. Typical prototyping takes 1 to 5 days, while production runs can range from 7 to 15 days.",
  },
  {
    id: "file-formats",
    category: "design",
    question: "What file formats do you accept for PCB designs?",
    answer: "We accept Gerber files (RS-274X), ODB++, and IPC-2581 formats. Please ensure all layers, including drill files and outline layers, are included in your archive.",
  },
  {
    id: "dfm-assistance",
    category: "design",
    question: "Do you offer design assistance or DFM reviews?",
    answer: "Yes, our expert engineering team provides a complimentary Design for Manufacturability (DFM) support check for every order to ensure your design is optimized for fabrication without errors.",
  },
  {
    id: "low-volume",
    category: "capabilities",
    question: "Can you handle high-mix, low-volume orders?",
    answer: "Absolutely. We cater to both large-scale production runs and small, custom prototype orders with no minimum order quantity requirements.",
  },
  {
    id: "capabilities-specs",
    category: "capabilities",
    question: "What are your standard manufacturing tolerances and capabilities?",
    answer: "We support up to 32-layer PCBs, minimum trace width/spacing of 3mil, minimum drill size of 0.15mm, and finishes including HASL, Lead-free HASL, ENIG, and Immersion Silver.",
  },
  {
    id: "shipping-global",
    category: "production",
    question: "Do you offer global shipping?",
    answer: "Yes, we ship worldwide. We partner with leading global logistics providers like DHL and FedEx to ensure secure, rapid, and trackable deliveries to your doorstep.",
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "production" | "design" | "capabilities" | "general">("all");
  const [expandedId, setExpandedId] = useState<string | null>("lead-time"); // default first item open

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFAQs = FAQS_DATA.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "production", label: "Production & Lead Time", icon: Truck },
    { id: "design", label: "Design & Files (DFM)", icon: Settings },
    { id: "capabilities", label: "PCB Capabilities", icon: Cpu },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "FAQs" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <ServiceHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our PCB manufacturing, design formats, DFM assistance, and capabilities."
        badge="FAQ Guide"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full mb-3 inline-block">
              Megabytes Circuit Systems
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary uppercase tracking-wider mt-2">
              Frequently Asked Questions About <span className="text-primary">PCB Manufacturing</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Everything you need to know about starting your PCB project with us, from prototyping parameters to final delivery.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-6 mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search FAQs by keywords..."
                className="pl-12 pr-4 h-12 bg-white border-slate-100 rounded-2xl shadow-sm focus:ring-primary focus:border-primary text-slate-600 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all border ${
                      isActive 
                        ? "bg-primary border-primary text-white shadow-md shadow-primary/20" 
                        : "bg-white border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => {
                const isOpen = expandedId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-secondary hover:text-primary transition-colors gap-4"
                    >
                      <span className="text-base md:text-lg">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 text-sm text-slate-600 leading-relaxed font-medium bg-slate-50/30">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
                <ShieldAlert className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-display font-bold text-secondary text-lg">No FAQs found</h4>
                <p className="text-sm text-muted-foreground mt-1">Try clearing your filters or changing your search terms.</p>
              </div>
            )}
          </div>

          {/* Bottom CTA Card */}
          <div className="bg-gradient-to-br from-secondary to-slate-900 text-white rounded-3xl p-8 shadow-xl mt-14 relative overflow-hidden text-center md:text-left md:flex items-center justify-between gap-6">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="space-y-2 relative z-10 max-w-lg">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                <MessageSquare className="w-3.5 h-3.5" /> Support Center
              </div>
              <h3 className="font-display font-bold text-2xl">Still Have Questions?</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Can't find the answers you're looking for? Reach out to our dedicated support and engineering department.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 shrink-0 relative z-10 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 h-11">
                <Link href="/contact">Contact Our Team <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
