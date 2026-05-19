import React, { useState, useEffect } from 'react';
import HeroInvite from './components/HeroInvite';
import FloralBackground from './components/FloralBackground';
import CoupleIntro from './components/CoupleIntro';
import CountdownSection from './components/CountdownSection';
// import EventsScratchCards from './components/EventsScratchCards';
import RopeKnotOpeningCard from './components/RopeKnotOpeningCard';
// import StoryTimeline from './components/StoryTimeline';
import GallerySection from './components/GallerySection';
import VenueSection from './components/VenueSection';
// import CeremonyCardReveal from './components/CeremonyCardReveal';
// import RsvpSection from './components/RsvpSection';
// import ScrollNavigation from './components/ScrollNavigation';

function App() {
  const [isHeroOpen, setIsHeroOpen] = useState(false);

  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!isHeroOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isHeroOpen]);

  return (
    <div className="min-h-screen bg-premium-gradient selection:bg-pink-200 selection:text-slate-900">
      <FloralBackground />
      
      <HeroInvite onOpen={() => setIsHeroOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        <CoupleIntro />
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <CountdownSection />
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        {/* <EventsScratchCards /> */}
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <RopeKnotOpeningCard />
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        {/* <CeremonyCardReveal /> */}
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        {/* <StoryTimeline />
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" /> */}
        
        <GallerySection />
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <VenueSection />
        
        {/* <RsvpSection /> */}
      </main>
      
      {/* <ScrollNavigation isHeroOpen={isHeroOpen} /> */}
    </div>
  );
}

export default App;
