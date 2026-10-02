import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "https://api.megabytecircuit.com/api";
        if (envUrl.includes("127.0.0.1:8000")) {
            envUrl = "https://api.megabytecircuit.com/api";
        }
        if (!envUrl.endsWith("/api")) {
            envUrl = `${envUrl.replace(/\/$/, "")}/api`;
        }

        const backendUrl = `${envUrl}/blogs/${id}`;

        const response = await fetch(backendUrl, {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
            },
            signal: AbortSignal.timeout(6000),
            next: { revalidate: 3600 },
        });

        if (response.ok) {
            const data = await response.json();
            const FALLBACK_BLOG_IMAGE = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop";

            if (data && data.status && data.blog) {
                if (typeof data.blog.featured_image === "string" && data.blog.featured_image.startsWith("data:image/")) {
                    data.blog.featured_image = FALLBACK_BLOG_IMAGE;
                }
                if (typeof data.blog.og_image === "string" && data.blog.og_image.startsWith("data:image/")) {
                    data.blog.og_image = "https://megabytecircuit.com/images/logo.png";
                }
                if (typeof data.blog.twitter_image === "string" && data.blog.twitter_image.startsWith("data:image/")) {
                    data.blog.twitter_image = "https://megabytecircuit.com/images/logo.png";
                }
            }

            // Sanitize oversized base64 images from related blogs
            if (data && data.status && Array.isArray(data.related)) {
                data.related = data.related.map((r: any) => {
                    if (typeof r.featured_image === "string" && r.featured_image.startsWith("data:image/")) {
                        return { ...r, featured_image: FALLBACK_BLOG_IMAGE };
                    }
                    return r;
                });
            }
            return NextResponse.json(data, {
                headers: {
                    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
                },
            });
        }

        return NextResponse.json({ status: false, message: "Blog not found", blog: null }, { status: 404 });
    } catch (error: any) {
        console.error("Error in Next blog show proxy:", error);
        return NextResponse.json({ status: false, message: "Internal server error", blog: null }, { status: 500 });
    }
}
