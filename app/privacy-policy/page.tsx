import React from "react";
import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";

export const metadata: Metadata = {
    title: "Privacy Policy - Megabytes Circuit Systems Ahmedabad",
    description: "Read the Privacy Policy of Megabytes Circuit Systems. Learn how we handle, store, and protect your custom PCB design files and personal information.",
};

export default function PrivacyPolicyPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            <ServiceHeader
                title="Privacy Policy"
                subtitle="How we collect, use, and safeguard your personal data and design files."
                badge="Legal Policies"
                breadcrumbs={breadcrumbs}
            />

            <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 text-slate-700 leading-relaxed space-y-8 font-medium">
                <section>
                    <h2 className="text-2xl font-display font-bold text-secondary mb-4 border-b pb-2">1. Overview</h2>
                    <p className="text-sm">
                        At Megabytes Circuit Systems, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-secondary mb-4 border-b pb-2">2. The Data We Collect About You</h2>
                    <p className="text-sm mb-3">
                        Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store, and transfer different kinds of personal data about you, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                        <li><strong>Identity Data</strong> includes first name, last name, username, or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting, and location.</li>
                        <li><strong>Design Data</strong> includes Gerber files, BOM lists, schematics, and Pick & Place files uploaded for PCB calculator queries and fabrication.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-secondary mb-4 border-b pb-2">3. Design File Security and Intellectual Property</h2>
                    <p className="text-sm">
                        We understand that your PCB Gerber files, schematics, and bills of materials represent proprietary intellectual property. Megabytes Circuit Systems enforces strict file access controls. Your design files are only accessed by authorized CAM engineers and production staff solely to generate quotations, perform DFM checks, and execute manufacturing. We never share, sell, or disclose your design files to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-secondary mb-4 border-b pb-2">4. Contact Us</h2>
                    <p className="text-sm">
                        If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact our support team at:
                    </p>
                    <div className="mt-4 p-5 bg-slate-50 border border-slate-100 rounded-xl text-sm">
                        <p className="font-bold text-secondary mb-1">Megabytes Circuit Systems</p>
                        <p>C/10, Yogeshwar Estate, B/H Madhuram Estate, Nr. Vishala Estate, SP Ring Road, Odhav, Ahmedabad, Gujarat - 382430</p>
                        <p className="mt-2 text-primary font-semibold">Email: quote@megabytecircuit.com</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
