import React from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const VenueSection = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden bg-[#fffdf9]/50">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/wedding-floral-decor.png" 
          alt="" 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        {/* Soft elegant linear gradient to fade out the top and bottom edges seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf9] via-transparent to-[#fffdf9] opacity-100" />
        {/* Additional radial overlay for a luxury vignetted feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#fffdf9_95%)] opacity-60" />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch mb-8 md:mb-12">
          
          {/* Card 1: Elegant Address & Quote Card (Soft Cream Background) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#fffdfa] to-[#faf6ed] border border-amber-200/50 shadow-md flex flex-col justify-between relative overflow-hidden text-center min-h-[320px] lg:min-h-full"
          >
            {/* Fine double gold borders */}
            <div className="absolute inset-3 border border-amber-500/20 rounded-[1.6rem] md:rounded-[2rem] pointer-events-none" />
            <div className="absolute inset-4.5 border border-amber-500/10 rounded-[1.4rem] md:rounded-[1.8rem] pointer-events-none" />
            
            {/* Header decoration */}
            <div className="mt-2 md:mt-4 relative z-10">
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-amber-700/80 font-bold block mb-1">
                Where Celebrations Unfold
              </span>
              <div className="w-12 h-[1px] bg-amber-500/30 mx-auto my-2" />
            </div>

            {/* Love Quote */}
            <div className="my-6 px-2 md:px-6 relative z-10">
              <p className="font-wedding text-base md:text-xl text-[#6b2129] italic leading-relaxed">
                "Two hearts, one love, one beautiful journey begins. We invite you to share in our joy and celebrate our beginning."
              </p>
            </div>

            {/* Venue Address */}
            <div className="mb-2 md:mb-4 px-2 relative z-10">
              <h3 className="font-wedding text-lg md:text-2xl text-heading-navy font-bold tracking-wide mb-2 leading-tight">
                {weddingData.venue.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                {weddingData.venue.address}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Elegant Interactive Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-2 md:p-3 bg-white/40 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] border border-white/60 shadow-md relative overflow-hidden"
          >
            {/* Map Container */}
            <div className="relative w-full h-[320px] lg:h-full rounded-[1.6rem] md:rounded-[2rem] overflow-hidden shadow-inner border border-white/50">
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

        </div>
        
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
