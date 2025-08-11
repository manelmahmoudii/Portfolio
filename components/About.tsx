"use client";

import { useEffect, useRef, useState } from 'react';
import { User, Heart, Coffee, Calendar, Award, Target, Brain, Sparkles, Zap, Laptop } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("About section mounted");
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("About section is visible");
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

  const stats = [
    { icon: Brain, value: '5+', label: 'Years AI/ML' },
    { icon: Laptop, value: '100+', label: 'Projects Delivered' },
    { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
    { icon: Sparkles, value: '24/7', label: 'Available for Hire' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      data-macaly="about-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-macaly="about-title">
            <span className="text-text-primary dark:text-text-primary text-text-primary-light">About </span>
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              Manel Mahmoudi
            </span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Brain className="text-purple-400 animate-pulse" size={24} />
              <span className="text-lg font-normal text-accent dark:text-accent text-accent-light">
                AI-Powered Freelancer
              </span>
            </div>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mx-auto animate-gradient-x"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Manel's Story */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="glass p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg animate-pulse">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary text-text-primary-light">
                  My AI Journey 🚀
                </h3>
              </div>
              
              <div className="space-y-4 text-text-secondary dark:text-text-secondary text-text-secondary-light leading-relaxed relative z-10" data-macaly="about-story">
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-purple-400 text-2xl">"</span>
                  I'm <strong className="text-accent dark:text-accent text-accent-light">Manel Mahmoudi</strong>, 
                  a passionate AI & Fullstack Developer with 5+ years transforming innovative ideas 
                  into intelligent, scalable applications. My journey started with curiosity about 
                  machine learning and evolved into mastering the art of creating AI-driven solutions.
                </p>
                
                <p>
                  As a <strong className="text-purple-400">freelancer</strong>, I specialize in React, 
                  Node.js, Python, and cutting-edge AI technologies. I don't just code – I architect 
                  intelligent systems that learn, adapt, and deliver extraordinary user experiences.
                </p>
                
                <p>
                  <strong className="text-pink-400">Ready to hire?</strong> I'm currently available 
                  for exciting projects that push the boundaries of what's possible with AI and web development. 
                  Let's build the future together! ✨
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-purple-400/20 relative z-10">
                <div className="flex items-center gap-2 text-purple-400 mb-3">
                  <Target size={20} className="animate-spin" />
                  <span className="font-semibold">Current Mission:</span>
                </div>
                <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light">
                  Building next-generation AI applications that revolutionize how businesses operate 
                  and how users interact with technology. Every project is an opportunity to innovate! 🎯
                </p>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for new projects!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Stats & Skills */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`glass p-6 rounded-xl text-center hover:scale-110 transition-all duration-500 transform 
                             hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group animate-fadeInUp`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex justify-center mb-3 relative z-10">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:animate-bounce">
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-text-primary dark:text-text-primary text-text-primary-light relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* AI-Focused Skills Preview */}
            <div className="glass p-6 rounded-xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-xl font-bold text-text-primary dark:text-text-primary text-text-primary-light mb-4 flex items-center gap-2 relative z-10">
                <Brain className="text-blue-500 animate-pulse" size={24} />
                AI & Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3 relative z-10">
                {[
                  { name: 'Python', color: 'from-emerald-500 to-emerald-600' },
                  { name: 'TensorFlow', color: 'from-orange-500 to-orange-600' },
                  { name: 'React', color: 'from-cyan-500 to-cyan-600' },
                  { name: 'Node.js', color: 'from-green-500 to-green-600' },
                  { name: 'PyTorch', color: 'from-red-500 to-red-600' },
                  { name: 'TypeScript', color: 'from-blue-500 to-blue-600' },
                  { name: 'OpenAI API', color: 'from-purple-500 to-purple-600' },
                  { name: 'MongoDB', color: 'from-green-600 to-green-700' }
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-semibold
                               hover:scale-110 transition-all duration-300 cursor-default transform animate-fadeInUp shadow-lg`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Philosophy */}
            <div className="glass p-6 rounded-xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-xl font-bold text-text-primary dark:text-text-primary text-text-primary-light mb-4 flex items-center gap-2 relative z-10">
                <Sparkles className="text-pink-400 animate-spin" size={24} />
                My Philosophy
              </h4>
              <blockquote className="text-text-secondary dark:text-text-secondary text-text-secondary-light italic border-l-4 border-gradient-to-b from-purple-400 to-pink-400 pl-4 relative z-10 text-lg">
                "AI isn't just about algorithms – it's about creating intelligent solutions that 
                empower humans to achieve the impossible. Every line of code is a step toward 
                a smarter, more connected world." 
                <span className="text-purple-400 font-bold block mt-2">- Manel M. 🤖✨</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-blob animation-delay-4000"></div>
    </section>
  );
}

