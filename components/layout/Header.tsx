"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, Phone, Mail, MapPin, ChevronDown,
    Calculator, Globe, X, Facebook, Instagram, Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
    { label: "Home", href: "/" },
];

const MFG_LINKS = [
    { label: "Overview", href: "/manufacturing" },
    { label: "Single Layer PCB", href: "/manufacturing" },
    { label: "Double Layer PCB", href: "/manufacturing" },
    { label: "Multilayer PCB", href: "/manufacturing" },
    { label: "HDI PCB", href: "/manufacturing" },
    { label: "Flexible PCB", href: "/manufacturing" },
    { label: "Rigid-Flex PCB", href: "/manufacturing" },
    { label: "Metal Core PCB", href: "/manufacturing" },
];

const PRODUCTS_LINKS = [
    { label: "Single Layer PCB", href: "/products/single-layer-pcb" },
    { label: "Double Layer PCB", href: "/products/double-layer-pcb" },
    { label: "Multi Layer PCB", href: "/products/multi-layer-pcb" },
];

const SERVICES_LINKS = [
    { label: "Prototype PCB", href: "/services/prototype-pcb" },
    { label: "PCB Design", href: "/services/pcb-design" },
    { label: "PCB Manufacturing", href: "/services/pcb-manufacturing" },
    { label: "PCB Developing Services", href: "/services/pcb-developing-services" },
    { label: "PCB Fabrication", href: "/services/pcb-fabrication" },
    { label: "DFM Support", href: "/services/design-for-manufacturability-dfm-support" },
    { label: "Testing & Quality Assurance", href: "/services/testing-and-quality-assurance" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [mfgOpen, setMfgOpen] = React.useState(false);
    const [productsOpen, setProductsOpen] = React.useState(false);
    const [servicesOpen, setServicesOpen] = React.useState(false);
    const [mfgHover, setMfgHover] = React.useState(false);
    const [productsHover, setProductsHover] = React.useState(false);
    const [servicesHover, setServicesHover] = React.useState(false);
    const location = usePathname();

    const isTransparent = false;

    React.useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    React.useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    React.useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const navText = isTransparent
        ? "text-white/90 hover:text-white"
        : "text-foreground hover:text-primary";

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isTransparent
                    ? "bg-transparent"
                    : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
                    }`}
            >
                {/* ── Top bar ─────────────────────────────────────────── */}
                <div
                    className={`hidden md:block w-full text-xs transition-colors ${isTransparent
                        ? "bg-secondary/70 backdrop-blur-sm text-white/80"
                        : "bg-secondary text-white/80"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 gap-4">
                        <div className="flex items-center gap-5 flex-wrap">
                            <span className="flex items-center gap-1.5 shrink-0">
                                <MapPin className="w-3 h-3 text-primary shrink-0" />
                                Ahmedabad, Gujarat, India
                            </span>
                            <span className="flex items-center gap-1.5 shrink-0">
                                <Mail className="w-3 h-3 text-primary shrink-0" />
                                quote@megabytecircuit.com
                            </span>
                            <span className="flex items-center gap-1.5 shrink-0">
                                <Phone className="w-3 h-3 text-primary shrink-0" />
                                +91-9898842942
                            </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="text-white/60">ISO 9001:2015 Certified</span>
                            <span className="text-white/30">|</span>
                            <span className="flex items-center gap-1.5">
                                <Globe className="w-3 h-3 text-primary" /> Global Shipping
                            </span>
                            <div className="flex items-center gap-2 ml-2">
                                {[
                                    { Icon: Facebook, href: "https://www.facebook.com/people/Megabytes-Circuit-Systems/100090711935963/" },
                                    { Icon: Instagram, href: "https://www.instagram.com/megabytescircuit/?hl=en" },
                                    { Icon: Linkedin, href: "https://in.linkedin.com/in/megabytes-circuit-systems-598908237" }
                                ].map(({ Icon, href }, i) => (
                                    <a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/40 hover:text-primary transition-colors"
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Main nav bar ────────────────────────────────────── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 sm:h-24 items-center justify-between gap-6">

                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0 group">
                            <Image
                                src="/images/logo.png"
                                alt="MegaByte's Circuits"
                                width={240}
                                height={72}
                                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            <Link
                                href="/"
                                className={`text-sm font-medium px-3 py-2 rounded-md hover:text-primary transition-colors ${navText}`}
                            >
                                Home
                            </Link>

                            <DropdownMenu open={mfgHover} onOpenChange={setMfgHover} modal={false}>
                                <DropdownMenuTrigger
                                    onMouseEnter={() => setMfgHover(true)}
                                    onMouseLeave={() => setMfgHover(false)}
                                    className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md hover:text-primary outline-none transition-colors ${navText}`}
                                >
                                    Manufacturing <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    onMouseEnter={() => setMfgHover(true)}
                                    onMouseLeave={() => setMfgHover(false)}
                                    align="start"
                                    className="w-52"
                                >
                                    {MFG_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer">{l.label}</DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu open={productsHover} onOpenChange={setProductsHover} modal={false}>
                                <DropdownMenuTrigger
                                    onMouseEnter={() => setProductsHover(true)}
                                    onMouseLeave={() => setProductsHover(false)}
                                    className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md hover:text-primary outline-none transition-colors ${navText}`}
                                >
                                    Products <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    onMouseEnter={() => setProductsHover(true)}
                                    onMouseLeave={() => setProductsHover(false)}
                                    align="start"
                                    className="w-52"
                                >
                                    {PRODUCTS_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer">{l.label}</DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu open={servicesHover} onOpenChange={setServicesHover} modal={false}>
                                <DropdownMenuTrigger
                                    onMouseEnter={() => setServicesHover(true)}
                                    onMouseLeave={() => setServicesHover(false)}
                                    className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md hover:text-primary outline-none transition-colors ${navText}`}
                                >
                                    Services <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    onMouseEnter={() => setServicesHover(true)}
                                    onMouseLeave={() => setServicesHover(false)}
                                    align="start"
                                    className="w-56"
                                >
                                    {SERVICES_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer">{l.label}</DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link
                                href="/about"
                                className={`text-sm font-medium px-3 py-2 rounded-md hover:text-primary transition-colors ${navText}`}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/blog"
                                className={`text-sm font-medium px-3 py-2 rounded-md hover:text-primary transition-colors ${navText}`}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className={`text-sm font-medium px-3 py-2 rounded-md hover:text-primary transition-colors ${navText}`}
                            >
                                Contact Us
                            </Link>
                        </nav>

                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex items-center gap-3 shrink-0">
                            <Button
                                asChild
                                size="default"
                                className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md shadow-primary/20"
                            >
                                <Link href="/pcb-calculator">PCB Calculator</Link>
                            </Button>
                        </div>

                        {/* Mobile: compact CTA + hamburger */}
                        <div className="flex lg:hidden items-center gap-2">
                            <Button
                                asChild
                                size="sm"
                                className="bg-primary text-white text-xs h-8 px-3 font-semibold hidden sm:flex"
                            >
                                <Link href="/pcb-calculator">PCB Calculator</Link>
                            </Button>
                            <button
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                                className={`p-2 rounded-md transition-colors ${isTransparent
                                    ? "text-white hover:bg-white/10"
                                    : "text-foreground hover:bg-gray-100"
                                    }`}
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Mobile Drawer ─────────────────────────────────────── */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />

                    {/* Panel */}
                    <div className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl flex flex-col">
                        {/* Drawer header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                                <Image
                                    src="/images/logo.png"
                                    alt="MegaByte's Circuits"
                                    width={140}
                                    height={36}
                                    className="h-9 w-auto object-contain"
                                />
                            </Link>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Drawer body */}
                        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Manufacturing accordion */}
                            <div>
                                <button
                                    onClick={() => setMfgOpen((o) => !o)}
                                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                >
                                    PCB Manufacturing
                                    <ChevronDown className={`w-4 h-4 transition-transform ${mfgOpen ? "rotate-180" : ""}`} />
                                </button>
                                {mfgOpen && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                                        {MFG_LINKS.map((l) => (
                                            <Link
                                                key={l.label}
                                                href={l.href}
                                                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Products accordion */}
                            <div>
                                <button
                                    onClick={() => setProductsOpen((o) => !o)}
                                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                >
                                    Products
                                    <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                                </button>
                                {productsOpen && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                                        {PRODUCTS_LINKS.map((l) => (
                                            <Link
                                                key={l.label}
                                                href={l.href}
                                                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Services accordion */}
                            <div>
                                <button
                                    onClick={() => setServicesOpen((o) => !o)}
                                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                >
                                    Services
                                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                                </button>
                                {servicesOpen && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                                        {SERVICES_LINKS.map((l) => (
                                            <Link
                                                key={l.label}
                                                href={l.href}
                                                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/about"
                                className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/blog"
                                className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                            >
                                Contact Us
                            </Link>
                        </nav>

                        {/* Drawer footer CTAs */}
                        <div className="px-4 py-5 border-t border-gray-100 space-y-3">
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md">
                                <Link href="/pcb-calculator">PCB Calculator</Link>
                            </Button>
                        </div>

                        {/* Contact info in drawer */}
                        <div className="px-4 pb-5 space-y-2">
                            <a href="tel:+919898842942" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                                <Phone className="w-3.5 h-3.5 text-primary" /> +91-9898842942
                            </a>
                            <a href="mailto:quote@megabytecircuit.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="w-3.5 h-3.5 text-primary" /> quote@megabytecircuit.com
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
