"use client";

import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";

export interface GoogleReCaptchaHandle {
    reset: () => void;
}

interface GoogleReCaptchaProps {
    siteKey: string;
    onVerify: (token: string) => void;
    onExpire?: () => void;
    onError?: () => void;
    className?: string;
    theme?: "light" | "dark";
}

declare global {
    interface Window {
        grecaptcha?: {
            ready: (cb: () => void) => void;
            render: (
                container: HTMLElement | string,
                parameters: {
                    sitekey: string;
                    callback?: (response: string) => void;
                    "expired-callback"?: () => void;
                    "error-callback"?: () => void;
                    theme?: "light" | "dark";
                }
            ) => number;
            reset: (widgetId?: number) => void;
        };
    }
}

export const GoogleReCaptcha = forwardRef<GoogleReCaptchaHandle, GoogleReCaptchaProps>(
    function GoogleReCaptcha({ siteKey, onVerify, onExpire, onError, className = "", theme = "light" }, ref) {
        const containerRef = useRef<HTMLDivElement>(null);
        const widgetIdRef = useRef<number | null>(null);
        const [isLoaded, setIsLoaded] = useState(false);

        useImperativeHandle(ref, () => ({
            reset: () => {
                if (window.grecaptcha && widgetIdRef.current !== null) {
                    try {
                        window.grecaptcha.reset(widgetIdRef.current);
                    } catch (e) {
                        console.error("Error resetting reCAPTCHA:", e);
                    }
                }
            }
        }));

        useEffect(() => {
            if (!siteKey) return;

            let isCancelled = false;

            const renderRecaptcha = () => {
                if (isCancelled || !containerRef.current || !window.grecaptcha?.render) return;

                // Avoid re-rendering if already rendered in this container
                if (widgetIdRef.current !== null) return;

                try {
                    // Clear any lingering DOM children before render
                    containerRef.current.innerHTML = "";

                    const id = window.grecaptcha.render(containerRef.current, {
                        sitekey: siteKey,
                        callback: (token: string) => {
                            if (!isCancelled) onVerify(token);
                        },
                        "expired-callback": () => {
                            if (!isCancelled && onExpire) onExpire();
                        },
                        "error-callback": () => {
                            if (!isCancelled && onError) onError();
                        },
                        theme,
                    });

                    widgetIdRef.current = id;
                    setIsLoaded(true);
                } catch (e) {
                    console.error("reCAPTCHA render error:", e);
                }
            };

            const checkAndLoadScript = () => {
                const scriptId = "google-recaptcha-v2-script";
                const existingScript = document.getElementById(scriptId);

                if (!existingScript) {
                    const script = document.createElement("script");
                    script.id = scriptId;
                    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                }

                // Poll until grecaptcha and grecaptcha.render are available
                const interval = setInterval(() => {
                    if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
                        clearInterval(interval);
                        if (window.grecaptcha.ready) {
                            window.grecaptcha.ready(renderRecaptcha);
                        } else {
                            renderRecaptcha();
                        }
                    }
                }, 100);

                const timeout = setTimeout(() => {
                    clearInterval(interval);
                }, 10000);

                return () => {
                    clearInterval(interval);
                    clearTimeout(timeout);
                };
            };

            const cleanup = checkAndLoadScript();

            return () => {
                isCancelled = true;
                if (cleanup) cleanup();
            };
        }, [siteKey, theme]);

        return (
            <div className={`recaptcha-wrapper min-h-[78px] flex flex-col justify-center ${className}`}>
                <div ref={containerRef} className="recaptcha-container" />
                {!isLoaded && (
                    <div className="h-[78px] w-[304px] bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs text-muted-foreground">
                        Loading security verification...
                    </div>
                )}
            </div>
        );
    }
);
