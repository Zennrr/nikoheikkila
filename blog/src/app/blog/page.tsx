"use client";

import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";
import { ButtonLink } from "../components/ui/Button";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/get-posts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        console.error("Failed to fetch posts");
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">Blog posts</h1>
      <div className="w-full max-w-3xl space-y-6">
        {posts.map((post) => (
          <div
            key={post.filename}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-400 mb-4">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <div className="flex justify-between items-center">
              <ButtonLink
                href={`/blog/${post.filename.replace(/\.mdx?$/, "")}`}
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md"
              >
                Read More
              </ButtonLink>
            </div>
          </div>
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
    </div>
  );
}