"use client";

import React from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCalculateQuote } from "@/lib/api-client";
import { Zap, FileCheck, Truck, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const calculatorSchema = z.object({
    pcbType: z.string().min(1),
    layers: z.coerce.number().min(1),
    boardWidth: z.coerce.number().min(10),
    boardHeight: z.coerce.number().min(10),
    quantity: z.coerce.number().min(1),
    thickness: z.string().optional(),
    copperWeight: z.string().optional(),
    surfaceFinish: z.string().optional(),
});

export default function ClientPage() {
    const calculateQuote = useCalculateQuote();
    const form = useForm<z.infer<typeof calculatorSchema>>({
        resolver: zodResolver(calculatorSchema),
        defaultValues: {
            pcbType: "Standard Rigid",
            layers: 2,
            boardWidth: 50,
            boardHeight: 50,
            quantity: 10,
            thickness: "1.6mm",
            copperWeight: "1oz",
            surfaceFinish: "HASL"
        },
    });

    function onSubmit(values: z.infer<typeof calculatorSchema>) {
        const query = new URLSearchParams({
            layers: String(values.layers || 2),
            boardWidth: String(values.boardWidth || 50),
            boardHeight: String(values.boardHeight || 50),
            quantity: String(values.quantity || 10),
            pcbType: values.pcbType || "Standard Rigid",
            thickness: values.thickness || "1.6mm",
            copperWeight: values.copperWeight || "1oz",
            surfaceFinish: values.surfaceFinish || "HASL",
        }).toString();

        const quoteBase = process.env.NEXT_PUBLIC_QUOTE_URL || "http://localhost:3001";
        window.location.href = `${quoteBase.replace(/\/$/, "")}/?${query}`;
    }

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "PCB Calculator" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <ServiceHeader
                title="PCB Calculator: Instant Cost & Design Solutions"
                subtitle="Estimate your manufacturing costs instantly by configuring your PCB specifications below."
                badge="Calculator"
                breadcrumbs={breadcrumbs}
            />

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <Calculator className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-secondary text-xl">Configure PCB Board</h3>
                                <p className="text-xs text-muted-foreground mt-0.5">Fill out your design specifications for a real-time price estimation in INR</p>
                            </div>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="pcbType" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-bold text-secondary/70 uppercase tracking-wide">PCB Type</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl><SelectTrigger className="h-11"><SelectValue /></SelectTrigger></FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Standard Rigid">FR4 Standard</SelectItem>
                                                    <SelectItem value="Flex">Flex</SelectItem>
                                                    <SelectItem value="Rogers">Rogers</SelectItem>
                                                    <SelectItem value="PTFE Teflon">PTFE Taflon</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="layers" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-bold text-secondary/70 uppercase tracking-wide">Layers</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                                <FormControl><SelectTrigger className="h-11"><SelectValue /></SelectTrigger></FormControl>
                                                <SelectContent>
                                                    {[1, 2, 4, 6, 8, 10, 12, 16].map(n => (
                                                        <SelectItem key={n} value={n.toString()}>{n} Layer{n > 1 ? "s" : ""}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="boardWidth" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-bold text-secondary/70 uppercase tracking-wide">Width (mm)</FormLabel>
                                            <FormControl><Input type="number" className="h-11" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="boardHeight" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-bold text-secondary/70 uppercase tracking-wide">Height (mm)</FormLabel>
                                            <FormControl><Input type="number" className="h-11" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="quantity" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-bold text-secondary/70 uppercase tracking-wide">Quantity</FormLabel>
                                            <FormControl><Input type="number" className="h-11" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="surfaceFinish" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-bold text-secondary/70 uppercase tracking-wide">Surface Finish</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl><SelectTrigger className="h-11"><SelectValue /></SelectTrigger></FormControl>
                                                <SelectContent>
                                                    <SelectItem value="HASL">HASL (Lead)</SelectItem>
                                                    <SelectItem value="ENIG">ENIG</SelectItem>
                                                    <SelectItem value="OSP">OSP</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                </div>

                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-lg shadow-primary/20" disabled={calculateQuote.isPending}>
                                    {calculateQuote.isPending ? (
                                        <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Calculating...</span>
                                    ) : (
                                        <span className="flex items-center gap-2"><Calculator className="w-4 h-4" /> Calculate Price</span>
                                    )}
                                </Button>
                            </form>
                        </Form>

                        {calculateQuote.isSuccess && calculateQuote.data && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="mt-8 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 to-green-50/50 p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-base font-semibold text-secondary">Estimated Cost</span>
                                    <span className="text-3xl font-display font-extrabold text-primary">
                                        ₹{calculateQuote.data.estimatedCost.toLocaleString("en-IN")}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                    <span>Estimated Lead Time</span>
                                    <span className="font-semibold text-secondary">{calculateQuote.data.leadTime}</span>
                                </div>
                                <div className="border-t border-primary/10 pt-4 space-y-2">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Base cost</span>
                                        <span>₹{(calculateQuote.data.breakdown?.baseCost ?? 0).toLocaleString("en-IN")}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Layer surcharge</span>
                                        <span>₹{(calculateQuote.data.breakdown?.layerSurcharge ?? 0).toLocaleString("en-IN")}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Surface finish</span>
                                        <span>₹{(calculateQuote.data.breakdown?.finishSurcharge ?? 0).toLocaleString("en-IN")}</span>
                                    </div>
                                </div>
                                <Button asChild className="w-full mt-6 bg-primary text-white hover:bg-primary/90 h-11 font-semibold">
                                    <Link href="/contact">Request Formal Quote</Link>
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
