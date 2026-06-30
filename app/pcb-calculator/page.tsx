import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "PCB Calculator - Free Trace Width & Cost Tool | Megabyte Circuit",
    description: "Calculate PCB Trace Width, Impedance, Via Current, And Costs With Our Free PCB Calculator. Get Instant Quotes For PCB Orders In India, Including Ahmedabad. Try Now!",
};

export default function Page() {
    return <ClientPage />;
}
