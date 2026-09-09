"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, ThumbsUp, MessageSquare } from "lucide-react";
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

const API_BASE = "";

export function BlogGridClient() {
    const [posts, setPosts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchCategories = async () => {
        try {
            const res = await fetch(`${API_BASE}/api/blogs/categories`);
            const data = await res.json();
            if (data.status) setCategories(data.categories || []);
        } catch (e) {
            console.error("Categories fetch error:", e);
        }
    };

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const query = new URLSearchParams({
                page: page.toString(),
                limit: "9",
            });
            if (selectedCategory) query.append("category", selectedCategory);
            if (search) query.append("search", search);

            const res = await fetch(`${API_BASE}/api/blogs?${query.toString()}`);
            const data = await res.json();
            if (data.status && data.blogs?.data && data.blogs.data.length > 0) {
                setPosts(data.blogs.data);
                setTotalPages(data.blogs.last_page || 1);
            } else {
                // Fallback to static data if database is empty or fetch fails
                setPosts(
                    BLOG_POSTS.map((p) => ({
                        slug: p.slug,
                        title: p.title,
                        excerpt: p.desc,
                        published_at: p.date,
                        reading_time: p.readTime,
                        featured_image: p.image,
                        category: p.tag,
                        author_name: p.author.name,
                        author_role: p.author.role,
                        author_avatar: p.author.avatar,
                    }))
                );
            }
        } catch (e) {
            console.error("Blogs fetch error:", e);
            setPosts(
                BLOG_POSTS.map((p) => ({
                    slug: p.slug,
                    title: p.title,
                    excerpt: p.desc,
                    published_at: p.date,
                    reading_time: p.readTime,
                    featured_image: p.image,
                    category: p.tag,
                    author_name: p.author.name,
                    author_role: p.author.role,
                    author_avatar: p.author.avatar,
                }))
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchBlogs();
    }, [selectedCategory, search, page]);

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

            {/* Filter and Search Bar */}
            <section className="bg-white border-b border-gray-200 py-6">
                <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                        <button
                            onClick={() => { setSelectedCategory(""); setPage(1); }}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                                selectedCategory === ""
                                    ? "bg-primary text-white shadow-sm"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            All Posts
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => { setSelectedCategory(cat.slug || cat.name); setPage(1); }}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                                    selectedCategory === (cat.slug || cat.name)
                                        ? "bg-primary text-white shadow-sm"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search articles & guides..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-16 bg-gray-50">
                <div className="section-container">
                    {loading ? (
                        <div className="py-20 text-center text-gray-500 font-medium">Loading articles...</div>
                    ) : posts.length === 0 ? (
                        <div className="py-20 text-center text-gray-500 font-medium">No blog posts found matching your criteria.</div>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {posts.map((post) => (
                                <motion.div
                                    key={post.slug || post.id}
                                    variants={cardVariants}
                                    className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full"
                                >
                                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                        {/* Card Visual Image */}
                                        <div className="relative h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
                                            <img
                                                src={post.featured_image || post.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-primary text-white border-0 font-bold px-3 py-1 text-xs">
                                                    {post.category_name || post.category || post.tag || "Engineering"}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-500 mb-3">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {post.published_at ? new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recent"}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5" /> {post.reading_time || post.readTime || "5 min read"}
                                                    </span>
                                                </div>
                                                <h3 className="font-display font-bold text-secondary text-lg leading-snug group-hover:text-primary transition-colors mb-3 line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                                    {post.excerpt || post.desc}
                                                </p>
                                            </div>

                                            {/* Card Footer */}
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-xs text-primary">
                                                        {post.author_avatar || post.author?.avatar || (post.author_name ? post.author_name.charAt(0) : "MC")}
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-secondary leading-none">{post.author_name || post.author?.name || "Senior Layout Engineer"}</p>
                                                        <p className="text-[10px] text-muted-foreground">{post.author_role || post.author?.role || "Engineering Team"}</p>
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
                    )}

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex items-center justify-center gap-2">
                            <button
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                                className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold bg-white text-gray-700 disabled:opacity-50 hover:bg-gray-50"
                            >
                                Previous
                            </button>
                            <span className="text-xs font-semibold text-gray-600 px-3">
                                Page {page} of {totalPages}
                            </span>
                            <button
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                                className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold bg-white text-gray-700 disabled:opacity-50 hover:bg-gray-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
