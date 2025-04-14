import Image from "next/image";

export default function About() {
    return (
        <div className="font-helvetica bg-dark-blue py-16 text-white">
            <main className="mx-auto max-w-5xl px-4">
                {/* Header Section */}
                <section className="mb-12 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/profile.jpg" // Replace with the actual path to your image
                            alt="Niko Heikkilä"
                            width={192}
                            height={192}
                            className="h-48 w-48 rounded-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <h1 className="text-4xl font-extrabold">About Me</h1>
                        <p className="mt-4 text-lg">
                            Hi, I'm Niko Heikkilä, a software engineer and web developer based in
                            Tampere, Finland. I have experience ranging from personal projects to
                            working with larger teams on various applications in both frontend and
                            backend. Most of my experience is in web development, but I also have
                            experience in game development and mobile development. I am always
                            looking and open to learning new things be it technologies or languages.
                        </p>
                        <p className="mt-4 text-lg">
                            Coding has been a part of my life since junior high school. I started
                            properly learning programming in SASKY's "Tampereen Palvelualan
                            Ammattiopisto" vocational school studying game development. After
                            graduating from SASKY, I got accepted into Tampere University of Applied
                            Sciences to study software engineering. There I have learned most of my
                            skills and experiences, mostly in web development and a bit of mobile
                            development.
                        </p>
                    </div>
                </section>

                {/* Skills and Experiences Section */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold">Skills & Experiences</h2>
                    <div className="space-y-6">
                        <p>
                            I specialize in building modern, scalable web applications. I have
                            experience working with both frontend and backend development, creating
                            seamless user experiences and robust APIs.
                        </p>
                        <p>
                            Over the years, I've worked on various projects, ranging from your
                            typical weather applications to a full-stack study helper web
                            application that utilizes AI. My focus is on delivering clean,
                            maintainable code and staying up-to-date with the latest industry
                            trends.
                        </p>
                        <ul className="list-inside list-disc space-y-2">
                            <li>Frontend: React, Next.js, Tailwind CSS</li>
                            <li>Backend: Node.js, Express, REST APIs</li>
                            <li>Tools: Git, Docker, CI/CD pipelines</li>
                        </ul>
                    </div>
                </section>

                {/* Social Links Section */}
                <section>
                    <h2 className="mb-6 text-3xl font-bold">Connect with Me</h2>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <a
                            href="https://github.com/Zennrr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-blue-500 px-4 py-2 text-white no-underline hover:bg-blue-600"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/niko-heikkil%C3%A4-69203522a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-blue-500 px-4 py-2 text-white no-underline hover:bg-blue-600"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
