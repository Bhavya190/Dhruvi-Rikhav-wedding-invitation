import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import leftDoorImg from '../assets/left.png';
import rightDoorImg from '../assets/right.png';
import monogramButtonImg from '../assets/monogram-button.png';

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
      <section className="relative h-[100svh] flex flex-col items-center justify-between text-center px-4 md:px-6 overflow-hidden bg-gradient-to-b from-[#fdf2f8] to-[#f5f3ff]">
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
                className="relative w-[70%] h-full bg-white border-r border-slate-100 overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img src={leftDoorImg} alt="" className="w-full h-full object-cover" />
                </div>
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
                className="relative w-[30%] h-full bg-white border-l border-slate-100 overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img src={rightDoorImg} alt="" className="w-full h-full object-cover" />
                </div>
                {sparkles.slice(20).map((_, i) => (
                  <Sparkle key={i} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
              </motion.div>

              {/* Thicker Gold Rope removed to match new design */}

              {/* Central Gold Monogram Button with Knot Effect */}
              {!isOpen && (
                <div className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative flex flex-col items-center"
                  >
                    <button 
                      onClick={handleOpen}
                      className="group relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95"
                    >
                      {/* Monogram Wreath Button with Multiply Blend and Mask for Dark Seal */}
                      <img 
                        src={monogramButtonImg} 
                        alt="R&D Monogram" 
                        className="w-full h-full object-contain mix-blend-multiply contrast-[1.1] brightness-[1.1]" 
                        style={{ maskImage: 'radial-gradient(circle, black 65%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 100%)' }}
                      />
                    </button>
                    
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
