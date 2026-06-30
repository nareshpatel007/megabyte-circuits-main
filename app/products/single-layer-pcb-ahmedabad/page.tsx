import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Single Layer PCB Manufacturer In Ahmedabad | Megabyte Circuits",
    description: "High-quality Single Layer PCBs From Megabyte Circuit Systems In Ahmedabad. Reliable, Cost-effective Circuit Boards For Electronics & Prototyping.",
};

export default function Page() {
    return <ClientPage />;
}
