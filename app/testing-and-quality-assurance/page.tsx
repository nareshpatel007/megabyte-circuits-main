import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Testing And Quality Assurance Services | Megabyte Circuit Systems",
    description: "Megabyte Circuit Systems Offers Expert PCB Testing And Quality Assurance Services In Ahmedabad, Ensuring Reliable, High-performance Circuit Boards For Telecommunications, Automotive, Medical Devices, And More.",
};

export default function Page() {
    return <ClientPage />;
}
