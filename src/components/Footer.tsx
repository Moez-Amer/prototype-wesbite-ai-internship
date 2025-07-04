
import { ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Nate B Jones</span>
              <span className="text-cyan-400 ml-2">█</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI-obsessed creator, writer, and experimenter building the future one automation at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Content</h4>
            <ul className="space-y-2">
              <li><a href="#essays" className="text-gray-300 hover:text-white transition-colors">Essays</a></li>
              <li><a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Substack</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Work</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services & Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Me</a></li>
              <li><a href="https://natesnewsletter.substack.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://natebjones.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Main Website <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://natesnewsletter.substack.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Substack <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/nate" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  LinkedIn <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Nate B Jones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
