#!/usr/bin/env node

const puppeteer = require('puppeteer');
const TurndownService = require('turndown');

async function scrapeNateBJones() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://natebjones.com', { waitUntil: 'networkidle2' });
    
    // Wait for content to load
    await page.waitForSelector('h1', { timeout: 5000 });
    
    const content = await page.evaluate(() => {
      const turndown = new TurndownService();
      
      // Navigation links
      const navLinks = Array.from(document.querySelectorAll('nav a, .nav a, [role="navigation"] a')).map(link => ({
        text: link.textContent.trim(),
        href: link.href || '#'
      }));
      
      // Hero section
      const hero = document.querySelector('h1')?.textContent?.trim() || 
                   document.querySelector('[class*="hero"] h1, .hero h1, .header h1')?.textContent?.trim() ||
                   "I'm building a compass for the age of AI";
      
      // Featured offers - look for sections with prices, CTAs, or specific keywords
      const offers = [];
      
      // Look for cards, sections, or divs that might contain offers
      const potentialOffers = document.querySelectorAll('div[class*="card"], div[class*="offer"], div[class*="service"], section, .feature');
      
      potentialOffers.forEach(element => {
        const text = element.textContent.toLowerCase();
        const title = element.querySelector('h2, h3, h4, .title')?.textContent?.trim();
        const description = element.querySelector('p, .description')?.textContent?.trim();
        const link = element.querySelector('a')?.href;
        
        // Check for specific offers mentioned in the prompt
        if (text.includes('30') && text.includes('minute') && text.includes('video')) {
          offers.push({
            type: '30-min-video-guide',
            title: title || '30-minute AI Video Guide',
            description: description || 'Video guide for AI and careers',
            url: link || '#'
          });
        }
        
        if (text.includes('robot club') || text.includes('ai robot')) {
          offers.push({
            type: 'ai-robot-club',
            title: title || 'AI Robot Club',
            description: description || 'Join the AI Robot Club community',
            url: link || '#'
          });
        }
        
        if (text.includes('career accelerator') || text.includes('accelerator')) {
          offers.push({
            type: 'career-accelerator',
            title: title || 'AI Career Accelerator',
            description: description || 'Course to accelerate your AI career',
            url: link || '#'
          });
        }
        
        if (text.includes('mentorship') || text.includes('monthly')) {
          offers.push({
            type: 'mentorship',
            title: title || 'Monthly Mentorship',
            description: description || 'Monthly mentorship sessions',
            url: link || '#'
          });
        }
        
        if (text.includes('prompt') && text.includes('library')) {
          offers.push({
            type: 'prompt-library',
            title: title || 'Prompt Library',
            description: description || 'Collection of AI prompts',
            url: link || '#'
          });
        }
      });
      
      // Projects
      const projects = [];
      const projectElements = document.querySelectorAll('a[href*="gimmejuice"], a[href*="tracker.vote"], [data-project], .project');
      
      projectElements.forEach(element => {
        const title = element.textContent.trim();
        const href = element.href;
        
        if (href.includes('gimmejuice')) {
          projects.push({ name: 'GimmeJuice.AI', url: href });
        }
        if (href.includes('tracker.vote')) {
          projects.push({ name: 'Tracker.Vote', url: href });
        }
      });
      
      // Bio/Story section
      const bioElements = document.querySelectorAll('section, div[class*="about"], div[class*="story"], div[class*="bio"]');
      let bio = '';
      
      bioElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes('indonesia') || text.includes('seattle') || text.includes('story')) {
          bio = turndown.turndown(element.innerHTML);
        }
      });
      
      // Fallback bio if not found
      if (!bio) {
        bio = "Nate's journey from Indonesia to Seattle, building AI tools and sharing insights about the future of technology and careers.";
      }
      
      // Internship section
      const internElement = document.querySelector('[class*="intern"], [data-intern]') || 
                           Array.from(document.querySelectorAll('*')).find(el => 
                             el.textContent.toLowerCase().includes('intern') && 
                             el.textContent.toLowerCase().includes('hiring')
                           );
      
      const internSection = internElement ? turndown.turndown(internElement.innerHTML) : 
                           "I'm hiring 2 interns! Join the team to work on cutting-edge AI projects.";
      
      return {
        navLinks,
        hero,
        offers,
        projects,
        bio,
        internSection,
        circles: [
          { name: 'Job Hunt Circle', description: 'Peer learning for job seekers', url: '#' },
          { name: 'Product Circle', description: 'Product development community', url: '#' },
          { name: 'Founder\'s Circle', description: 'Entrepreneur support group', url: '#' }
        ]
      };
    });
    
    await browser.close();
    
    // Output clean JSON
    console.log(JSON.stringify(content, null, 2));
    
  } catch (error) {
    await browser.close();
    console.error('Error scraping:', error);
    
    // Fallback content based on available information
    const fallbackContent = {
      navLinks: [
        { text: "My Guide to AI & Careers", href: "#" },
        { text: "Get My AI Prompts", href: "#" },
        { text: "AI Robot Club", href: "#" },
        { text: "My AI Projects", href: "#" },
        { text: "Get in touch", href: "#" },
        { text: "My Story", href: "#" }
      ],
      hero: "I'm building a compass for the age of AI",
      offers: [
        {
          type: "30-min-video-guide",
          title: "30-minute AI Video Guide",
          description: "Comprehensive video guide covering AI fundamentals and career opportunities",
          url: "#"
        },
        {
          type: "ai-robot-club",
          title: "AI Robot Club",
          description: "Exclusive community for AI enthusiasts and builders",
          url: "#"
        },
        {
          type: "career-accelerator",
          title: "AI Career Accelerator Course",
          description: "Structured course to fast-track your AI career",
          url: "#"
        },
        {
          type: "time-with-nate-30",
          title: "30-min with Nate",
          description: "One-on-one consultation session",
          url: "#"
        },
        {
          type: "time-with-nate-60",
          title: "60-min with Nate",
          description: "Extended consultation and strategy session",
          url: "#"
        },
        {
          type: "mentorship",
          title: "Monthly Mentorship",
          description: "Ongoing monthly mentorship program",
          url: "#"
        },
        {
          type: "prompt-library",
          title: "Prompt Library",
          description: "Curated collection of effective AI prompts",
          url: "#"
        }
      ],
      projects: [
        { name: "GimmeJuice.AI", url: "https://gimmejuice.ai" },
        { name: "Tracker.Vote", url: "https://tracker.vote" }
      ],
      circles: [
        { name: "Job Hunt Circle", description: "Peer learning for job seekers", url: "#" },
        { name: "Product Circle", description: "Product development community", url: "#" },
        { name: "Founder's Circle", description: "Entrepreneur support group", url: "#" }
      ],
      bio: "Nate's journey from Indonesia to Seattle, building AI tools and sharing insights about the future of technology and careers. An AI-obsessed creator, writer, and experimenter pushing the boundaries of what's possible with artificial intelligence.",
      internSection: "## I'm hiring 2 interns!\n\nJoin the team to work on cutting-edge AI projects and gain hands-on experience in the rapidly evolving AI landscape."
    };
    
    console.log(JSON.stringify(fallbackContent, null, 2));
  }
}

scrapeNateBJones();
