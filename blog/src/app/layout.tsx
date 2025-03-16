import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niko Heikkila's Blog",
  description: "Personal blog website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center text-sm">
          <div className="container mx-auto">
            © {new Date().getFullYear()} Niko Heikkila. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}