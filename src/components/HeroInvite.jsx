import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const Sparkle = ({ style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 5 }}
    className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
    style={style}
  />
);

const HeroInvite = ({ onOpen }) => {
  const [isLaceOpen, setIsLaceOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 10000); // 10 seconds auto-open for mobile accessibility
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (!isLaceOpen) {
      setIsLaceOpen(true);
      setTimeout(() => {
        setIsOpen(true);
        onOpen();
        setTimeout(() => setIsRemoved(true), 3000);
      }, 1000);
    }
  };

  const sparkles = Array.from({ length: 40 });

  return (
    <>
      {/* Inside Invitation Content */}
      <section className="relative min-h-[100svh] flex items-center justify-center text-center px-4 md:px-6 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-wedding text-5xl md:text-8xl text-slate-800 mb-4 md:mb-8 leading-tight"
          >
            {weddingData.bride} & {weddingData.groom}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="text-slate-600 italic text-base md:text-xl max-w-md mx-auto mb-8 md:mb-12 leading-relaxed px-4"
          >
            Together with their families, invite you to celebrate their wedding
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isOpen ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center"
          >
            <div className="px-6 md:px-10 py-2 md:py-4 border-y border-slate-300">
              <p className="text-xs md:text-base tracking-[0.3em] uppercase text-slate-500 font-light">Feb 11, 2027</p>
            </div>
            <div className="text-pink-300 text-xl md:text-3xl font-wedding">&</div>
            <div className="px-6 md:px-10 py-2 md:py-4 border-y border-slate-300">
              <p className="text-xs md:text-base tracking-[0.3em] uppercase text-slate-500 font-light">Feb 12, 2027</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : {}}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-12 md:mt-24 flex flex-col items-center gap-3"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-slate-400">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-pink-200 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Invitation Cover Overlay */}
      <AnimatePresence>
        {!isRemoved && (
          <motion.div 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center perspective-2000 pointer-events-none"
          >
            <div className="relative w-full h-full preserve-3d pointer-events-auto flex">
              {/* Left Door */}
              <motion.div 
                initial={{ rotateY: 0 }}
                animate={isOpen ? { rotateY: -115 } : { rotateY: 0 }}
                transition={{ duration: 2.5, ease: [0.45, 0, 0.55, 1] }}
                style={{ transformOrigin: 'left' }}
                className="relative w-1/2 h-full bg-[#800000] border-r border-red-900/50 shadow-[20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-700 to-red-900 opacity-90" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_30px,rgba(255,255,255,0.03)_31px,transparent_32px)]" />
                {sparkles.slice(0, 20).map((_, i) => (
                  <Sparkle key={i} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
              </motion.div>

              {/* Right Door */}
              <motion.div 
                initial={{ rotateY: 0 }}
                animate={isOpen ? { rotateY: 115 } : { rotateY: 0 }}
                transition={{ duration: 2.5, ease: [0.45, 0, 0.55, 1] }}
                style={{ transformOrigin: 'right' }}
                className="relative w-1/2 h-full bg-[#800000] border-l border-red-900/50 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-700 to-red-950 opacity-90" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_30px,rgba(255,255,255,0.03)_31px,transparent_32px)]" />
                {sparkles.slice(20).map((_, i) => (
                  <Sparkle key={i} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
              </motion.div>

              {/* Thicker Gold Rope */}
              {!isOpen && (
                <div className="absolute inset-0 flex items-center pointer-events-none z-15">
                  {/* Left Rope Half */}
                  <motion.div 
                    initial={{ scaleX: 1, opacity: 1 }}
                    animate={isLaceOpen ? { x: '-100%', opacity: 0 } : { scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
                    className="w-1/2 h-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                    style={{ 
                      background: 'repeating-linear-gradient(45deg, #d4af37, #d4af37 4px, #b8860b 8px)',
                      borderRadius: '0 4px 4px 0'
                    }}
                  />
                  {/* Right Rope Half */}
                  <motion.div 
                    initial={{ scaleX: 1, opacity: 1 }}
                    animate={isLaceOpen ? { x: '100%', opacity: 0 } : { scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
                    className="w-1/2 h-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                    style={{ 
                      background: 'repeating-linear-gradient(45deg, #d4af37, #d4af37 4px, #b8860b 8px)',
                      borderRadius: '4px 0 0 4px'
                    }}
                  />
                </div>
              )}

              {/* Central Gold Monogram Button with Knot Effect */}
              {!isOpen && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Perfect SVG Heart Rope Knot */}
                    <AnimatePresence>
                      {!isLaceOpen && (
                        <motion.div 
                          exit={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 0.8 }}
                          className="absolute inset-0 flex items-center justify-center -z-10"
                        >
                          <motion.svg 
                            viewBox="0 0 100 100" 
                            className="w-32 h-32 md:w-56 md:h-56 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                          >
                            <motion.path
                              d="M 50 35 
                                 C 50 35, 48 15, 25 15
                                 C 5 15, 5 45, 25 60
                                 L 50 85
                                 L 75 60
                                 C 95 45, 95 15, 75 15
                                 C 52 15, 50 35, 50 35"
                              fill="none"
                              stroke="#d4af37"
                              strokeWidth="4"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            {/* Decorative Central Knot */}
                            <circle cx="50" cy="35" r="5" fill="#d4af37" className="shadow-lg" />
                          </motion.svg>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button 
                      onClick={handleOpen}
                      className="group relative w-36 h-36 md:w-64 md:h-64 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
                    >
                      {/* High-Transparency Ivory Glass */}
                      <div className="absolute inset-0 rounded-full border border-white/20 bg-white/25 backdrop-blur-sm shadow-inner" />
                      
                      {/* Custom SVG Monogram Design - Minimalist Style */}
                      <svg viewBox="0 0 100 100" className="relative z-10 w-full h-full p-1">
                        {/* Clear Signature Typography - Perfectly Centered */}
                        <text 
                          x="50" 
                          y="50" 
                          textAnchor="middle" 
                          dominantBaseline="central"
                          className="font-wedding text-[44px] md:text-[56px] fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] select-none"
                        >
                          R&D
                        </text>
                      </svg>

                      {/* Pulse effect */}
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-[-10px] border border-[#d4af37]/20 rounded-full"
                      />
                    </button>
                    
                    <motion.span 
                      animate={isLaceOpen ? { opacity: 0 } : { opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-full mt-4 md:mt-6 text-[#d4af37] text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold drop-shadow-md whitespace-nowrap bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10"
                    >
                      {isLaceOpen ? 'Untying...' : 'Tap to Untie'}
                    </motion.span>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroInvite;
