"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-opacity-80 sticky top-0 z-10 w-full bg-white p-4 shadow-sm backdrop-blur">
            <div className="container mx-auto flex max-w-5xl items-center justify-between">
                <div className="text-xl font-bold">
                    <Link href="/" className="text-3xl font-bold text-blue-500 no-underline">
                        Niko Heikkilä
                    </Link>
                </div>

                <div className="hidden items-center space-x-6 md:flex">
                    <Link href="/" className="no-underline transition-colors hover:text-blue-600">
                        Home
                    </Link>
                    <Link
                        href="/blog"
                        className="no-underline transition-colors hover:text-blue-600"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/about"
                        className="no-underline transition-colors hover:text-blue-600"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
