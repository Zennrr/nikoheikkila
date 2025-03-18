import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
    title: "Niko Heikkila's Blog",
    description: "Personal blog website and portfolio"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900 antialiased transition-colors dark:bg-gray-900 dark:text-gray-100">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <footer className="border-t bg-white py-4 text-center text-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="mx-auto max-w-6xl px-4">
                        © {new Date().getFullYear()} Niko Heikkila. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
