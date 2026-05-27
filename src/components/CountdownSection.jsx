import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DigitCard = ({ digit }) => (
  <div className="relative w-[clamp(1.8rem,7.5vw,4.8rem)] h-[clamp(2.7rem,11vw,7.2rem)] bg-[#fdfaf2] border-[1.5px] sm:border-2 border-slate-700/90 rounded-[4px] sm:rounded-xl shadow-[0_2.5px_0_#4a3e3d] sm:shadow-[0_5px_0_#4a3e3d] flex items-center justify-center overflow-hidden">
    {/* Center Horizontal Split Line */}
    <div className="absolute inset-x-0 top-1/2 h-[clamp(1px,0.2vw,2px)] bg-slate-700/85 z-20" />
    
    {/* Left Hinge */}
    <div className="absolute left-[-1px] top-1/2 -translate-y-1/2 w-[clamp(2px,0.8vw,6px)] h-[clamp(4px,1.6vw,12px)] bg-slate-800 border border-slate-700 rounded-r-sm z-30" />
    {/* Right Hinge */}
    <div className="absolute right-[-1px] top-1/2 -translate-y-1/2 w-[clamp(2px,0.8vw,6px)] h-[clamp(4px,1.6vw,12px)] bg-slate-800 border border-slate-700 rounded-l-sm z-30" />

    {/* The Digit Text with Flip Animation */}
    <AnimatePresence mode="popLayout">
      <motion.span
        key={digit}
        initial={{ rotateX: 90, opacity: 0.3 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0.3 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="font-sans font-extrabold text-[clamp(1.4rem,6vw,4.2rem)] md:text-[5.2rem] leading-none text-slate-800 select-none tracking-tighter"
      >
        {digit}
      </motion.span>
    </AnimatePresence>
  </div>
);

const TimeUnit = ({ value, label }) => {
  const digits = String(value).padStart(2, '0').split('');
  return (
    <div className="flex flex-col items-center gap-[clamp(4px,0.8vw,12px)] select-none">
      {/* Pair/Group of Digit Cards */}
      <div className="flex gap-[clamp(2px,0.4vw,6px)]">
        {digits.map((digit, index) => (
          <DigitCard key={index} digit={digit} />
        ))}
      </div>
      {/* Label under card */}
      <span className="text-[clamp(8px,2vw,14px)] uppercase tracking-[0.1em] sm:tracking-[0.25em] text-[#d4af37] font-bold mt-0.5 sm:mt-1">
        {label}
      </span>
    </div>
  );
};

const CountdownSection = () => {
  const targetDate = new Date('2027-02-12T13:00:00').getTime();
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
    <section className="relative py-6 md:py-12 px-4 md:px-6 text-center overflow-hidden bg-[#fffdf9]">


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="mb-5 md:mb-10 relative">
          <h3 className="font-wedding text-2xl md:text-5xl text-heading-navy relative">The Countdown Begins</h3>
          <p className="text-subtext-blue text-xs md:text-lg mt-2 md:mt-4 italic font-light">Until we start our forever together</p>
        </div>
        
        <div className="flex flex-nowrap items-center justify-center gap-[clamp(4px,1.5vw,24px)] px-1 md:px-0">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="flex flex-col gap-[clamp(4px,1.2vw,14px)] mb-[clamp(12px,3vw,32px)] shrink-0">
            <div className="w-[clamp(4px,1.2vw,12px)] h-[clamp(4px,1.2vw,12px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
            <div className="w-[clamp(4px,1.2vw,12px)] h-[clamp(4px,1.2vw,12px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
          </div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="flex flex-col gap-[clamp(4px,1.2vw,14px)] mb-[clamp(12px,3vw,32px)] shrink-0">
            <div className="w-[clamp(4px,1.2vw,12px)] h-[clamp(4px,1.2vw,12px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
            <div className="w-[clamp(4px,1.2vw,12px)] h-[clamp(4px,1.2vw,12px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
          </div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="flex flex-col gap-[clamp(4px,1.2vw,14px)] mb-[clamp(12px,3vw,32px)] shrink-0">
            <div className="w-[clamp(4px,1.2vw,12px)] h-[clamp(4px,1.2vw,12px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
            <div className="w-[clamp(4px,1.2vw,12px)] h-[clamp(4px,1.2vw,12px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
          </div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
