import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Testing and Quality Assurance Services | Megabyte Circuit Systems",
    description: "Megabyte Circuit Systems offers expert PCB testing and quality assurance services in Ahmedabad, ensuring reliable, high-performance circuit boards for telecommunications, automotive, medical devices, and more.",
};

export default function Page() {
    return <ClientPage />;
}
