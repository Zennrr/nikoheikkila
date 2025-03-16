import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            Niko Heikkila
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}