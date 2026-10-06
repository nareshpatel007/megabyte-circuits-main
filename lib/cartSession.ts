"use client";

const COOKIE_NAME = "megabyte_cart_session_id";
const COOKIE_MAX_AGE_DAYS = 30;

function getCookieDomain(): string | undefined {
    if (typeof window === "undefined") return undefined;
    const hostname = window.location.hostname;
    if (hostname.includes("megabytecircuit.com")) {
        return ".megabytecircuit.com";
    }
    return undefined;
}

/**
 * Helper to get a cookie value by name
 */
export function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const item = parts.pop()?.split(';').shift();
        return item ? decodeURIComponent(item) : null;
    }
    return null;
}

/**
 * Helper to set a cookie valid for specified days
 */
export function setCookie(name: string, value: string, days: number = COOKIE_MAX_AGE_DAYS) {
    if (typeof document === "undefined") return;
    const maxAgeSeconds = days * 24 * 60 * 60;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    const domainPart = getCookieDomain() ? `; domain=${getCookieDomain()}` : "";
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAgeSeconds}; expires=${expires}; path=/; SameSite=Lax${domainPart}`;
}

export function removeCookie(name: string) {
    if (typeof document === "undefined") return;
    const domainPart = getCookieDomain() ? `; domain=${getCookieDomain()}` : "";
    if (domainPart) {
        document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domainPart}`;
    }
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

/**
 * Helper to get user object from cookie if logged in
 */
function getAuthUserFromCookie(): any | null {
    if (typeof document === "undefined") return null;
    const userCookie = getCookie("megabyte_user");
    if (userCookie) {
        try {
            return JSON.parse(userCookie);
        } catch {
            return null;
        }
    }
    return null;
}

/**
 * Canonical cart session ID for an authenticated user across all devices
 */
export function getUserCartSessionId(userId: string | number): string {
    return `user_cart_${userId}`;
}

/**
 * Sets or updates the cart session ID in cookie
 */
export function setCartSessionId(sessionId: string) {
    if (!sessionId) return;
    setCookie(COOKIE_NAME, sessionId, COOKIE_MAX_AGE_DAYS);
}

/**
 * Gets existing cart session ID or generates a new unique 30-day session ID.
 * When a user is logged in, this ALWAYS uses the same cart ID (user_cart_{userId}) across all devices.
 */
