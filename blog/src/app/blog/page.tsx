"use client";

import { Card } from "../components/ui/Card";
import { ButtonLink } from "../components/ui/Button";
import { useEffect, useState } from "react";

export default function Blog() {
    interface Post {
        filename: string;
        title: string;
        excerpt: string;
        date: string;
        publishedAt?: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
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
                setPosts(sortedPosts);
            } else {
                console.error("Failed to fetch posts");
            }
        }
        void fetchPosts();
    }, []);

    return (
        <div className="font-helvetica bg-dark-blue text-white">
            <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16">
                <section className="text-center">
                    <h1 className="text-4xl font-extrabold">
                        Welcome to the <span className="text-blue-400">Blog</span>
                    </h1>
                    <p className="mt-4 text-lg">
                        Explore my latest posts about projects, experiences, and thoughts.
                    </p>
                </section>

                <section>
                    <h2 className="mb-8 text-3xl font-bold">All Posts</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Card
                                key={`${post.filename}-${post.publishedAt}`}
                                title={post.title}
                                description={post.excerpt}
                                href={`/blog/${post.filename.replace(/\.mdx?$/, "")}`}
                                date={post.publishedAt ?? null}
                            />
                        ))}
                    </div>
                </section>

                <div className="mt-10 text-center">
                    <ButtonLink
                        href="/"
                        size="lg"
                        className="bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Back to Home
                    </ButtonLink>
                </div>
            </main>
        </div>
    );
}
