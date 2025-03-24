import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const postsDirectory = path.join(process.cwd(), 'src/app/posts');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, ''),
  }));
}

export async function generateMetadata({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return {
    title: data.title,
  };
}

export default async function PostPage({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <div className="py-12">
      <h1 className="mb-8 text-3xl font-bold">{data.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
}