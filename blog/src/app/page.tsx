"use client";

import { Card } from "./components/ui/Card";
import { ButtonLink } from "./components/ui/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/get-posts");
      if (res.ok) {
        const data = await res.json();
        const sortedPosts = data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3);
        setRecentPosts(sortedPosts);
      } else {
        console.error("Failed to fetch posts");
      }
    }
    fetchPosts();
  }, []);

  return (
    <div style={{ fontFamily: "Helvetica" }} className="bg-white text-gray-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16">
        <section className="flex flex-col items-center gap-12 md:flex-row">
          <div className="space-y-4 md:w-1/2">
            <h1 className="text-4xl leading-tight font-extrabold text-gray-900">
              Welcome to the blog of <span className="text-blue-500">Niko Heikkilä</span>
            </h1>
            <p className="text-lg text-gray-600">
              In this blog I write about my projects, experiences, thoughts and general news about my career.
            </p>
            <div className="flex gap-4">
              <ButtonLink
                href="/blog"
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Read Blog
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                About Me
              </ButtonLink>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Recent Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Card
                key={post.filename}
                title={post.title}
                description={post.excerpt}
                href={`/blog/${post.filename.replace(/\.mdx?$/, "")}`}
                date={post.date}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink
              href="/blog"
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              View All Posts
            </ButtonLink>
          </div>
        </section>
      </main>
    </div>
  );
}