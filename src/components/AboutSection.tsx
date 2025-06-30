import { User, Briefcase, GraduationCap, Heart, ExternalLink } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI strategist, entrepreneur, and educator passionate about helping others navigate and thrive in the age of artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-cyan-400/10 mr-4">
                  <User className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm Nate B. Jones, an AI strategist and entrepreneur who believes that artificial intelligence isn't just about technology—it's about empowering people to create, innovate, and solve problems in ways we never thought possible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through my newsletter, courses, and community, I help professionals and entrepreneurs cut through the AI hype to build real value and future-proof their careers in an AI-driven world.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-purple-400/10 mr-4">
                  <Briefcase className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">What I Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I create educational content, build AI-powered products, and foster communities where people can learn, experiment, and grow together. From comprehensive courses to hands-on projects like GimmeJuice.AI and Tracker.Vote, I'm committed to making AI accessible and actionable.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-green-400/10 mr-3">
                  <GraduationCap className="text-green-400" size={20} />
                </div>
                <h4 className="text-lg font-bold">Education & Teaching</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creator of comprehensive AI courses and educational content that has helped thousands of professionals navigate their AI journey, from beginners to advanced practitioners.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-cyan-400/10 mr-3">
                  <Briefcase className="text-cyan-400" size={20} />
                </div>
                <h4 className="text-lg font-bold">AI Product Development</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Builder of practical AI tools and platforms that solve real problems, including content generation systems and decision-making platforms that are actively used by communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-purple-400/10 mr-3">
                  <Heart className="text-purple-400" size={20} />
                </div>
                <h4 className="text-lg font-bold">Community Building</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Founder of thriving AI communities including the AI Robot Club and various peer learning circles that connect professionals, job seekers, and entrepreneurs in the AI space.
              </p>
            </div>
          </div>
        </div>

        {/* Values & Mission */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">My Mission</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            To demystify AI and empower individuals to harness its potential for meaningful impact. I believe that with the right guidance, anyone can learn to work alongside AI to amplify their capabilities and create extraordinary value.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium">
              AI Strategy
            </span>
            <span className="px-4 py-2 bg-purple-400/10 text-purple-400 rounded-full text-sm font-medium">
              Product Development
            </span>
            <span className="px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium">
              Education
            </span>
            <span className="px-4 py-2 bg-orange-400/10 text-orange-400 rounded-full text-sm font-medium">
              Community Building
            </span>
            <span className="px-4 py-2 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium">
              Career Development
            </span>
          </div>
        </div>

        {/* Connect CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're just starting your AI journey or looking to take your skills to the next level, I'm here to help you navigate the exciting world of artificial intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://natesnewsletter.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe to Newsletter <ExternalLink size={16} />
            </a>
            <a 
              href="https://natebjones.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Visit Main Site <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
