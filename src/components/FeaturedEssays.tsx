
import { ExternalLink } from 'lucide-react';

interface SubstackPost {
  title: string;
  summary: string;
  url: string;
  date: string;
  readTime: string;
}

export const FeaturedEssays = () => {
  // Real essays from Nate's Substack
  const essays: SubstackPost[] = [
    {
      title: "Executive Briefing: EU AI Act Enforcement, Risk, and Positioning Scenarios",
      summary: "A note focused on navigating the enforcement risks associated with the EU AI Act, including a proprietary tiered risk model that helps you identify your compliance requirements and strategic positioning.",
      readTime: "12 min read",
      date: "Dec 2024",
      url: "https://natesnewsletter.substack.com"
    },
    {
      title: "What Good Is a College Degree When AI Knows Everything? Grab the Job Skills That Matter in an AI World",
      summary: "We live in a hyper-inflating knowledge economy, and everything we think we knew about jobs and college is eroding. So what do we do? This post lays out the skills that actually matter when AI can handle most knowledge work.",
      readTime: "15 min read",
      date: "Jun 27",
      url: "https://natesnewsletter.substack.com"
    },
    {
      title: "Ready for ChatGPT-5: Grab a Complete 139 Page Prompting Guide That's a Complete Operating System for Life and Work",
      summary: "Get ahead of ChatGPT-5 with my 139 page prompt playbook that's built to fully harness the full power of today's models to tackle strategy, trade-offs, and complex decision-making across your entire workflow.",
      readTime: "8 min read",
      date: "Jun 26",
      url: "https://natesnewsletter.substack.com"
    },
    {
      title: "2 Posts in One: Meta's AI Strategy Looks Desperate + Your Invite to Nate B Jones' New AI Discord Community",
      summary: "We now have a discord guys, plus I wanted to give you quick TLDR on Zuck's strategy at Meta these days—it is WILD and I am definitely taking the gloves off on this analysis.",
      readTime: "6 min read",
      date: "Jun 26",
      url: "https://natesnewsletter.substack.com"
    },
    {
      title: "The Claude Code Complete Guide: Learn Vibe-Coding & Agentic AI",
      summary: "Unlock Anthropic's terminal-based AI: From 5-minute setup to multi-agent workflows, learn best practices, cost control & vibe-coding tricks to build anything with Claude's coding capabilities.",
      readTime: "9 min read",
      date: "Jun 25",
      url: "https://natesnewsletter.substack.com"
    },
    {
      title: "The Anthropic Ruling: A Roadmap for AI's Copyright Future",
      summary: "Federal court says training AI on books is fair use, but pirating them isn't. The Anthropic decision reshapes copyright law for the AI industry, with major implications for training data and model development.",
      readTime: "6 min read",
      date: "Jun 25",
      url: "https://natesnewsletter.substack.com"
    }
  ];
  return (
    <section id="essays" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-cyan-400">Essays</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep dives into AI, automation, consciousness, and the future of human-machine collaboration. Fresh perspectives on the technology reshaping our world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essays.map((essay, index) => (
            <article 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-cyan-400 font-medium">{essay.readTime}</span>
                <span className="text-xs text-gray-500">{essay.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                {essay.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {essay.summary}
              </p>
              
              <a 
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors text-sm"
              >
                Read on Substack <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://natesnewsletter.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe to Nate B Jones Newsletter <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
