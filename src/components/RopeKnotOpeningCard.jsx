import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';

// Custom highly realistic shiny pink satin ribbon bow (Responsive)
const RibbonSVG = ({ isOpen }) => (
  <svg 
    viewBox="0 0 160 120" 
    className="w-full h-full drop-shadow-[0_8px_16px_rgba(218,149,153,0.45)] select-none pointer-events-none"
  >
    {/* Left Loop and Tail of Satin Ribbon */}
    <motion.g
      animate={isOpen ? { x: -65, y: -5, rotate: -30, scale: 0.7, opacity: 0 } : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "80px 60px" }}
    >
      {/* Left Loop */}
      <path 
        d="M 80 60 C 50 10, 15 20, 20 55 C 25 80, 55 75, 80 60" 
        fill="url(#satinPink)" 
        stroke="#da9599"
        strokeWidth="1"
      />
      {/* Left Highlight Loop */}
      <path 
        d="M 75 58 C 55 22, 25 28, 28 50 C 30 65, 52 65, 75 58" 
        fill="none" 
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeOpacity="0.45"
      />
      {/* Left Tail */}
      <path 
        d="M 76 62 C 55 90, 35 105, 10 115" 
        fill="none" 
        stroke="url(#satinPink)" 
        strokeWidth="13" 
        strokeLinecap="butt"
      />
      <path 
        d="M 76 62 C 55 90, 35 105, 10 115" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="2" 
        strokeOpacity="0.3"
      />
    </motion.g>

    {/* Right Loop and Tail of Satin Ribbon */}
    <motion.g
      animate={isOpen ? { x: 65, y: -5, rotate: 30, scale: 0.7, opacity: 0 } : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "80px 60px" }}
    >
      {/* Right Loop */}
      <path 
        d="M 80 60 C 110 10, 145 20, 140 55 C 135 80, 105 75, 80 60" 
        fill="url(#satinPink)" 
        stroke="#da9599"
        strokeWidth="1"
      />
      {/* Right Highlight Loop */}
      <path 
        d="M 85 58 C 105 22, 135 28, 132 50 C 130 65, 108 65, 85 58" 
        fill="none" 
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeOpacity="0.45"
      />
      {/* Right Tail */}
      <path 
        d="M 84 62 C 105 90, 125 105, 150 115" 
        fill="none" 
        stroke="url(#satinPink)" 
        strokeWidth="13" 
        strokeLinecap="butt"
      />
      <path 
        d="M 84 62 C 105 90, 125 105, 150 115" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="2" 
        strokeOpacity="0.3"
      />
    </motion.g>

    {/* Central Knot */}
    <motion.g
      animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ transformOrigin: "80px 60px" }}
    >
      {/* Central Knot Loop Wrap */}
      <rect 
        x="71" 
        y="49" 
        width="18" 
        height="22" 
        rx="5" 
        fill="url(#satinPinkKnot)" 
        stroke="#da9599" 
        strokeWidth="1" 
      />
      {/* Soft Knot Highlight */}
      <path d="M 73 53 Q 80 49 87 53" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
    </motion.g>

    {/* Definitions for Gradients */}
    <defs>
      <linearGradient id="satinPink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f7dbe0" />
        <stop offset="45%" stopColor="#e8b2b5" />
        <stop offset="100%" stopColor="#b26d72" />
      </linearGradient>
      <linearGradient id="satinPinkKnot" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fcecf0" />
        <stop offset="40%" stopColor="#e8b2b5" />
        <stop offset="100%" stopColor="#964f54" />
      </linearGradient>
    </defs>
  </svg>
);



