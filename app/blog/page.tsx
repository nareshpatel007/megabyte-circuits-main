import React from "react";
import type { Metadata } from "next";
import { BlogGridClient } from "@/components/blog/BlogGridClient";

export const metadata: Metadata = {
    title: "PCB Engineering Blog & Insights - MegaByte Circuits",
    description: "Read technical guides, SMT assembly guidelines, and high-speed PCB design tips written by senior layout and fabrication engineers.",
};

export default function BlogPage() {
    return <BlogGridClient />;
}
