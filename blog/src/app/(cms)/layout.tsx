import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                id="outstatic"
                className="bg-color flex min-h-screen flex-col font-sans text-white"
            >
                {children}
            </body>
        </html>
    );
}
