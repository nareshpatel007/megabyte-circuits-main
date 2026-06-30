"use client";

import React from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSubmitContact } from "@/lib/api-client";
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
    MapPin, Phone, Mail, Clock, Send, CheckCircle2, User, PhoneCall
} from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    serviceType: z.string().min(1, "Please select a service type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

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

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Contact Us" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="Contact Us"
                subtitle="Get in touch with our engineering team for prototype and production-scale PCB solutions"
                badge="Connect With Us"
                breadcrumbs={breadcrumbs}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center md:text-left mb-12">
                        <h2 className="text-2xl md:text-4xl font-display font-extrabold text-secondary uppercase tracking-wider">
                            Contact Megabytes Circuit Systems For <span className="text-primary">PCB Solutions</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Contact info and map */}
                        <div className="lg:col-span-6 space-y-10">

                            <div className="grid sm:grid-cols-2 gap-8">
                                {/* Location */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-display font-bold text-secondary border-b border-slate-100 pb-2 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" /> OUR LOCATION
                                    </h3>
                                    <div className="text-sm text-slate-600 space-y-1 font-medium">
                                        <p className="font-bold text-secondary">Megabytes Circuit Systems</p>
                                        <p>C/10, Yogeshwar Estate, B/H Madhuram Estate, Nr. Vishala Estate, Sardar Patel Ring Rd, Odhav, Ahmedabad, Gujarat - 382430, India</p>
                                    </div>
                                </div>

                                {/* Quick Contact */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-display font-bold text-secondary border-b border-slate-100 pb-2 flex items-center gap-2">
                                        <PhoneCall className="w-5 h-5 text-primary" /> QUICK CONTACT
                                    </h3>
                                    <div className="space-y-3">
                                        <a href="tel:+919898842942" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary font-semibold transition-colors">
                                            <Phone className="w-4 h-4 text-primary shrink-0" />
                                            <span>+91-9898842942</span>
                                        </a>
                                        <a href="mailto:quote@megabytecircuit.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary font-semibold transition-colors">
                                            <Mail className="w-4 h-4 text-primary shrink-0" />
                                            <span>quote@megabytecircuit.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Persons */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-display font-bold text-secondary border-b border-slate-100 pb-2 flex items-center gap-2">
                                    <User className="w-5 h-5 text-primary" /> CONTACT PERSONS
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Jignesh Gajjar */}
                                    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-2">
                                        <h4 className="font-display font-bold text-secondary text-sm">Jignesh Gajjar</h4>
                                        <a href="tel:+919898842942" className="flex items-center gap-2 text-xs text-slate-500 hover:text-primary font-semibold transition-colors">
                                            <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                                            <span>+91-9898842942</span>
                                        </a>
                                    </div>

                                    {/* Jignesh Vekariya */}
                                    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-2">
                                        <h4 className="font-display font-bold text-secondary text-sm">Jignesh Vekariya</h4>
                                        <a href="tel:+918160282840" className="flex items-center gap-2 text-xs text-slate-500 hover:text-primary font-semibold transition-colors">
                                            <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                                            <span>+91-8160282840</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl h-[280px] relative bg-slate-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.338104238645!2d72.6782!3d23.0215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87c06282840%3A0x0!2sMegabyte%20Circuit%20Systems!5e0!3m2!1sen!2sin!4v1719391104238!5m2!1sen!2sin"
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-6">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-8">
                                {submitted ? (
                                    <div className="text-center py-12">
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
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="font-display font-bold text-secondary text-xl mb-6">Send Us a Message</h3>

                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="name" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Full Name *</FormLabel>
                                                            <FormControl><Input placeholder="Rajesh Sharma" className="h-10 bg-slate-50/50 border-slate-100" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="email" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Email Address *</FormLabel>
                                                            <FormControl><Input type="email" placeholder="rajesh@example.com" className="h-10 bg-slate-50/50 border-slate-100" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="phone" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Phone Number</FormLabel>
                                                            <FormControl><Input placeholder="+91-9898842942" className="h-10 bg-slate-50/50 border-slate-100" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="company" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Company</FormLabel>
                                                            <FormControl><Input placeholder="Acme Electronics Ltd." className="h-10 bg-slate-50/50 border-slate-100" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <FormField control={form.control} name="serviceType" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-secondary/70 uppercase tracking-wide">Service Required *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="h-10 bg-slate-50/50 border-slate-100"><SelectValue placeholder="Select a service" /></SelectTrigger>
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
                                                                placeholder="Please describe your project details, layer count, quantity..."
                                                                className="min-h-[120px] resize-none bg-slate-50/50 border-slate-100"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                                                    <p className="text-xs text-muted-foreground">
                                                        We typically reply within 1 business hour.
                                                    </p>
                                                    <Button
                                                        type="submit"
                                                        className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 min-w-[150px] h-11"
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
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
