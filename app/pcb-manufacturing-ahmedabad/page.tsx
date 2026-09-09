import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "PCB Manufacturing in Ahmedabad | Top Circuit Board Manufacturer in India – Megabyte Circuit",
    description: "Megabyte Circuit is a leading name in PCB manufacturing in Ahmedabad, delivering end-to-end circuit board manufacturing solutions across India. From PCB Layout Design to complete testing, we ensure precision, speed, and reliability in every project.",
};

export default function Page() {
    return <ClientPage />;
}

