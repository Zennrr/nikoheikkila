import Link from "next/link";

export default function Blog() {
    return (
        <div className="py-12">
            <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>

            <div className="space-y-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <article key={i} className="border-b pb-8">
                        <h2 className="mb-2 text-2xl font-bold">
                            <Link
                                href={`/blog/sample-post-${i}`}
                                className="hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                Sample Blog Post {i}
                            </Link>
                        </h2>
                        <div className="mb-4 text-gray-500 dark:text-gray-400">
                            March {10 + i}, 2025 • 5 min read
                        </div>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <Link
                            href={`/blog/sample-post-${i}`}
                            className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                            Read more →
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
