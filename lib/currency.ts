"use client";

import { useEffect, useState } from "react";

// Fallback fixed USD to INR rate if external exchange API is unavailable
const DEFAULT_USD_TO_INR = 86.5;

let cachedRate: number | null = null;
let lastFetchTime: number = 0;

/**
 * Fetches current USD to INR exchange rate from free rate API
 */
export async function getUsdToInrRate(): Promise<number> {
    const NOW = Date.now();
    // Cache for 1 hour
    if (cachedRate !== null && NOW - lastFetchTime < 3600000) {
        return cachedRate;
    }

    try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD", {
            cache: "no-store",
        });
        if (res.ok) {
            const data = await res.json();
            if (data?.rates?.INR) {
                cachedRate = Number(data.rates.INR);
                lastFetchTime = NOW;
                return cachedRate;
            }
        }
    } catch (err) {
        console.warn("Failed to fetch live USD to INR exchange rate, using fallback rate:", err);
    }

    return DEFAULT_USD_TO_INR;
}

/**
 * Converts USD price to INR using exchange rate
 */
export function convertUsdToInr(usdAmount: number, rate: number = DEFAULT_USD_TO_INR): number {
    if (!usdAmount || isNaN(usdAmount)) return 0;
    return Math.round(usdAmount * rate * 100) / 100;
}

/**
 * Custom React Hook to get the current exchange rate
 */
export function useUsdToInrRate() {
    const [rate, setRate] = useState<number>(cachedRate || DEFAULT_USD_TO_INR);
    const [loading, setLoading] = useState<boolean>(!cachedRate);

    useEffect(() => {
        let isMounted = true;
        getUsdToInrRate().then((fetchedRate) => {
            if (isMounted) {
                setRate(fetchedRate);
                setLoading(false);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);

    return { rate, loading };
}
