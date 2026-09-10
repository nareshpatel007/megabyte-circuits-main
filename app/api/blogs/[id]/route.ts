import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
        if (envUrl.includes("localhost/megabyte-circuits-api")) {
            envUrl = "http://127.0.0.1:8000/api";
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
            cache: "no-store"
        });

        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data);
        }

        return NextResponse.json({ status: false, message: "Blog not found", blog: null }, { status: 404 });
    } catch (error: any) {
        console.error("Error in Next blog show proxy:", error);
        return NextResponse.json({ status: false, message: "Internal server error", blog: null }, { status: 500 });
    }
}
