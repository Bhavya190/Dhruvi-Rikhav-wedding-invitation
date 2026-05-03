import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Heart } from 'lucide-react';

const StoryTimeline = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-wedding text-3xl md:text-5xl text-slate-800 mb-4"
          >
            Our Love Story
          </motion.h2>
          <div className="h-[2px] w-24 bg-pink-200 mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-pink-200 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {weddingData.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-pink-400 font-wedding text-2xl mb-2 block">{item.year}</span>
                  <h4 className="text-xl text-slate-800 font-semibold mb-2">{item.event}</h4>
                  <p className="text-slate-500 italic max-w-sm mx-auto md:mx-0 inline-block">{item.description}</p>
                </div>

                {/* Center Icon */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white border border-pink-100 shadow-sm flex items-center justify-center">
                    <Heart size={16} className="text-pink-300 fill-pink-50" />
                  </div>
                </div>

                {/* Spacer for alignment */}
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