// Custom highly realistic royal palace arched dome gate (Left half - Royal Jali lattice)
const LeftGateSVG = () => (
  <svg 
    className="absolute inset-0 w-full h-full pointer-events-none z-15 drop-shadow-[2px_0_5px_rgba(178,109,114,0.15)]"
    viewBox="0 0 100 300"
    preserveAspectRatio="none"
  >
    {/* Rose Gold Gradient definitions */}
    <defs>
      <linearGradient id="roseGoldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f7dbe0" />
        <stop offset="35%" stopColor="#e8b2b5" />
        <stop offset="70%" stopColor="#b26d72" />
        <stop offset="100%" stopColor="#8c484d" />
      </linearGradient>
      
      {/* Solid warm premium cream backing gradient */}
      <linearGradient id="frostedBacking" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffdfa" stopOpacity="1" />
        <stop offset="100%" stopColor="#faf7f2" stopOpacity="1" />
      </linearGradient>
    </defs>

    {/* The Frosted Arched Gate Background Panel (Highly Transparent) */}
    <path 
      d="M 0 300 L 0 50 C 15 25, 60 10, 100 5 L 100 300 Z" 
      fill="url(#frostedBacking)" 
    />

    {/* Outer Arched Frame (Solid Rose Gold Metal) */}
    <path 
      d="M 0 300 L 0 50 C 15 25, 60 10, 100 5 L 100 300 Z" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="3.2" 
    />
    
    {/* Inner Fine Border */}
    <path 
      d="M 4 300 L 4 54 C 18 30, 62 16, 96 11 L 96 300" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="1.2" 
      strokeOpacity="0.8"
    />

    {/* Inner Nested Arched Outline Panel */}
    <path 
      d="M 10 300 L 10 60 C 24 38, 64 26, 94 22 L 94 300" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="0.8" 
      strokeOpacity="0.4" 
    />

    {/* Romantic Luxury Split Heart (Enlarged) - Left Half */}
    {/* Outer Heart Outline */}
    <path 
      d="M 100 245 C 50 230, 15 190, 15 145 C 15 100, 50 70, 100 115" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="2.8" 
      strokeLinecap="round"
      strokeOpacity="0.95"
    />
    {/* Inner Gold Heart Outline with Stitched Dash Look */}
    <path 
      d="M 100 230 C 58 218, 28 182, 28 145 C 28 108, 58 82, 100 120" 
      fill="none" 
      stroke="#d4af37" 
      strokeWidth="1.3" 
      strokeDasharray="2.5 2.5"
      strokeOpacity="0.9"
    />

    {/* Intricate Filigree Vines inside the Left Heart Lobe */}
    <path d="M 50 145 Q 70 120, 90 150" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.75" />
    <path d="M 40 165 Q 60 190, 80 170" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.75" />

    {/* Romantic Floating Sparkles & Accent Beads */}
    <circle cx="12" cy="145" r="1.5" fill="#d4af37" />
    <circle cx="28" cy="92" r="1.2" fill="#d4af37" />
    <circle cx="50" cy="62" r="1.5" fill="#d4af37" />
    <circle cx="78" cy="55" r="1.2" fill="#d4af37" />
    <circle cx="38" cy="235" r="1.5" fill="#d4af37" />

    {/* Elegant corner scrolls */}
    <path d="M 14 78 C 22 70, 30 55, 30 40" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.5" />
    <path d="M 14 222 C 22 230, 30 245, 30 260" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.5" />
  </svg>
);

