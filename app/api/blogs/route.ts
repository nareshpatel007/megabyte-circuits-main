import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "https://api.megabytecircuit.com/api";
        if (envUrl.includes("127.0.0.1:8000")) {
            envUrl = "https://api.megabytecircuit.com/api";
        }
        if (!envUrl.endsWith("/api")) {
            envUrl = `${envUrl.replace(/\/$/, "")}/api`;
        }

        const backendUrl = `${envUrl}/blogs?${searchParams.toString()}`;

        const response = await fetch(backendUrl, {
            headers: {
                "Accept": "application/json",
                "X-Api-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
            },
            signal: AbortSignal.timeout(6000),
            next: { revalidate: 1800 },
        });

        if (response.ok) {
            const data = await response.json();
            if (data && data.status && data.blogs && Array.isArray(data.blogs.data)) {
                data.blogs.data = data.blogs.data.map((b: any) => {
                    if (typeof b.featured_image === "string" && b.featured_image.startsWith("data:image/") && b.featured_image.length > 500) {
                        return { ...b, featured_image: null };
                    }
                    return b;
                });
            }
            return NextResponse.json(data, {
                headers: {
                    "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
                },
            });
        }

        return NextResponse.json({
            status: true,
            blogs: {
                current_page: 1,
                data: [],
                last_page: 1,
                total: 0
            }
        });
    } catch (error: any) {
        console.error("Error in Next blogs proxy:", error);
        return NextResponse.json({
            status: true,
            blogs: {
                current_page: 1,
                data: [],
                last_page: 1,
                total: 0
            }
        });
    }
}
