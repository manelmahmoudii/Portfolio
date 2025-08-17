"use client";

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Code, Database, Globe, Sparkles, Brain, Zap } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Fullstack & AI Developer 🤖',
    'Freelance Tech Innovator 💡',
    'Angular & Spring Boot Specialist 🧠',
    'RAG & NLP Expert ⚡',
    'Your Next Tech Partner 🚀'
  ];

  useEffect(() => {
    console.log("Hero component mounted");
    
    const typeText = () => {
      const currentRole = roles[currentIndex];
      
      if (isTyping) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }
    };

    const interval = setInterval(typeText, isTyping ? 100 : 50);
    return () => clearInterval(interval);
  }, [typedText, currentIndex, isTyping, roles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/manelmahmoudii',
      label: 'GitHub',
      color: 'hover:text-white hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/manel-mahmoudi-3a94b5251/',
      label: 'LinkedIn',
      color: 'hover:text-white hover:bg-blue-600'
    },
    {
      icon: Mail,
      href: 'mailto:manelmahmoudi03@gmail.com',
      label: 'Email',
      color: 'hover:text-white hover:bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20" data-macaly="hero-section">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
        
        {/* Left Column */}
        <div className="space-y-10 animate-fadeInUp text-center lg:text-left">
          {/* Profile Image with Glow - Larger and Better Positioned */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative p-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-glow">
                <img
                  src="/manel-profile.jpeg"
                  alt="Manel Mahmoudi - AI & Fullstack Developer"
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover object-center bg-white p-1.5 shadow-2xl"
                  data-macaly="profile-image"
                />
              </div>
              {/* Additional glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
            </div>
          </div>

          {/* Animated Name & Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up" data-macaly="hero-title">
              <span className="text-text-primary dark:text-text-primary text-text-primary-light">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                Manel Mahmoudi
              </span>
            </h1>
            
            <div className="text-xl text-text-secondary dark:text-text-secondary text-text-secondary-light">
              <span className="font-mono text-accent dark:text-accent text-accent-light">&gt; </span>
              <span className="typing-container">{typedText}</span>
              <span className="animate-pulse text-accent dark:text-accent text-accent-light">|</span>
            </div>
          </div>

          {/* Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700
                       text-white px-8 py-3 rounded-lg font-medium transition-all duration-300
                       flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg"
              data-macaly="view-work-button"
            >
              <Code size={20} />
              View My Work
            </button>
            
           <a
            href="/CV_ManelMahmoudi.pdf" // Assure-toi que ton CV est dans le dossier public
            download="Manel_Mahmoudi_CV.pdf"
            className="border border-blue-500/50 hover:bg-blue-500/10 text-text-primary dark:text-text-primary text-text-primary-light
                      px-8 py-3 rounded-lg font-medium transition-all duration-300
                      flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <Download size={20} />
            Download CV
</a>
          </div>

          {/* Animated Social Links */}
          <div className="flex items-center gap-4 pt-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface/50 dark:bg-surface/50 bg-surface-light/50 
                         hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label={social.label}
                style={{animationDelay: `${0.7 + index * 0.1}s`}}
              >
                <social.icon size={20} className="text-text-primary dark:text-text-secondary text-text-primary-light" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Floating Card */}
        <div className="relative animate-float">
          <div className="glass p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent dark:bg-accent bg-accent-light rounded-full animate-pulse"></div>
                <span className="text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">Available for projects</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Code className="text-purple-500 animate-pulse" size={20} />
                  <span className="text-text-primary dark:text-text-primary text-text-primary-light">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Brain className="text-indigo-500 animate-pulse" size={20} />
                  <span className="text-text-primary dark:text-text-primary text-text-primary-light">AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Globe className="text-pink-500 animate-pulse" size={20} />
                  <span className="text-text-primary dark:text-text-primary text-text-primary-light">Modern Web Solutions</span>
                </div>
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Zap className="text-accent dark:text-accent text-accent-light animate-pulse" size={20} />
                  <span className="text-text-primary dark:text-text-primary text-text-primary-light">Lightning Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}









