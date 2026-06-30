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

const ABOUT_LINKS = [
    { label: "About Us", href: "/about-us" },
    { label: "Why Us", href: "/why-us" },
    { label: "FAQs", href: "/faq" },
];

const PRODUCTS_LINKS = [
    { label: "Single Layer PCB", href: "/products/single-layer-pcb-ahmedabad" },
    { label: "Double Layer PCB", href: "/products/double-layer-pcb-ahmedabad" },
    { label: "Multi Layer PCB", href: "/products/multi-layer-pcb-ahmedabad" },
];

const SERVICES_LINKS = [
    { label: "Prototype PCB", href: "/prototype-pcb" },
    { label: "PCB Design", href: "/pcb-design-ahmedabad" },
    { label: "PCB Manufacturing", href: "/pcb-manufacturing-ahmedabad" },
    { label: "PCB Developing Services", href: "/pcb-developing-services-ahmedabad" },
    { label: "PCB Fabrication", href: "/pcb-fabrication-ahmedabad" },
    { label: "DFM Support", href: "/design-for-manufacturability-dfm-support" },
    { label: "Testing & Quality Assurance", href: "/testing-and-quality-assurance" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [aboutOpen, setAboutOpen] = React.useState(false);
    const [productsOpen, setProductsOpen] = React.useState(false);
    const [servicesOpen, setServicesOpen] = React.useState(false);

    const [aboutHover, setAboutHover] = React.useState(false);
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

                            <DropdownMenu open={aboutHover} onOpenChange={setAboutHover} modal={false}>
                                <DropdownMenuTrigger
                                    onMouseEnter={() => setAboutHover(true)}
                                    onMouseLeave={() => setAboutHover(false)}
                                    className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md hover:text-primary outline-none transition-colors ${navText}`}
                                >
                                    About Us <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    onMouseEnter={() => setAboutHover(true)}
                                    onMouseLeave={() => setAboutHover(false)}
                                    align="start"
                                    className="w-48"
                                >
                                    {ABOUT_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer">{l.label}</DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link
                                href="/pcb-calculator"
                                className={`text-sm font-medium px-3 py-2 rounded-md hover:text-primary transition-colors ${navText}`}
                            >
                                PCB Calculator
                            </Link>

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
                                    className="w-64"
                                >
                                    {SERVICES_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer">{l.label}</DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

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

                            {/* About Us accordion */}
                            <div>
                                <button
                                    onClick={() => setAboutOpen((o) => !o)}
                                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                >
                                    About Us
                                    <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                                </button>
                                {aboutOpen && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                                        {ABOUT_LINKS.map((l) => (
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

                            {/* PCB Calculator page link */}
                            <Link
                                href="/pcb-calculator"
                                className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                PCB Calculator
                            </Link>

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
                                href="/contact"
                                className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/8 hover:text-primary transition-colors"
                                onClick={() => setMobileOpen(false)}
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
