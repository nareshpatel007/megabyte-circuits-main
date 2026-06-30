import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) {
        return {
            title: "Article Not Found - MegaByte Circuits",
        };
    }
    return {
        title: `${post.title} - MegaByte Circuits Insights`,
        description: post.desc,
    };
}

// Generate static parameters for static site generation
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    
    if (!post) {
        notFound();
    }

    // Get up to 3 related articles (exclude the current post)
    const relatedPosts = BLOG_POSTS
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    return <BlogDetailClient post={post} relatedPosts={relatedPosts} />;
}
