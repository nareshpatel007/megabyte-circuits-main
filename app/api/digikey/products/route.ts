import { NextResponse } from "next/server";
import { searchDigiKeyProducts } from "@/lib/digikey";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const keywords = searchParams.get("keywords") || "";
        const category = searchParams.get("category") || "";
        const countParam = searchParams.get("count") || searchParams.get("per_page");
        const page = searchParams.get("page") || "1";

        let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "https://api.megabytecircuit.com/api";
        if (envUrl.includes("127.0.0.1:8000") || envUrl.includes("localhost/megabyte-circuits-api")) {
            envUrl = "https://api.megabytecircuit.com/api";
        }
        if (!envUrl.endsWith("/api")) {
            envUrl = `${envUrl.replace(/\/$/, "")}/api`;
        }
        const countQuery = countParam ? `&count=${encodeURIComponent(countParam)}` : "";
        const backendUrl = `${envUrl}/digikey/products?keywords=${encodeURIComponent(keywords)}&category=${encodeURIComponent(category)}${countQuery}&page=${page}`;

        const response = await fetch(backendUrl, { next: { revalidate: 1800 } });
        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data, {
                headers: {
                    "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
                },
            });
        }

        // Fallback: If DB server is down, search live DigiKey API directly
        const fallbackData = await searchDigiKeyProducts(keywords || "resistor", parseInt(countParam || "4") || 20);
        return NextResponse.json({
            Products: fallbackData.Products || [],
            ProductsCount: fallbackData.ProductsCount || 0,
            Categories: []
        }, {
            headers: {
                "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
            },
        });
    } catch (error: any) {
        console.error("Error in Next DigiKey proxy:", error);
        return NextResponse.json({ Products: [], ProductsCount: 0, Categories: [] });
    }
}



export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const keywords = body.Keywords || body.keywords || "resistor";
        const count = body.RecordCount || body.recordCount || 20;
        const start = body.RecordStartPosition || body.recordStartPosition || 0;

        const data = await searchDigiKeyProducts(keywords, count, start);
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Error in DigiKey API Route:", error);
        return NextResponse.json(
            { error: error?.message || "Failed to fetch products from DigiKey" },
            { status: 500 }
        );
    }
}
