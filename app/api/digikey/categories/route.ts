import { NextResponse } from "next/server";

export async function GET() {
    try {
        let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "https://api.megabytecircuit.com/api";
        if (envUrl.includes("127.0.0.1:8000") || envUrl.includes("localhost/megabyte-circuits-api")) {
            envUrl = "https://api.megabytecircuit.com/api";
        }
        if (!envUrl.endsWith("/api")) {
            envUrl = `${envUrl.replace(/\/$/, "")}/api`;
        }

        const backendUrl = `${envUrl}/digikey/categories`;

        const response = await fetch(backendUrl, { next: { revalidate: 86400 } });
        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data, {
                headers: {
                    "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
                },
            });
        }

        return NextResponse.json({ Categories: [] });
    } catch (error: any) {
        console.error("Error in Next DigiKey categories proxy:", error);
        return NextResponse.json({ Categories: [] });
    }
}
