export interface DigiKeyProductVariation {
    DigiKeyProductNumber: string;
    PackageType?: { Id: number; Name: string };
    StandardPricing?: Array<{ BreakQuantity: number; UnitPrice: number; TotalPrice: number }>;
    MinimumOrderQuantity?: number;
    QuantityAvailableforPackageType?: number;
}

export interface DigiKeyProduct {
    ManufacturerProductNumber: string;
    Description: {
        ProductDescription: string;
        DetailedDescription: string;
    };
    Manufacturer: {
        Id: number;
        Name: string;
    };
    UnitPrice: number;
    ProductUrl: string;
    DatasheetUrl?: string;
    PhotoUrl?: string;
    QuantityAvailable?: number;
    Category?: string;
    ProductVariations?: DigiKeyProductVariation[];
}

export interface DigiKeySearchResponse {
    Products: DigiKeyProduct[];
    ProductsCount?: number;
}

// Memory cache for access token
let cachedToken: { accessToken: string; expiresAt: number } | null = null;

export async function getDigiKeyAccessToken(): Promise<string> {
    // Check cache (with 30s buffer)
    if (cachedToken && Date.now() < cachedToken.expiresAt - 30000) {
        return cachedToken.accessToken;
    }

    const clientId = process.env.DIGIKEY_CLIENT_ID || "lT71SAGE5n7ZClfGSc4lLATmbnng8POpYfYrzBRsaeXuIevJ";
    const clientSecret = process.env.DIGIKEY_CLIENT_SECRET || "6jE42EjppYmtY6LJxOleJcRsnxAXDFs97yZ77vSZhDPrNf3V2xQYAMLU7MxWufbP";
    const mode = process.env.DIGIKEY_MODE || "live";

    const tokenUrl = mode === "sandbox"
        ? "https://sandbox-api.digikey.com/v1/oauth2/token"
        : "https://api.digikey.com/v1/oauth2/token";

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("grant_type", "client_credentials");

    const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        cache: "no-store",
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`DigiKey OAuth error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const expiresInMs = (data.expires_in || 599) * 1000;
    cachedToken = {
        accessToken: data.access_token,
        expiresAt: Date.now() + expiresInMs,
    };

    return data.access_token;
}

export async function searchDigiKeyProducts(
    keywords: string = "resistor",
    recordCount: number = 20,
    recordStartPosition: number = 0
): Promise<DigiKeySearchResponse> {
    const clientId = process.env.DIGIKEY_CLIENT_ID || "lT71SAGE5n7ZClfGSc4lLATmbnng8POpYfYrzBRsaeXuIevJ";
    const mode = process.env.DIGIKEY_MODE || "live";

    const searchUrl = mode === "sandbox"
        ? "https://sandbox-api.digikey.com/products/v4/search/keyword"
        : "https://api.digikey.com/products/v4/search/keyword";

    const token = await getDigiKeyAccessToken();

    const response = await fetch(searchUrl, {
        method: "POST",
        headers: {
            "X-DIGIKEY-Client-Id": clientId,
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Keywords: keywords,
            RecordCount: recordCount,
            RecordStartPosition: recordStartPosition,
        }),
        cache: "no-store",
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`DigiKey Search error (${response.status}): ${errorText}`);
    }

    return await response.json();
}
