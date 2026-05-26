import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import monogramButtonImg from '../assets/monogram-button.png';

/* Botanical vine & leaf branch pattern for the envelope flap */
const DamaskPattern = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    className="absolute inset-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      {/* Organic vine pattern tile */}
      <pattern id="botanical-vine" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
        {/* Main vine branch 1 */}
        <path
          d="M 10 90 C 40 85, 60 50, 90 40 C 120 30, 140 60, 170 45"
          fill="none"
          stroke="rgba(195,160,80,0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Sub-branches & leaves for vine 1 */}
        {/* Leaf 1 */}
        <path d="M 40 78 C 35 68, 48 60, 48 60 C 48 60, 52 70, 40 78 Z" fill="rgba(195,160,80,0.22)" stroke="rgba(180,145,65,0.4)" strokeWidth="0.6" />
        {/* Leaf 2 */}
        <path d="M 70 56 C 68 45, 80 40, 80 40 C 80 40, 82 50, 70 56 Z" fill="rgba(195,160,80,0.22)" stroke="rgba(180,145,65,0.4)" strokeWidth="0.6" />
        {/* Leaf 3 */}
        <path d="M 105 38 C 110 28, 122 30, 122 30 C 122 30, 120 40, 105 38 Z" fill="rgba(195,160,80,0.22)" stroke="rgba(180,145,65,0.4)" strokeWidth="0.6" />
        {/* Leaf 4 */}
        <path d="M 135 48 C 145 42, 148 54, 148 54 C 148 54, 138 56, 135 48 Z" fill="rgba(195,160,80,0.22)" stroke="rgba(180,145,65,0.4)" strokeWidth="0.6" />

        {/* Main vine branch 2 (diagonal flowing opposite) */}
        <path
          d="M 10 10 C 50 30, 80 80, 90 120 C 100 160, 150 150, 170 170"
          fill="none"
          stroke="rgba(195,160,80,0.35)"
          strokeWidth="1.0"
          strokeLinecap="round"
        />
        {/* Leaves for vine 2 */}
        <path d="M 32 21 C 25 15, 35 8, 35 8 C 35 8, 40 15, 32 21 Z" fill="rgba(195,160,80,0.2)" stroke="rgba(180,145,65,0.35)" strokeWidth="0.5" />
        <path d="M 62 50 C 55 45, 62 35, 62 35 C 62 35, 70 42, 62 50 Z" fill="rgba(195,160,80,0.2)" stroke="rgba(180,145,65,0.35)" strokeWidth="0.5" />
        <path d="M 85 92 C 82 82, 95 80, 95 80 C 95 80, 95 90, 85 92 Z" fill="rgba(195,160,80,0.2)" stroke="rgba(180,145,65,0.35)" strokeWidth="0.5" />
        <path d="M 118 138 C 122 128, 134 132, 134 132 C 134 132, 128 140, 118 138 Z" fill="rgba(195,160,80,0.2)" stroke="rgba(180,145,65,0.35)" strokeWidth="0.5" />

        {/* Extra small delicate sprigs/buds */}
        <circle cx="95" cy="20" r="1.5" fill="rgba(195,160,80,0.4)" />
        <path d="M 90 25 L 95 20 L 100 28" fill="none" stroke="rgba(195,160,80,0.35)" strokeWidth="0.6" />
        <circle cx="150" cy="100" r="1.5" fill="rgba(195,160,80,0.4)" />
        <path d="M 140 105 L 150 100 L 145 92" fill="none" stroke="rgba(195,160,80,0.35)" strokeWidth="0.6" />
        
        {/* Branch 3 - flowing up from bottom left */}
        <path
          d="M 10 170 C 30 150, 70 140, 100 155 C 130 170, 150 130, 170 110"
          fill="none"
          stroke="rgba(195,160,80,0.35)"
          strokeWidth="1.0"
          strokeLinecap="round"
        />
        <path d="M 45 152 C 40 142, 52 138, 52 138 C 52 138, 55 148, 45 152 Z" fill="rgba(195,160,80,0.2)" stroke="rgba(180,145,65,0.35)" strokeWidth="0.5" />
        <path d="M 125 155 C 130 145, 142 148, 142 148 C 142 148, 140 158, 125 155 Z" fill="rgba(195,160,80,0.2)" stroke="rgba(180,145,65,0.35)" strokeWidth="0.5" />
      </pattern>

      {/* Rich Premium Champagne-Cream gradient base */}
      <linearGradient id="flapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fdfaf2" />
        <stop offset="50%" stopColor="#f5ebd5" />
        <stop offset="100%" stopColor="#eadecc" />
      </linearGradient>

      {/* Subtle radial highlight in center */}
      <radialGradient id="flapHighlight" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="rgba(255,251,240,0.5)" />
        <stop offset="100%" stopColor="rgba(255,251,240,0)" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#flapGradient)" />
    <rect width="100%" height="100%" fill="url(#botanical-vine)" />
    <rect width="100%" height="100%" fill="url(#botanical-vine)" x="90" y="90" />
    <rect width="100%" height="100%" fill="url(#flapHighlight)" />
  </svg>
);

