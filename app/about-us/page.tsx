import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "About Us - Megabytes Circuit Systems Ahmedabad",
    description: "Megabytes Circuit Systems, Ahmedabad’s trusted PCB manufacturer since 2021. High-quality PCBs for telecom, automotive, and medical industries.",
};

export default function Page() {
    return <ClientPage />;
}
