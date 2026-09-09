import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "PCB Design Services in Ahmedabad, India ",
    description: "PCB design services in Ahmedabad, Gujarat, India by Megabytes Circuit Systems. Custom, high-speed, and multilayer PCB design solutions for your projects.",
};

export default function Page() {
    return <ClientPage />;
}
