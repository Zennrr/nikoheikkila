import { Card } from "./components/ui/Card";
import { ButtonLink } from "./components/ui/Button";

const SAMPLE_POSTS = [
  {
    id: 1,
    title: "test1",
    description: "testing 1",
    href: "/blog/test1",
    date: "March 15, 2025"
  },
  {
    id: 2,
    title: "test2",
    description: "testing2",
    href: "/blog/teest2",
    date: "March 12, 2025"
  },
  {
    id: 3,
    title: "test4",
    description: "testing3",
    href: "/blog/test3",
    date: "March 10, 2025"
  }
];

export default function Home() {
  return (
    <div style={{ fontFamily: "Helvetica" }} className="bg-white text-gray-900">

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16">
        <section className="flex flex-col items-center gap-12 md:flex-row">
          <div className="space-y-4 md:w-1/2">
            <h1 className="text-5xl leading-tight font-extrabold text-gray-900">
              Welcome to My <span className="text-blue-500">Blog</span>
            </h1>
            <p className="text-lg text-gray-600">
              Here I share anything from my career to my interests in software development.
            </p>
            <div className="flex gap-4">
              <ButtonLink
                href="/blog"
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Read Blog
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                About Me
              </ButtonLink>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Recent Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_POSTS.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                description={post.description}
                href={post.href}
                date={post.date}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink
              href="/blog"
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              View All Posts
            </ButtonLink>
          </div>
        </section>
      </main>
    </div>
  );
}