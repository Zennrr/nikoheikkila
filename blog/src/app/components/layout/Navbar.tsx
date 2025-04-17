"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-opacity-100 bg-color sticky top-0 z-10 w-full p-4 shadow-sm backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
                <div className="text-xl font-bold">
                    <Link href="/" className="text-4xl font-extrabold text-blue-400 no-underline">
                        Niko Heikkilä
                    </Link>
                </div>

                <div className="hidden items-center space-x-6 md:flex">
                    <Link
                        href="/"
                        className="text-3xl font-bold text-white no-underline transition-colors hover:text-blue-600"
                    >
                        Home
                    </Link>
                    <Link
                        href="/blog"
                        className="text-3xl font-bold text-white no-underline transition-colors hover:text-blue-600"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/about"
                        className="text-3xl font-bold text-white no-underline transition-colors hover:text-blue-600"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