// Custom highly realistic royal palace arched dome gate (Right half - Royal Jali lattice)
const RightGateSVG = () => (
  <svg 
    className="absolute inset-0 w-full h-full pointer-events-none z-15 drop-shadow-[-2px_0_5px_rgba(178,109,114,0.15)]"
    viewBox="0 0 100 300"
    preserveAspectRatio="none"
  >
    <defs>
      {/* Solid warm premium cream backing gradient */}
      <linearGradient id="frostedBacking" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffdfa" stopOpacity="1" />
        <stop offset="100%" stopColor="#faf7f2" stopOpacity="1" />
      </linearGradient>
    </defs>

    {/* The Frosted Arched Gate Background Panel (Highly Transparent) */}
    <path 
      d="M 100 300 L 100 50 C 85 25, 40 10, 0 5 L 0 300 Z" 
      fill="url(#frostedBacking)" 
    />

    {/* Outer Arched Frame (Solid Rose Gold Metal) */}
    <path 
      d="M 100 300 L 100 50 C 85 25, 40 10, 0 5 L 0 300 Z" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="3.2" 
    />
    
    {/* Inner Fine Border */}
    <path 
      d="M 96 300 L 96 54 C 82 30, 38 16, 4 11 L 4 300" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="1.2" 
      strokeOpacity="0.8"
    />

    {/* Concentric Inner Arched Border */}
    <path 
      d="M 90 300 L 90 60 C 76 38, 36 26, 6 22 L 6 300" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="0.8" 
      strokeOpacity="0.4" 
    />

    {/* Romantic Luxury Split Heart (Enlarged) - Right Half */}
    {/* Outer Heart Outline */}
    <path 
      d="M 0 245 C 50 230, 85 190, 85 145 C 85 100, 50 70, 0 115" 
      fill="none" 
      stroke="url(#roseGoldMetal)" 
      strokeWidth="2.8" 
      strokeLinecap="round"
      strokeOpacity="0.95"
    />
    {/* Inner Gold Heart Outline with Stitched Dash Look */}
    <path 
      d="M 0 230 C 42 218, 72 182, 72 145 C 72 108, 42 82, 0 120" 
      fill="none" 
      stroke="#d4af37" 
      strokeWidth="1.3" 
      strokeDasharray="2.5 2.5"
      strokeOpacity="0.9"
    />

    {/* Intricate Filigree Vines inside the Right Heart Lobe */}
    <path d="M 50 145 Q 30 120, 10 150" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.75" />
    <path d="M 60 165 Q 40 190, 20 170" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.75" />

    {/* Romantic Floating Sparkles & Accent Beads - Mirrored */}
    <circle cx="88" cy="145" r="1.5" fill="#d4af37" />
    <circle cx="72" cy="92" r="1.2" fill="#d4af37" />
    <circle cx="50" cy="62" r="1.5" fill="#d4af37" />
    <circle cx="22" cy="55" r="1.2" fill="#d4af37" />
    <circle cx="62" cy="235" r="1.5" fill="#d4af37" />

    {/* Delicate clean corner scrolls */}
    <path d="M 86 78 C 78 70, 70 55, 70 40" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.5" />
    <path d="M 86 222 C 78 230, 70 245, 70 260" fill="none" stroke="url(#roseGoldMetal)" strokeWidth="0.8" strokeOpacity="0.5" />
  </svg>
);

