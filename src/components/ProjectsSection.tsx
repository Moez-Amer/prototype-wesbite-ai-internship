
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Writing Assistant",
    description: "Custom GPT fine-tuned for technical writing with real-time collaboration features.",
    status: "Live",
    url: "https://example.com/project1",
    tech: ["OpenAI API", "React", "WebSockets"]
  },
  {
    title: "Automation Dashboard",
    description: "No-code platform for creating AI-powered automation workflows for content creators.",
    status: "Beta",
    url: "https://example.com/project2",
    tech: ["Zapier", "Airtable", "Python"]
  },
  {
    title: "Voice-to-Blog Engine",
    description: "Record thoughts, get polished blog posts. Uses advanced speech recognition and AI editing.",
    status: "Prototype",
    url: "https://example.com/project3",
    tech: ["Whisper", "GPT-4", "Node.js"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live <span className="text-cyan-400">Experiments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Current projects and experiments where I'm pushing the boundaries of AI applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400' 
                    : project.status === 'Beta'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
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
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
