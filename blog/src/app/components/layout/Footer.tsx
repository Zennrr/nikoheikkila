"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
    filename: string;
    title: string;
    excerpt: string;
    publishedAt?: string;
}

export default function Footer() {
    const [latestPosts, setLatestPosts] = useState<Post[]>([]);
    const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch("/api/get-posts");
                if (res.ok) {
                    const data = await res.json();
                    const sortedPosts = data
                        .map((post: Post) => ({
                            ...post,
                            publishedAt: post.publishedAt
                        }))
                        .sort(
                            (a: Post, b: Post) =>
                                new Date(b.publishedAt || 0).getTime() -
                                new Date(a.publishedAt || 0).getTime()
                        );

                    setLatestPosts(sortedPosts.slice(0, 3));

                    setFeaturedPost(sortedPosts[0] || null);
                }
            } catch (error) {
                console.error("Failed to fetch posts for footer:", error);
            }
        }

        void fetchPosts();
    }, []);

    return (
        <footer className="bg-dark-blue border-t py-12 text-white">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Navigation */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-blue-400">Navigation</h3>
                        <nav>
                            <ul className="m-0 list-none space-y-1 space-y-2 p-0 text-xl text-blue-100 no-underline">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-blue-100 no-underline transition-colors hover:text-blue-400"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="text-blue-100 no-underline transition-colors hover:text-blue-400"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-blue-100 no-underline transition-colors hover:text-blue-400"
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Latest Posts */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-blue-400">Latest Posts</h3>
                        <ul className="m-0 list-none space-y-1 space-y-2 p-0 text-xl text-blue-100 no-underline">
                            {latestPosts.map((post) => (
                                <li key={post.filename}>
                                    <Link
                                        href={`/blog/${post.filename.replace(/\.mdx?$/, "")}`}
                                        className="line-clamp-1 transition-colors hover:text-blue-400"
                                    >
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Featured Post */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-blue-400">Featured</h3>
                        {featuredPost ? (
                            <div>
                                <Link
                                    href={`/blog/${featuredPost.filename.replace(/\.mdx?$/, "")}`}
                                    className="font-medium transition-colors hover:text-blue-400"
                                >
                                    {featuredPost.title}
                                </Link>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-300">
                                    {featuredPost.excerpt}
                                </p>
                            </div>
                        ) : (
                            <p>No featured posts available</p>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-blue-100">Contact</h3>
                        <ul className="m-0 list-none space-y-1 space-y-2 p-0 text-xl text-blue-100 no-underline">
                            <li>
                                <a
                                    href="https://github.com/Zennrr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center transition-colors hover:text-blue-400"
                                >
                                    <svg
                                        className="mr-2 h-5 w-5 text-blue-200"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/niko-heikkil%C3%A4-69203522a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center transition-colors hover:text-blue-400"
                                >
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Zennrr/nikoheikkila/tree/main"
                                    className="flex items-center transition-colors hover:text-blue-400"
                                >
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                                    </svg>
                                    Source Code
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-600 pt-6 text-center text-sm">
                    <p>© {currentYear} Niko Heikkilä. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
