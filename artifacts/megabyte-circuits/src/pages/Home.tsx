import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  CircuitBoard, Cpu, Settings, Activity, Zap, CheckCircle2, 
  Shield, Truck, Wrench, Package, ArrowRight, Star, Plus, Minus,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCalculateQuote } from "@workspace/api-client-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const calculatorSchema = z.object({
  pcbType: z.string().min(1, "Select PCB Type"),
  layers: z.coerce.number().min(1),
  boardWidth: z.coerce.number().min(10),
  boardHeight: z.coerce.number().min(10),
  quantity: z.coerce.number().min(1),
  thickness: z.string().optional(),
  copperWeight: z.string().optional(),
  surfaceFinish: z.string().optional(),
});

export default function Home() {
  const calculateQuote = useCalculateQuote();

  const form = useForm<z.infer<typeof calculatorSchema>>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      pcbType: "standard",
      layers: 2,
      boardWidth: 50,
      boardHeight: 50,
      quantity: 10,
      thickness: "1.6mm",
      copperWeight: "1oz",
      surfaceFinish: "hasl",
    },
  });

  function onSubmit(values: z.infer<typeof calculatorSchema>) {
    calculateQuote.mutate({ data: values });
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-secondary text-white">
        {/* Animated Background SVG */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              d="M0 200 L200 200 L250 150 L500 150 L550 250 L1000 250" 
              fill="none" 
              stroke="#22C55E" 
              strokeWidth="2"
            />
          </svg>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/30 text-sm py-1">From Imagination To Innovation</Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              India's Trusted PCB Manufacturing Partner
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              High-Precision PCB Fabrication, PCB Assembly, and Component Sourcing Services for Startups, Engineers, and Enterprises.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-base h-14 px-8">
                Get Instant Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-base h-14 px-8">
                Upload Gerber Files
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
              {[
                { value: "10,000+", label: "PCBs Delivered" },
                { value: "5,000+", label: "Happy Customers" },
                { value: "99.9%", label: "Quality Rate" },
                { value: "24/7", label: "Technical Support" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Enterprise-Grade Electronics Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive solutions from prototype to mass production.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CircuitBoard,
                title: "PCB Manufacturing",
                desc: "Prototype, Production, Multilayer, Flexible, and HDI boards fabricated to exact specifications.",
                link: "/manufacturing"
              },
              {
                icon: Cpu,
                title: "PCB Assembly",
                desc: "SMT, Through Hole, Mixed Tech, and full Turnkey assembly services under one roof.",
                link: "/assembly"
              },
              {
                icon: Package,
                title: "Component Sourcing",
                desc: "BOM management, global procurement, supply chain optimization, and alternate finding.",
                link: "/manufacturing"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Link href={service.link}>
                  <Card className="h-full border-gray-100 hover:border-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Why Partner With Us?</h2>
            <p className="text-muted-foreground text-lg">We deliver reliability and precision at scale.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Instant Quotation", desc: "Get accurate pricing in seconds." },
              { icon: Activity, title: "Automated DFM", desc: "Design for manufacturability checks." },
              { icon: Truck, title: "Fast Turnaround", desc: "Prototypes as fast as 24 hours." },
              { icon: Shield, title: "Premium Quality", desc: "100% AOI and electrical testing." },
              { icon: Settings, title: "ISO Standard", desc: "ISO 9001:2015 certified facility." },
              { icon: CircuitBoard, title: "Competitive Pricing", desc: "Optimized for your exact needs." },
              { icon: Wrench, title: "Expert Support", desc: "Engineering assistance 24/7." },
              { icon: Globe, title: "Worldwide Shipping", desc: "Delivering globally via trusted partners." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-primary border border-gray-100">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-secondary mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING PROCESS */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">From Concept to Delivery</h2>
            <p className="text-white/70 text-lg">A streamlined, transparent process designed for speed and quality.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-4">
              {[
                "Upload Gerber", "DFM Analysis", "Instant Quotation", "PCB Fabrication", 
                "PCB Assembly", "Quality Inspection", "Packaging & Delivery"
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold mb-4 border-4 border-secondary shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-sm">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PCB CAPABILITIES & 7. COST CALCULATOR (Combined in one section for layout) */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Capabilities */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">Technical Capabilities</h2>
              <p className="text-muted-foreground mb-8">We utilize state-of-the-art equipment to manufacture boards that meet the highest industry standards.</p>
              
              <div className="bg-white rounded-xl border overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm">
                  <tbody className="divide-y">
                    {[
                      ["Layers", "1 - 32 Layers"],
                      ["Min Trace/Space", "3mil / 3mil"],
                      ["Min Drill Size", "0.15mm (Mechanical), 0.1mm (Laser)"],
                      ["Board Thickness", "0.2mm - 6.0mm"],
                      ["Max Copper Weight", "Up to 6oz"],
                      ["Surface Finish", "ENIG, HASL, LF-HASL, OSP, Immersion Silver/Tin"]
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="p-4 font-medium text-secondary">{row[0]}</td>
                        <td className="p-4 text-muted-foreground">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Download Full Capability PDF
              </Button>
            </motion.div>

            {/* Cost Calculator */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h3 className="text-2xl font-display font-bold text-secondary mb-2">PCB Cost Calculator</h3>
                <p className="text-sm text-muted-foreground mb-6">Get an instant estimate for your bare boards.</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="pcbType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>PCB Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue/></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="standard">Standard Rigid</SelectItem>
                                <SelectItem value="flex">Flexible</SelectItem>
                                <SelectItem value="rigid-flex">Rigid-Flex</SelectItem>
                                <SelectItem value="aluminum">Aluminum/MCPCB</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="layers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Layers</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                              <FormControl><SelectTrigger><SelectValue/></SelectTrigger></FormControl>
                              <SelectContent>
                                {[1,2,4,6,8,10,12].map(n => (
                                  <SelectItem key={n} value={n.toString()}>{n} Layer{n>1?'s':''}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="boardWidth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Width (mm)</FormLabel>
                            <FormControl><Input type="number" {...field} /></FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="boardHeight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Height (mm)</FormLabel>
                            <FormControl><Input type="number" {...field} /></FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl><Input type="number" {...field} /></FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="thickness"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Thickness</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue/></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="0.8mm">0.8mm</SelectItem>
                                <SelectItem value="1.0mm">1.0mm</SelectItem>
                                <SelectItem value="1.2mm">1.2mm</SelectItem>
                                <SelectItem value="1.6mm">1.6mm</SelectItem>
                                <SelectItem value="2.0mm">2.0mm</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4" disabled={calculateQuote.isPending}>
                      {calculateQuote.isPending ? "Calculating..." : "Calculate Price"}
                    </Button>
                  </form>
                </Form>

                {calculateQuote.isSuccess && calculateQuote.data && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-secondary">Estimated Cost:</span>
                      <span className="text-2xl font-bold text-primary">{calculateQuote.data.currency} {calculateQuote.data.estimatedCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Estimated Lead Time:</span>
                      <span>{calculateQuote.data.leadTime}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Industries We Empower</h2>
            <p className="text-muted-foreground text-lg">Delivering critical electronics for demanding sectors.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, name: "Automotive Electronics" },
              { icon: Activity, name: "Medical Devices" },
              { icon: Zap, name: "Aerospace Systems" },
              { icon: Settings, name: "Industrial Automation" },
              { icon: CircuitBoard, name: "IoT Devices" },
              { icon: Cpu, name: "Consumer Electronics" },
              { icon: Wrench, name: "Robotics" },
              { icon: Globe, name: "Telecom Infrastructure" }
            ].map((industry, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl bg-gray-50 border p-6 hover:bg-primary transition-colors duration-300"
              >
                <industry.icon className="w-8 h-8 text-primary group-hover:text-white mb-4 transition-colors" />
                <h4 className="font-bold text-secondary group-hover:text-white transition-colors">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Trusted by Engineers</h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                { name: "Rahul Sharma", role: "Hardware Lead", company: "AeroTech Systems", text: "MegaByte's has been our go-to partner for complex HDI boards. Their DFM feedback caught critical errors before production, saving us thousands." },
                { name: "Priya Patel", role: "Founder", company: "MediLife IoT", text: "The turnkey assembly service is flawless. We handed over our Gerber and BOM, and received perfectly assembled, tested boards weeks ahead of schedule." },
                { name: "David Chen", role: "Procurement Manager", company: "Global Auto", text: "Consistent quality and highly competitive pricing on high-volume runs. Their ISO certification and strict QC gives us total peace of mind." },
                { name: "Amit Kumar", role: "Chief Engineer", company: "RoboWorks India", text: "The fastest prototype turnaround we've experienced in India. The rigid-flex boards performed exactly to specification on the first run." }
              ].map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="bg-white/5 border-white/10 backdrop-blur">
                      <CardContent className="p-8">
                        <div className="flex text-accent mb-4">
                          {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-white/90 italic mb-6 leading-relaxed">"{t.text}"</p>
                        <div>
                          <p className="font-bold text-white">{t.name}</p>
                          <p className="text-sm text-white/60">{t.role}, {t.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="position-relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 text-white border-white/20" />
              <CarouselNext className="position-relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 text-white border-white/20" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">Real-world applications of our manufacturing excellence.</p>
            </div>
            <Button variant="outline" className="hidden md:flex">View All Case Studies</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "EV Controller PCB", desc: "Heavy copper 6oz board for automotive.", color: "from-green-400 to-green-600" },
              { title: "IoT Smart Device", desc: "HDI board with 0.1mm microvias.", color: "from-blue-400 to-blue-600" },
              { title: "Medical Monitor", desc: "ISO 13485 compliant rigid-flex assembly.", color: "from-purple-400 to-purple-600" },
              { title: "Industrial PLC", desc: "12-layer impedance controlled board.", color: "from-orange-400 to-orange-600" }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className={`h-48 rounded-xl bg-gradient-to-br ${study.color} mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">{study.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{study.desc}</p>
                <span className="text-sm font-semibold text-primary flex items-center">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What files do I need to submit for a quotation?", a: "We require standard Gerber files (RS-274X or Gerber X2) along with an NC Drill file. For assembly, we also need a Bill of Materials (BOM) in Excel format and a Pick & Place (Centroid) file." },
              { q: "What is your standard turnaround time?", a: "Our standard turnaround for PCB fabrication is 5-7 working days. For prototypes, we offer expedited services as fast as 24-48 hours depending on layer count and complexity." },
              { q: "Do you offer PCB assembly services for prototypes?", a: "Yes, we specialize in prototype assembly with no minimum order quantity (MOQ). We can assemble a single board or thousands." },
              { q: "Can you source components for my assembly order?", a: "Absolutely. We offer full turnkey services where we procure all components from trusted authorized distributors like DigiKey, Mouser, and direct manufacturers to ensure authenticity." },
              { q: "What are your quality testing procedures?", a: "We perform 100% automated optical inspection (AOI) and electrical testing (flying probe or test fixture) on all manufactured boards. Assembly undergoes further AOI and optional X-ray inspection for BGAs." },
              { q: "Are your PCBs RoHS compliant?", a: "Yes, we offer fully RoHS compliant lead-free manufacturing processes including Lead-Free HASL, ENIG, and OSP surface finishes." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 12. CTA BANNER */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready To Build Your Next Electronics Product?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Upload your Gerber files today for an instant quote, or speak with our engineering team to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-8">
              Get Instant Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold h-14 px-8">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
