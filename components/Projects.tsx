"use client";

import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Star, Users, Eye, Brain, Bot, Zap, Sparkles } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Projects section mounted");
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Projects section is visible");
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['All', 'Featured', 'AI/ML', 'React', 'Fullstack', 'Freelance'];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Content Generator',
      description: 'Intelligent content creation platform using GPT-4 and custom fine-tuned models for businesses',
      image: 'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['AI/ML', 'React', 'Node.js', 'OpenAI'],
      category: ['Featured', 'AI/ML', 'Freelance'],
      stats: { stars: 45, forks: 12, views: 892 },
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Smart Data Analytics Dashboard',
      description: 'Real-time analytics platform with ML-powered insights and predictive modeling for enterprise clients',
      image: 'https://images.pexels.com/photos/7606070/pexels-photo-7606070.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
      category: ['Featured', 'AI/ML', 'React'],
      stats: { stars: 67, forks: 23, views: 1340 },
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Conversational AI Chatbot',
      description: 'Multi-language AI chatbot with natural language processing and sentiment analysis',
      image: 'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Python', 'NLP', 'React', 'WebSocket'],
      category: ['AI/ML', 'Fullstack'],
      stats: { stars: 89, forks: 34, views: 2150 },
      featured: false,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'E-commerce Intelligence Suite',
      description: 'Complete e-commerce solution with AI-driven recommendations and inventory optimization',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Next.js', 'MongoDB', 'AI/ML', 'Stripe'],
      category: ['Featured', 'Fullstack', 'Freelance'],
      stats: { stars: 156, forks: 78, views: 3200 },
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Computer Vision App',
      description: 'Image recognition and processing application for medical diagnostics',
      image: 'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Python', 'OpenCV', 'PyTorch', 'React'],
      category: ['AI/ML', 'React'],
      stats: { stars: 234, forks: 67, views: 4100 },
      featured: false,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Blockchain DeFi Platform',
      description: 'Decentralized finance platform with AI-powered trading algorithms and risk assessment',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Solidity', 'React', 'Web3.js', 'AI'],
      category: ['Fullstack', 'Freelance'],
      stats: { stars: 123, forks: 45, views: 2800 },
      featured: false,
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      data-macaly="projects-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-macaly="projects-title">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              AI-Driven Projects
            </span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Bot className="text-purple-400 animate-spin" size={24} />
              <Sparkles className="text-yellow-400 animate-pulse" size={20} />
              <Brain className="text-pink-400 animate-bounce" size={24} />
            </div>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-lg max-w-3xl mx-auto">
            A showcase of my recent work, from AI-powered applications to fullstack solutions. 
            Each project demonstrates innovation, technical excellence, and real-world impact.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mx-auto mt-4 animate-gradient-x"></div>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden group ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'glass text-text-secondary dark:text-text-secondary text-text-secondary-light hover:text-text-primary dark:hover:text-text-primary hover:text-text-primary-light'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 
                         transition-all duration-500 relative group transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full flex items-center gap-1 animate-pulse">
                    <Sparkles size={12} />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a 
                      href={project.demoUrl}
                      className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:scale-110 transition-transform duration-200"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-3 bg-gray-800 rounded-full text-white hover:scale-110 transition-transform duration-200"
                      aria-label="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-bold text-text-primary dark:text-text-primary text-text-primary-light mb-3 relative z-10 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-sm mb-4 leading-relaxed relative z-10">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-surface dark:bg-surface bg-surface-light rounded-full text-xs font-medium
                               text-accent dark:text-accent text-accent-light border border-accent/20 dark:border-accent/20 border-accent-light/20
                               hover:bg-accent dark:hover:bg-accent hover:bg-accent-light hover:text-dark transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-green-400" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} className="text-blue-400" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="text-purple-400 animate-pulse" size={24} />
                <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary text-text-primary-light">
                  Ready for Your Next AI Project?
                </h3>
              </div>
              
              <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light mb-6 leading-relaxed">
                I'm always working on new projects and exploring innovative technologies. 
                Check out my GitHub for more work, contributions, and exciting experiments with AI!
              </p>
              
              <a 
                href="https://github.com/manelmahmoudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 
                         text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                         transition-all duration-300 group/btn"
              >
                <Github size={20} className="group-hover/btn:animate-bounce" />
                View All Projects on GitHub
                <Zap size={16} className="group-hover/btn:animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-32 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-blob"></div>
      <div className="absolute bottom-32 right-20 w-56 h-56 bg-pink-500/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-2/3 left-1/3 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
    </section>
  );
}