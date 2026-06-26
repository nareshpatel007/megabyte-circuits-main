import { z } from "zod";

export const CalculateQuoteBody = z.object({
    pcbType: z.string(),
    layers: z.union([z.number(), z.string().transform(v => parseInt(v, 10))]),
    boardWidth: z.union([z.number(), z.string().transform(v => parseFloat(v))]).nullable().optional(),
    boardHeight: z.union([z.number(), z.string().transform(v => parseFloat(v))]).nullable().optional(),
    quantity: z.union([z.number(), z.string().transform(v => parseInt(v, 10))]),
    thickness: z.string().nullable().optional(),
    copperWeight: z.string().nullable().optional(),
    surfaceFinish: z.string().nullable().optional(),
});

export const SubmitQuoteBody = z.object({
    pcbType: z.string(),
    layers: z.union([z.number(), z.string().transform(v => parseInt(v, 10))]),
    boardWidth: z.union([z.number(), z.string().transform(v => parseFloat(v))]).nullable().optional(),
    boardHeight: z.union([z.number(), z.string().transform(v => parseFloat(v))]).nullable().optional(),
    quantity: z.union([z.number(), z.string().transform(v => parseInt(v, 10))]),
    thickness: z.string().nullable().optional(),
    copperWeight: z.string().nullable().optional(),
    surfaceFinish: z.string().nullable().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    mobile: z.string().optional(),
    message: z.string().optional(),
});

export const SubmitContactBody = z.object({
    name: z.string(),
    email: z.string().email(),
    mobile: z.string().optional(),
    message: z.string(),
    phone: z.string().optional(),
    company: z.string().optional(),
    serviceType: z.string().optional(),
});
