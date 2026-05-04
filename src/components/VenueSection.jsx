import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Map as MapIcon } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const VenueSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-20 glass-card rounded-[2rem] md:rounded-[3rem] relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-premium-pink/40 blur-3xl -mr-12 -mt-12 rounded-full" />
          
          <MapPin size={32} className="text-pink-300 mx-auto mb-6 md:mb-8 md:scale-150" />
          
          <h2 className="font-wedding text-2xl md:text-5xl text-slate-800 mb-4 md:mb-6 leading-tight">
            The Grand Venue
          </h2>
          
          <div className="mb-8 md:mb-12">
            <h4 className="text-lg md:text-2xl font-semibold text-slate-700 mb-1 md:mb-2">{weddingData.venue.name}</h4>
            <p className="text-slate-500 text-sm md:text-xl max-w-sm mx-auto leading-relaxed italic font-light px-2">
              {weddingData.venue.address}
            </p>
          </div>
          
          <motion.a
            href={weddingData.venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 md:px-12 py-3 md:py-5 rounded-full text-[10px] md:text-sm tracking-[0.2em] uppercase transition-shadow hover:shadow-xl group w-full md:w-auto justify-center"
          >
            <MapIcon size={16} className="group-hover:rotate-12 transition-transform md:scale-125" />
            Locate on Maps
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
