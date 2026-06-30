import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "FAQ - Megabytes Circuit Systems Ahmedabad",
    description: "Find Answers To Common PCB Questions At Megabytes Circuit Systems. Learn About Lead Times, File Formats, DFM Support, And High-mix Orders In Our FAQ.",
};

export default function Page() {
    return <ClientPage />;
}
