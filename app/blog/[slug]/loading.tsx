import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20">
            {/* Hero / Header Skeleton */}
            <div className="bg-secondary text-white py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-4">
                    <Skeleton className="h-6 w-32 bg-gray-700/50 rounded-full" />
                    <Skeleton className="h-10 w-3/4 bg-gray-700/50 rounded-lg" />
                    <Skeleton className="h-6 w-1/2 bg-gray-700/50 rounded-lg" />
                </div>
            </div>

            {/* Article Content Skeleton Container */}
            <div className="section-container py-12 max-w-4xl mx-auto px-4">
                {/* Back link & Meta header skeleton */}
                <div className="mb-8 space-y-6">
                    <Skeleton className="h-4 w-36 bg-gray-200" />

                    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200">
                        <div className="flex items-center gap-3">
                            <Skeleton className="w-10 h-10 rounded-full bg-gray-200" />
                            <div className="space-y-1">
                                <Skeleton className="h-4 w-28 bg-gray-200" />
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Skeleton className="h-4 w-24 bg-gray-200" />
                            <Skeleton className="h-4 w-20 bg-gray-200" />
                            <Skeleton className="h-4 w-16 bg-gray-200" />
                        </div>
                    </div>
                </div>

                {/* Featured Image Skeleton */}
                <Skeleton className="mb-10 w-full h-80 md:h-[420px] rounded-2xl bg-gray-200" />

                {/* Content Skeleton Card */}
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-4 mb-10">
                    <Skeleton className="h-6 w-2/3 bg-gray-200" />
                    <Skeleton className="h-4 w-full bg-gray-200" />
                    <Skeleton className="h-4 w-11/12 bg-gray-200" />
                    <Skeleton className="h-4 w-4/5 bg-gray-200" />
                    <div className="pt-4 space-y-3">
                        <Skeleton className="h-4 w-full bg-gray-200" />
                        <Skeleton className="h-4 w-5/6 bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}
