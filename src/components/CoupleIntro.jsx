import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const CoupleIntro = () => {
  const [hasCongratulated, setHasCongratulated] = useState(() => {
    return localStorage.getItem('wedding_congratulated') === 'true';
  });

  const handleCelebrate = () => {
    if (hasCongratulated) return;
    
    setHasCongratulated(true);
    localStorage.setItem('wedding_congratulated', 'true');

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section className="relative py-20 md:py-40 px-4 md:px-6 text-center overflow-hidden bg-[#fffdf9]">
      {/* Ornate Watercolor Arch Backdrop Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-15 md:opacity-22">
        <img 
          src="https://i.pinimg.com/736x/1d/70/52/1d7052cda2f07b6b573c77a82db555a2.jpg" 
          alt="" 
          className="w-full h-full object-cover object-top scale-105 brightness-105 mix-blend-multiply"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="mb-12 md:mb-20 relative">
          <div className="relative z-10 inline-block">
            <h2 className="font-wedding text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] 2xl:text-[10rem] text-heading-navy relative tracking-tight leading-none">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                {weddingData.bride}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-block mx-3 md:mx-6 text-pink-600"
              >
                &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                {weddingData.groom}
              </motion.span>
            </h2>
          </div>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl text-subtext-blue italic font-light leading-relaxed max-w-4xl mx-auto px-4"
        >
          "Two souls with but a single thought, two hearts that beat as one. 
          Join us as we embark on our greatest adventure yet."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={hasCongratulated ? { y: 0 } : { y: [0, -8, 0] }}
          transition={hasCongratulated ? { duration: 0.5 } : {
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.8, delay: 1.0 },
            y: { duration: 0.8, delay: 1.0, type: "spring" }
          }}
          viewport={{ once: true }}
          className="mt-10 md:mt-16"
        >
          <button
            onClick={handleCelebrate}
            disabled={hasCongratulated}
            className={`group relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 rounded-full font-medium tracking-widest uppercase text-[10px] md:text-sm overflow-hidden transition-all border shadow-lg ${
              hasCongratulated
                ? 'bg-slate-100/80 text-slate-400 border-slate-200/60 cursor-not-allowed shadow-none'
                : 'bg-white text-slate-800 border-pink-100 hover:scale-105 active:scale-95 hover:shadow-2xl'
            }`}
          >
            {!hasCongratulated && (
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-purple-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            <Heart className={`w-4 h-4 md:w-5 md:h-5 relative z-10 text-pink-500 ${hasCongratulated ? 'fill-pink-400 text-pink-400' : 'group-hover:fill-pink-500 animate-pulse'}`} />
            <span className={`relative z-10 font-bold ${
              hasCongratulated
                ? 'text-slate-400/90'
                : 'bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent'
            }`}>
              {hasCongratulated ? 'Thank You' : 'Congratulate the Couple'}
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoupleIntro;
