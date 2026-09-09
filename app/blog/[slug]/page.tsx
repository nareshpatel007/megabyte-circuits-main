import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { BLOG_POSTS } from "@/lib/blog";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

interface Props {
    params: Promise<{ slug: string }>;
}

async function getBlogData(slug: string) {
    try {
        const res = await fetch(`${API_BASE}/api/blogs/${slug}`, {
            next: { revalidate: 60 },
        });
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const data = await getBlogData(resolvedParams.slug);
    if (!data || !data.blog) return {};

    const blog = data.blog;
    const title = blog.meta_title || `${blog.title} - MegaByte Circuits`;
    const description = blog.meta_description || blog.excerpt;
    const image = blog.og_image || blog.featured_image;

    return {
        title,
        description,
        keywords: blog.meta_keywords ? blog.meta_keywords.split(",") : undefined,
        alternates: {
            canonical: blog.canonical_url || `https://megabytecircuits.com/blog/${blog.slug}`,
        },
        robots: {
            index: blog.robots_index !== false,
            follow: blog.robots_follow !== false,
        },
        openGraph: {
            title: blog.og_title || title,
            description: blog.og_description || description,
            images: image ? [{ url: image }] : undefined,
            type: "article",
            publishedTime: blog.published_at,
        },
        twitter: {
            card: "summary_large_image",
            title: blog.twitter_title || title,
            description: blog.twitter_description || description,
            images: blog.twitter_image ? [blog.twitter_image] : image ? [image] : undefined,
        },
    };
}

export default async function SingleBlogPage({ params }: Props) {
    const resolvedParams = await params;
    const data = await getBlogData(resolvedParams.slug);

    if (!data || !data.blog) {
        notFound();
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
