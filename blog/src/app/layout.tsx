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
            <body className="bg-color flex min-h-screen flex-col font-sans text-white">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <footer className="bg-color border-t py-4 text-center text-sm">
                    <div className="mx-auto max-w-6xl px-4">
                        © {new Date().getFullYear()} Niko Heikkilä. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
