import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

const ScrollNavigation = ({ isHeroOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!isHeroOpen) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress percentage
      const totalScrollable = documentHeight - windowHeight;
      const progress = totalScrollable > 0 ? (currentScrollY / totalScrollable) * 100 : 0;
      setScrollProgress(progress);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation to set starting values
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeroOpen, lastScrollY]);

  // Don't render until the invitation is open
  if (!isHeroOpen) return null;

  // Determine which arrow to show based on scroll position and direction
  let showUpArrow = false;
  if (scrollProgress >= 98) {
    showUpArrow = true; // Always up when at the bottom
  } else if (scrollProgress <= 2) {
    showUpArrow = false; // Always down when at the top
  } else {
    showUpArrow = scrollDirection === 'up'; // Otherwise, matches the scroll direction
  }

  const handleClick = () => {
    if (showUpArrow) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  // SVG calculations for the circular progress border
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  // Stroke offset goes from circumference (empty) to 0 (full) based on scroll progress
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center cursor-pointer group"
      onClick={handleClick}
      aria-label={showUpArrow ? "Scroll to Top" : "Scroll to Bottom"}
    >
      {/* Background and Progress Ring */}
      <svg width="60" height="60" className="transform -rotate-90 drop-shadow-md">
        {/* Background Circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="rgba(212, 175, 55, 0.15)"
          strokeWidth="3"
          fill="rgba(255, 255, 255, 0.85)"
          className="backdrop-blur-sm"
        />
        {/* Animated Progress Border */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#d4af37" // Gold color matching the theme
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-200 ease-out"
        />
      </svg>

      {/* Animated Arrow Icon */}
      <div className="absolute flex items-center justify-center w-full h-full text-heading-navy group-hover:text-[#d4af37] transition-colors duration-300">
        <AnimatePresence mode="wait">
          {showUpArrow ? (
            <motion.div
              key="up"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp size={24} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="down"
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowDown size={24} strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ScrollNavigation;
