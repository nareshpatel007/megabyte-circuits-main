"use client";

import React, { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { BLOG_POSTS } from "@/lib/blog";
import { Loader2 } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

async function fetchBlogData(slug: string) {
    try {
        const res = await fetch(`${API_BASE}/api/blogs/${slug}`);
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
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                    <p className="text-sm font-semibold text-gray-600">Loading blog post...</p>
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

