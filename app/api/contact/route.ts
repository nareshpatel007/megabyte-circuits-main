import { NextResponse } from "next/server";
import { SubmitContactBody } from "@/api-zod/src";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = SubmitContactBody.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid request body", details: parsed.error.format() },
        { status: 400 }
      );
    }

    let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    if (envUrl.includes("localhost/megabyte-circuits-api")) {
      envUrl = "http://127.0.0.1:8000/api";
    }
    if (!envUrl.endsWith("/api")) {
      envUrl = `${envUrl.replace(/\/$/, "")}/api`;
    }

    const backendUrl = `${envUrl}/contact`;

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Api-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
      },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });

    const resData = await response.json().catch(() => null);

    if (response.ok && resData && resData.success !== false) {
      return NextResponse.json({
        success: true,
        message: resData.message || "Thank you for reaching out! Our team will contact you within 24 hours.",
        id: resData.id || `CNT-${Date.now()}`,
      });
    }

    const errorMessage = resData?.message || resData?.error || "Failed to submit contact request. Please try again.";
    return NextResponse.json({ success: false, error: errorMessage, message: errorMessage }, { status: response.status || 500 });
  } catch (error: any) {
    console.error("Error in Next.js contact route:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
