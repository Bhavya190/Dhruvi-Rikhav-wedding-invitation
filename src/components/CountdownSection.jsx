import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center p-2 md:p-8 relative group">
    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-xl md:rounded-[2rem] border border-white/60 shadow-sm group-hover:shadow-md transition-shadow duration-500" />
    <div className="relative z-10">
      <div className="relative h-8 md:h-24 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-2xl md:text-7xl font-wedding text-heading-navy drop-shadow-sm"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-pink-600 font-bold mt-1 md:mt-4 block">{label}</span>
    </div>
  </div>
);

const CountdownSection = () => {
  const targetDate = new Date('2027-02-11T10:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleCelebrate = () => {
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
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6 text-center overflow-hidden bg-couple-gradient">


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="mb-8 md:mb-16 relative">
          {/* <span className="font-wedding text-4xl md:text-8xl text-slate-900 mix-blend-multiply opacity-10 absolute -top-8 md:-top-16 left-1/2 -translate-x-1/2 whitespace-nowrap select-none">
            Counting the Days
          </span> */}
          <h3 className="font-wedding text-3xl md:text-6xl text-heading-navy relative">The Countdown Begins</h3>
          <p className="text-subtext-blue text-xs md:text-lg mt-3 md:mt-6 italic font-light">Until we start our forever together</p>
        </div>
        
        <div className="grid grid-cols-4 gap-2 md:gap-12 px-1 md:px-0">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-16"
        >
          <button
            onClick={handleCelebrate}
            className="group relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 bg-white text-slate-800 rounded-full font-medium tracking-widest uppercase text-[10px] md:text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-pink-100"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-purple-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Heart className="w-4 h-4 md:w-5 md:h-5 relative z-10 text-pink-500 group-hover:fill-pink-500 animate-pulse" />
            <span className="relative z-10 bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-bold">
              Congratulate the Couple
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
