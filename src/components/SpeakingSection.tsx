
const pastTalks = [
  {
    title: "The Future of Human-AI Collaboration",
    event: "TechCrunch Disrupt 2024",
    audience: "500+ attendees"
  },
  {
    title: "Building AI-First Products",
    event: "Product Hunt Maker Festival",
    audience: "1000+ attendees"
  },
  {
    title: "Automation Without Fear",
    event: "MIT AI Conference",
    audience: "300+ attendees"
  }
];

export const SpeakingSection = () => {
  return (
    <section id="speaking" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Speaking & <span className="text-cyan-400">Workshops</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I help teams and organizations navigate the AI transformation with practical insights, 
              real-world case studies, and hands-on workshops that turn theory into action.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Topics I Cover:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AI product strategy and implementation</li>
                <li>• The future of work and human-AI collaboration</li>
                <li>• Building automation systems that actually work</li>
                <li>• Creative applications of AI tools</li>
              </ul>
            </div>
            
            <a 
              href="mailto:nate@example.com"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Book Me to Speak
            </a>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Recent Talks</h3>
            <div className="space-y-6">
              {pastTalks.map((talk, index) => (
                <div key={index} className="border-l-2 border-cyan-400 pl-6">
                  <h4 className="text-lg font-semibold mb-2">{talk.title}</h4>
                  <p className="text-gray-300 mb-1">{talk.event}</p>
                  <p className="text-sm text-cyan-400">{talk.audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
