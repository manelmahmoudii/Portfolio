"use client";

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Calendar, MessageCircle, Send, Sparkles, Brain, Zap, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.send(
      'service_4z7h3i8',       // Remplace par ton Service ID EmailJS
      'template_nzwqwlf',      // Remplace par ton Template ID EmailJS
      formData,                
      'w9RJHAq6jWu8bUKpi'        // Remplace par ta clé publique EmailJS
    )
    .then((result) => {
      console.log('Email sent successfully!', result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.log('Email send error:', error.text);
      alert('Failed to send message. Try again later.');
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'manelmahmoudi03@gmail.com', description: 'Best way to reach me', color: 'text-purple-400', bgColor: 'from-purple-500/20 to-purple-600/20' },
    { icon: Phone, label: 'Phone', value: '(+216) 29 867 680', description: 'Available for calls', color: 'text-green-400', bgColor: 'from-green-500/20 to-green-600/20' },
    { icon: MapPin, label: 'Location', value: 'Tunisia / Remote', description: 'Working globally', color: 'text-indigo-400', bgColor: 'from-indigo-500/20 to-indigo-600/20' }
  ];

  const quickActions = [
    { icon: Calendar, title: 'Schedule a Call', description: 'Book a 30-minute discovery call', color: 'from-purple-600 to-purple-800', action: () => console.log("Schedule call clicked") },
    { icon: MessageCircle, title: 'Live Chat', description: 'Get instant responses to your questions', color: 'from-green-500 to-emerald-600', action: () => console.log("Live chat clicked") }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" data-macaly="contact-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-macaly="contact-title">
            <span className="text-text-primary dark:text-text-primary text-text-primary-light">Let's Build Something </span>
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">Amazing Together</span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Brain className="text-purple-400 animate-pulse" size={24} />
              <Sparkles className="text-yellow-400 animate-spin" size={20} />
              <Zap className="text-pink-400 animate-bounce" size={24} />
            </div>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-lg max-w-3xl mx-auto leading-relaxed">
            <strong className="text-accent dark:text-accent text-accent-light">Ready to hire a freelance AI & Fullstack Developer?</strong><br/>
            I'm currently available for exciting projects and long-term collaborations. Let's discuss your next big idea and create something extraordinary together!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mx-auto mt-4 animate-gradient-x"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="glass p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" data-macaly="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-surface dark:bg-surface bg-surface-light border border-text-secondary/20 dark:border-text-secondary/20 border-text-secondary-light/20 rounded-lg text-text-primary dark:text-text-primary text-text-primary-light placeholder-text-secondary dark:placeholder-text-secondary placeholder-text-secondary-light focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:border-purple-400/50" required />
                  <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-surface dark:bg-surface bg-surface-light border border-text-secondary/20 dark:border-text-secondary/20 border-text-secondary-light/20 rounded-lg text-text-primary dark:text-text-primary text-text-primary-light placeholder-text-secondary dark:placeholder-text-secondary placeholder-text-secondary-light focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:border-purple-400/50" required />
                </div>
                <input type="text" name="subject" placeholder="Project Subject" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 bg-surface dark:bg-surface bg-surface-light border border-text-secondary/20 dark:border-text-secondary/20 border-text-secondary-light/20 rounded-lg text-text-primary dark:text-text-primary text-text-primary-light placeholder-text-secondary dark:placeholder-text-secondary placeholder-text-secondary-light focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:border-purple-400/50" required />
                <textarea name="message" rows={6} placeholder="Tell me about your project..." value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-surface dark:bg-surface bg-surface-light border border-text-secondary/20 dark:border-text-secondary/20 border-text-secondary-light/20 rounded-lg text-text-primary dark:text-text-primary text-text-primary-light placeholder-text-secondary dark:placeholder-text-secondary placeholder-text-secondary-light focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:border-purple-400/50 resize-none" required></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <Send size={20} className="relative z-10 group-hover/btn:animate-bounce" />
                  <span className="relative z-10">Send Message & Hire Me!</span>
                  <Sparkles size={16} className="relative z-10 group-hover/btn:animate-spin" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {contactInfo.map((info, i) => (
              <div key={i} className="glass p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${info.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`p-3 bg-gradient-to-r ${info.bgColor} rounded-lg relative z-10`}><info.icon className={info.color} size={24} /></div>
                <div className="relative z-10">
                  <div className="font-semibold text-text-primary dark:text-text-primary text-text-primary-light">{info.label}</div>
                  <div className="text-accent dark:text-accent text-accent-light font-medium">{info.value}</div>
                  <div className="text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">{info.description}</div>
                </div>
              </div>
            ))}

            {quickActions.map((action, i) => (
              <button key={i} onClick={action.action} className={`w-full glass p-6 rounded-xl text-left hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fadeInUp`} style={{ animationDelay: `${(i + 3) * 0.1}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`p-3 bg-gradient-to-r ${action.color} rounded-lg`}><action.icon className="text-white" size={24} /></div>
                  <div>
                    <div className="font-semibold text-text-primary dark:text-text-primary text-text-primary-light mb-1">{action.title}</div>
                    <div className="text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">{action.description}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-surface dark:bg-surface bg-surface-light rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      <span className="text-text-primary dark:text-text-primary text-text-primary-light group-hover:text-white transition-colors duration-300">→</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {/* Availability Status */}
            <div className="glass p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold text-lg">Available for Hire!</span>
                </div>
              </div>
              <div className="mt-3 text-text-secondary dark:text-text-secondary text-text-secondary-light relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-green-400" size={16} />
                  <span className="font-semibold">Response Time: &lt; 24hrs</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Currently accepting new freelance projects and long-term collaborations. 
                  Specializing in AI-powered applications, fullstack development, and innovative tech solutions.
                  Whether you need a complete application or expert consultation, I'm here to help! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`mt-20 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="glass p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="text-purple-400 animate-pulse" size={28} />
              <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary text-text-primary-light">
                Ready to Transform Your Ideas into Reality?
              </h3>
            </div>
            <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-lg mb-6 leading-relaxed">
              Whether you need a complete web application, AI integration, mobile app, or just want to discuss an idea, I'm here to help. Let's create something extraordinary together that will make your business stand out and your users amazed.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available</span>
              </div>
              <div>•</div>
              <div>Response &lt; 24hrs</div>
              <div>•</div>
              <div>© 2024 Manel Mahmoudi. Built with Next.js and lots of ☕</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
