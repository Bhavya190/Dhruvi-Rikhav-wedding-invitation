import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Heart } from 'lucide-react';

const StoryTimeline = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-wedding text-3xl md:text-6xl text-slate-800 mb-4"
          >
            Our Love Story
          </motion.h2>
          <div className="h-[2px] w-16 md:w-24 bg-pink-200 mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-pink-200 to-transparent" />

          <div className="space-y-12 md:space-y-32">
            {weddingData.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-row md:items-center gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pt-1 md:pt-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left pl-12 md:pl-0`}>
                  <span className="text-pink-400 font-wedding text-lg md:text-3xl mb-1 md:mb-3 block">{item.year}</span>
                  <h4 className="text-base md:text-2xl text-slate-800 font-semibold mb-1 md:mb-2">{item.event}</h4>
                  <p className="text-slate-500 text-xs md:text-lg italic leading-relaxed font-light">{item.description}</p>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:relative md:left-auto md:translate-x-0 z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-pink-100 shadow-sm flex items-center justify-center">
                    <Heart size={16} className="text-pink-300 fill-pink-50 md:scale-125" />
                  </div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
