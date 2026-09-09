import React from "react";
import type { Metadata } from "next";
import ClientPage from "@/app/HomePageClient";

export const metadata: Metadata = {
    title: "Best PCB Manufacturer In India - Order PCB Online In 24 Hours",
    description: "PCB Manufacturer In Ahmedabad, Gujarat, India – Fastest Delivery For Automotive & Medical. Prototype To Production. No MOQ. Get Instant Quote.",
    openGraph: {
        title: "Best PCB Manufacturer In India - Order PCB Online In 24 Hours",
        description: "PCB Manufacturer In Ahmedabad, Gujarat, India – Fastest Delivery For Automotive & Medical. Prototype To Production. No MOQ. Get Instant Quote.",
        url: "https://www.megabytecircuit.com",
        siteName: "MegaByte's Circuit Systems",
        images: [
            {
                url: "/images/logo.png",
                width: 800,
                height: 600,
                alt: "MegaByte's Circuit Systems"
            }
        ],
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Best PCB Manufacturer In India - Order PCB Online In 24 Hours",
        description: "PCB Manufacturer In Ahmedabad, Gujarat, India – Fastest Delivery For Automotive & Medical. Prototype To Production. No MOQ. Get Instant Quote.",
        images: [
            "/images/logo.png"
        ]
    }
};

export default function Page() {
    return <ClientPage />;
}
