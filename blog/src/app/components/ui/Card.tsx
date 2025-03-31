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
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>
            <p className="mb-4 text-gray-600">{description}</p>
            <p className="mb-4 text-sm text-gray-400">{formattedDate}</p>
            <Link href={href} className="text-blue-500 no-underline hover:underline">
                Read More
            </Link>
        </div>
    );
}
