import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Map as MapIcon } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const VenueSection = () => {
  return (
    <section className="py-24 px-6 bg-white/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 glass-card rounded-[3rem] relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-premium-pink/40 blur-3xl -mr-16 -mt-16 rounded-full" />
          
          <MapPin size={48} className="text-pink-300 mx-auto mb-8" />
          
          <h2 className="font-wedding text-3xl md:text-5xl text-slate-800 mb-6">
            The Grand Venue
          </h2>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-slate-700 mb-2">{weddingData.venue.name}</h4>
            <p className="text-slate-500 max-w-sm mx-auto leading-relaxed italic">
              {weddingData.venue.address}
            </p>
          </div>
          
          <motion.a
            href={weddingData.venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-slate-800 text-white px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase transition-shadow hover:shadow-xl group"
          >
            <MapIcon size={18} className="group-hover:rotate-12 transition-transform" />
            Locate on Maps
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
