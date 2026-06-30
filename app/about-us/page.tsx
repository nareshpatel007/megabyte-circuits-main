import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "About Us - Megabytes Circuit Systems Ahmedabad",
    description: "Megabytes Circuit Systems, Ahmedabad’s Trusted PCB Manufacturer Since 2021. High quality PCBs For Telecom, Automotive, And Medical Industries.",
};

export default function Page() {
    return <ClientPage />;
}
