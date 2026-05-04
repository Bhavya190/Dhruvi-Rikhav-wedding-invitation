import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const RsvpSection = () => {
  const handleWhatsApp = () => {
    const message = `Hi! I would like to RSVP for Dhruvi and Rikhav's wedding.`;
    window.open(`https://wa.me/${weddingData.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 md:py-48 px-4 md:px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Heart size={32} className="text-pink-300 mx-auto mb-6 md:mb-10 fill-pink-50 md:scale-150" />
        
        <h2 className="font-wedding text-3xl md:text-6xl text-slate-800 mb-6 md:mb-12 leading-tight">
          Can't wait to see you there!
        </h2>
        
        <p className="text-slate-600 mb-10 md:mb-16 text-sm md:text-2xl italic font-light px-4 leading-relaxed">
          Your presence will make our celebration truly special. Please let us know if you can join us.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-[10px] md:text-sm tracking-[0.2em] uppercase font-semibold transition-shadow hover:shadow-lg w-full md:w-auto"
          >
            <MessageCircle size={18} className="md:scale-125" />
            RSVP on WhatsApp
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-white border border-pink-100 text-slate-700 px-8 md:px-12 py-4 md:py-6 rounded-full text-[10px] md:text-sm tracking-[0.2em] uppercase font-semibold transition-shadow hover:shadow-md w-full md:w-auto"
          >
            Digital Guestbook
          </motion.button>
        </div>
        
        <div className="mt-24 md:mt-48 opacity-30">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-slate-500">
            Made with Love for Dhruvi & Rikhav
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default RsvpSection;
