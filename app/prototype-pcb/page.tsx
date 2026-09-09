import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Prototype PCB Manufacturing in Ahmedabad, India | MEGABYTE CIRCUIT",
    description: "Get high-quality prototype PCB manufacturing in Ahmedabad, Gujarat, India with MEGABYTE CIRCUIT. Fast, reliable, and customized solutions for your circuit board needs.",
};

export default function Page() {
    return <ClientPage />;
}
