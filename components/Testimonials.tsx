"use client";

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, Calendar, ExternalLink, Repeat } from 'lucide-react';

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
  country?: string;
  isRepeatClient?: boolean;
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
    name: "Mathieu Mari",
    role: "Software Developer",
    company: "13 years experience",
    rating: 5,
    review: "Excellent travail !",
    date: "1 week ago",
    project: "AI Chatbot",
    avatar: "/mathieumari.jpg",
    country: "France 🇫🇷",
    isRepeatClient: true
  },
  {
    id: 2,
    name: "okan_arslan",
    role: "Audio Engineer",
    company: "",
    rating: 5,
    review: "She did great work in a short time. she solved all the problems. I recommend her to everyone, she is skilled and understanding.",
    date: "4 months ago",
    project: "Sınavlar Cebimde – ROCKET",
    country: "Turkey 🇹🇷"
,
  },
  {
    id: 3,
    name: "elias_arnold",
    role: "Fiverr Buyer",
    company: "",
    rating: 5,
    review: "Manel M truly IMPRESSED with their professionalism in software development, delivering top-notch work. Their quick responsiveness and language fluency made collaboration a breeze, while their timely delivery was the cherry on top. Working with Manel was an absolute pleasure! 👏",
    date: "6 weeks ago",
    project: "Medien Akademie Website",
    country: "Germany"

  },
  {
    id: 4,
    name: "maxg101",
    role: "Marketing Director",
    company: "",
    rating: 5,
    review: "Manel did an amazing job aiding me with my needs. Highly recommend if you want your work done professionally and efficiently! She responded to all my questions and requests in a timely manner given the time zone difference. 10/10!",
    date: "8 months ago",
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
            What my clients say about working with me on Fiverr 
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
          {/* Navigation Buttons - Outside */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-16 -right-16 flex justify-between pointer-events-none z-20">
            <button
              onClick={prevTestimonial}
              className="p-4 bg-purple-600/20 hover:bg-purple-600/40 rounded-full text-purple-400 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto shadow-lg backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 bg-purple-600/20 hover:bg-purple-600/40 rounded-full text-purple-400 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto shadow-lg backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Current Testimonial */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0">
                  <div className="mb-4">
                    {testimonials[currentIndex].avatar ? (
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-purple-400/30"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <User className="text-white" size={32} />
                      </div>
                    )}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <h4 className="font-bold text-text-primary dark:text-text-primary text-text-primary-light">
                        {testimonials[currentIndex].name}
                      </h4>
                      {testimonials[currentIndex].country && (
                        <span className="text-lg flex items-center gap-1">
                          <svg width="20" height="15" viewBox="0 0 3 2" className="rounded-sm">
                            <rect width="1" height="2" fill="#002654"/>
                            <rect x="1" width="1" height="2" fill="#FFFFFF"/>
                            <rect x="2" width="1" height="2" fill="#CE1126"/>
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="text-purple-400 font-medium">{testimonials[currentIndex].role}</p>
                    <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      <span className="text-yellow-400 font-bold">5.0</span>
                    </div>
                    {testimonials[currentIndex].isRepeatClient && (
                      <div className="flex items-center gap-1 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        <Repeat size={14} />
                        <span>Repeat Client</span>
                      </div>
                    )}
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
