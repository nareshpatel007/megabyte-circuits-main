import { NextResponse } from "next/server";
import { SubmitContactBody } from "@/api-zod/src";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = SubmitContactBody.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body", details: parsed.error.format() }, { status: 400 });
    }

    console.log("Mock contact request received:", parsed.data);

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Our team will contact you within 24 hours.",
      id: `CNT-${Date.now()}`,
    });
  } catch (error: any) {
    console.error("Error in contact route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
