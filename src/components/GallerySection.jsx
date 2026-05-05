import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const GallerySection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-wedding text-3xl md:text-5xl text-heading-navy mb-4"
        >
          Cherished Moments
        </motion.h2>
        <p className="text-subtext-blue italic max-w-lg mx-auto">
          A glimpse into our beautiful journey together through these frozen moments of time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {weddingData.gallery.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-3xl overflow-hidden shadow-sm group ${
              index % 4 === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <img 
              src={image.url} 
              alt={image.caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span className="text-white font-wedding text-2xl tracking-wide">
                {image.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
