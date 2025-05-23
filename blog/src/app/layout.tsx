import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BodyWrapper from "./components/layout/BodyWrapper";

export const metadata: Metadata = {
    title: "Niko Heikkila's Blog",
    description: "Personal blog website and portfolio"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <BodyWrapper>
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </BodyWrapper>
        </html>
    );
}
