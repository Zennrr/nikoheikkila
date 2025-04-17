import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Niko Heikkilä",
    description: "Learn more about Niko Heikkilä, his skills, and experiences."
};

export default function About() {
    return (
        <div className="font-helvetica bg-dark-blue py-16 text-white">
            <main className="mx-auto max-w-5xl px-4">
                {/* Header Section */}
                <section className="mb-12 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/profile.jpg"
                            alt="Niko Heikkilä"
                            width={192}
                            height={192}
                            className="h-48 w-48 rounded-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <h1 className="text-4xl font-extrabold">About Me</h1>
                        <p className="mt-4 text-xl">
                            Hi, Im Niko Heikkilä, a software engineer and web developer based in
                            Tampere, Finland. I have experience ranging from personal projects to
                            working with larger teams on various applications in both frontend and
                            backend. Most of my experience is in web development, but I also have
                            experience in game development and mobile development. I am always
                            looking and open to learning new things be it technologies or languages.
                        </p>
                        <p className="mt-4 text-xl">
                            Coding has been a part of my life since junior high school. I started
                            properly learning programming in SASKYs &quot;Tampereen Palvelualan
                            Ammattiopisto&quot; vocational school studying game development. After
                            graduating from SASKY, I got accepted into Tampere University of Applied
                            Sciences to study software engineering. There I have learned most of my
                            skills and experiences, mostly in web development and a bit of mobile
                            development.
                        </p>
                    </div>
                </section>

                {/* Skills and Experiences Section */}
                <section className="mb-12">
                    <h2 className="mb-6 text-4xl font-bold">Skills & Experiences</h2>
                    <div className="space-y-6">
                        <p className="mt-4 text-xl">
                            I specialize in building modern, scalable web applications. I have
                            experience working with both frontend and backend development, creating
                            seamless user experiences and robust APIs.
                        </p>
                        <p className="mt-4 text-xl">
                            Over the years, Ive worked on various projects, ranging from your
                            typical weather applications to a full-stack study helper web
                            application that utilizes AI. My focus is on delivering clean,
                            maintainable code and staying up-to-date with the latest industry
                            trends.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col items-center justify-center rounded-lg bg-blue-800 p-4 shadow-md">
                                <h3 className="mb-4 text-center text-3xl font-bold text-white">
                                    Frontend
                                </h3>
                                <ul className="m-0 list-none space-y-1 p-0 text-center text-xl text-blue-100">
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>TypeScript</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-blue-800 p-4 shadow-md">
                                <h3 className="mb-4 text-center text-3xl font-bold text-white">
                                    Backend
                                </h3>
                                <ul className="m-0 list-none space-y-1 p-0 text-center text-xl text-blue-100">
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>REST API</li>
                                    <li>MySQL</li>
                                    <li>JWT</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-blue-800 p-4 shadow-md">
                                <h3 className="mb-4 text-center text-3xl font-bold text-white">
                                    DevOps
                                </h3>
                                <ul className="m-0 list-none space-y-1 p-0 text-center text-xl text-blue-100">
                                    <li>Docker</li>
                                    <li>GitHub</li>
                                    <li>GitLab</li>
                                    <li>Bash</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-blue-800 p-4 shadow-md">
                                <h3 className="mb-4 text-center text-3xl font-bold text-white">
                                    Other
                                </h3>
                                <ul className="m-0 list-none space-y-1 p-0 text-center text-xl text-blue-100">
                                    <li>C#</li>
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>Agile/Scrum</li>
                                    <li>PC Assembly</li>
                                </ul>
                            </div>
                        </div>
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
                            className="rounded-md bg-black px-4 py-2 text-white no-underline hover:bg-blue-600"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/niko-heikkil%C3%A4-69203522a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-black px-4 py-2 text-white no-underline hover:bg-blue-600"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Zennrr/nikoheikkila/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-black px-4 py-2 text-white no-underline hover:bg-blue-600"
                        >
                            Source Code
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