/* Floating sparkle particle */
const Sparkle = ({ style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 5 }}
    className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
    style={{ ...style, filter: 'blur(0.5px)' }}
  />
);

const HeroInvite = ({ onOpen }) => {
  const [sealBroken, setSealBroken] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 10000); // 10 seconds auto-open for mobile accessibility
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (!sealBroken) {
      // Step 1: Break the seal
      setSealBroken(true);
      
      // Step 2: Open the flap after seal animates out
      setTimeout(() => {
        setFlapOpen(true);
        setIsOpen(true);
        onOpen();
      }, 600);
      
      // Step 3: Remove overlay after animations complete
      setTimeout(() => setIsRemoved(true), 3000);
    }
  };

  const sparkles = Array.from({ length: 24 });

  return (
    <>
      {/* Inside Invitation Content */}
      <section className="relative h-[100svh] flex flex-col items-center justify-between text-center overflow-hidden bg-[#fffdf9]">
        
        {/* Layer 1: Palace Backdrop Background */}
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 3.0, delay: 0.1, ease: "easeOut" }}
          src="/wedding-palace-background.png"
          alt="Palace Background"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        />

        {/* Layer 2: Floral Decoration Overlay */}
        <motion.img
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={isOpen ? { opacity: 0.95, scale: 1 } : { opacity: 0, scale: 1.02 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2.6, delay: 1.0, ease: "easeOut" }}
          src="/wedding-floral-decor.png"
          alt="Floral Decoration"
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none mix-blend-multiply select-none"
        />

        {/* Layer 3: Couple Standing Overlay */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={isOpen ? { opacity: 0.95, y: 0 } : { opacity: 0, y: 40 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2.6, delay: 3.0, ease: "easeOut" }}
          src="/wedding-couple-render.png"
          alt="Wedding Couple"
          className="absolute bottom-[-5px] right-[-4vw] sm:right-[-2vw] w-auto h-[35vh] sm:h-[41vh] md:h-[47vh] lg:h-[53vh] object-contain object-bottom z-30 pointer-events-none mix-blend-multiply select-none"
        />

        {/* Flower Dropping Effect — Above background and flowers (z-20) */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {isOpen && [...Array(22)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: -30, 
                left: `${Math.random() * 100}%`,
                opacity: 0,
                rotate: Math.random() * 360,
                scale: Math.random() * 0.4 + 0.5
              }}
              animate={{ 
                top: '100vh',
                left: `${(Math.random() * 30 - 15) + (i * 4.5)}%`,
                opacity: [0, 1, 1, 0],
                rotate: 720,
              }}
              transition={{ 
                duration: 7 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear"
              }}
              className="absolute"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
                <path 
                  d="M12 2C12 2 18 4 20 10C22 16 18 22 12 22C6 22 2 16 4 10C6 4 12 2 12 2Z" 
                  fill={i % 2 === 0 ? "#ffd9e2" : "#f1e3ff"} 
                  className="opacity-80"
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
        {/* Content Container (Typography & Names) — Centered vertically and horizontally in the middle of the backdrop */}
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            whileInView={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.95 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ delay: 2.0, duration: 2.4, ease: "easeOut" }}
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

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          ENVELOPE COVER OVERLAY â€” NEW DESIGN
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnimatePresence>
        {!isRemoved && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] pointer-events-none"
          >
            <div className="relative w-full h-full pointer-events-auto envelope-container">

              {/* â”€â”€ ENVELOPE BODY (Bottom portion with couple image) â”€â”€ */}
              {/* ── ENVELOPE BODY (Bottom portion with couple image) ── */}
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={flapOpen ? { y: '100%', opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to bottom, #fffefb, #fdfaf2, #faf6ec)' }}
              >
                {/* Paper texture overlay */}
                <div className="absolute inset-0 paper-texture" />
                
                {/* Decorative border lines */}
                <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#d4af37]/20 rounded-sm pointer-events-none" />
                <div className="absolute inset-5 sm:inset-7 md:inset-9 border border-[#d4af37]/10 rounded-sm pointer-events-none" />

                {/* Proposal image — faded at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[55%] flex items-end justify-center overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/23/90/f9/2390f9764a3394688f9efc5307b49bd5.jpg"
                    alt="Proposal Scene"
                    className="w-full h-full object-cover select-none"
                    style={{
                      opacity: 0.46,
                      filter: 'sepia(0.12) saturate(1.0) contrast(0.98)',
                      maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.65) 15%, rgba(0,0,0,0.92) 75%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.65) 15%, rgba(0,0,0,0.92) 75%, transparent 100%)',
                    }}
                  />
                </div>

                {/* Small ornamental element at bottom center */}
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-30">
                  <div className="w-12 sm:w-16 h-[0.5px] bg-gradient-to-r from-transparent to-[#b49b50]" />
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="#b49b50" opacity="0.6"/>
                  </svg>
                  <div className="w-12 sm:w-16 h-[0.5px] bg-gradient-to-l from-transparent to-[#b49b50]" />
                </div>

                {/* Sparkle particles on envelope body */}
                {sparkles.slice(0, 10).map((_, i) => (
                  <Sparkle key={`body-${i}`} style={{ top: `${20 + Math.random() * 60}%`, left: `${10 + Math.random() * 80}%` }} />
                ))}
              </motion.div>

              {/* â”€â”€ ENVELOPE TOP FLAP (Triangular with damask pattern) â”€â”€ */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={flapOpen ? { rotateX: -180 } : { rotateX: 0 }}
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 left-0 w-full z-20 envelope-flap"
                style={{
                  height: '42%',
                  clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
                  WebkitClipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
                }}
              >
                {/* Damask pattern background */}
                <DamaskPattern />

                {/* Golden edge highlight along the triangle bottom edges */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line x1="0" y1="35" x2="50" y2="100" stroke="rgba(212,175,55,0.3)" strokeWidth="0.3" />
                  <line x1="100" y1="35" x2="50" y2="100" stroke="rgba(212,175,55,0.3)" strokeWidth="0.3" />
                  <line x1="0" y1="35" x2="100" y2="35" stroke="rgba(212,175,55,0.15)" strokeWidth="0.15" />
                </svg>

                {/* Sparkles on flap */}
                {sparkles.slice(10, 20).map((_, i) => (
                  <Sparkle key={`flap-${i}`} style={{ top: `${Math.random() * 50}%`, left: `${20 + Math.random() * 60}%` }} />
                ))}

                {/* Subtle shadow at flap fold */}
                <div
                  className="absolute bottom-0 left-0 w-full h-8 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.08), transparent)',
                    clipPath: 'polygon(0 35%, 100% 35%, 50% 100%)',
                    WebkitClipPath: 'polygon(0 35%, 100% 35%, 50% 100%)',
                  }}
                />
              </motion.div>

              {/* â”€â”€ WAX SEAL (R&D Monogram â€” centered at flap junction) â”€â”€ */}
              <AnimatePresence>
                {!sealBroken && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ 
                      scale: 1.3, 
                      opacity: 0,
                      rotate: 15,
                    }}
                    transition={{ 
                      enter: { duration: 0.6, ease: 'easeOut' },
                      exit: { duration: 0.5, ease: 'easeIn' }
                    }}
                    className="absolute z-30 seal-float"
                    style={{
                      top: '42%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <button
                      onClick={handleOpen}
                      className="group relative flex flex-col items-center cursor-pointer"
                      aria-label="Open invitation"
                    >
                      {/* Glow ring behind seal */}
                      <div 
                        className="absolute inset-0 rounded-full seal-shimmer"
                        style={{
                          width: '130%',
                          height: '130%',
                          top: '-15%',
                          left: '-15%',
                          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                        }}
                      />
                      
                      {/* The seal image */}
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                        <img
                          src={monogramButtonImg}
                          alt="R&D Monogram Seal"
                          className="w-full h-full object-contain drop-shadow-lg"
                          style={{
                            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
                          }}
                        />
                      </div>

                      {/* "Click to open" text below seal */}
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-3 sm:mt-4 text-[#8b6914] text-base sm:text-lg md:text-xl tracking-wide animate-pulse"
                        style={{ 
                          fontFamily: "'Great Vibes', cursive",
                          textShadow: '0 1px 3px rgba(255,255,255,0.9)',
                        }}
                      >
                        Click to open
                      </motion.p>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* â”€â”€ DECORATIVE SIDE EDGES â”€â”€ */}
              {/* Left edge shadow */}
              <div 
                className="absolute left-0 top-0 w-2 h-full z-[15] pointer-events-none"
                style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.06), transparent)' }}
              />
              {/* Right edge shadow */}
              <div 
                className="absolute right-0 top-0 w-2 h-full z-[15] pointer-events-none"
                style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.06), transparent)' }}
              />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroInvite;

