"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook,
    CheckCircle2, Mail, Link2, Copy, Check,
    ArrowRight
} from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ServiceHeader } from "@/components/services/ServiceHeader";

interface BlogDetailClientProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

export function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("");
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    // Reading progress bar setup
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Extract headings from the content blocks for Table of Contents
    const headings = post.content
        .filter(block => block.type === "heading" && block.text)
        .map(block => ({
            text: block.text!,
            id: block.text!.toLowerCase().replace(/[^a-z0-9]+/g, "-")
        }));

    // Monitor which section is currently viewed
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        headings.forEach(heading => {
            const el = document.getElementById(heading.id);
            if (el) observer.observe(el);
        });

        return () => {
            headings.forEach(heading => {
                const el = document.getElementById(heading.id);
                if (el) observer.unobserve(el);
            });
        };
    }, [headings]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast.success("Article link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setSubscribed(true);
            setEmail("");
            toast.success("Successfully subscribed to engineering newsletter!");
        }, 1200);
    };

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`;
    const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title }
    ];

    return (
        <div className="w-full bg-white relative">
            {/* Reading Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-50 origin-left"
                style={{ scaleX }}
            />

            {/* Back to Blog header section */}
            <div className="border-b border-gray-100 bg-gray-50/50 py-4">
                <div className="section-container flex items-center justify-between">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary transition-colors group cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Engineering Insights
                    </Link>
                </div>
            </div>

            {/* Common Hero Header */}
            <ServiceHeader
                title={post.title}
                subtitle={post.desc}
                badge={post.tag}
                breadcrumbs={breadcrumbs}
            />

            {/* Article Content Layout */}
            <section className="py-20">
                <div className="section-container">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Left Side: Article Content */}
                        <article className="lg:col-span-8 space-y-8" ref={contentRef}>
                            {/* Author & Date Metadata */}
                            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-150 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                                        {post.author.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary text-sm">{post.author.name}</h4>
                                        <p className="text-[11px] text-muted-foreground">{post.author.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                </div>
                            </div>

                            {/* Top Banner Image */}
                            <div className="relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-sm mb-8">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {post.content.map((block, idx) => {
                                switch (block.type) {
                                    case "paragraph":
                                        return (
                                            <p key={idx} className="text-gray-700 text-lg leading-relaxed font-normal">
                                                {block.text}
                                            </p>
                                        );

                                    case "heading":
                                        const HeadingTag = block.level === 3 ? "h3" : "h2";
                                        const headingId = block.text?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "";
                                        return (
                                            <HeadingTag
                                                key={idx}
                                                id={headingId}
                                                className={`font-display font-extrabold text-secondary tracking-tight scroll-mt-24 mt-10 mb-4 ${block.level === 3 ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
                                                    }`}
                                            >
                                                {block.text}
                                            </HeadingTag>
                                        );

                                    case "list":
                                        return (
                                            <ul key={idx} className="space-y-3.5 pl-2 my-6">
                                                {block.items?.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed">
                                                        <CheckCircle2 className="w-5.5 h-5.5 text-primary shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );

                                    case "quote":
                                        return (
                                            <blockquote key={idx} className="border-l-4 border-primary pl-6 my-8 italic text-xl text-secondary font-medium leading-relaxed bg-primary/5 py-4 pr-4 rounded-r-xl">
                                                "{block.text}"
                                            </blockquote>
                                        );

                                    case "callout":
                                        const calloutStyles = {
                                            info: "bg-blue-50/50 border-blue-200 text-blue-900",
                                            warning: "bg-amber-50/50 border-amber-200 text-amber-900",
                                            tip: "bg-emerald-50/50 border-emerald-200 text-emerald-900"
                                        };
                                        return (
                                            <div key={idx} className={`border rounded-2xl p-6 my-6 leading-relaxed ${calloutStyles[block.variant || 'info']}`}>
                                                <p className="text-base font-semibold leading-relaxed">
                                                    {block.text}
                                                </p>
                                            </div>
                                        );

                                    case "code":
                                        return (
                                            <div key={idx} className="relative my-8 group bg-secondary rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/40 text-xs text-gray-400 font-mono">
                                                    <span>{block.language || "code"}</span>
                                                    <button
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(block.code || "");
                                                            toast.success("Code snippet copied!");
                                                        }}
                                                        className="hover:text-white transition-colors cursor-pointer"
                                                    >
                                                        Copy code
                                                    </button>
                                                </div>
                                                <pre className="p-6 overflow-x-auto text-sm text-gray-300 font-mono leading-relaxed bg-black/20">
                                                    <code>{block.code}</code>
                                                </pre>
                                            </div>
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </article>

                        {/* Right Side: Sidebar */}
                        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">

                            {/* Table of Contents Widget */}
                            {headings.length > 0 && (
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                    <h4 className="font-display font-extrabold text-secondary mb-4 text-base tracking-tight">
                                        On This Page
                                    </h4>
                                    <nav className="space-y-3">
                                        {headings.map((heading) => (
                                            <a
                                                key={heading.id}
                                                href={`#${heading.id}`}
                                                className={`block text-sm font-semibold transition-all duration-200 pl-3 border-l-2 ${activeSection === heading.id
                                                    ? "border-primary text-primary font-bold"
                                                    : "border-gray-200 text-gray-500 hover:text-secondary hover:border-gray-300"
                                                    }`}
                                            >
                                                {heading.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Share Widget */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h4 className="font-display font-extrabold text-secondary mb-4 text-base tracking-tight flex items-center gap-2">
                                    <Share2 className="w-4 h-4 text-primary" /> Share This Article
                                </h4>
                                <div className="grid grid-cols-4 gap-2">
                                    <a
                                        href={linkedinShare}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center p-3 border border-gray-200 hover:border-primary/30 hover:bg-primary/5 rounded-xl transition-all duration-300 text-gray-600 hover:text-primary"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={twitterShare}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center p-3 border border-gray-200 hover:border-primary/30 hover:bg-primary/5 rounded-xl transition-all duration-300 text-gray-600 hover:text-primary"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={facebookShare}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center p-3 border border-gray-200 hover:border-primary/30 hover:bg-primary/5 rounded-xl transition-all duration-300 text-gray-600 hover:text-primary"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={handleCopyLink}
                                        className="flex items-center justify-center p-3 border border-gray-200 hover:border-primary/30 hover:bg-primary/5 rounded-xl transition-all duration-300 text-gray-600 hover:text-primary cursor-pointer"
                                    >
                                        {copied ? <Check className="w-5 h-5 text-primary" /> : <Link2 className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Newsletter widget */}
                            <div className="bg-gradient-to-br from-secondary to-secondary-foreground text-white rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(11,122,51,0.2),transparent)]" />
                                <div className="relative z-10">
                                    <Mail className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="font-display font-extrabold text-lg mb-2">
                                        Engineering Newsletter
                                    </h4>
                                    <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                                        Get advanced layout recommendations, stackup insights, and DFM guidelines directly in your inbox.
                                    </p>

                                    {subscribed ? (
                                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                                            <p className="text-sm font-semibold text-primary">Thanks for subscribing!</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubscribe} className="space-y-3">
                                            <Input
                                                type="email"
                                                required
                                                placeholder="Enter engineering email..."
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="bg-white text-secondary placeholder:text-gray-400 border-gray-200 focus-visible:ring-primary focus-visible:ring-offset-0 focus:bg-white text-sm py-2 px-3 h-10 rounded-xl outline-none"
                                            />
                                            <Button
                                                type="submit"
                                                disabled={submitting}
                                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-10 text-sm cursor-pointer"
                                            >
                                                {submitting ? "Subscribing..." : "Subscribe Now"}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Bottom Related Articles Section */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-gray-50 border-t border-gray-200">
                    <div className="section-container">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl font-display font-extrabold text-secondary mb-3">
                                Recommended Reading
                            </h2>
                            <p className="text-muted-foreground text-base">
                                Continue reading from our pool of PCB layout, manufacturing, and SMT assembly expertise.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((post) => (
                                <div
                                    key={post.slug}
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
                                                <h3 className="font-display font-bold text-secondary text-base leading-snug group-hover:text-primary transition-colors mb-3">
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
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
