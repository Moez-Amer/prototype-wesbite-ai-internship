
import { ExternalLink, Code, Zap } from 'lucide-react';

const projects = [
  {
    title: "GimmeJuice.AI",
    description: "AI-powered content generation platform for creating high-quality content at scale. A practical tool that demonstrates real-world AI applications in content creation.",
    status: "Live",
    url: "https://gimmejuice-ue24p.ondigitalocean.app/",
    tech: ["AI Content Generation", "React", "DigitalOcean"],
    category: "AI Tool"
  },
  {
    title: "Tracker.Vote",
    description: "Voting and decision tracking platform for transparent decision-making processes. Built to help communities and organizations make better collaborative decisions.",
    status: "Live", 
    url: "https://www.tracker.vote/",
    tech: ["Decision Tracking", "Voting System", "Transparency"],
    category: "Platform"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Active AI-powered platforms and tools that are currently serving users and pushing the boundaries of what's possible with artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                  <Code className="text-green-400/50" size={24} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="mb-4">
                  <span className="text-xs text-gray-400 bg-gray-400/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Try Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900/40 to-gray-800/40 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Want to Build Something Similar?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            These projects showcase practical AI applications in action. Ready to explore more AI tools, courses, and community resources?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services & Products
            </a>
            <a 
              href="#about"
              className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
