import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User, Users, CheckCircle2, XCircle, Send } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import leftDoorBg from '../assets/left-door-bg.png';

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // IMPORTANT: Replace this with your URL from the setup guide
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysMIbeJsMdOq0YpocpgyRq8dQP-KCIENPBOKei1CYxMCuXghcjO6Pn7EiO4b1X3bjA/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setStatus('success');
    } catch (err) {
      console.error('RSVP Error:', err);
      setStatus('success'); 
    }
  };

  const BackgroundImage = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img 
        src={leftDoorBg} 
        alt="" 
        className="w-full h-full object-cover opacity-60 scale-100"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
    </div>
  );

  if (status === 'success') {
    return (
      <section className="py-24 md:py-48 px-4 md:px-6 relative overflow-hidden bg-white/10">
        <BackgroundImage />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center backdrop-blur-2xl bg-white/40 p-12 md:p-24 rounded-[3rem] shadow-2xl shadow-pink-100/50 border border-white/80 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 md:w-32 md:h-32 bg-green-50/50 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 md:mb-12"
          >
            <CheckCircle2 size={48} className="text-green-500 md:scale-150" />
          </motion.div>
          <h2 className="font-wedding text-4xl md:text-7xl text-heading-navy mb-6 leading-tight">
            Thank You!
          </h2>
          <p className="text-subtext-blue text-sm md:text-2xl italic font-light leading-relaxed mb-10 md:mb-16">
            Your RSVP has been received. We can't wait to celebrate with you!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStatus('idle')}
            className="text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.3em] hover:text-pink-400 transition-colors mb-12"
          >
            Submit another response
          </motion.button>

          <div className="text-center">
            <div className="inline-block px-4 py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm">
              <p className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-heading-navy font-medium">
                Made with Love for Dhruvi & Rikhav
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white/10">
      <BackgroundImage />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-28"
        >
          <h2 className="font-wedding text-4xl md:text-7xl text-heading-navy mb-4 leading-tight">
            RSVP
          </h2>
          <p className="text-subtext-blue text-sm md:text-2xl italic font-light max-w-2xl mx-auto leading-relaxed">
            Please let us know if you can join us in our celebration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-2xl bg-white/30 p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl shadow-pink-100/30 border border-white/60"
        >
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 mb-2 md:mb-4 ml-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-pink-300" size={18} />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/40 backdrop-blur-md border border-white/50 py-4 md:py-6 pl-12 md:pl-16 pr-6 rounded-2xl md:rounded-[2rem] focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm md:text-lg text-heading-navy placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {/* Guests Field */}
              <div className="relative">
                <label className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 mb-2 md:mb-4 ml-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-pink-300" size={18} />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    disabled={formData.attending === 'no'}
                    className="w-full bg-white/40 backdrop-blur-md border border-white/50 py-4 md:py-6 pl-12 md:pl-16 pr-6 rounded-2xl md:rounded-[2rem] focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm md:text-lg text-heading-navy appearance-none disabled:opacity-50"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Attendance Field */}
              <div className="relative">
                <label className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 mb-2 md:mb-4 ml-2">Are you attending?</label>
                <div className="flex gap-4 md:gap-6">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attending: 'yes' }))}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 md:py-6 rounded-2xl md:rounded-[2rem] border transition-all text-sm md:text-lg backdrop-blur-md ${
                      formData.attending === 'yes' 
                        ? 'bg-pink-100/50 border-pink-200 text-pink-600 shadow-inner' 
                        : 'bg-white/40 border-white/50 text-slate-400 hover:border-pink-200'
                    }`}
                  >
                    <CheckCircle2 size={18} /> Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attending: 'no' }))}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 md:py-6 rounded-2xl md:rounded-[2rem] border transition-all text-sm md:text-lg backdrop-blur-md ${
                      formData.attending === 'no' 
                        ? 'bg-rose-100/50 border-rose-200 text-rose-600 shadow-inner' 
                        : 'bg-white/40 border-white/50 text-slate-400 hover:border-rose-200'
                    }`}
                  >
                    <XCircle size={18} /> No
                  </button>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 mb-2 md:mb-4 ml-2">Well Wishes</label>
              <textarea
                name="message"
                placeholder="Share your wishes or any special requirements..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/40 backdrop-blur-md border border-white/50 p-6 rounded-2xl md:rounded-[2rem] focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm md:text-lg text-heading-navy placeholder:text-slate-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
              whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-slate-800 text-white py-5 md:py-8 rounded-2xl md:rounded-[2.5rem] text-xs md:text-base tracking-[0.3em] uppercase font-bold shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-4 hover:bg-slate-900 group disabled:opacity-70 disabled:cursor-wait"
            >
              {status === 'submitting' ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              )}
              {status === 'submitting' ? 'Submitting...' : 'Submit RSVP'}
            </motion.button>
          </form>
        </motion.div>
        
        <div className="mt-16 md:mt-32 text-center">
          <div className="inline-block px-4 py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm">
            <p className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-heading-navy font-medium">
              Made with Love for Dhruvi & Rikhav
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
