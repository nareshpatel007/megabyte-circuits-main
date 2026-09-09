import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Single Layer PCB Manufacturer in Ahmedabad | Megabyte Circuits",
    description: "High-quality single layer PCBs from Megabyte Circuit Systems in Ahmedabad. Reliable, cost-effective circuit boards for electronics & prototyping.",
};

export default function Page() {
    return <ClientPage />;
}
