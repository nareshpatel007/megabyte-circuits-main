import { Router } from "express";
import { db, contactsTable, quotesTable } from "@workspace/db";
import { SubmitContactBody, SubmitQuoteBody, CalculateQuoteBody } from "@workspace/api-zod";

const router = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, phone, company, serviceType, message } = parsed.data;

  await db.insert(contactsTable).values({
    name,
    email,
    phone: phone ?? null,
    company: company ?? null,
    serviceType: serviceType ?? null,
    message,
  });

  res.json({
    success: true,
    message: "Thank you for reaching out! Our team will contact you within 24 hours.",
    id: `CNT-${Date.now()}`,
  });
});

router.post("/quote", async (req, res) => {
  const parsed = SubmitQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const data = parsed.data;
  const cost = calculatePcbCost(data);

  await db.insert(quotesTable).values({
    name: data.name,
    email: data.email,
    phone: data.phone ?? null,
    company: data.company ?? null,
    pcbType: data.pcbType,
    layers: data.layers,
    boardWidth: data.boardWidth ?? null,
    boardHeight: data.boardHeight ?? null,
    quantity: data.quantity,
    thickness: data.thickness ?? null,
    copperWeight: data.copperWeight ?? null,
    surfaceFinish: data.surfaceFinish ?? null,
    notes: data.notes ?? null,
    estimatedCost: cost.estimatedCost,
  });

  res.json({
    success: true,
    message: "Your quote request has been received! We will send a detailed quote to your email within 2 hours.",
    id: `QT-${Date.now()}`,
  });
});

router.post("/quote/calculate", async (req, res) => {
  const parsed = CalculateQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const result = calculatePcbCost(parsed.data);
  res.json(result);
});

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

export default router;
