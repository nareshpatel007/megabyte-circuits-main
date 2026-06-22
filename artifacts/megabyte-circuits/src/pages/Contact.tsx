import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2,
  Upload, Calculator, ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Headquarters",
    lines: [
      "GIDC Electronics Estate, Sector 25",
      "Gandhinagar, Ahmedabad",
      "Gujarat 382024, India",
    ],
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["Sales: +91 98765 43210", "Support: +91 98765 43211"],
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["quotes@megabytecircuits.com", "info@megabytecircuits.com"],
    href: "mailto:info@megabytecircuits.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM IST", "Saturday: 9:00 AM – 2:00 PM IST", "24/7 Technical Support"],
    href: undefined,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", serviceType: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitContact.mutate(
      { data: values },
      {
        onSuccess: () => {
          setSubmitted(true);
          toast({
            title: "Message Sent Successfully",
            description: "Our engineering team will contact you within 24 hours.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error Sending Message",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-secondary text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className={`${C} relative z-10`}>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <span className="w-6 h-0.5 bg-primary" /> Contact Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Talk to Our<br />
              <span className="text-primary">Engineering Team</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 leading-relaxed max-w-xl">
              Whether you need a quick prototype, a complex multilayer HDI board, or full turnkey assembly — our experts are ready to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className={C}>
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* ── Left sidebar ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {/* Contact info card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h3 className="font-display font-bold text-secondary text-lg mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {CONTACT_INFO.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary text-sm mb-1">{item.title}</h4>
                        {item.lines.map((line, j) => (
                          item.href && j === 0 ? (
                            <a key={j} href={item.href} target="_blank" rel="noopener noreferrer"
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                              {line}
                            </a>
                          ) : (
                            <p key={j} className="text-sm text-muted-foreground">{line}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="bg-secondary rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-lg mb-2">Need a Quick Quote?</h3>
                <p className="text-sm text-white/55 mb-6 leading-relaxed">
                  Use our instant calculator to estimate costs for your PCB fabrication project.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold justify-start">
                    <Link href="/#calculator">
                      <Calculator className="w-4 h-4 mr-2" /> Open Calculator
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 font-semibold justify-start">
                    <Link href="/manufacturing">
                      <Upload className="w-4 h-4 mr-2" /> View Capabilities
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Response time badge */}
              <div className="bg-primary/8 border border-primary/20 rounded-2xl p-5 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
                <div>
                  <p className="text-sm font-bold text-secondary">Typical response time</p>
                  <p className="text-xs text-muted-foreground">We reply within 2 business hours</p>
                </div>
              </div>
            </motion.div>

            {/* ── Contact Form ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-secondary text-2xl mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Our engineering team will review your enquiry and get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-display font-bold text-secondary text-xl mb-6">Send Us a Message</h3>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Full Name *</FormLabel>
                              <FormControl><Input placeholder="Rajesh Sharma" className="h-11" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Email Address *</FormLabel>
                              <FormControl><Input type="email" placeholder="rajesh@example.com" className="h-11" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Phone Number</FormLabel>
                              <FormControl><Input placeholder="+91 98765 43210" className="h-11" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="company" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Company</FormLabel>
                              <FormControl><Input placeholder="Acme Electronics Ltd." className="h-11" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <FormField control={form.control} name="serviceType" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Service Required *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11"><SelectValue placeholder="Select a service" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="pcb_fabrication">PCB Fabrication</SelectItem>
                                <SelectItem value="pcb_assembly">PCB Assembly (PCBA)</SelectItem>
                                <SelectItem value="turnkey">Turnkey Solution</SelectItem>
                                <SelectItem value="prototype">Prototype Service</SelectItem>
                                <SelectItem value="component_sourcing">Component Sourcing</SelectItem>
                                <SelectItem value="other">Other Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Project Details *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your project: layer count, board dimensions, quantity, surface finish, timeline, or any specific requirements..."
                                className="min-h-[140px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                          <p className="text-xs text-muted-foreground">
                            By submitting, you agree to our{" "}
                            <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                          </p>
                          <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md shadow-primary/20 min-w-[180px]"
                            disabled={submitContact.isPending}
                          >
                            {submitContact.isPending ? (
                              <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                              </span>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Alternate CTA strip ───────────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className={C}>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Call Sales", desc: "+91 98765 43210", href: "tel:+919876543210", cta: "Call Now" },
              { icon: Mail, title: "Email Us", desc: "quotes@megabytecircuits.com", href: "mailto:quotes@megabytecircuits.com", cta: "Send Email" },
              { icon: MapPin, title: "Visit Us", desc: "GIDC Electronics Estate, Ahmedabad", href: "https://maps.google.com", cta: "Get Directions" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-gray-50 rounded-2xl border border-gray-100 p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-secondary text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
