import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import floralDecoration from '../assets/floral-decoration.png';

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center p-4 md:p-8 relative group">
    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-2xl md:rounded-[2rem] border border-white/60 shadow-sm group-hover:shadow-md transition-shadow duration-500" />
    <div className="relative z-10">
      <div className="relative h-12 md:h-24 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-4xl md:text-7xl font-wedding text-slate-900 drop-shadow-sm"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-pink-600 font-bold mt-2 md:mt-4 block">{label}</span>
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

  return (
    <section className="relative py-24 md:py-48 px-4 md:px-6 text-center overflow-hidden bg-couple-gradient">
      {/* Floral Decorations Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply select-none">
        <img 
          src={floralDecoration} 
          alt="" 
          className="w-full h-full object-cover opacity-90 scale-110 brightness-105"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="mb-12 md:mb-24 relative">
          <span className="font-wedding text-4xl md:text-8xl text-slate-900 mix-blend-multiply opacity-10 absolute -top-8 md:-top-16 left-1/2 -translate-x-1/2 whitespace-nowrap select-none">
            Counting the Days
          </span>
          <h3 className="font-wedding text-3xl md:text-6xl text-slate-900 relative">The Countdown Begins</h3>
          <p className="text-slate-600 text-xs md:text-lg mt-3 md:mt-6 italic font-light">Until we start our forever together</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 px-2 md:px-0">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
