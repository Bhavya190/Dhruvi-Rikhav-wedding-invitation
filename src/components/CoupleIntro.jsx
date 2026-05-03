import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const CoupleIntro = () => {
  return (
    <section className="py-32 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-200 to-transparent absolute top-1/2"
          />
          <div className="relative z-10 bg-premium-gradient px-8 inline-block">
            <span className="font-wedding text-5xl md:text-8xl text-slate-800 mix-blend-multiply opacity-20 absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Forever & Always
            </span>
            <h2 className="font-wedding text-4xl md:text-7xl text-slate-800 relative">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
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
                className="inline-block mx-4 text-pink-400"
              >
                &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
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
          className="text-lg md:text-2xl text-slate-600 italic font-light leading-relaxed max-w-2xl mx-auto"
        >
          "Two souls with but a single thought, two hearts that beat as one. 
          Join us as we embark on our greatest adventure yet."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <div className="w-12 h-12 border border-pink-200 rounded-full flex items-center justify-center mx-auto">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-pink-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoupleIntro;
