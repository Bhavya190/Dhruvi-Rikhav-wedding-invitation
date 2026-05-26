import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DigitCard = ({ digit }) => (
  <div className="relative w-[clamp(1.5rem,7.5vw,5rem)] h-[clamp(2.25rem,11.25vw,7.5rem)] bg-[#fdfaf2] border-[1px] sm:border-2 border-slate-700/90 rounded-[3px] sm:rounded-lg shadow-[0_2px_0_#4a3e3d] sm:shadow-[0_5px_0_#4a3e3d] flex items-center justify-center overflow-hidden">
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
        className="font-sans font-extrabold text-[clamp(1.2rem,5.5vw,4.5rem)] md:text-[5.5rem] leading-none text-slate-800 select-none tracking-tighter"
      >
        {digit}
      </motion.span>
    </AnimatePresence>
  </div>
);

const TimeUnit = ({ value, label }) => {
  const digits = String(value).padStart(2, '0').split('');
  return (
    <div className="flex flex-col items-center gap-[clamp(4px,1vw,16px)] select-none">
      {/* Pair of Digit Cards */}
      <div className="flex gap-[clamp(2px,0.5vw,8px)]">
        <DigitCard digit={digits[0]} />
        <DigitCard digit={digits[1]} />
      </div>
      {/* Label under card */}
      <span className="text-[clamp(7px,1.8vw,12px)] uppercase tracking-[0.1em] sm:tracking-[0.25em] text-[#d4af37] font-bold mt-0.5 sm:mt-1">
        {label}
      </span>
    </div>
  );
};

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
    <section className="relative py-12 md:py-24 px-4 md:px-6 text-center overflow-hidden bg-[#fffdf9]">


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
        
        <div className="flex flex-nowrap items-center justify-center gap-[clamp(4px,1.5vw,32px)] px-1 md:px-0">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="flex flex-col gap-[clamp(3px,1vw,12px)] mb-[clamp(8px,2vw,24px)] shrink-0">
            <div className="w-[clamp(4px,1.2vw,16px)] h-[clamp(4px,1.2vw,16px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
            <div className="w-[clamp(4px,1.2vw,16px)] h-[clamp(4px,1.2vw,16px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
          </div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="flex flex-col gap-[clamp(3px,1vw,12px)] mb-[clamp(8px,2vw,24px)] shrink-0">
            <div className="w-[clamp(4px,1.2vw,16px)] h-[clamp(4px,1.2vw,16px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
            <div className="w-[clamp(4px,1.2vw,16px)] h-[clamp(4px,1.2vw,16px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
          </div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="flex flex-col gap-[clamp(3px,1vw,12px)] mb-[clamp(8px,2vw,24px)] shrink-0">
            <div className="w-[clamp(4px,1.2vw,16px)] h-[clamp(4px,1.2vw,16px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
            <div className="w-[clamp(4px,1.2vw,16px)] h-[clamp(4px,1.2vw,16px)] bg-slate-700/90 rounded-full shadow-[0_1px_0_#4a3e3d] sm:shadow-[0_2px_0_#4a3e3d]" />
          </div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
