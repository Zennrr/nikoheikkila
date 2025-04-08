import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const postsDirectory = path.join(process.cwd(), "../outstatic/content/posts");

export async function generateStaticParams() {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({
        slug: filename.replace(/\.mdx$/, "")
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content);

    return (
        <div className="prose mx-auto py-12">
            <h1 className="text-center text-4xl font-bold">{data.title}</h1>
            <p className="mb-8 text-center text-gray-500">
                {new Date(data.publishedAt).toLocaleDateString()}
            </p>
            <div className="prose mx-auto">
                <MDXRemote {...mdxSource} />
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
        title: data.title,
        description: data.excerpt || ""
    };
}
