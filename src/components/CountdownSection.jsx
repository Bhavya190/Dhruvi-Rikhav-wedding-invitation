import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center p-3 md:p-6 glass-card rounded-2xl md:rounded-3xl border border-white/40 shadow-sm">
    <div className="relative h-10 md:h-20 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block text-2xl md:text-6xl font-wedding text-slate-800"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-[8px] md:text-xs uppercase tracking-[0.2em] text-slate-500 mt-1 md:mt-3 font-medium">{label}</span>
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
    <section className="py-16 md:py-32 px-4 md:px-6 text-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="font-wedding text-xl md:text-4xl text-slate-700 mb-2 md:mb-4">The Countdown Begins</h3>
        <p className="text-slate-500 text-[10px] md:text-base mb-8 md:mb-16 italic font-light">Counting every second until we say "I Do"</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
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
