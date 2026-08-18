"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, ChevronDown, X, ShoppingCart, User
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeProvider";
import { MainCartModal } from "./MainCartModal";

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
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const [cartCount, setCartCount] = React.useState(0);

    const location = usePathname();

    const updateCartCount = () => {
        try {
            const savedCart = localStorage.getItem("megabyte_cart");
            if (savedCart) {
                const items = JSON.parse(savedCart);
                setCartCount(Array.isArray(items) ? items.length : 0);
            } else {
                setCartCount(0);
            }
        } catch (e) {
            setCartCount(0);
        }
    };

    React.useEffect(() => {
        updateCartCount();
        const handleCartUpdate = () => updateCartCount();
        window.addEventListener("megabyte_cart_updated", handleCartUpdate);
        window.addEventListener("storage", handleCartUpdate);
        return () => {
            window.removeEventListener("megabyte_cart_updated", handleCartUpdate);
            window.removeEventListener("storage", handleCartUpdate);
        };
    }, []);

    React.useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
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

    const navText = "text-foreground hover:text-primary transition-colors";

    return (
        <>
            {/* Top Spacer to prevent layout shift under fixed header */}
            <div className="h-16 sm:h-20 transition-all duration-300" />

            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isScrolled
                        ? "py-2 sm:py-3 px-4 sm:px-6 lg:px-8"
                        : "py-0 px-0"
                }`}
            >
                <div
                    className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isScrolled
                            ? "max-w-7xl"
                            : "w-full"
                    }`}
                >
                    <div
                        className={`flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isScrolled
                                ? "h-12 sm:h-14 px-4 sm:px-6 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 rounded-2xl shadow-xl shadow-black/5 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/10"
                                : "h-16 sm:h-20 px-4 sm:px-6 lg:px-8 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-gray-200/60 dark:border-zinc-800 shadow-xs rounded-none"
                        }`}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0 group">
                            <Image
                                src="/images/logo.png"
                                alt="MegaByte's Circuits"
                                width={240}
                                height={72}
                                className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:brightness-0 dark:invert ${
                                    isScrolled ? "h-7 sm:h-8 scale-95" : "h-9 sm:h-11 md:h-12 scale-100"
                                }`}
                                priority
                            />
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                            <Link
                                href="/"
                                className={`text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-zinc-800 ${navText}`}
                            >
                                Home
                            </Link>

                            <DropdownMenu open={aboutHover} onOpenChange={setAboutHover} modal={false}>
                                <DropdownMenuTrigger
                                    onMouseEnter={() => setAboutHover(true)}
                                    onMouseLeave={() => setAboutHover(false)}
                                    className={`flex items-center gap-1 text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-zinc-800 outline-none ${navText}`}
                                >
                                    About Us <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    onMouseEnter={() => setAboutHover(true)}
                                    onMouseLeave={() => setAboutHover(false)}
                                    align="start"
                                    className="w-48 dark:bg-zinc-900 dark:border-zinc-800"
                                >
                                    {ABOUT_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer text-xs font-medium dark:text-zinc-200 dark:focus:bg-zinc-800">
                                                {l.label}
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link
                                href="/pcb-calculator"
                                className={`text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-zinc-800 ${navText}`}
                            >
                                PCB Calculator
                            </Link>

                            <DropdownMenu open={productsHover} onOpenChange={setProductsHover} modal={false}>
                                <DropdownMenuTrigger
                                    onMouseEnter={() => setProductsHover(true)}
                                    onMouseLeave={() => setProductsHover(false)}
                                    className={`flex items-center gap-1 text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-zinc-800 outline-none ${navText}`}
                                >
                                    Products <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    onMouseEnter={() => setProductsHover(true)}
                                    onMouseLeave={() => setProductsHover(false)}
                                    align="start"
                                    className="w-52 dark:bg-zinc-900 dark:border-zinc-800"
                                >
                                    {PRODUCTS_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer text-xs font-medium dark:text-zinc-200 dark:focus:bg-zinc-800">
                                                {l.label}
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu open={servicesHover} onOpenChange={setServicesHover} modal={false}>
                                <DropdownMenuTrigger
                                    onMouseEnter={() => setServicesHover(true)}
                                    onMouseLeave={() => setServicesHover(false)}
                                    className={`flex items-center gap-1 text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-zinc-800 outline-none ${navText}`}
                                >
                                    Services <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    onMouseEnter={() => setServicesHover(true)}
                                    onMouseLeave={() => setServicesHover(false)}
                                    align="start"
                                    className="w-64 dark:bg-zinc-900 dark:border-zinc-800"
                                >
                                    {SERVICES_LINKS.map((l) => (
                                        <Link key={l.label} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer text-xs font-medium dark:text-zinc-200 dark:focus:bg-zinc-800">
                                                {l.label}
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link
                                href="/blog"
                                className={`text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-zinc-800 ${navText}`}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/contact"
                                className={`text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-zinc-800 ${navText}`}
                            >
                                Contact Us
                            </Link>
                        </nav>

                        {/* Right side controls: Theme Toggle, Cart Icon, Login Button */}
                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            {/* Theme Switcher */}
                            <ThemeToggle />

                            {/* Cart Icon & Modal */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsCartOpen(!isCartOpen)}
                                    className="relative w-9 h-9 rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-gray-50/80 dark:bg-zinc-800/80 hover:bg-gray-100 dark:hover:bg-zinc-700/80 text-gray-700 dark:text-zinc-200 transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
                                    title="Shopping Cart"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white dark:ring-zinc-900 animate-in zoom-in-50">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>

                                <MainCartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                            </div>

                            {/* Login / Register Button (Matching Quote Site) */}
                            <a
                                href={`${process.env.NEXT_PUBLIC_QUOTE_URL || "https://quote.megabytecircuit.com"}/login`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-bold shadow-md shadow-primary/20 transition-all cursor-pointer active:scale-95 shrink-0"
                            >
                                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span>Log in</span>
                            </a>

                            {/* Mobile hamburger */}
                            <div className="flex lg:hidden items-center ml-1">
                                <button
                                    onClick={() => setMobileOpen(true)}
                                    aria-label="Open menu"
                                    className="p-1.5 rounded-lg text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Mobile Drawer ─────────────────────────────────────── */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
                        onClick={() => setMobileOpen(false)}
                    />

                    {/* Panel */}
                    <div className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-zinc-900 shadow-2xl flex flex-col border-l border-gray-200 dark:border-zinc-800">
                        {/* Drawer header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-zinc-800">
                            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                                <Image
                                    src="/images/logo.png"
                                    alt="MegaByte's Circuits"
                                    width={140}
                                    height={36}
                                    className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
                                />
                            </Link>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-2 rounded-md text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Drawer body */}
                        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Home
                            </Link>

                            {/* About Us accordion */}
                            <div>
                                <button
                                    onClick={() => setAboutOpen((o) => !o)}
                                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    About Us
                                    <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                                </button>
                                {aboutOpen && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/40 pl-3">
                                        {ABOUT_LINKS.map((l) => (
                                            <Link
                                                key={l.label}
                                                href={l.href}
                                                className="block py-2 text-xs font-medium text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
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
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                PCB Calculator
                            </Link>

                            {/* Products accordion */}
                            <div>
                                <button
                                    onClick={() => setProductsOpen((o) => !o)}
                                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    Products
                                    <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                                </button>
                                {productsOpen && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/40 pl-3">
                                        {PRODUCTS_LINKS.map((l) => (
                                            <Link
                                                key={l.label}
                                                href={l.href}
                                                className="block py-2 text-xs font-medium text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
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
                                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    Services
                                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                                </button>
                                {servicesOpen && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/40 pl-3">
                                        {SERVICES_LINKS.map((l) => (
                                            <Link
                                                key={l.label}
                                                href={l.href}
                                                className="block py-2 text-xs font-medium text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/blog"
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
