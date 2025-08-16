"use client";

import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Star, Users, Eye, Brain, Bot, Zap, Sparkles } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
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
      { threshold: 0.1 }
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
      title: 'Swiss Real Estate Intelligent Chatbot',
      description: 'Development of an intelligent chatbot for Swiss real estate using RAG and NLP technologies',
      image: 'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['RAG', 'Python', 'ChromaDB', 'NLP'],
      category: ['Featured', 'AI/ML', 'Freelance'],
      stats: { stars: 45, forks: 12, views: 892 },
      featured: true,
      demoUrl: '#',
      githubUrl: '#',
      details: {
        fullDescription: 'An intelligent chatbot system designed for Swiss real estate market using advanced RAG (Retrieval-Augmented Generation) technology.',
        features: [
          'Natural language processing for property queries',
          'RAG-based information retrieval',
          'ChromaDB vector database integration',
          'Sentence-Transformers for semantic search',
          'OpenRouter API integration',
          'Bootstrap responsive interface',
          'Multi-language support (French, German, Italian)',
          'Real-time property recommendations'
        ],
        aiFeatures: [
          'Advanced RAG implementation',
          'Semantic similarity search',
          'Context-aware responses',
          'Property matching algorithms'
        ],
        screenshots: [
          'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
        ]
      }
    },
    {
      id: 2,
      title: 'Inter-Enterprise Data Centralization Platform',
      description: 'AI-powered platform for intelligent data centralization with automated cleaning, normalization and consolidation using Sentence-Transformers',
      image: 'https://images.pexels.com/photos/7606070/pexels-photo-7606070.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['ReactJs', 'Spring Boot', 'MongoDB', 'Python', 'AI', 'FastAPI'],
      category: ['Featured', 'AI/ML', 'Fullstack'],
      stats: { stars: 67, forks: 23, views: 1340 },
      featured: true,
      demoUrl: '#',
      githubUrl: '#',
      details: {
        fullDescription: 'A comprehensive platform that leverages AI for intelligent data processing and enterprise management.',
        features: [
          'User account management with JWT authentication',
          'Automatic password generation and email reset',
          'Enterprise workspace management',
          'Integrated calendar for event management',
          'Shared storage with smart file handling',
          'AI-powered Excel file processing',
          'Automated data cleaning and normalization',
          'Intelligent column mapping using Sentence-Transformers',
          'Dynamic homepage with statistical analysis',
          'Contact classification (Lead, Prospect, Client)',
          'Dark mode interface'
        ],
        aiFeatures: [
          'Automated data cleaning using pandas and NumPy',
          'Semantic column normalization with Sentence-Transformers',
          'Intelligent data consolidation and mapping',
          'Smart duplicate detection and removal',
          'Automated report generation'
        ],
        screenshots: [
          'https://images.pexels.com/photos/7606070/pexels-photo-7606070.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
          'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
        ]
      }
    },
    {
      id: 3,
      title: 'Project Management Application',
      description: 'Design and development of a web application dedicated to project management (Freelance Fiverr)',
      image: 'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Angular', 'Spring Boot', 'Maria DB'],
      category: ['Fullstack', 'Freelance'],
      stats: { stars: 89, forks: 34, views: 2150 },
      featured: false,
      demoUrl: '#',
      githubUrl: '#',
      details: {
        fullDescription: 'A comprehensive project management solution built for a client on Fiverr, featuring task tracking, team collaboration, and progress monitoring.',
        features: [
          'Project creation and management',
          'Task assignment and tracking',
          'Team member management',
          'Progress monitoring dashboard',
          'File upload and sharing',
          'Deadline management',
          'Real-time notifications',
          'Reporting and analytics',
          'User role management',
          'Responsive design for all devices'
        ],
        screenshots: [
          'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
        ]
      }
    },
    {
      id: 4,
      title: 'SoMezzo - Performance Management',
      description: 'Development of a web and mobile application for performance management with team leadership',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'Android'],
      category: ['Featured', 'Fullstack'],
      stats: { stars: 156, forks: 78, views: 3200 },
      featured: true,
      demoUrl: '#',
      githubUrl: '#',
      details: {
        fullDescription: 'An integration project focused on developing a comprehensive performance management system with both web and mobile interfaces, demonstrating leadership and team coordination skills.',
        features: [
          'Performance tracking dashboard',
          'KPI monitoring and analytics',
          'Team performance evaluation',
          'Goal setting and tracking',
          'Mobile application for on-the-go access',
          'Real-time performance metrics',
          'Employee feedback system',
          'Reporting and data visualization',
          'Multi-platform synchronization',
          'SCRUM methodology implementation'
        ],
        teamFeatures: [
          'Team leadership and coordination',
          'SCRUM methodology for project delivery',
          'Effective communication and collaboration',
          'Project delivery within deadlines',
          'GitHub version control management',
          'Azure DevOps integration'
        ],
        screenshots: [
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
        ]
      }
    },
    {
      id: 5,
      title: 'Client Visit Management Application',
      description: 'Development of a web application dedicated to client visit management for web services (RNE)',
      image: 'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Angular', 'Spring Boot', 'Maria DB', 'JasperReports'],
      category: ['Fullstack'],
      stats: { stars: 234, forks: 67, views: 4100 },
      featured: false,
      demoUrl: '#',
      githubUrl: '#',
      details: {
        fullDescription: 'A professional web application developed during internship at RNE (Registre National des Entreprises) for managing client visits and web service interactions.',
        features: [
          'Client visit scheduling and management',
          'Visitor registration system',
          'Appointment booking interface',
          'Visit history tracking',
          'Client information management',
          'Service request handling',
          'Real-time availability checking',
          'Notification system for appointments',
          'Detailed reporting with JasperReports',
          'Advanced report generation features'
        ],
        internshipFeatures: [
          'Professional development environment',
          'Government sector experience',
          'Enterprise-level application development',
          'Integration with existing RNE systems',
          'Advanced reporting capabilities',
          'Database optimization and management'
        ],
        screenshots: [
          'https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
        ]
      }
    },
    {
      id: 6,
      title: 'EasyColloc - Student Housing Platform',
      description: 'Design and development of EasyColloc, a collaborative web platform for student housing',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      tags: ['Symfony', 'MySQL', 'PHP', 'HTML/CSS'],
      category: ['Fullstack'],
      stats: { stars: 123, forks: 45, views: 2800 },
      featured: false,
      demoUrl: '#',
      githubUrl: '#',
      details: {
        fullDescription: 'An integration project focused on creating a collaborative platform to help students find and manage shared housing arrangements, built using Symfony framework.',
        features: [
          'Student housing listings management',
          'Roommate matching system',
          'Property search and filtering',
          'User profile management',
          'Messaging system between students',
          'Housing application tracking',
          'Photo gallery for properties',
          'Location-based search',
          'Review and rating system',
          'Responsive design for mobile access'
        ],
        academicFeatures: [
          'Integration project for academic curriculum',
          'Full-stack development experience',
          'Database design and optimization',
          'MVC architecture implementation',
          'User authentication and security',
          'Collaborative development practices'
        ],
        screenshots: [
          'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
        ]
      }
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

              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25
                         transition-all duration-500 relative group transform border border-purple-500/10 hover:border-purple-500/30 ${
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

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white hover:scale-110 transition-transform duration-200"
                      aria-label="View Details"
                    >
                      <Eye size={20} />
                    </button>
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
                               text-accent dark:text-accent text-accent-light border border-accent/20 dark:border-accent/20 border-accent-light/20"
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

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-surface dark:bg-surface bg-surface-light max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl relative animate-slideInUp">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 hover:text-red-300 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-text-primary dark:text-text-primary text-text-primary-light mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light mb-6 text-lg">
                {selectedProject.details?.fullDescription}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <Sparkles size={20} />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.details?.features?.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-text-secondary dark:text-text-secondary text-text-secondary-light">
                        <span className="text-green-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.details?.aiFeatures && (
                  <div>
                    <h3 className="text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
                      <Brain size={20} />
                      AI Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.details.aiFeatures.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary dark:text-text-secondary text-text-secondary-light">
                          <span className="text-purple-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.details?.teamFeatures && (
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                      <Users size={20} />
                      Team Leadership
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.details.teamFeatures.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary dark:text-text-secondary text-text-secondary-light">
                          <span className="text-cyan-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.details?.internshipFeatures && (
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                      <Star size={20} />
                      Professional Experience
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.details.internshipFeatures.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary dark:text-text-secondary text-text-secondary-light">
                          <span className="text-orange-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.details?.academicFeatures && (
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                      <Star size={20} />
                      Academic Project
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.details.academicFeatures.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary dark:text-text-secondary text-text-secondary-light">
                          <span className="text-emerald-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}