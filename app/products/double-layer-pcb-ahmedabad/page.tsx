import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Double Layer PCB Manufacturer Ahmedabad | Megabyte Circuits",
    description: "High-quality double layer PCBs from Megabyte Circuit Systems in Ahmedabad. Reliable, advanced circuit boards for electronics & prototyping.",
};

export default function Page() {
    return <ClientPage />;
}

