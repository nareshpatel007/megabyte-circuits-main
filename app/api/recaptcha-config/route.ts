import { NextResponse } from "next/server";

export async function GET() {
  try {
    let envUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    if (envUrl.includes("localhost/megabyte-circuits-api")) {
      envUrl = "http://127.0.0.1:8000/api";
    }
    if (!envUrl.endsWith("/api")) {
      envUrl = `${envUrl.replace(/\/$/, "")}/api`;
    }

    const backendUrl = `${envUrl}/recaptcha-config`;

    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "X-Api-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json().catch(() => null);
      if (data && data.success) {
        return NextResponse.json({
          success: true,
          enabled: Boolean(data.enabled),
          site_key: data.site_key || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
        });
      }
    }
  } catch (error) {
    console.error("Error fetching recaptcha config from backend:", error);
  }

  // Fallback to local environment if backend call fails
  const envSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  return NextResponse.json({
    success: true,
    enabled: Boolean(envSiteKey),
    site_key: envSiteKey,
  });
}
