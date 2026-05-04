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
      <section className="relative h-[100svh] flex flex-col items-center justify-between text-center px-4 md:px-6 overflow-hidden bg-[#fdfcf0]">
        {/* Boho Watercolor Canopy Banner - Advanced Masked Transition */}
        <div className="absolute -top-1 left-0 w-full h-[36vh] md:h-[46vh] z-0 overflow-hidden"
             style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}>
          <motion.img 
            initial={{ scale: 1.2, opacity: 0, y: -20 }}
            animate={isOpen ? { scale: 1.12, opacity: 1, y: -30 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/boho_wedding_canopy_watercolor_1777878107620.png"
            alt="Boho Canopy"
            className="w-full h-full object-cover object-top opacity-95"
            style={{ marginTop: '-8%' }}
          />
        </div>

        {/* Indian Couple Illustration - Advanced Masked Transition */}
        <div className="absolute -bottom-1 left-0 w-full h-[45vh] md:h-[55vh] z-0 overflow-hidden"
             style={{ maskImage: 'linear-gradient(to top, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }}>
          <motion.img 
            initial={{ y: 50, opacity: 0, scale: 1.2 }}
            animate={isOpen ? { y: 0, opacity: 1, scale: 1.12 } : {}}
            transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
            src="/indian_couple_back_view_boho_1777881225202.png"
            alt="Bride and Groom"
            className="w-full h-full object-cover opacity-95"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>

        {/* Cinematic Atmospheric Layers */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Floating Soft Orbs - synchronized with glowing lanterns */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 40 + '%',
                opacity: 0
              }}
              animate={isOpen ? { 
                y: ['10%', '50%', '10%'],
                opacity: [0.1, 0.3, 0.1]
              } : {}}
              transition={{ 
                duration: 10 + Math.random() * 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#fff4cc] blur-[60px]"
            />
          ))}

          {/* Silk Texture Layer */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                 backgroundImage: 'url("https://www.transparenttextures.com/patterns/silk.png")',
                 backgroundRepeat: 'repeat'
               }} 
          />
        </div>

        {/* Romantic Flower Rain - High-Visibility Realistic Petals */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {isOpen && [...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: -30, 
                left: `${Math.random() * 100}%`,
                opacity: 0,
                rotate: Math.random() * 360,
                scale: Math.random() * 0.4 + 0.6
              }}
              animate={{ 
                top: '100vh',
                left: `${(Math.random() * 30 - 15) + (i * 6)}%`,
                opacity: [0, 1, 1, 0],
                rotate: 720,
              }}
              transition={{ 
                duration: 8 + Math.random() * 12,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear"
              }}
              className="absolute"
            >
              {/* Detailed Realistic Rose Petal Shape */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                <path 
                  d="M12 2C12 2 18 4 20 10C22 16 18 22 12 22C6 22 2 16 4 10C6 4 12 2 12 2Z" 
                  fill={i % 2 === 0 ? "#ff99aa" : "#ffb6c1"} 
                  className="opacity-90"
                />
                <path 
                  d="M12 2C13 5 16 8 18 10" 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth="0.5" 
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Content Container - Positioned to clear the couple's heads */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col justify-start pt-[26vh] md:pt-[34vh] transition-all duration-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="flex flex-col items-center"
          >
            <h2 className="flex flex-col items-center justify-center mb-2 md:mb-4">
              <span className="font-wedding text-6xl md:text-9xl text-[#2c3e50] drop-shadow-sm tracking-tight leading-none">{weddingData.bride}</span>
              <span className="font-wedding text-4xl md:text-6xl text-[#d4af37] py-2">Weds</span>
              <span className="font-wedding text-6xl md:text-9xl text-[#2c3e50] drop-shadow-sm tracking-tight leading-none">{weddingData.groom}</span>
            </h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isOpen ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="w-16 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-3 md:mb-5"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isOpen ? { opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 1 }}
              className="text-slate-500 uppercase tracking-[0.2em] text-[8px] md:text-xs font-medium max-w-xs md:max-w-md mx-auto leading-relaxed px-4"
            >
              Together with their families, invite you to celebrate their wedding
            </motion.p>
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