export function getOrCreateCartSessionId(): string {
    const authUser = getAuthUserFromCookie();
    if (authUser && authUser.id) {
        const canonicalId = getUserCartSessionId(authUser.id);
        const currentCookie = getCookie(COOKIE_NAME);
        if (currentCookie !== canonicalId) {
            setCookie(COOKIE_NAME, canonicalId, COOKIE_MAX_AGE_DAYS);
        }
        return canonicalId;
    }

    let sessionId = getCookie(COOKIE_NAME);
    if (sessionId && sessionId.startsWith("user_cart_")) {
        sessionId = null;
    }

    if (!sessionId) {
        sessionId = `cart_sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        setCookie(COOKIE_NAME, sessionId, COOKIE_MAX_AGE_DAYS);
    } else {
        setCookie(COOKIE_NAME, sessionId, COOKIE_MAX_AGE_DAYS);
    }
    return sessionId;
}

/**
 * Attaches the current guest cart to the logged-in user and synchronizes across all devices
 */
export async function attachCartOnLogin(
    userId: string | number,
    token?: string,
    guestSessionId?: string | null,
    fallbackItems?: any[]
): Promise<any[]> {
    if (!userId) return [];
    const canonicalSessionId = getUserCartSessionId(userId);
    const currentSessionId = guestSessionId || getCookie(COOKIE_NAME);

    // Read local items if not passed
    let itemsToAttach = fallbackItems;
    if (!itemsToAttach && typeof window !== "undefined") {
        try {
            const raw = localStorage.getItem("megabyte_cart");
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    itemsToAttach = parsed;
                }
            }
        } catch (e) {}
    }

    try {
        const authToken = token || getCookie("megabyte_user_token");
        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };
        if (authToken) {
            headers["Authorization"] = `Bearer ${authToken}`;
        }

        const res = await fetch("/api/cart/attach", {
            method: "POST",
            headers,
            body: JSON.stringify({
                guest_session_id: currentSessionId && currentSessionId !== canonicalSessionId ? currentSessionId : undefined,
                user_id: userId,
                items: itemsToAttach || [],
            }),
        });

        const data = await res.json();

        if (data.success && Array.isArray(data.items)) {
            setCartSessionId(data.session_id || canonicalSessionId);
            const finalItems = data.items.length > 0 ? data.items : (itemsToAttach && itemsToAttach.length > 0 ? itemsToAttach : []);
            if (typeof window !== "undefined") {
                localStorage.setItem("megabyte_cart", JSON.stringify(finalItems));
                window.dispatchEvent(new Event("megabyte_cart_updated"));
            }
            if (data.items.length === 0 && itemsToAttach && itemsToAttach.length > 0) {
                saveCartToBackend(itemsToAttach).catch(() => {});
            }
            return finalItems;
        }
    } catch (err) {
        console.error("Failed to attach cart on login in main:", err);
    }

    // Fallback: set the canonical session ID and preserve local items
    setCartSessionId(canonicalSessionId);
    if (itemsToAttach && itemsToAttach.length > 0 && typeof window !== "undefined") {
        localStorage.setItem("megabyte_cart", JSON.stringify(itemsToAttach));
        saveCartToBackend(itemsToAttach).catch(() => {});
        return itemsToAttach;
    }
    return await loadCartFromBackend();
}

/**
 * Saves cart items to backend API and updates local storage & dispatches event
 */
export async function saveCartToBackend(items: any[]): Promise<boolean> {
    try {
        const sessionId = getOrCreateCartSessionId();
        const authUser = getAuthUserFromCookie();
        const token = getCookie("megabyte_user_token");

        // Save to localStorage immediately
        localStorage.setItem("megabyte_cart", JSON.stringify(items));
        window.dispatchEvent(new Event("megabyte_cart_updated"));

        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        // Save to backend database
        const res = await fetch("/api/cart/save", {
            method: "POST",
            headers,
            body: JSON.stringify({
                session_id: sessionId,
                user_id: authUser?.id || undefined,
                items: items,
            }),
        });

        const data = await res.json();
        return Boolean(data.success);
    } catch (err) {
        console.error("Failed to save cart to backend:", err);
        return false;
    }
}

/**
 * Removes a specific item from cart by ID and updates both localStorage & backend DB
 */
export async function removeCartItemFromBackend(id: string): Promise<any[]> {
    try {
        const savedCart = localStorage.getItem("megabyte_cart");
        const items = savedCart ? JSON.parse(savedCart) : [];
        const updatedItems = items.filter((item: any) => item.id !== id);

        await saveCartToBackend(updatedItems);
        return updatedItems;
    } catch (err) {
        console.error("Failed to remove cart item:", err);
        return [];
    }
}

let activeCartPromise: Promise<any[]> | null = null;

/**
 * Fetches cart items from backend API using cookie session ID (with request deduplication)
 */
export async function loadCartFromBackend(): Promise<any[]> {
    if (activeCartPromise) {
        return activeCartPromise;
    }

    activeCartPromise = (async () => {
        try {
            const existingCookie = getCookie(COOKIE_NAME);
            const savedCart = typeof window !== "undefined" ? localStorage.getItem("megabyte_cart") : null;
            if (!existingCookie && !savedCart) {
                return [];
            }

            const sessionId = getOrCreateCartSessionId();
            if (!sessionId) {
                return savedCart ? JSON.parse(savedCart) : [];
            }

            const token = getCookie("megabyte_user_token");
            const headers: HeadersInit = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const res = await fetch(`/api/cart/get?session_id=${encodeURIComponent(sessionId)}`, {
                headers,
            });
            const data = await res.json();

            if (data.success && Array.isArray(data.items)) {
                if (data.session_id && data.session_id !== sessionId) {
                    setCartSessionId(data.session_id);
                }

                const savedCart = typeof window !== "undefined" ? localStorage.getItem("megabyte_cart") : null;
                let localItems: any[] = [];
                try {
                    if (savedCart) localItems = JSON.parse(savedCart);
                } catch (e) {}

                if (data.items.length === 0 && Array.isArray(localItems) && localItems.length > 0) {
                    saveCartToBackend(localItems).catch(() => {});
                    return localItems;
                }

                if (typeof window !== "undefined") {
                    localStorage.setItem("megabyte_cart", JSON.stringify(data.items));
                    window.dispatchEvent(new Event("megabyte_cart_updated"));
                }
                return data.items;
            }

            const localCart = typeof window !== "undefined" ? localStorage.getItem("megabyte_cart") : null;
            return localCart ? JSON.parse(localCart) : [];
        } catch (err) {
            console.error("Failed to load cart from backend:", err);
            const localCart = typeof window !== "undefined" ? localStorage.getItem("megabyte_cart") : null;
            return localCart ? JSON.parse(localCart) : [];
        } finally {
            activeCartPromise = null;
        }
    })();

    return activeCartPromise;
}

/**
 * Gets the minimum product quantity configured in .env (default 1)
 */
export function getMinCartQuantity(): number {
    const envVal = process.env.NEXT_PUBLIC_MIN_CART_QUANTITY;
    if (envVal && !isNaN(Number(envVal))) {
        const parsed = Number(envVal);
        if (parsed > 0) return parsed;
    }
    return 1;
}

/**
 * Helper to calculate tiered unit price and total price for electronic parts
 */
export function calculatePartPrice(
    baseUnitPrice: number,
    qty: number,
    standardPricing?: Array<{ BreakQuantity: number; UnitPrice: number; TotalPrice?: number }>
) {
    let unitPrice = baseUnitPrice;

    if (standardPricing && standardPricing.length > 0) {
        const sortedPricing = [...standardPricing].sort((a, b) => b.BreakQuantity - a.BreakQuantity);
        const applicableTier = sortedPricing.find((tier) => qty >= tier.BreakQuantity);
        if (applicableTier) {
            unitPrice = applicableTier.UnitPrice;
        }
    }

    const price = Math.round(unitPrice * qty * 100) / 100;

    return {
        unitPrice: Math.round(unitPrice * 100) / 100,
        price,
        baseUnitPrice,
    };
}
