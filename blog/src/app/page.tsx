import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 py-12">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
          <p className="text-xl">
            I write about technology, programming, and personal experiences.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Blog
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/placeholder.jpg"
            alt="Blog illustration"
            width={400}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* dynamically generated from blog posts */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Sample Blog Post {i}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This is a short description of your blog post.
                </p>
                <Link
                  href={`/blog/sample-post-${i}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}