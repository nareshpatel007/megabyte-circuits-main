import { NextResponse } from "next/server";

export async function GET() {
    try {
        let envUrl = process.env.API_URL;
        if (!envUrl || envUrl.includes("localhost/megabyte-circuits-api")) {
            envUrl = "http://127.0.0.1:8000/api";
        }
        if (!envUrl.endsWith("/api")) {
            envUrl = `${envUrl.replace(/\/$/, "")}/api`;
        }

        const backendUrl = `${envUrl}/digikey/categories`;

        const response = await fetch(backendUrl, { cache: "no-store" });
        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data);
        }

        return NextResponse.json({ Categories: [] });
    } catch (error: any) {
        console.error("Error in Next DigiKey categories proxy:", error);
        return NextResponse.json({ Categories: [] });
    }
}
