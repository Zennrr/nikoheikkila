import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    href: string;
    date: string | null;
}

export function Card({ title, description, href, date }: CardProps) {
    const formattedDate =
        date && !isNaN(new Date(date).getTime())
            ? new Date(date).toLocaleDateString()
            : "Unknown Date";

    return (
        <div
            className="rounded-lg border border-blue-300 bg-blue-800 p-6 shadow-md"
            data-testid={`blog-post-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
            <h2 className="mb-2 text-2xl font-semibold text-white">{title}</h2>
            <p className="mb-4 text-blue-200">{description}</p>
            <p className="mb-4 text-sm font-bold text-blue-300">{formattedDate}</p>
            <Link
                href={href}
                className="text-lg text-white no-underline hover:text-blue-200 hover:underline"
            >
                Read More
            </Link>
        </div>
    );
}
