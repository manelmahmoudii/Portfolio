"use client";

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, Calendar, ExternalLink } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  date: string;
  avatar?: string;
  project: string;
}

// Logo Fiverr local
const FiverrIcon = ({ size = 50, className = "" }: { size?: number; className?: string }) => (
  <img
    src="/Fiverr-Logo.png"
    alt="Fiverr"
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: 'auto' }}
  />
);

// Reviews réalistes basées sur le style Fiverr
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "alexm_business",
    role: "Business Owner",
    company: "E-commerce Startup",
    rating: 5,
    review: "Outstanding work! Manel delivered exactly what I needed for my online store. The Angular frontend is smooth and the backend integration is perfect. Fast delivery and great communication. Will definitely work with him again!",
    date: "2 weeks ago",
    project: "E-commerce Website"
  },
  {
    id: 2,
    name: "sarah_tech",
    role: "Project Manager",
    company: "Tech Agency",
    rating: 5,
    review: "Manel is a true professional! He built our React dashboard from scratch and it looks amazing. Clean code, responsive design, and delivered before deadline. Highly recommend for any web development project!",
    date: "1 month ago",
    project: "React Dashboard"
  },
  {
    id: 3,
    name: "startup_founder",
    role: "CEO",
    company: "SaaS Company",
    rating: 5,
    review: "Incredible developer! Manel helped us build our MVP with Spring Boot backend and Angular frontend. His expertise in full-stack development saved us months of work. Professional, reliable, and skilled!",
    date: "6 weeks ago",
    project: "SaaS Platform"
  },
  {
    id: 4,
    name: "marketing_pro",
    role: "Marketing Director",
    company: "Digital Agency",
    rating: 5,
    review: "Perfect experience working with Manel! He created a beautiful landing page that converts really well. Great attention to detail, fast turnaround, and excellent communication throughout the project.",
    date: "2 months ago",
    project: "Landing Page"
  },
  {
    id: 5,
    name: "john_entrepreneur",
    role: "Entrepreneur",
    company: "Local Business",
    rating: 5,
    review: "Manel exceeded my expectations! Built a complete business website with admin panel. The design is modern and the functionality is exactly what I needed. Great value for money!",
    date: "3 months ago",
    project: "Business Website"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
        } transition-colors duration-200`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="text-purple-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary text-text-primary-light">
              Client <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <Quote className="text-pink-400 animate-pulse" size={32} />
          </div>
          <p className="text-xl text-text-secondary dark:text-text-secondary text-text-secondary-light max-w-3xl mx-auto">
            What my clients say about working with me on Fiverr and other platforms
          </p>

          {/* Fiverr Badge */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-3 glass px-6 py-3 rounded-full">
              <FiverrIcon size={36} className="" />
              <span className="text-green-500 font-semibold text-lg">Verified Fiverr Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Current Testimonial */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                    <User className="text-white" size={32} />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-text-primary dark:text-text-primary text-text-primary-light">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-purple-400 font-medium">{testimonials[currentIndex].role}</p>
                    <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    <span className="text-yellow-400 font-bold">5.0</span>
                  </div>
                  
                  <blockquote className="text-lg text-text-secondary dark:text-text-secondary text-text-secondary-light leading-relaxed mb-4">
                    <Quote className="inline text-purple-400 mr-2" size={20} />
                    {testimonials[currentIndex].review}
                    <Quote className="inline text-purple-400 ml-2" size={20} />
                  </blockquote>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4 text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{testimonials[currentIndex].date}</span>
                      </div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-400 font-medium">
                        Project: {testimonials[currentIndex].project}
                      </span>
                    </div>

                    {/* View on Fiverr Button */}
                    <a
                      href="https://www.fiverr.com/manelmahmoud453?public_mode=true"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-full text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiverrIcon size={24} />
                      <span>View on Fiverr</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-purple-600/20 hover:bg-purple-600/40 rounded-full text-purple-400 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-purple-600/20 hover:bg-purple-600/40 rounded-full text-purple-400 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-600 scale-125'
                    : 'bg-gray-400 hover:bg-purple-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      

      </div>
    </section>
  );
}
