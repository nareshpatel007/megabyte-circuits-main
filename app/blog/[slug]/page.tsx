import React, { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { BLOG_POSTS } from "@/lib/blog";

// Incremental Static Regeneration: Full Route Cache revalidates every 5 minutes (300 seconds)
export const revalidate = 300;

interface PageProps {
    params: Promise<{ slug: string }>;
}

const fetchBlogData = cache(async (slug: string) => {
    try {
        let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "https://api.megabytecircuit.com/api";
        if (envUrl.includes("127.0.0.1:8000")) {
            envUrl = "https://api.megabytecircuit.com/api";
        }
        if (!envUrl.endsWith("/api")) {
            envUrl = `${envUrl.replace(/\/$/, "")}/api`;
        }

        const backendUrl = `${envUrl}/blogs/${encodeURIComponent(slug)}`;
        const res = await fetch(backendUrl, {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
            },
            cache: "no-store",
            signal: AbortSignal.timeout(8000),
        });

        if (res.ok) {
            const data = await res.json();
            if (data && data.status && data.blog) {
                // Sanitize oversized base64 images in related blogs to maintain lightweight payload
                if (Array.isArray(data.related)) {
                    data.related = data.related.map((r: any) => {
                        if (typeof r.featured_image === "string" && r.featured_image.startsWith("data:image/") && r.featured_image.length > 500) {
                            return { ...r, featured_image: null };
                        }
                        return r;
                    });
                }
                return data;
            }
        }
    } catch (e) {
        console.error("Server blog fetch error:", e);
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
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await fetchBlogData(slug);

    if (!data?.blog) {
        return {
            title: "Blog Post Not Found - MegaByte Circuits",
            description: "The requested blog article could not be found.",
        };
    }

    const { blog, author } = data;
    const title = blog.meta_title || `${blog.title} - MegaByte Circuits`;
    const description = blog.meta_description || blog.excerpt || "";
    const canonical = blog.canonical_url || `https://megabytecircuit.com/blog/${blog.slug}`;
    const ogImage = blog.og_image || blog.featured_image || "https://megabytecircuit.com/images/logo.png";

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title: blog.og_title || title,
            description: blog.og_description || description,
            url: canonical,
            siteName: "MegaByte Circuits",
            type: "article",
            publishedTime: blog.published_at || undefined,
            modifiedTime: blog.updated_at || blog.published_at || undefined,
            authors: author?.name ? [author.name] : ["MegaByte Circuits Team"],
            images: ogImage ? [{ url: ogImage }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.twitter_title || title,
            description: blog.twitter_description || description,
            images: blog.twitter_image || ogImage ? [blog.twitter_image || ogImage] : [],
        },
        robots: {
            index: blog.robots_index !== false,
            follow: blog.robots_follow !== false,
        },
    };
}

export default async function SingleBlogPage({ params }: PageProps) {
    const { slug } = await params;
    const data = await fetchBlogData(slug);

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
                "url": "https://megabytecircuit.com/images/logo.png",
            },
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://megabytecircuit.com/blog/${data.blog.slug}`,
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
