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
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#fdf2f8');
      gradient.addColorStop(0.5, '#f5f3ff');
      gradient.addColorStop(1, '#fee2e2');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'italic 12px serif';
      ctx.textAlign = 'center';
      ctx.fillText('Scratch Here', canvas.width / 2, canvas.height / 2 + 5);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let isDrawing = false;

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
      checkReveal();
    };

    const checkReveal = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let clearPixels = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] === 0) clearPixels++;
      }

      const percent = (clearPixels / (pixels.length / 4)) * 100;
      if (percent > 30 && !isScratchedEnough) {
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
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isScratchedEnough]);

  return (
    <div className="relative w-full h-[190px] md:h-[260px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md md:shadow-lg glass-card group">
      {/* Event Details (Hidden underneath) */}
      <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-start gap-y-4 md:justify-between bg-white/60">
        <div>
          <h4 className="font-wedding text-xl md:text-2xl text-heading-navy mb-0.5 md:mb-1 leading-tight">{event.name}</h4>
          <p className="text-xs md:text-base text-subtext-blue italic leading-tight opacity-90">{event.description}</p>
        </div>
        
        <div className="space-y-1.5 md:space-y-2">
          <div className="flex items-center gap-2 md:gap-3 text-subtext-blue">
            <Calendar size={16} className="text-pink-400 md:scale-125" />
            <span className="text-sm md:text-lg font-semibold">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-subtext-blue">
            <Clock size={16} className="text-purple-400 md:scale-125" />
            <span className="text-sm md:text-lg font-semibold">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-subtext-blue">
            <MapPin size={16} className="text-rose-400 md:scale-125" />
            <span className="text-sm md:text-lg truncate font-semibold">{event.location}</span>
          </div>
        </div>
      </div>

      {/* Scratch Layer */}
      <motion.canvas
        ref={canvasRef}
        animate={isRevealed ? { opacity: 0, scale: 1.1 } : { opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 w-full h-full cursor-crosshair z-10 touch-none ${isRevealed ? 'pointer-events-none' : ''}`}
      />
    </div>
  );
};

const EventsScratchCards = () => {
  return (
    <section className="py-8 md:py-16 px-3 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-6 md:mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-wedding text-3xl md:text-6xl text-heading-navy mb-4"
        >
          The Ceremonies
        </motion.h2>
        <p className="text-subtext-blue text-[10px] md:text-lg italic font-light">Gently scratch each card to reveal the details</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
        {weddingData.events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: event.id * 0.05 }}
          >
            <ScratchCard event={event} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsScratchCards;
