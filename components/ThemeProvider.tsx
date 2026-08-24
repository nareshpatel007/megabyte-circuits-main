"use client";

import * as React from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    attribute?: string;
    enableSystem?: boolean;
}

interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "dark" | "light";
    systemTheme?: "dark" | "light";
    themes: string[];
}

const initialState: ThemeProviderState = {
    theme: "light",
    setTheme: () => null,
    resolvedTheme: "light",
    systemTheme: "light",
    themes: ["light", "dark", "system"],
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "theme",
    enableSystem = true,
}: ThemeProviderProps) {
    const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
    const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("light");

    React.useEffect(() => {
        const savedTheme = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
        setThemeState(savedTheme);
    }, [defaultTheme, storageKey]);

    React.useEffect(() => {
        const root = document.documentElement;

        const updateTheme = () => {
            let currentResolved: "dark" | "light" = "light";
            if (theme === "system" && enableSystem) {
                currentResolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            } else if (theme === "dark") {
                currentResolved = "dark";
            } else {
                currentResolved = "light";
            }

            setResolvedTheme(currentResolved);

            root.classList.remove("light", "dark");
            root.classList.add(currentResolved);
            root.style.colorScheme = currentResolved;
        };

        updateTheme();

        if (theme === "system" && enableSystem) {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = () => updateTheme();
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme, enableSystem]);

    const setTheme = React.useCallback(
        (newTheme: Theme) => {
            try {
                localStorage.setItem(storageKey, newTheme);
            } catch (e) {}
            setThemeState(newTheme);
        },
        [storageKey]
    );

    const value = React.useMemo(
        () => ({
            theme,
            setTheme,
            resolvedTheme,
            systemTheme: resolvedTheme,
            themes: ["light", "dark", "system"],
        }),
        [theme, setTheme, resolvedTheme]
    );

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = React.useContext(ThemeProviderContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

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
