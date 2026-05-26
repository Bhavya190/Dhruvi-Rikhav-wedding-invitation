import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Menu, Share2, Camera, Play } from 'lucide-react';
const CoupleIntro = () => {
  return (
    <section className="relative py-20 md:py-40 px-4 md:px-6 text-center overflow-hidden bg-[#fffdf9]">
      {/* Ornate Watercolor Arch Backdrop Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-22 select-none">
        <img 
          src="https://i.pinimg.com/736x/1d/70/52/1d7052cda2f07b6b573c77a82db555a2.jpg" 
          alt="" 
          className="w-full h-full object-cover object-top opacity-85 scale-110 brightness-105"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12 md:mb-20 relative">
          <div className="relative z-10 inline-block">
            {/* <span className="font-wedding text-4xl md:text-8xl text-slate-900 mix-blend-multiply opacity-20 absolute -top-6 md:-top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Forever & Always
            </span> */}
            <h2 className="font-wedding text-4xl md:text-8xl text-heading-navy relative tracking-tight">
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
          className="text-base md:text-3xl text-subtext-blue italic font-light leading-relaxed max-w-2xl mx-auto px-4"
        >
          "Two souls with but a single thought, two hearts that beat as one. 
          Join us as we embark on our greatest adventure yet."
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CoupleIntro;
