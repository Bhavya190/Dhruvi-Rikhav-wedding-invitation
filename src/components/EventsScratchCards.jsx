import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const ScratchCard = ({ event }) => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratchedEnough, setIsScratchedEnough] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Fill canvas with "scratch layer"
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#fdf2f8');
    gradient.addColorStop(0.5, '#f5f3ff');
    gradient.addColorStop(1, '#fee2e2');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add some pattern/text to scratch layer
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 14px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch to Reveal', width / 2, height / 2 + 5);

    // Drawing logic
    let isDrawing = false;

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
      checkReveal();
    };

    const checkReveal = () => {
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      let clearPixels = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] === 0) clearPixels++;
      }

      const percent = (clearPixels / (pixels.length / 4)) * 100;
      if (percent > 40 && !isScratchedEnough) {
        setIsScratchedEnough(true);
        setTimeout(() => setIsRevealed(true), 300);
      }
    };

    const handleMouseDown = (e) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    const handleTouchStart = (e) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const handleTouchMove = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[220px] md:h-[260px] rounded-3xl overflow-hidden shadow-lg glass-card group">
      {/* Event Details (Hidden underneath) */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between bg-white/60">
        <div>
          <h4 className="font-wedding text-xl text-slate-800 mb-1">{event.name}</h4>
          <p className="text-xs text-slate-500 italic mb-4">{event.description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-600">
            <Calendar size={14} className="text-pink-400" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Clock size={14} className="text-purple-400" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin size={14} className="text-rose-400" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
      </div>

      {/* Scratch Layer */}
      <motion.canvas
        ref={canvasRef}
        width={400}
        height={400}
        animate={isRevealed ? { opacity: 0, scale: 1.1 } : { opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 w-full h-full cursor-crosshair z-10 touch-none ${isRevealed ? 'pointer-events-none' : ''}`}
      />
    </div>
  );
};

const EventsScratchCards = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-wedding text-3xl md:text-5xl text-slate-800 mb-4"
        >
          The Ceremonies
        </motion.h2>
        <p className="text-slate-500 italic">Gently scratch each card to reveal the details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {weddingData.events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: event.id * 0.1 }}
          >
            <ScratchCard event={event} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsScratchCards;
