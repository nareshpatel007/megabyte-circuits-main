"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Calculator, Cpu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-secondary relative overflow-hidden text-white py-12 px-4">
            {/* Glow blobs background */}
            <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            
            {/* PCB Grid Lines Background */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="max-w-xl w-full text-center relative z-10 space-y-8">
                {/* 404 Glowing Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative inline-flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                    <div className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary shadow-2xl relative">
                        <Cpu className="w-12 h-12 text-primary animate-pulse" />
                    </div>
                </motion.div>

                {/* Error message text */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-7xl md:text-8xl font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400"
                    >
                        404
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight"
                    >
                        Trace Disconnected / Path Not Found
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-400 text-base md:text-lg max-w-md mx-auto leading-relaxed"
                    >
                        We've scanned our layout database, but the connection path you're looking for seems to have been rerouted or deleted.
                    </motion.p>
                </div>

                {/* Return Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-6 rounded-xl w-full sm:w-auto shadow-lg shadow-primary/20">
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" /> Back to Home
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 text-white hover:text-white font-semibold h-12 px-6 rounded-xl w-full sm:w-auto backdrop-blur-sm">
                        <Link href="/pcb-calculator">
                            <Calculator className="w-4 h-4 mr-2" /> PCB Calculator
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
