"use client";

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    console.log("ThemeToggle mounted");
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(isDarkMode);
    
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    console.log("Theme toggled:", !isDark ? 'dark' : 'light');
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Update document class
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:scale-110 transition-all duration-300 group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun 
          size={20} 
          className="text-yellow-400 group-hover:animate-spin transition-all duration-300" 
        />
      ) : (
        <Moon 
          size={20} 
          className="text-blue-400 group-hover:-rotate-12 transition-all duration-300" 
        />
      )}
    </button>
  );
}

