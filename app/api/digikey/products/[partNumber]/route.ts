import { NextResponse } from "next/server";
import { searchDigiKeyProducts } from "@/lib/digikey";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ partNumber: string }> }
) {
    try {
        const resolvedParams = await params;
        const partNumber = resolvedParams.partNumber;

        let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "https://api.megabytecircuit.com/api";
        if (envUrl.includes("127.0.0.1:8000") || envUrl.includes("localhost/megabyte-circuits-api")) {
            envUrl = "https://api.megabytecircuit.com/api";
        }
        if (!envUrl.endsWith("/api")) {
            envUrl = `${envUrl.replace(/\/$/, "")}/api`;
        }
        const backendUrl = `${envUrl}/digikey/products/${encodeURIComponent(partNumber)}`;
        const response = await fetch(backendUrl, { next: { revalidate: 3600 } });

        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data, {
                headers: {
                    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
                },
            });
        }

        // Live DigiKey API fallback by keyword (part number)
        const fallback = await searchDigiKeyProducts(partNumber, 5);
        if (fallback.Products && fallback.Products.length > 0) {
            const matched = fallback.Products.find(
                (p) =>
                    p.ManufacturerProductNumber?.toLowerCase() === partNumber.toLowerCase() ||
                    p.ProductVariations?.some((v) => v.DigiKeyProductNumber?.toLowerCase() === partNumber.toLowerCase())
            ) || fallback.Products[0];

            return NextResponse.json(matched, {
                headers: {
                    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
                },
            });
        }

        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    } catch (error: any) {
        console.error("Error fetching single product:", error);
        return NextResponse.json(
            { error: error?.message || "Failed to fetch product details" },
            { status: 500 }
        );
    }
}
