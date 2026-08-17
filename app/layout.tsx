import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Best PCB Manufacturer In India - Order PCB Online In 24 Hours",
    description: "PCB Manufacturer In Ahmedabad, Gujarat, India – Fastest Delivery For Automotive & Medical. Prototype To Production. No MOQ. Get Instant Quote.",
    keywords: [
        "PCB Manufacturer",
        "PCB Supplier",
        "Printed Circuit Board",
        "PCB Online",
        "Prototype PCB",
        "High-Quality PCB",
        "Fast PCB Delivery",
        "24-Hour PCB",
        "Medical PCB",
        "Automotive PCB",
        "Shenzhen PCB",
        "PCBs",
        "PCB Prototype",
        "PCB Fabrication",
        "PCB Assembly",
        "PCB Manufacturer China",
    ],
    metadataBase: new URL("https://www.megabytecircuit.com"),
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
    },
    icons: {
        icon: "/images/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
