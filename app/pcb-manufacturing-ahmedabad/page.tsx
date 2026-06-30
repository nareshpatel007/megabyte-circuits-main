import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "About Us - Megabytes Circuit Systems Ahmedabad",
    description: "Megabyte Circuit Is A Leading Name In PCB Manufacturing In Ahmedabad, Delivering End-to-end Circuit Board Manufacturing Solutions Across India. From PCB Layout Design To Complete Testing, We Ensure Precision, Speed, And Reliability In Every Project.",
};

export default function Page() {
    return <ClientPage />;
}
