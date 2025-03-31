import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "../outstatic/content/posts");

export async function GET() {
    const filenames = fs.readdirSync(postsDirectory);

    const mdxFiles = filenames.filter((filename) => filename.endsWith(".mdx"));

    const posts = mdxFiles.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        const publishedAt = data.publishedAt ? new Date(data.publishedAt).toISOString() : null;

        return {
            filename: filename.replace(/\.mdx?$/, ""),
            ...data,
            publishedAt,
            excerpt: content.slice(0, 200)
        };
    });

    return NextResponse.json(posts);
}
