import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Multi Layer PCB Manufacturer Ahmedabad | Megabyte Circuits",
    description: "Multi layer PCBs from Megabyte Circuit Systems in Ahmedabad. High-density, reliable circuit boards for electronics & automation.",
};

export default function Page() {
    return <ClientPage />;
}
