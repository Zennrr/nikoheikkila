import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "../outstatic/content/posts");

export async function generateStaticParams() {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({
        slug: filename.replace(/\.mdx$/, "")
    }));
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const htmlContent = marked(content);

    return (
        <div className="prose mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-center text-4xl font-extrabold text-white">{data.title}</h1>
            <p className="mb-8 text-center text-sm text-blue-300">
                {new Date(data.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </p>
            <div
                className="prose mx-auto text-justify leading-relaxed text-white"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
}
