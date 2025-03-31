import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), '../outstatic/content/posts');

export default function Blog() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      if (!data.title || !data.slug || !data.publishedAt) {
        return null;
      }

      return {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt || '',
        date: data.publishedAt,
      };
    })
    .filter((post) => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">Blog</h1>
      <div className="w-full max-w-3xl space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-400 mb-4">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <div className="flex justify-between items-center">
              <Link
                href={`/blog/${post.slug}`}
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md no-underline"
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