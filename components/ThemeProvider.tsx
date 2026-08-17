"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === "dark";

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-gray-50/80 dark:bg-zinc-800/80 animate-pulse" />
        );
    }

    const renderTriggerIcon = () => {
        if (theme === "system") {
            return <Monitor className="w-4 h-4 text-blue-500 transition-all duration-300" />;
        }
        if (isDark) {
            return <Moon className="w-4 h-4 text-emerald-400 transition-all duration-300" />;
        }
        return <Sun className="w-4 h-4 text-amber-500 transition-all duration-300" />;
    };

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger
                className="relative w-9 h-9 rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-gray-50/80 dark:bg-zinc-800/80 hover:bg-gray-100 dark:hover:bg-zinc-700/80 text-gray-700 dark:text-zinc-200 transition-all duration-200 flex items-center justify-center outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
                title={`Current mode: ${theme || "system"}`}
            >
                {renderTriggerIcon()}
                <span className="sr-only">Toggle theme</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 dark:bg-zinc-900 dark:border-zinc-800">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex items-center justify-between cursor-pointer text-xs font-medium dark:text-zinc-200 dark:focus:bg-zinc-800"
                >
                    <span className="flex items-center gap-2">
                        <Sun className="w-3.5 h-3.5 text-amber-500" />
                        Light
                    </span>
                    {theme === "light" && <Check className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex items-center justify-between cursor-pointer text-xs font-medium dark:text-zinc-200 dark:focus:bg-zinc-800"
                >
                    <span className="flex items-center gap-2">
                        <Moon className="w-3.5 h-3.5 text-emerald-500" />
                        Dark
                    </span>
                    {theme === "dark" && <Check className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex items-center justify-between cursor-pointer text-xs font-medium dark:text-zinc-200 dark:focus:bg-zinc-800"
                >
                    <span className="flex items-center gap-2">
                        <Monitor className="w-3.5 h-3.5 text-blue-500" />
                        System
                    </span>
                    {theme === "system" && <Check className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
