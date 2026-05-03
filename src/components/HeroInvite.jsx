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
    }, 7000); // Increased time to allow for the two-stage animation
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (!isLaceOpen) {
      setIsLaceOpen(true);
      // Stage 2: Open doors after lace animation
      setTimeout(() => {
        setIsOpen(true);
        onOpen();
        // Stage 3: Remove overlay
        setTimeout(() => setIsRemoved(true), 3000);
      }, 1000);
    }
  };

  const sparkles = Array.from({ length: 40 });

  return (
    <>
      {/* Inside Invitation Content */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-wedding text-5xl md:text-8xl text-slate-800 mb-6"
          >
            {weddingData.bride} & {weddingData.groom}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="text-slate-600 italic text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Together with their families, invite you to celebrate their wedding
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isOpen ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <div className="px-8 py-3 border-y border-slate-300">
              <p className="text-sm md:text-base tracking-[0.3em] uppercase text-slate-500 font-light">February 11, 2027</p>
            </div>
            <div className="text-pink-300 text-2xl font-wedding">&</div>
            <div className="px-8 py-3 border-y border-slate-300">
              <p className="text-sm md:text-base tracking-[0.3em] uppercase text-slate-500 font-light">February 12, 2027</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : {}}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-20 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-16 bg-gradient-to-b from-pink-200 to-transparent"
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
                animate={isOpen ? { rotateY: -110 } : { rotateY: 0 }}
                transition={{ duration: 2.5, ease: [0.45, 0, 0.55, 1] }}
                style={{ transformOrigin: 'left' }}
                className="relative w-1/2 h-full bg-[#800000] border-r border-red-900/50 shadow-[20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-700 to-red-900 opacity-90" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.05)_41px,transparent_42px)]" />
                {sparkles.slice(0, 20).map((_, i) => (
                  <Sparkle key={i} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
              </motion.div>

              {/* Right Door */}
              <motion.div 
                initial={{ rotateY: 0 }}
                animate={isOpen ? { rotateY: 110 } : { rotateY: 0 }}
                transition={{ duration: 2.5, ease: [0.45, 0, 0.55, 1] }}
                style={{ transformOrigin: 'right' }}
                className="relative w-1/2 h-full bg-[#800000] border-l border-red-900/50 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-700 to-red-950 opacity-90" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.05)_41px,transparent_42px)]" />
                {sparkles.slice(20).map((_, i) => (
                  <Sparkle key={i} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
              </motion.div>

              {/* Lace Ribbon (Horizontal band) */}
              {!isOpen && (
                <>
                  <motion.div 
                    initial={{ scaleX: 1, opacity: 1 }}
                    animate={isLaceOpen ? { x: '-100%', opacity: 0 } : { scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-12 z-15 pointer-events-none"
                    style={{ 
                      background: 'linear-gradient(90deg, transparent, #d4af37)',
                      maskImage: 'radial-gradient(circle, transparent 2px, black 1px)',
                      maskSize: '10px 10px'
                    }}
                  />
                  <motion.div 
                    initial={{ scaleX: 1, opacity: 1 }}
                    animate={isLaceOpen ? { x: '100%', opacity: 0 } : { scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-12 z-15 pointer-events-none"
                    style={{ 
                      background: 'linear-gradient(-90deg, transparent, #d4af37)',
                      maskImage: 'radial-gradient(circle, transparent 2px, black 1px)',
                      maskSize: '10px 10px'
                    }}
                  />
                </>
              )}

              {/* Central Gold Monogram Button */}
              {!isOpen && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                >
                  <button 
                    onClick={handleOpen}
                    className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-[#800000]/20 backdrop-blur-sm" />
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="font-wedding text-3xl md:text-5xl text-[#d4af37] drop-shadow-md">R&D</span>
                    </div>
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 border border-[#d4af37] rounded-full"
                    />
                  </button>
                  <motion.span 
                    animate={isLaceOpen ? { opacity: 0 } : { opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#d4af37] text-[10px] md:text-xs tracking-[0.4em] uppercase mt-4 font-light drop-shadow-sm"
                  >
                    {isLaceOpen ? 'Opening...' : 'Open Me'}
                  </motion.span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroInvite;
