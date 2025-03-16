import Image from "next/image";

export default function About() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/placeholder-profile.jpg"
              alt="Niko Heikkila"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-6">
          <p className="text-lg">
            Hello! I'm Niko Heikkila, a [your profession/title] passionate about [your interests].
          </p>
          
          <p>
            I created this blog to share my thoughts on [topics you write about]. 
            Through my writing, I hope to [your goals for the blog].
          </p>
          
          <h2 className="text-xl font-bold mt-8">My Experience</h2>
          <p>
            I have [X years] of experience in [your industry]. 
            Currently, I work as a [your current position] at [company/organization].
          </p>
          
          <h2 className="text-xl font-bold mt-8">Contact Me</h2>
          <p>
            Feel free to reach out to me at <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">your.email@example.com</a> or connect with me on social media.
          </p>
          
          <div className="flex gap-4 mt-4">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Twitter
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}