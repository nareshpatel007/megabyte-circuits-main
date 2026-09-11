"use client";

import React, { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { BLOG_POSTS } from "@/lib/blog";
import { Skeleton } from "@/components/ui/skeleton";

async function fetchBlogData(slug: string) {
    try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (res.ok) {
            const data = await res.json();
            if (data.status && data.blog) {
                return data;
            }
        }
    } catch (e) {
        console.error("API blog fetch error:", e);
    }

    // Fallback to static lib/blog.ts if DB item is missing
    const staticPost = BLOG_POSTS.find((p) => p.slug === slug);
    if (!staticPost) return null;

    const htmlContent = staticPost.content
        .map((block) => {
            if (block.type === "heading") return `<h${block.level || 2}>${block.text}</h${block.level || 2}>`;
            if (block.type === "paragraph") return `<p>${block.text}</p>`;
            if (block.type === "quote") return `<blockquote>${block.text}</blockquote>`;
            if (block.type === "list") return `<ul>${block.items?.map((i) => `<li>${i}</li>`).join("")}</ul>`;
            if (block.type === "code") return `<pre><code>${block.code}</code></pre>`;
            return "";
        })
        .join("");

    return {
        blog: {
            id: 1,
            title: staticPost.title,
            slug: staticPost.slug,
            excerpt: staticPost.desc,
            content: htmlContent,
            featured_image: staticPost.image,
            category: staticPost.tag,
            tags: staticPost.tag,
            published_at: staticPost.date,
            reading_time: staticPost.readTime,
            views: 120,
            allow_comments: true,
            meta_title: `${staticPost.title} - MegaByte Circuits`,
            meta_description: staticPost.desc,
            og_image: staticPost.image,
            robots_index: true,
            robots_follow: true,
        },
        author: staticPost.author,
        comments: [],
        likes_count: 14,
        has_liked: false,
        related: [],
    };
}

export default function SingleBlogPage() {
    const params = useParams();
    const slug = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        if (!slug) return;

        let isMounted = true;
        setLoading(true);

        fetchBlogData(slug)
            .then((result) => {
                if (!isMounted) return;
                if (!result || !result.blog) {
                    setIsNotFound(true);
                } else {
                    setData(result);
                }
            })
            .catch((err) => {
                console.error("Error fetching blog data:", err);
                if (isMounted) setIsNotFound(true);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [slug]);

    if (isNotFound) {
        notFound();
    }

    if (loading || !data) {
        return (
            <div className="w-full bg-gray-50 min-h-screen pb-20">
                {/* Hero / Header Skeleton */}
                <div className="bg-secondary text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto space-y-4">
                        <Skeleton className="h-6 w-32 bg-gray-700/50 rounded-full" />
                        <Skeleton className="h-10 w-3/4 bg-gray-700/50 rounded-lg" />
                        <Skeleton className="h-6 w-1/2 bg-gray-700/50 rounded-lg" />
                    </div>
                </div>

                {/* Article Content Skeleton Container */}
                <div className="section-container py-12 max-w-4xl mx-auto px-4">
                    {/* Back link & Meta header skeleton */}
                    <div className="mb-8 space-y-6">
                        <Skeleton className="h-4 w-36 bg-gray-200" />

                        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200">
                            <div className="flex items-center gap-3">
                                <Skeleton className="w-10 h-10 rounded-full bg-gray-200" />
                                <div className="space-y-1">
                                    <Skeleton className="h-4 w-28 bg-gray-200" />
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <Skeleton className="h-4 w-24 bg-gray-200" />
                                <Skeleton className="h-4 w-20 bg-gray-200" />
                                <Skeleton className="h-4 w-16 bg-gray-200" />
                            </div>
                        </div>
                    </div>

                    {/* Featured Image Skeleton */}
                    <Skeleton className="mb-10 w-full h-80 md:h-[420px] rounded-2xl bg-gray-200" />

                    {/* Content Skeleton Card */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-4 mb-10">
                        <Skeleton className="h-6 w-2/3 bg-gray-200" />
                        <Skeleton className="h-4 w-full bg-gray-200" />
                        <Skeleton className="h-4 w-11/12 bg-gray-200" />
                        <Skeleton className="h-4 w-4/5 bg-gray-200" />
                        <div className="pt-4 space-y-3">
                            <Skeleton className="h-4 w-full bg-gray-200" />
                            <Skeleton className="h-4 w-5/6 bg-gray-200" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.blog.title,
        "description": data.blog.excerpt,
        "image": data.blog.featured_image,
        "datePublished": data.blog.published_at,
        "dateModified": data.blog.updated_at || data.blog.published_at,
        "author": {
            "@type": "Person",
            "name": data.author?.name || "MegaByte Circuits Team",
        },
        "publisher": {
            "@type": "Organization",
            "name": "MegaByte Circuits",
            "logo": {
                "@type": "ImageObject",
                "url": "https://megabytecircuits.com/images/logo.png",
            },
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://megabytecircuits.com/blog/${data.blog.slug}`,
        },
    };

    return (
        <>
            {/* Inject Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogDetailClient
                blog={data.blog}
                author={data.author || { name: "MegaByte Circuits Team", role: "Engineering Team", avatar: "MC" }}
                comments={data.comments || []}
                likesCount={data.likes_count || 0}
                hasLiked={data.has_liked || false}
                related={data.related || []}
            />
        </>
    );
}

