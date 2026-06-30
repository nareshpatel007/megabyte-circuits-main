import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "DFM Support Services | Megabytes Circuite",
    description: "DFM Support By Megabytes Circuite Systems. Optimize PCB Designs For Manufacturability, Cost-efficiency, And Performance. Get A Free Quote!",
};

export default function Page() {
    return <ClientPage />;
}
