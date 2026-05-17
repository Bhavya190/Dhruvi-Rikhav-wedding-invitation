import React from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import leftDoorBg from '../assets/left-door-bg.png';

const VenueSection = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white/10">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={leftDoorBg} 
          alt="" 
          className="w-full h-full object-cover opacity-60 scale-100"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-wedding text-4xl md:text-6xl text-heading-navy mb-8 md:mb-12"
        >
          The Grand Venue
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-2 md:p-4 glass-card rounded-[2rem] md:rounded-[3rem] relative overflow-hidden mb-8 md:mb-12"
        >
          {/* Map Container */}
          <div className="relative w-full aspect-[3/4] md:aspect-[16/9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-inner border border-white/50">
            <iframe
              src={weddingData.venue.mapEmbedLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
              className="grayscale-[0.1] contrast-[1.05]"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href={weddingData.venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 md:px-12 py-3 md:py-5 rounded-full text-[10px] md:text-sm tracking-[0.2em] uppercase transition-shadow hover:shadow-xl group w-full md:w-auto justify-center"
          >
            <MapIcon size={16} className="group-hover:rotate-12 transition-transform md:scale-125" />
            Get Directions
          </motion.a>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-32 text-center">
          <div className="inline-block px-4 py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm">
            <p className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-heading-navy font-medium">
              Made with Love for Dhruvi & Rikhav
            </p>
          </div>
        </div>
    </section>
  );
};

export default VenueSection;
