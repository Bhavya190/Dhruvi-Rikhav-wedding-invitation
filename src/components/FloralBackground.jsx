import React from 'react';
import { motion } from 'framer-motion';

const FloralBackground = () => {
  const petals = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + '%',
            y: -100,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: '110vh',
            x: (Math.random() * 100 - 50) + '%',
            rotate: 360,
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear",
          }}
          className="absolute w-8 h-8 rounded-full blur-[1px]"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? '#fdf2f8' : '#f5f3ff'
            } 0%, transparent 70%)`,
          }}
        />
      ))}
      
      {/* Soft atmospheric gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-premium-pink blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-premium-purple blur-[120px]" />
      </div>
    </div>
  );
};

export default FloralBackground;
