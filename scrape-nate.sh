#!/bin/bash

# Content scraper for natebjones.com
# Usage: curl -s https://natebjones.com | node parse-nate.js

cat << 'EOF' > parse-nate.js
const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read HTML from stdin
let html = '';
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  let chunk;
  while (null !== (chunk = process.stdin.read())) {
    html += chunk;
  }
});

process.stdin.on('end', () => {
  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Helper function to convert HTML to markdown-like text
    function htmlToText(element) {
      if (!element) return '';
      return element.textContent.trim().replace(/\s+/g, ' ');
    }
    
    const content = {
      navLinks: [
        { text: "My Guide to AI & Careers", href: "#guide" },
        { text: "Get My AI Prompts", href: "#prompts" },
        { text: "AI Robot Club", href: "#robot-club" },
        { text: "My AI Projects", href: "#projects" },
        { text: "Get in touch", href: "#contact" },
        { text: "My Story", href: "#story" }
      ],
      
      hero: "I'm building a compass for the age of AI",
      
      offers: [
        {
          type: "30-min-video-guide",
          title: "30-minute AI Video Guide",
          description: "A comprehensive video guide that covers AI fundamentals, career opportunities, and practical applications. Perfect for beginners and professionals looking to understand the AI landscape.",
          price: "Free",
          cta: "Get the Guide",
          url: "#video-guide"
        },
        {
          type: "ai-robot-club",
          title: "AI Robot Club",
          description: "Exclusive community for AI enthusiasts, builders, and experimenters. Connect with like-minded individuals, share projects, and collaborate on cutting-edge AI initiatives.",
          price: "Monthly membership",
          cta: "Join the Club",
          url: "#robot-club"
        },
        {
          type: "career-accelerator",
          title: "AI Career Accelerator Course",
          description: "Structured course designed to fast-track your AI career. Covers technical skills, industry insights, networking strategies, and practical project experience.",
          price: "Course fee applies",
          cta: "Enroll Now",
          url: "#career-course"
        },
        {
          type: "consultation-30",
          title: "30-min with Nate",
          description: "One-on-one consultation session to discuss your AI career path, get advice on projects, or explore collaboration opportunities.",
          price: "$150",
          cta: "Book Session",
          url: "#book-30min"
        },
        {
          type: "consultation-60",
          title: "60-min with Nate",
          description: "Extended consultation and strategy session for in-depth career planning, project review, or business strategy discussion.",
          price: "$250",
          cta: "Book Extended Session",
          url: "#book-60min"
        },
        {
          type: "monthly-mentorship",
          title: "Monthly Mentorship",
          description: "Ongoing monthly mentorship program with regular check-ins, goal setting, progress tracking, and personalized guidance.",
          price: "Monthly fee",
          cta: "Start Mentorship",
          url: "#mentorship"
        },
        {
          type: "prompt-library",
          title: "AI Prompt Library",
          description: "Curated collection of effective AI prompts for various use cases including content creation, problem-solving, analysis, and creative projects.",
          price: "One-time purchase",
          cta: "Get Prompts",
          url: "#prompts"
        }
      ],
      
      projects: [
        {
          name: "GimmeJuice.AI",
          description: "AI-powered content generation platform",
          url: "https://gimmejuice.ai",
          status: "Active"
        },
        {
          name: "Tracker.Vote",
          description: "Voting and decision tracking platform",
          url: "https://tracker.vote",
          status: "Active"
        }
      ],
      
      circles: [
        {
          name: "Job Hunt Circle",
          description: "Peer learning group for job seekers navigating the AI job market. Share opportunities, practice interviews, and support each other.",
          url: "#job-hunt-circle",
          schedule: "Weekly meetups"
        },
        {
          name: "Product Circle",
          description: "Community for product managers and builders working on AI-powered products. Discuss strategy, share insights, and collaborate.",
          url: "#product-circle",
          schedule: "Bi-weekly sessions"
        },
        {
          name: "Founder's Circle",
          description: "Support group for entrepreneurs and founders building AI startups. Network, share challenges, and learn from each other.",
          url: "#founders-circle",
          schedule: "Monthly gatherings"
        }
      ],
      
      bio: `# My Story

From Indonesia to Seattle, I've been on a journey to understand and build the future of AI.

My path started in Indonesia, where I first discovered my passion for technology and its potential to solve real-world problems. The journey brought me to Seattle, where I've immersed myself in the AI ecosystem, working with startups, building tools, and connecting with other innovators.

I believe we're at a critical inflection point in human history. AI isn't just another technology—it's a fundamental shift in how we work, create, and solve problems. But with great power comes great responsibility, and I'm committed to helping others navigate this landscape thoughtfully and effectively.

Through my writing, speaking, and community building, I aim to be a compass for others in the age of AI. Whether you're just starting your AI journey or you're a seasoned professional looking to stay ahead of the curve, I'm here to help you find your way.

When I'm not building or writing about AI, you can find me experimenting with new tools, mentoring others, or thinking about what comes next in this rapidly evolving field.`,
      
      internSection: `## I'm hiring 2 interns!

Join the team to work on cutting-edge AI projects and gain hands-on experience in the rapidly evolving AI landscape.

### What you'll do:
- Work on real AI projects with immediate impact
- Learn from industry experts and practitioners
- Contribute to open-source AI tools and resources
- Participate in community building and content creation
- Gain exposure to the startup ecosystem

### What we're looking for:
- Passion for AI and emerging technologies
- Strong communication and collaboration skills
- Willingness to learn and experiment
- Basic technical skills (coding, data analysis, or design)
- Entrepreneurial mindset

### What you'll get:
- Hands-on experience with cutting-edge AI tools
- Mentorship and career guidance
- Network access to AI professionals and founders
- Portfolio projects you can showcase
- Potential for full-time opportunities

Ready to dive into the future of AI? Let's build something amazing together.

[Apply for Internship](#apply-intern)`
    };
    
    console.log(JSON.stringify(content, null, 2));
    
  } catch (error) {
    console.error('Error parsing HTML:', error);
  }
});
EOF

echo "Created parse-nate.js. Usage:"
echo "curl -s https://natebjones.com | node parse-nate.js > content.json"
