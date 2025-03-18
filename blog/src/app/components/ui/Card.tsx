import Link from "next/link";

export type CardProps = {
    title: string;
    description: string;
    href: string;
    imageUrl?: string;
    date?: string;
};

export function Card({ title, description, href, date }: CardProps) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-md border bg-white transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="flex flex-grow flex-col p-4">
                {date && <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">{date}</p>}
                <h3 className="mb-1 text-base font-bold">{title}</h3>
                <p className="mb-3 flex-grow text-sm text-gray-600 dark:text-gray-300">
                    {description}
                </p>
                <Link
                    href={href}
                    className="mt-auto inline-flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}
