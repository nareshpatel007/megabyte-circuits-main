import { NextResponse } from "next/server";
import { CalculateQuoteBody } from "@/api-zod/src";

function calculatePcbCost(params: {
  pcbType: string;
  layers: number;
  boardWidth?: number | null;
  boardHeight?: number | null;
  quantity: number;
  thickness?: string | null;
  copperWeight?: string | null;
  surfaceFinish?: string | null;
}) {
  const { pcbType, layers, boardWidth = 100, boardHeight = 100, quantity, surfaceFinish } = params;

  const area = ((boardWidth ?? 100) * (boardHeight ?? 100)) / 10000;
  const baseCost = area * 2.5 * quantity;

  const layerSurcharge = layers <= 2 ? 0 : (layers - 2) * 0.8 * area * quantity;

  const finishMap: Record<string, number> = {
    ENIG: 1.5,
    HASL: 0,
    OSP: 0.5,
  };
  const finishSurcharge = (finishMap[surfaceFinish ?? "HASL"] ?? 0) * area * quantity;

  const flexSurcharge = pcbType === "Flexible PCB" || pcbType === "Rigid-Flex PCB" ? baseCost * 0.5 : 0;

  const totalUSD = baseCost + layerSurcharge + finishSurcharge + flexSurcharge;
  const totalINR = totalUSD * 83.5;

  const leadDays = layers <= 2 ? "3-5" : layers <= 6 ? "5-7" : "7-10";

  return {
    estimatedCost: Math.round(totalINR),
    leadTime: `${leadDays} Business Days`,
    currency: "INR",
    breakdown: {
      baseCost: Math.round(baseCost * 83.5),
      layerSurcharge: Math.round(layerSurcharge * 83.5),
      finishSurcharge: Math.round(finishSurcharge * 83.5),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = CalculateQuoteBody.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body", details: parsed.error.format() }, { status: 400 });
    }

    const result = calculatePcbCost(parsed.data);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Error in calculate quote route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
