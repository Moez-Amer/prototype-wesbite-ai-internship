
import React from 'react';
import { ExternalLink } from 'lucide-react';

const essays = [
  {
    title: "I Don't Want a Job, I Want a Gravity Well",
    summary: "Why the traditional career path is broken and how to build something that pulls opportunities toward you instead of chasing them.",
    readTime: "8 min read",
    url: "https://substack.com/essay1"
  },
  {
    title: "God Mode UX",
    summary: "The user experience revolution happening right now as AI transforms how we interact with digital products and services.",
    readTime: "6 min read", 
    url: "https://substack.com/essay2"
  },
  {
    title: "AI is Not Your Copilot. It's the Lab.",
    summary: "Reframing our relationship with AI from assistant to experimental environment—and why that changes everything.",
    readTime: "12 min read",
    url: "https://substack.com/essay3"
  }
];

export const FeaturedEssays = () => {
  return (
    <section id="essays" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-cyan-400">Essays</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep dives into AI, automation, and the future of work and creativity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essays.map((essay, index) => (
            <article 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <span className="text-sm text-cyan-400 font-medium">{essay.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {essay.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {essay.summary}
              </p>
              
              <a 
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Read on Substack <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Essays <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
