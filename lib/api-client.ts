import { useMutation } from "@tanstack/react-query";

export interface QuoteCalculationInput {
  pcbType: string;
  layers: number;
  boardWidth?: number | null;
  boardHeight?: number | null;
  quantity: number;
  thickness?: string | null;
  copperWeight?: string | null;
  surfaceFinish?: string | null;
  notes?: string | null;
}

export interface QuoteCalculationResult {
  estimatedCost: number;
  leadTime: string;
  currency: string;
  breakdown?: {
    baseCost: number;
    layerSurcharge: number;
    finishSurcharge: number;
  };
}

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  message: string;
}

export interface SubmitResponse {
  success: boolean;
  message: string;
  id: string;
}

/**
 * Hook to calculate PCB cost estimate
 */
export function useCalculateQuote() {
  return useMutation<QuoteCalculationResult, Error, { data: QuoteCalculationInput }>({
    mutationFn: async ({ data }) => {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to calculate quote");
      }

      return response.json();
    },
  });
}

/**
 * Hook to submit contact request
 */
export function useSubmitContact() {
  return useMutation<SubmitResponse, Error, { data: ContactInput }>({
    mutationFn: async ({ data }) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to submit contact request");
      }

      return response.json();
    },
  });
}
