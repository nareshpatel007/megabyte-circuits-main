"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { ServiceHeader } from "@/components/services/ServiceHeader";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export function BlogGridClient() {
    return (
        <div className="w-full">
            {/* Common Hero Header */}
            <ServiceHeader
                title="PCB Engineering Insights & Guides"
                subtitle="Technical resources, design guidelines, and manufacturing best practices directly from our senior engineering team."
                badge="Engineering Resources"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog" }
                ]}
            />

            {/* Main Content Area */}
            <section className="py-20 bg-gray-50">
                <div className="section-container">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {BLOG_POSTS.map((post) => (
                            <motion.div
                                key={post.slug}
                                variants={cardVariants}
                                className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                    {/* Card Visual Image */}
                                    <div className="relative h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary text-white border-0 font-bold px-3 py-1 text-xs">
                                                {post.tag}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-500 mb-3">
                                                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                            </div>
                                            <h3 className="font-display font-bold text-secondary text-lg leading-snug group-hover:text-primary transition-colors mb-3">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                                {post.desc}
                                            </p>
                                        </div>

                                        {/* Card Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-xs text-primary">
                                                    {post.author.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-secondary leading-none">{post.author.name}</p>
                                                    <p className="text-[10px] text-muted-foreground">{post.author.role}</p>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                                                Read <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
