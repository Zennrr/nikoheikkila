import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "../outstatic/content/posts");

export default function Blog() {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames
        .map((filename) => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            if (!data.title || !data.slug || !data.publishedAt) {
                return null;
            }

            const snippet = content.slice(0, 50) + (content.length > 150 ? "..." : "");

            return {
                slug: data.slug,
                title: data.title,
                excerpt: data.excerpt || "",
                snippet,
                date: data.publishedAt
            };
        })
        .filter((post) => post !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="flex flex-col items-center px-4 py-12">
            <h1 className="mb-8 text-4xl font-extrabold text-gray-900">Blog</h1>
            <div className="w-full max-w-3xl space-y-6">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                    >
                        <h2 className="mb-2 text-2xl font-semibold text-gray-800">{post.title}</h2>
                        <p className="mb-4 text-gray-600">{post.excerpt}</p>
                        <p className="mb-4 text-sm text-gray-400">
                            {new Date(post.date).toLocaleDateString()}
                        </p>
                        <p className="mb-4 text-gray-700">{post.snippet}</p>
                        <div className="flex items-center justify-between">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="rounded-md bg-blue-500 px-4 py-2 text-white no-underline hover:bg-blue-600"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
