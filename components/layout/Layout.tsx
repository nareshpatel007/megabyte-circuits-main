import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Phone, Mail } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />

            {/* ─── Sticky Sidebar Buttons ─── */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-1 select-none">
                <a
                    href="https://wa.me/919898842942"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[#00873c] hover:bg-[#009b45] text-white flex items-center justify-center rounded-l-xl shadow-xl transition-all duration-300 hover:-translate-x-1 border border-white/10"
                    title="Chat on WhatsApp"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.004 2c-5.523 0-10 4.477-10 10a9.96 9.96 0 0 0 1.503 5.253L2 22l4.912-1.288A9.96 9.96 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.827 14.153c-.247.697-1.233 1.272-1.703 1.343-.47.07-1.059.102-1.703-.102-1.503-.475-3.08-1.554-4.225-2.7a28.026 28.026 0 0 1-3.666-4.524c-.382-.6-.677-1.246-.677-1.89 0-.853.407-1.264.677-1.536.216-.217.47-.323.705-.323h.366c.247 0 .47.01.677.495.212.495.733 1.777.799 1.91.066.133.11.288.022.464-.088.177-.165.288-.33.488-.166.2-.33.366-.496.53-.166.167-.34.348-.145.677.2.33.87 1.41 1.865 2.29.995.88 1.83 1.155 2.128 1.303.298.149.47.126.643-.07.173-.197.74-.859.937-1.153.197-.294.397-.247.662-.149.264.098 1.688.795 1.977.939.29.144.484.212.553.33.069.118.069.684-.178 1.381z"/>
                    </svg>
                </a>
                <a
                    href="tel:+919898842942"
                    className="w-11 h-11 bg-[#00873c] hover:bg-[#009b45] text-white flex items-center justify-center rounded-l-xl shadow-xl transition-all duration-300 hover:-translate-x-1 border border-white/10"
                    title="Call Us"
                >
                    <Phone className="w-5 h-5" />
                </a>
                <a
                    href="mailto:quote@megabytecircuit.com"
                    className="w-11 h-11 bg-[#00873c] hover:bg-[#009b45] text-white flex items-center justify-center rounded-l-xl shadow-xl transition-all duration-300 hover:-translate-x-1 border border-white/10"
                    title="Send Email"
                >
                    <Mail className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
