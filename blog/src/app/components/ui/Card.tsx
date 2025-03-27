import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
  date: string;
}

export function Card({ title, description, href, date }: CardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-400 mb-4">{new Date(date).toLocaleDateString()}</p>
      <Link
        href={href}
        className="text-blue-500 hover:underline no-underline"
      >
        Read More
      </Link>
    </div>
  );
}