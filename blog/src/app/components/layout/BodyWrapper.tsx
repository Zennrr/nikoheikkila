"use client";

import { usePathname } from "next/navigation";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isOutstaticDashboard = pathname.startsWith("/outstatic");

    return (
        <body
            className={`bg-color flex min-h-screen flex-col font-sans ${
                isOutstaticDashboard ? "outstatic-dashboard" : "default-site"
            }`}
        >
            {children}
        </body>
    );
}
