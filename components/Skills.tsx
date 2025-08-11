"use client";

import { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Brain, Zap, Cpu, Bot } from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Skills section mounted");
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Skills section is visible");
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

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Building intelligent systems that learn and adapt',
      skills: [
        { name: 'Python', level: 95, color: 'from-emerald-500 to-emerald-600' },
        { name: 'TensorFlow', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'PyTorch', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'OpenAI API', level: 90, color: 'from-indigo-500 to-indigo-600' }
      ],
      average: 90
    },
    {
      title: 'Frontend Development',
      icon: Code,
      description: 'Creating beautiful, responsive user interfaces',
      skills: [
        { name: 'React', level: 88, color: 'from-cyan-500 to-cyan-600' },
        { name: 'TypeScript', level: 82, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-800' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-teal-600' }
      ],
      average: 86
    },
    {
      title: 'Backend & Cloud',
      icon: Database,
      description: 'Scalable server solutions and cloud architecture',
      skills: [
        { name: 'Node.js', level: 87, color: 'from-green-500 to-green-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-700' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'AWS', level: 78, color: 'from-orange-500 to-orange-600' }
      ],
      average: 82
    }
  ];

  const learningSkills = [
    { name: 'Langchain', icon: Brain, color: 'text-purple-400' },
    { name: 'Hugging Face', icon: Bot, color: 'text-yellow-400' },
    { name: 'Vector DBs', icon: Database, color: 'text-green-400' },
    { name: 'MLOps', icon: Cpu, color: 'text-blue-400' },
    { name: 'Transformers', icon: Zap, color: 'text-pink-400' },
    { name: 'AutoML', icon: Brain, color: 'text-indigo-400' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      data-macaly="skills-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-macaly="skills-title">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              AI-Powered Skills
            </span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Brain className="text-purple-400 animate-pulse" size={24} />
              <Zap className="text-yellow-400 animate-bounce" size={20} />
              <Bot className="text-pink-400 animate-spin" size={24} />
            </div>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-lg max-w-3xl mx-auto">
            A comprehensive AI & fullstack toolkit built through years of hands-on experience and 
            continuous learning in cutting-edge technologies
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mx-auto mt-4 animate-gradient-x"></div>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass p-8 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 
                         transition-all duration-500 relative overflow-hidden group transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg group-hover:animate-bounce">
                  <category.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary dark:text-text-primary text-text-primary-light">
                    {category.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 mb-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-primary dark:text-text-primary text-text-primary-light font-medium">
                        {skill.name}
                      </span>
                      <span className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-surface dark:bg-surface bg-surface-light rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Average Score */}
              <div className="relative z-10">
                <div className="text-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-400/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {category.average}%
                  </div>
                  <div className="text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">
                    Average Proficiency
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className={`glass p-8 rounded-2xl relative overflow-hidden group transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary text-text-primary-light mb-2 flex items-center justify-center gap-2">
              <Brain className="text-indigo-400 animate-pulse" size={28} />
              Currently Exploring
            </h3>
            <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light">
              Technology evolves rapidly, and I'm committed to staying current. I regularly explore new frameworks, 
              attend conferences, and contribute to open-source projects. Currently diving deep into AI/ML integration 
              and exploring Rust for systems programming.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {learningSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 glass rounded-full hover:scale-110 
                           transition-all duration-300 cursor-default group/skill animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <skill.icon size={20} className={`${skill.color} group-hover/skill:animate-bounce`} />
                <span className="text-text-primary dark:text-text-primary text-text-primary-light font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 
                           rounded-full border border-green-400/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Always learning, always growing! 🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
    </section>
  );
}

