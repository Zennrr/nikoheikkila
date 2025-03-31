import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), '../outstatic/content/posts');

export default async function PostPage({ params }: { params: { slug: string } }) {
  const slug = await Promise.resolve(params.slug);

  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <div className="prose mx-auto py-12">
      <h1>{data.title}</h1>
      <p className="text-gray-500">{new Date(data.publishedAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: mdxSource }} />
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = await Promise.resolve(params.slug);

  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.excerpt || '',
  };
}