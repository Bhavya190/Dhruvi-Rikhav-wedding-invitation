import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, X } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const CeremonyCardReveal = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-white/20 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-wedding text-5xl md:text-7xl text-heading-navy mb-6">
            Ceremonies
          </h2>
          <p className="text-subtext-blue text-sm md:text-xl italic font-light">
            Join us in celebrating our special moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {weddingData.events.map((event) => (
            <motion.div
              key={event.id}
              layoutId={`card-${event.id}`}
              onClick={() => setSelectedEventId(event.id)}
              className="bg-white/40 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-[2rem] cursor-pointer hover:shadow-xl hover:bg-white/50 transition-all group relative overflow-hidden"
            >
              <motion.div layoutId={`title-container-${event.id}`}>
                <motion.h3 
                  layoutId={`title-${event.id}`}
                  className="font-wedding text-3xl text-heading-navy mb-2 group-hover:scale-105 origin-left transition-transform"
                >
                  {event.name}
                </motion.h3>
                <motion.div layoutId={`date-${event.id}`} className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar size={16} className="text-pink-400" />
                  <span className="tracking-widest uppercase text-[10px]">{event.date}</span>
                </motion.div>
              </motion.div>
              
              <div className="absolute right-6 bottom-6 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-pink-600 text-lg leading-none">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEventId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setSelectedEventId(null)}
            />
            
            <motion.div
              layoutId={`card-${selectedEventId}`}
              className="bg-white/95 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-[2.5rem] w-full max-w-2xl relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedEventId(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-pink-100 text-slate-500 hover:text-pink-500 transition-colors z-20"
              >
                <X size={20} />
              </button>

              {weddingData.events.map((event) => {
                if (event.id === selectedEventId) {
                  return (
                    <motion.div key={event.id} layoutId={`title-container-${event.id}`} className="mt-2">
                      <motion.h3 
                        layoutId={`title-${event.id}`}
                        className="font-wedding text-4xl md:text-5xl text-heading-navy mb-4"
                      >
                        {event.name}
                      </motion.h3>
                      
                      <motion.div layoutId={`date-${event.id}`} className="flex items-center gap-3 text-slate-600 mb-8 border-b border-pink-100 pb-6">
                        <Calendar size={20} className="text-pink-400" />
                        <span className="tracking-widest uppercase text-xs font-medium">{event.date}</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                            <Clock size={24} className="text-pink-500" />
                          </div>
                          <div className="pt-1">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">Time</p>
                            <p className="text-slate-700 font-medium text-lg">{event.time}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                            <MapPin size={24} className="text-pink-500" />
                          </div>
                          <div className="pt-1">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">Location</p>
                            <p className="text-slate-700 font-medium text-lg">{event.location}</p>
                          </div>
                        </div>

                        <div className="bg-pink-50/50 p-6 rounded-2xl mt-8 border border-pink-100/50">
                          <p className="text-slate-600 italic leading-relaxed text-lg">
                            "{event.description}"
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                }
                return null;
              })}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CeremonyCardReveal;
