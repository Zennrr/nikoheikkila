import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/posts');

export async function GET() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      filename,
      ...data,
    };
  });
  return NextResponse.json(posts);
}