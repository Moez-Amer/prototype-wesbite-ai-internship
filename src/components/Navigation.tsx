
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-white">Nate B Jones</span>
            <span className="text-cyan-400 ml-2">█</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#essays" className="text-gray-300 hover:text-cyan-400 transition-colors">Essays</a>
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services & Products</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Me</a>
            <a 
              href="https://natesnewsletter.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Newsletter <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