const SingleEventCard = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Split event name into two words dynamically
  const nameParts = event.name.split(' ');
  const leftText = nameParts[0] || '';
  const rightText = nameParts.slice(1).join(' ') || '';

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="relative w-full h-[220px] sm:h-[255px] md:h-[330px] lg:h-[350px] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] perspective-2000 preserve-3d shadow-lg shadow-slate-900/10">
      
      {/* 1. INTERIOR: Event Details (Rendered Underneath) */}
      <div className="absolute inset-0 w-full h-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#fffdfa] to-[#fbf7ee] p-2.5 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between items-center text-center overflow-hidden border border-amber-200/50 shadow-inner">
        {/* Inner Gold Fine Borders */}
        <div className="absolute inset-1.5 sm:inset-2 md:inset-3 border border-amber-500/20 rounded-[1.2rem] sm:rounded-[1.6rem] md:rounded-[2rem] pointer-events-none" />
        <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-amber-500/10 rounded-[1rem] sm:rounded-[1.4rem] md:rounded-[1.8rem] pointer-events-none" />

        {/* Top Header & Ceremony Name */}
        {event.id !== 6 && (
          <div className="relative z-10 w-full mt-1 sm:mt-2 md:mt-4">
            <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-amber-700/80 font-bold block mb-0.5 sm:mb-1">
              You Are Invited
            </span>
            <h3 className="font-wedding text-sm sm:text-lg md:text-2xl lg:text-3xl text-heading-navy font-bold tracking-wide mb-0.5 sm:mb-1 leading-tight px-1">
              {event.name}
            </h3>
            
            {/* Decorative Gold Flourish - Hidden on tiny mobile screens to save space */}
            <svg className="w-16 sm:w-24 md:w-32 h-3 sm:h-5 md:h-6 mx-auto my-0.5 sm:my-1.5 text-amber-600/60" viewBox="0 0 200 40" fill="none" stroke="currentColor">
              <path d="M20 20 Q50 10 100 20 Q150 30 180 20" strokeWidth="1" strokeLinecap="round" />
              <path d="M100 20 C90 10 90 30 100 20 C110 10 110 30 100 20" strokeWidth="1.5" fill="currentColor" />
              <circle cx="60" cy="18" r="1.5" fill="currentColor" />
              <circle cx="140" cy="22" r="1.5" fill="currentColor" />
            </svg>
          </div>
        )}

        {/* Ceremony Details */}
        {event.id === 6 ? (
          <div className="relative z-10 w-full px-1 max-w-sm flex-1 flex items-center justify-center my-auto">
            <div className="w-full flex justify-center items-center h-36 sm:h-44 md:h-60 lg:h-64 overflow-hidden">
              <img 
                src="/dulha-dulhan-dance.png" 
                alt="Grand Reception Dance" 
                className="max-h-full w-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>
        ) : (
          <div className="relative z-10 space-y-1 sm:space-y-2 md:space-y-3.5 lg:space-y-4 w-full px-1 max-w-sm">
            {/* Date */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-slate-700 justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100">
                <Calendar className="text-pink-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4.5 md:h-4.5" />
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-wide">{event.date}</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-slate-700 justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                <Clock className="text-purple-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4.5 md:h-4.5" />
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-wide">{event.time}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-slate-700 justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100">
                <MapPin className="text-rose-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4.5 md:h-4.5" />
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-wide truncate max-w-[100px] sm:max-w-[160px] md:max-w-[200px]">
                {event.location}
              </span>
            </div>

            {/* Elegant Quote Description */}
            <div className="bg-amber-50/60 border border-amber-100/50 p-1 sm:p-2 md:p-3 rounded-lg sm:rounded-xl md:rounded-2xl">
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 italic leading-relaxed">
                "{event.description}"
              </p>
            </div>
          </div>
        )}

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="relative z-10 mb-0.5 sm:mb-2 px-4 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full border border-amber-600/40 text-amber-800 hover:text-white hover:bg-amber-700/90 hover:border-transparent transition-all duration-300 text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md hover:shadow-lg active:scale-95"
        >
          Close
        </button>
      </div>

      {/* 2. ROYAL PALACE DOME GATES (Swings Open to Reveal) */}
      
      {/* Left Door */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={isOpen ? { rotateY: -125, opacity: 0, pointerEvents: 'none' } : { rotateY: 0, opacity: 1, pointerEvents: 'auto' }}
        transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        style={{ transformOrigin: 'left center' }}
        className="absolute left-0 top-0 w-1/2 h-full z-20 preserve-3d"
      >
        <LeftGateSVG />

        {/* Left half of split title (Rose Gold Letterpress Look) */}
        <div className="absolute top-10 sm:top-14 md:top-24 lg:top-28 right-0.5 sm:right-1 md:right-1.5 lg:right-2 text-right flex flex-col items-end z-20 max-w-[calc(100%-12px)]">
          <span className="font-wedding text-[16px] xs:text-[20px] sm:text-[30px] md:text-[42px] lg:text-[50px] font-extrabold text-[#6b2129] tracking-wide drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)] whitespace-nowrap">
            {leftText}
          </span>
          <div className="w-4 sm:w-6 md:w-8 h-[1px] bg-pink-300/50 mt-1" />
        </div>
        
        {/* Left Ribbon Strap Banner */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[6px] sm:h-[10px] lg:h-[12px] w-[80%] bg-gradient-to-r from-transparent via-[#f5d0d6] to-[#e8b2b5] shadow-sm z-10 opacity-90"
        />
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={isOpen ? { rotateY: 125, opacity: 0, pointerEvents: 'none' } : { rotateY: 0, opacity: 1, pointerEvents: 'auto' }}
        transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        style={{ transformOrigin: 'right center' }}
        className="absolute right-0 top-0 w-1/2 h-full z-20 preserve-3d"
      >
        <RightGateSVG />

        {/* Right half of split title (Rose Gold Letterpress Look) */}
        <div className="absolute top-10 sm:top-14 md:top-24 lg:top-28 left-0.5 sm:left-1 md:left-1.5 lg:left-2 text-left flex flex-col items-start z-20 max-w-[calc(100%-12px)]">
          <span className="font-wedding text-[16px] xs:text-[20px] sm:text-[30px] md:text-[42px] lg:text-[50px] font-extrabold text-[#6b2129] tracking-wide drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)] whitespace-nowrap">
            {rightText}
          </span>
          <div className="w-4 sm:w-6 md:w-8 h-[1px] bg-pink-300/50 mt-1" />
        </div>
        
        {/* Right Ribbon Strap Banner */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] sm:h-[10px] lg:h-[12px] w-[80%] bg-gradient-to-l from-transparent via-[#f5d0d6] to-[#e8b2b5] shadow-sm z-10 opacity-90"
        />
      </motion.div>

      {/* 3. SHINY PINK RIBBON BOW: Floating center lock button */}
      <motion.div
        animate={isOpen
          ? { opacity: 0, pointerEvents: 'none', visibility: 'hidden' }
          : { opacity: 1, pointerEvents: 'auto', visibility: 'visible' }}
        transition={{ duration: 0.4, delay: isOpen ? 0.7 : 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer flex items-center justify-center w-24 h-18 sm:w-32 sm:h-24 md:w-36 md:h-28 lg:w-40 lg:h-30"
        onClick={handleOpen}
      >
        <div className="group relative transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center w-full h-full">
          {/* Soft Pink Glow Halo */}
          <motion.div 
            animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-pink-300/25 rounded-full blur-xl group-hover:bg-pink-300/40 transition-all duration-300 pointer-events-none" 
          />
          
          <RibbonSVG isOpen={isOpen} />
          
          {/* Pulsing action text - absolutely positioned below the centered ribbon bow */}
          <motion.span 
            animate={isOpen ? { scale: 0.5, opacity: 0, y: 15 } : { scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-[-16px] sm:bottom-[-22px] md:bottom-[-26px] lg:bottom-[-30px] bg-[#611e25] text-[#fde4e6] border border-pink-300/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[6px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg animate-pulse whitespace-nowrap z-10 pointer-events-none"
          >
            Untie Ribbon
          </motion.span>
        </div>
      </motion.div>

    </div>
  );
};

const RopeKnotOpeningCard = () => {
  return (
    <section className="relative py-12 md:py-28 px-2 sm:px-4 md:px-8 overflow-hidden bg-[#fffdf9]">
      {/* Background Subtle Sparkles/Floral Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-wedding text-3xl md:text-6.5xl text-heading-navy mb-3 md:mb-4 font-bold"
          >
            The Sacred Ceremonies
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 md:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-3 md:mb-4"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-subtext-blue text-xs md:text-lg italic font-light max-w-xl mx-auto px-4 leading-relaxed"
          >
            Untie the sacred ceremonial knots to open each invitation cover and reveal the timings and venues of our celebrations.
          </motion.p>
        </div>

        {/* Events Grid (2 columns on mobile, 3 columns on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-8 lg:gap-10">
          {weddingData.events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
            >
              <SingleEventCard event={event} />
            </motion.div>
          ))}

          {/* Standalone image removed as it is now inside the Grand Reception card */}
        </div>

      </div>
    </section>
  );
};

export default RopeKnotOpeningCard;
