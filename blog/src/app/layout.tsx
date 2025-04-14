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
            <body className="flex min-h-screen flex-col bg-blue-900 font-sans text-white">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <footer className="border-t bg-blue-900 py-4 text-center text-sm">
                    <div className="mx-auto max-w-6xl px-4">
                        © {new Date().getFullYear()} Niko Heikkila. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
