import { ExternalLink, Clock, Users, BookOpen, MessageCircle, Zap, Code } from 'lucide-react';

interface Service {
  type: string;
  title: string;
  description: string;
  price: string;
  cta: string;
  url: string;
  icon: any;
  category: 'consultation' | 'community' | 'course' | 'resource';
  featured?: boolean;
}

const services: Service[] = [
  {
    type: "30-min-video-guide",
    title: "AI Video Guide - Futureproof Your Career",
    description: "A comprehensive video guide that covers AI fundamentals, career opportunities, and practical applications. Perfect for beginners and professionals looking to understand the AI landscape.",
    price: "Free",
    cta: "Get the Guide",
    url: "https://nate-b-jones.kit.com/products/futureproof-your-career-in-an-ai-world",
    icon: BookOpen,
    category: 'resource',
    featured: true
  },
  {
    type: "ai-robot-club",
    title: "AI Robot Club",
    description: "Exclusive community for AI enthusiasts, builders, and experimenters. Connect with like-minded individuals, share projects, and collaborate on cutting-edge AI initiatives.",
    price: "Monthly membership",
    cta: "Join the Club",
    url: "https://buy.stripe.com/00gaIxaLt0U12c09AW",
    icon: Users,
    category: 'community',
    featured: true
  },
  {
    type: "career-accelerator",
    title: "AI Career Accelerator Course",
    description: "Structured course designed to fast-track your AI career. Covers technical skills, industry insights, networking strategies, and practical project experience.",
    price: "Course fee applies",
    cta: "Enroll Now",
    url: "https://maven.com/nate-b-jones/ai-career-accelerator",
    icon: Zap,
    category: 'course',
    featured: true
  },
  {
    type: "ai-lightning-lesson",
    title: "AI Lightning Lesson - Cut Through AI Noise",
    description: "Quick, focused lesson on creating real value with AI. Learn to separate signal from noise and build something meaningful in the AI space.",
    price: "Lightning course",
    cta: "Take the Lesson",
    url: "https://maven.com/p/eea6f2/cut-through-ai-noise-and-create-real-value?utm_medium=ll_share_link&utm_source=instructor",
    icon: Zap,
    category: 'course',
    featured: true
  },
  {
    type: "prompt-library",
    title: "AI Prompts Library - 50 Pages of Prompts",
    description: "Curated collection of 50 pages of effective AI prompts for various use cases including content creation, problem-solving, analysis, and creative projects.",
    price: "One-time purchase",
    cta: "Get Prompts",
    url: "https://nate-b-jones.kit.com/products/50-pages-of-prompts",
    icon: Code,
    category: 'resource'
  }
];

const circles = [
  {
    name: "Job Hunt Circle",
    description: "Peer learning group for job seekers navigating the AI job market. Share opportunities, practice interviews, and support each other.",
    schedule: "Weekly meetups",
    url: "https://buy.stripe.com/eVabMBbPxgSZ4k86oL"
  },
  {
    name: "Product Circle",
    description: "Community for product managers and builders working on AI-powered products. Discuss strategy, share insights, and collaborate.",
    schedule: "Bi-weekly sessions",
    url: "https://buy.stripe.com/aEU7wlg5N46deYM5kI"
  },
  {
    name: "Founder's Circle",
    description: "Support group for entrepreneurs and founders building AI startups. Network, share challenges, and learn from each other.",
    schedule: "Monthly gatherings",
    url: "https://buy.stripe.com/dR68Ap5r9dGN2c0eVj"
  }
];

export const ServicesSection = () => {
  const featuredServices = services.filter(service => service.featured);
  const otherServices = services.filter(service => !service.featured);

  return (
    <section id="services" className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services & <span className="text-cyan-400">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From comprehensive courses to one-on-one mentorship, find the perfect way to accelerate your AI journey and career growth.
          </p>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Offerings</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-cyan-400/10 mr-4">
                        <IconComponent className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h4>
                        <span className="text-cyan-400 font-medium text-sm">{service.price}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <a 
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      {service.cta} <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>



        {/* Other Services */}
        {otherServices.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Additional Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-cyan-400/10 mr-4 mt-1">
                        <IconComponent className="text-cyan-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h4>
                          <span className="text-cyan-400 font-medium text-sm">{service.price}</span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 text-sm">
                          {service.description}
                        </p>
                        
                        <a 
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors text-sm"
                        >
                          {service.cta} <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Learning Circles */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Peer Learning Circles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {circles.map((circle, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {circle.name}
                  </h4>
                  <span className="text-xs text-purple-400 font-medium bg-purple-400/10 px-2 py-1 rounded">
                    {circle.schedule}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {circle.description}
                </p>
                
                <a 
                  href={circle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors text-sm"
                >
                  Join Circle <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're looking for quick guidance or comprehensive mentorship, there's a perfect option for your needs and goals.
          </p>
          <a 
            href="https://natebjones.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Visit Main Site <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
