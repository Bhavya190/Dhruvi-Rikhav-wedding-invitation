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
    <section className="py-32 px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Heart size={40} className="text-pink-300 mx-auto mb-8 fill-pink-50" />
        
        <h2 className="font-wedding text-4xl md:text-6xl text-slate-800 mb-8">
          Can't wait to see you there!
        </h2>
        
        <p className="text-slate-600 mb-12 text-lg italic">
          Your presence will make our celebration truly special. Please let us know if you can join us.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-sm tracking-[0.2em] uppercase font-semibold transition-shadow hover:shadow-lg"
          >
            <MessageCircle size={20} />
            RSVP on WhatsApp
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-white border border-pink-100 text-slate-700 px-10 py-5 rounded-full text-sm tracking-[0.2em] uppercase font-semibold transition-shadow hover:shadow-md"
          >
            Digital Guestbook
          </motion.button>
        </div>
        
        <div className="mt-32 opacity-30">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">
            Made with Love for Dhruvi & Rikhav
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default RsvpSection;
