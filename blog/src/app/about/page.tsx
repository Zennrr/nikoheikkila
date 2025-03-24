export default function About() {
    return (
        <div className="py-12">
            <h1 className="mb-8 text-3xl font-bold">About Me</h1>

            <div className="flex flex-col gap-8 md:flex-row">
                <div className="md:w-1/3">
                    <div className="overflow-hidden rounded-lg">
                    </div>
                </div>

                <div className="space-y-6 md:w-2/3">
                    
                    <p>
                        Hi, Im Niko Heikkila. Im a software engineer and web developer based in Tampere, Finland.
                    </p>

                    <div className="mt-4 flex gap-4">
                        <a
                            href="https://github.com/Zennrr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
