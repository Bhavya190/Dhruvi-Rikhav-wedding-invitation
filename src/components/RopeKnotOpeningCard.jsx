import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';

// Custom highly realistic braided golden-red traditional wedding rope bow knot (Responsive)
const KnotSVG = ({ isOpen }) => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] select-none pointer-events-none"
  >
    {/* Left Part (Loop and Tail) - slides left, rotates, and fades out */}
    <motion.g
      animate={isOpen ? { x: -45, y: 5, rotate: -25, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "50px 50px" }}
    >
      {/* Left Outer Loop (Braided Rope) */}
      <path 
        d="M 50 50 C 25 20, 10 30, 10 50 C 10 70, 25 80, 50 50" 
        fill="none" 
        stroke="#d4af37" 
        strokeWidth="6.5" 
        strokeLinecap="round"
      />
      <path 
        d="M 50 50 C 25 20, 10 30, 10 50 C 10 70, 25 80, 50 50" 
        fill="none" 
        stroke="#800020" 
        strokeWidth="4" 
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path 
        d="M 50 50 C 25 20, 10 30, 10 50 C 10 70, 25 80, 50 50" 
        fill="none" 
        stroke="#fef3c7" 
        strokeWidth="1.2" 
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Left Tail (Braided Rope) */}
      <path 
        d="M 46 53 C 38 67, 32 77, 24 91" 
        fill="none" 
        stroke="#d4af37" 
        strokeWidth="5.5" 
        strokeLinecap="round"
      />
      <path 
        d="M 46 53 C 38 67, 32 77, 24 91" 
        fill="none" 
        stroke="#800020" 
        strokeWidth="3.2" 
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <path 
        d="M 46 53 C 38 67, 32 77, 24 91" 
        fill="none" 
        stroke="#fef3c7" 
        strokeWidth="1" 
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </motion.g>

    {/* Right Part (Loop and Tail) - slides right, rotates, and fades out */}
    <motion.g
      animate={isOpen ? { x: 45, y: 5, rotate: 25, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "50px 50px" }}
    >
      {/* Right Outer Loop (Braided Rope) */}
      <path 
        d="M 50 50 C 75 20, 90 30, 90 50 C 90 70, 75 80, 50 50" 
        fill="none" 
        stroke="#d4af37" 
        strokeWidth="6.5" 
        strokeLinecap="round"
      />
      <path 
        d="M 50 50 C 75 20, 90 30, 90 50 C 90 70, 75 80, 50 50" 
        fill="none" 
        stroke="#800020" 
        strokeWidth="4" 
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path 
        d="M 50 50 C 75 20, 90 30, 90 50 C 90 70, 75 80, 50 50" 
        fill="none" 
        stroke="#fef3c7" 
        strokeWidth="1.2" 
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Right Tail (Braided Rope) */}
      <path 
        d="M 54 53 C 62 67, 68 77, 76 91" 
        fill="none" 
        stroke="#d4af37" 
        strokeWidth="5.5" 
        strokeLinecap="round"
      />
      <path 
        d="M 54 53 C 62 67, 68 77, 76 91" 
        fill="none" 
        stroke="#800020" 
        strokeWidth="3.2" 
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <path 
        d="M 54 53 C 62 67, 68 77, 76 91" 
        fill="none" 
        stroke="#fef3c7" 
        strokeWidth="1" 
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </motion.g>

    {/* Center Tie and Medallion - unbinds/shrinks/fades out first */}
    <motion.g
      animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ transformOrigin: "50px 50px" }}
    >
      {/* Center Wrap (The Tie) */}
      <rect 
        x="42" 
        y="38" 
        width="16" 
        height="24" 
        rx="6" 
        fill="#d4af37" 
        stroke="#b8860b" 
        strokeWidth="1" 
      />
      {/* Braided horizontal cord lines on the central tie wrap */}
      <line x1="43" y1="43" x2="57" y2="43" stroke="#800020" strokeWidth="2.5" strokeDasharray="2 2" />
      <line x1="43" y1="50" x2="57" y2="50" stroke="#800020" strokeWidth="2.5" strokeDasharray="2 2" />
      <line x1="43" y1="57" x2="57" y2="57" stroke="#800020" strokeWidth="2.5" strokeDasharray="2 2" />

      {/* Golden Royal Medallion on Center Wrap */}
      <circle cx="50" cy="50" r="7" fill="#d4af37" stroke="#b8860b" strokeWidth="1" />
      <circle cx="50" cy="50" r="4" fill="#800020" />
      <circle cx="50" cy="50" r="1.5" fill="#ffffff" />
    </motion.g>
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

        {/* Ceremony Details */}
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

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="relative z-10 mb-0.5 sm:mb-2 px-4 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full border border-amber-600/40 text-amber-800 hover:text-white hover:bg-amber-700/90 hover:border-transparent transition-all duration-300 text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md hover:shadow-lg active:scale-95"
        >
          Close
        </button>
      </div>

      {/* 2. DOORS & COVER (Swings Open to Reveal) */}
      
      {/* Left Door */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={isOpen ? { rotateY: -125, opacity: 0, pointerEvents: 'none' } : { rotateY: 0, opacity: 1, pointerEvents: 'auto' }}
        transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        style={{ transformOrigin: 'left center' }}
        className="absolute left-0 top-0 w-1/2 h-full z-20 overflow-hidden rounded-l-[1.5rem] sm:rounded-l-[2rem] md:rounded-l-[2.5rem] preserve-3d"
      >
        {/* Door Background & Gold Borders */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-[#631928] to-red-950 shadow-[inset_-6px_0_15px_rgba(0,0,0,0.6)] border-r border-amber-600/30" />
        <div className="absolute inset-2 sm:inset-3 md:inset-4 mr-0 border-t border-b border-l border-amber-400/25 rounded-l-lg sm:rounded-l-xl md:rounded-l-2xl" />
        
        {/* Left half of split title */}
        <div className="absolute top-10 sm:top-14 md:top-24 lg:top-28 right-0 w-full text-right pr-1.5 sm:pr-3 flex flex-col items-end">
          <span className="font-wedding text-sm sm:text-lg md:text-3xl lg:text-4xl font-bold text-yellow-100 tracking-wide drop-shadow-md">
            {leftText}
          </span>
          <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-amber-400/50 mt-1 sm:mt-2" />
        </div>
        
        {/* Left Rope */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[4px] sm:h-[6px] lg:h-[8px] w-[85%] bg-gradient-to-r from-transparent via-amber-400 to-amber-600 rounded-l-full shadow-lg z-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #d4af37, #d4af37 4px, #800020 4px, #800020 8px)' }}
        />
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={isOpen ? { rotateY: 125, opacity: 0, pointerEvents: 'none' } : { rotateY: 0, opacity: 1, pointerEvents: 'auto' }}
        transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        style={{ transformOrigin: 'right center' }}
        className="absolute right-0 top-0 w-1/2 h-full z-20 overflow-hidden rounded-r-[1.5rem] sm:rounded-r-[2rem] md:rounded-r-[2.5rem] preserve-3d"
      >
        {/* Door Background & Gold Borders */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-[#631928] to-red-950 shadow-[inset_6px_0_15px_rgba(0,0,0,0.6)] border-l border-amber-600/30" />
        <div className="absolute inset-2 sm:inset-3 md:inset-4 ml-0 border-t border-b border-r border-amber-400/25 rounded-r-lg sm:rounded-r-xl md:rounded-r-2xl" />
        
        {/* Right half of split title */}
        <div className="absolute top-10 sm:top-14 md:top-24 lg:top-28 left-0 w-full text-left pl-1.5 sm:pl-3 flex flex-col items-start">
          <span className="font-wedding text-sm sm:text-lg md:text-3xl lg:text-4xl font-bold text-yellow-100 tracking-wide drop-shadow-md">
            {rightText}
          </span>
          <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-amber-400/50 mt-1 sm:mt-2" />
        </div>
        
        {/* Right Rope */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[4px] sm:h-[6px] lg:h-[8px] w-[85%] bg-gradient-to-l from-transparent via-amber-400 to-amber-600 rounded-r-full shadow-lg z-10"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #d4af37, #d4af37 4px, #800020 4px, #800020 8px)' }}
        />
      </motion.div>

      {/* 3. ROPE KNOT: Floating Lock button (Sits on top in the center) */}
      <motion.div
        animate={isOpen
          ? { opacity: 0, pointerEvents: 'none', visibility: 'hidden' }
          : { opacity: 1, pointerEvents: 'auto', visibility: 'visible' }}
        transition={{ duration: 0.4, delay: isOpen ? 0.7 : 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        onClick={handleOpen}
      >
        <div className="group relative transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center w-full h-full">
          {/* Animated Glow Halo */}
          <motion.div 
            animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/40 transition-all duration-300 pointer-events-none" 
          />
          
          <KnotSVG isOpen={isOpen} />
          
          {/* Pulsing action text - absolutely positioned below the centered knot */}
          <motion.span 
            animate={isOpen ? { scale: 0.5, opacity: 0, y: 15 } : { scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[48px] sm:top-[64px] md:top-[74px] lg:top-[84px] bg-[#4a0815] text-[#f7e8bd] border border-[#a37a13]/40 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[6px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg animate-pulse whitespace-nowrap z-10 pointer-events-none"
          >
            Untie Knot
          </motion.span>
        </div>
      </motion.div>

    </div>
  );
};

const RopeKnotOpeningCard = () => {
  return (
    <section className="relative py-12 md:py-28 px-2 sm:px-4 md:px-8 overflow-hidden bg-couple-gradient">
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
        </div>

      </div>
    </section>
  );
};

export default RopeKnotOpeningCard;
