"use client";

import { useEffect } from 'react';

export default function ParticleBackground() {
  useEffect(() => {
    console.log("Particle background initialized");
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      const particlesContainer = document.querySelector('.particles');
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
      }

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="particles"></div>;
}