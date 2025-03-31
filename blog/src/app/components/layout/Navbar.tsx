"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-opacity-80 dark:bg-opacity-80 sticky top-0 z-10 w-full bg-white p-4 shadow-sm backdrop-blur dark:bg-gray-900">
      <div className="container mx-auto flex max-w-5xl items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" className="text-blue-500 text-3xl font-bold no-underline">Niko Heikkilä</Link>
        </div>

        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="transition-colors no-underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="transition-colors no-underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="transition-colors no-underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}