"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/get-posts');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts');
      }
    }
    fetchPosts();
  }, []);

  const handleDelete = async (filename) => {
    const res = await fetch('/api/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename }),
    });

    if (res.ok) {
      window.location.reload();
    }
  };

  const handlePostClick = async (filename) => {
    const res = await fetch(`/api/fetch?filename=${filename}`);
    if (res.ok) {
      const { content } = await res.json();
      const mdxSource = await serialize(content);
      setSelectedPost(mdxSource);
    } else {
      console.error('Failed to fetch post');
    }
  };

  return (
    <div className="py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.filename} className="flex justify-between">
            <Link href="#" onClick={() => handlePostClick(post.filename)}>
              {post.title}
            </Link>
            <button
              onClick={() => handleDelete(post.filename)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {selectedPost && <MDXRemote {...selectedPost} />}
    </div>
  );
}