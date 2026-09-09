"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calendar,
    Clock,
    Eye,
    ThumbsUp,
    MessageSquare,
    Share2,
    Check,
    ArrowRight,
    ArrowLeft,
    Send,
    User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ServiceHeader } from "@/components/services/ServiceHeader";

const API_BASE = "";

interface BlogDetailProps {
    blog: any;
    author: any;
    comments: any[];
    likesCount: number;
    hasLiked: boolean;
    related: any[];
}

export function BlogDetailClient({
    blog,
    author,
    comments: initialComments,
    likesCount: initialLikesCount,
    hasLiked: initialHasLiked,
    related,
}: BlogDetailProps) {
    const [likes, setLikes] = useState(initialLikesCount);
    const [liked, setLiked] = useState(initialHasLiked);
    const [likeLoading, setLikeLoading] = useState(false);

    // Comment Form State
    const [comments, setComments] = useState(initialComments);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [commentText, setCommentText] = useState("");
    const [replyToId, setReplyToId] = useState<number | null>(null);
    const [submittingComment, setSubmittingComment] = useState(false);
    const [commentSuccess, setCommentSuccess] = useState("");

    // Share toast
    const [copied, setCopied] = useState(false);

    const handleLikeToggle = async () => {
        if (likeLoading) return;
        setLikeLoading(true);
        try {
            const res = await fetch(`${API_BASE}/api/blogs/${blog.id}/like`, {
                method: "POST",
            });
            const data = await res.json();
            if (data.status) {
                setLiked(data.liked);
                setLikes(data.likes_count);
            }
        } catch (e) {
            console.error("Like error:", e);
        } finally {
            setLikeLoading(false);
        }
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !commentText.trim()) return;

        setSubmittingComment(true);
        setCommentSuccess("");
        try {
            const res = await fetch(`${API_BASE}/api/blogs/${blog.id}/comments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    content: commentText,
                    parent_id: replyToId,
                }),
            });
            const data = await res.json();
            if (data.status) {
                setCommentSuccess(data.message || "Comment submitted for moderation.");
                setCommentText("");
                setReplyToId(null);
            } else {
                alert(data.message || "Failed to submit comment.");
            }
        } catch (e) {
            alert("Error submitting comment.");
        } finally {
            setSubmittingComment(false);
        }
    };

    const handleCopyLink = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const pageUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
    const pageTitle = encodeURIComponent(blog.title);

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20">
            {/* Service Header / Hero */}
            <ServiceHeader
                title={blog.title}
                subtitle={blog.excerpt}
                badge={blog.category_name || blog.category || "PCB Engineering"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: blog.title }
                ]}
            />

            {/* Article Container */}
            <div className="section-container py-12 max-w-4xl mx-auto">
                {/* Back button & Article Meta Header */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to all articles
                    </Link>

                    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 text-xs font-semibold text-gray-500">
                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-sm text-primary">
                                {author.avatar || author.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">{author.name}</p>
                                <p className="text-[11px] text-gray-500">{author.role}</p>
                            </div>
                        </div>

                        {/* Article Metrics */}
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                {blog.published_at
                                    ? new Date(blog.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                                    : "Recent"}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-gray-400" />
                                {blog.reading_time || "5 min read"}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Eye className="w-4 h-4 text-gray-400" />
                                {blog.views || 0} views
                            </span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                {blog.featured_image && (
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-md border border-gray-200 max-h-[460px] bg-gray-100">
                        <img
                            src={blog.featured_image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Article HTML Content */}
                <article className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm mb-10 prose prose-emerald max-w-none">
                    <div
                        className="leading-relaxed text-gray-700 font-sans space-y-6"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Tags */}
                    {blog.tags && (
                        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Tags:</span>
                            {blog.tags.split(",").map((t: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs font-semibold bg-gray-50">
                                    #{t.trim()}
                                </Badge>
                            ))}
                        </div>
                    )}
                </article>

                {/* Engagement Bar: Like & Social Share */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
                    {/* Like Button */}
                    <button
                        onClick={handleLikeToggle}
                        disabled={likeLoading}
                        className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                            liked
                                ? "bg-rose-50 text-rose-600 border border-rose-200 shadow-sm"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        <ThumbsUp className={`w-4 h-4 ${liked ? "fill-rose-600" : ""}`} />
                        <span>{liked ? "Liked" : "Like Article"}</span>
                        <span className="ml-1 px-2 py-0.5 rounded-full bg-white text-xs text-gray-900 border border-gray-200 font-extrabold">
                            {likes}
                        </span>
                    </button>

                    {/* Social Share Buttons */}
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Share:</span>

                        {/* WhatsApp */}
                        <a
                            href={`https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                            title="Share on WhatsApp"
                        >
                            <Share2 className="w-4 h-4" />
                        </a>

                        {/* Twitter */}
                        <a
                            href={`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors"
                            title="Share on X / Twitter"
                        >
                            <Share2 className="w-4 h-4" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            title="Share on LinkedIn"
                        >
                            <Share2 className="w-4 h-4" />
                        </a>

                        {/* Copy Link */}
                        <button
                            onClick={handleCopyLink}
                            className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-bold transition-all flex items-center gap-1.5"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                                </>
                            ) : (
                                "Copy Link"
                            )}
                        </button>
                    </div>
                </div>

                {/* Comments Section */}
                {blog.allow_comments && (
                    <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm mb-12">
                        <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-primary" /> Comments ({comments.length})
                        </h3>

                        {/* Submit Comment Form */}
                        <form onSubmit={handleCommentSubmit} className="mb-10 space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h4 className="text-sm font-bold text-gray-800">
                                {replyToId ? "Leave a Reply" : "Leave a Comment"}
                            </h4>
                            {replyToId && (
                                <button
                                    type="button"
                                    onClick={() => setReplyToId(null)}
                                    className="text-xs text-rose-600 font-bold hover:underline"
                                >
                                    Cancel Reply
                                </button>
                            )}

                            {commentSuccess && (
                                <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-lg border border-emerald-200">
                                    {commentSuccess}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Your Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. John Doe"
                                        className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-800 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Your Email (kept private) *</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@example.com"
                                        className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-800 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Comment *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    placeholder="Write your comment or question here..."
                                    className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-800 focus:outline-none focus:border-primary"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submittingComment}
                                className="px-6 py-2.5 bg-primary text-white font-bold text-xs rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                            >
                                <Send className="w-3.5 h-3.5" />
                                {submittingComment ? "Submitting..." : "Post Comment"}
                            </button>
                        </form>

                        {/* Existing Comments Tree */}
                        {comments.length === 0 ? (
                            <p className="text-xs text-gray-400 text-center py-6">No comments yet. Be the first to share your thoughts!</p>
                        ) : (
                            <div className="space-y-6">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">
                                                    {comment.name.charAt(0)}
                                                </div>
                                                <span className="font-bold text-xs text-gray-900">{comment.name}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-400">
                                                {new Date(comment.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-700 leading-relaxed mb-3">{comment.content}</p>

                                        {/* Reply button */}
                                        <button
                                            onClick={() => setReplyToId(comment.id)}
                                            className="text-[11px] font-bold text-primary hover:underline"
                                        >
                                            Reply
                                        </button>

                                        {/* Nested Replies */}
                                        {comment.replies && comment.replies.length > 0 && (
                                            <div className="mt-4 pl-4 border-l-2 border-primary/20 space-y-3">
                                                {comment.replies.map((reply: any) => (
                                                    <div key={reply.id} className="bg-white p-3 rounded-lg border border-gray-100">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="font-bold text-xs text-gray-900">{reply.name}</span>
                                                            <span className="text-[10px] text-gray-400">
                                                                {new Date(reply.created_at).toLocaleDateString()}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-700">{reply.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Related Articles Section */}
                {related && related.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-secondary mb-8">Related Articles</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {related.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    href={`/blog/${rel.slug}`}
                                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                                >
                                    <div className="h-36 bg-gray-100 overflow-hidden">
                                        <img
                                            src={rel.featured_image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"}
                                            alt={rel.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                                                {rel.category || "Engineering"}
                                            </span>
                                            <h4 className="font-bold text-sm text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                                {rel.title}
                                            </h4>
                                        </div>
                                        <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all mt-4">
                                            Read More <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
