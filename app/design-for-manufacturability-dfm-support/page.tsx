import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "DFM Support Services | Megabytes Circuite",
    description: "DFM support by Megabytes Circuite Systems. Optimize PCB designs for manufacturability, cost-efficiency, and performance. Get a free quote!",
};

export default function Page() {
    return <ClientPage />;
}
