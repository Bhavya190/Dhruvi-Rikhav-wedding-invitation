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
      <section className="relative h-[100svh] flex flex-col items-center justify-between text-center overflow-hidden bg-[#faf6f0]">
        
        {/* Layer 1: Base Background */}
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/base_background.png"
          alt="Base Background"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        />

        {/* Layer 2: Top Floral Frame */}
        <motion.img
          initial={{ opacity: 0, y: -60 }}
          whileInView={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          src="/floral_frame.png"
          alt="Floral Frame"
          className="absolute -top-[2%] -left-[1%] w-[102%] h-[27vh] sm:h-[30vh] md:h-[34vh] lg:h-auto object-cover object-top z-10 pointer-events-none mix-blend-multiply select-none"
        />

        {/* Layer 3: Peacocks & Architecture - Flanked Left & Right */}
        <motion.img
          initial={{ opacity: 0, x: -50, y: 20, scale: 0.95 }}
          whileInView={isOpen ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: -50, y: 20, scale: 0.95 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
          src="/peacock_side.png"
          alt="Left Peacock"
          className="absolute bottom-0 left-[-10%] sm:left-[-8%] md:left-[-5%] lg:left-[-3%] w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] object-contain object-bottom z-20 pointer-events-none mix-blend-multiply select-none scale-x-[-1]"
        />

        <motion.img
          initial={{ opacity: 0, x: 50, y: 20, scale: 0.95 }}
          whileInView={isOpen ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: 50, y: 20, scale: 0.95 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
          src="/peacock_side.png"
          alt="Right Peacock"
          className="absolute bottom-0 right-[-10%] sm:right-[-8%] md:right-[-5%] lg:right-[-3%] w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] object-contain object-bottom z-20 pointer-events-none mix-blend-multiply select-none"
        />

        {/* Layer 4: The Couple */}
        <motion.img
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          whileInView={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.92 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          src="/wedding_couple.png"
          alt="Wedding Couple"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[42vh] sm:h-[46vh] md:h-[52vh] lg:h-[58vh] object-contain object-bottom z-30 pointer-events-auto mix-blend-multiply select-none"
        />

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

        {/* Content Container (Typography & Names) */}
        <div className="absolute top-[18vh] sm:top-[20vh] md:top-[22vh] lg:top-[25vh] left-0 w-full z-40 flex flex-col items-center justify-start pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            whileInView={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.95 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ delay: 0.9, duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center pointer-events-auto"
          >
            <h2 className="flex flex-col items-center justify-center mb-2 md:mb-5">
              <span className="font-wedding text-[clamp(3.2rem,min(8vh,14vw),7.5rem)] text-heading-navy drop-shadow-sm tracking-tight leading-none">{weddingData.bride}</span>
              <span className="font-wedding text-[clamp(2rem,min(4.5vh,7vw),3.5rem)] text-[#d4af37] py-2">Weds</span>
              <span className="font-wedding text-[clamp(3.2rem,min(8vh,14vw),7.5rem)] text-heading-navy drop-shadow-sm tracking-tight leading-none">{weddingData.groom}</span>
            </h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={isOpen ? { scaleX: 1 } : { scaleX: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.3, duration: 1.5 }}
              className="w-20 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-3 md:mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={isOpen ? { opacity: 1 } : {}}
              viewport={{ once: false }}
              transition={{ delay: 1.8, duration: 1 }}
              className="text-subtext-blue uppercase tracking-[0.2em] text-[clamp(10px,min(1.4vh,3vw),14px)] font-semibold max-w-[85vw] md:max-w-lg mx-auto leading-relaxed px-2 text-center"
            >
              Together with their families, invite you to celebrate their wedding
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={isOpen ? { opacity: 1 } : {}}
          viewport={{ once: false }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center text-[#ff0f37ff] pointer-events-auto"
        >
          <span className="uppercase tracking-widest text-[9px] md:text-xs font-semibold mb-1 opacity-90">Scroll to see more</span>
          <div className="animate-bounce mt-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </motion.div>
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
                    <p className="mt-2 text-red-600 text-xl md:text-2xl animate-pulse tracking-wide" style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                      Click to open
                    </p>
                    
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
