import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './GallerySection.module.css';
import { weddingData } from '../data/weddingData';

const GallerySection = ({ images = weddingData.gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showChannel, setShowChannel] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const intervalRef = useRef(null);
  const channelTimerRef = useRef(null);

  // Helper to change channel with glitch effect
  const changeChannel = (newIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowChannel(true);
    
    // Clear existing channel fade timer
    if (channelTimerRef.current) clearTimeout(channelTimerRef.current);
    
    // Glitch for 300ms then show new image
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
      
      // Start fade out for channel indicator after 1.5s
      channelTimerRef.current = setTimeout(() => {
        setShowChannel(false);
      }, 1500);
    }, 300);
  };

  const nextChannel = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    changeChannel(nextIndex);
  };

  const prevChannel = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeChannel(prevIndex);
  };

  // Auto-carousel logic
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextChannel();
      }, 3500);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isPaused, images.length]);

  // Initial channel indicator fade
  useEffect(() => {
    channelTimerRef.current = setTimeout(() => {
      setShowChannel(false);
    }, 1500);

    return () => {
      if (channelTimerRef.current) clearTimeout(channelTimerRef.current);
    };
  }, []);

  const currentImage = images[currentIndex];
  const nextImageIndex = (currentIndex + 1) % images.length;
  const nextImage = images[nextImageIndex];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Gallery</h2>

      <div 
        className={styles.tvContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Antennas */}
        <div className={styles.antennaWrapper}>
          <div className={styles.antennaLeft}></div>
          <div className={styles.antennaRight}></div>
        </div>

        {/* TV Body */}
        <div className={styles.tvBody}>
          <div className={styles.frameHeart}>🖤</div>
          
          <div className={styles.screenBezel}>
            <div className={`${styles.screen} ${isAnimating ? styles.glitch : ''}`}>
              {/* Channel Indicator */}
              <div className={`${styles.channelIndicator} ${!showChannel ? styles.channelFadeOut : ''}`}>
                CH {String(currentIndex + 1).padStart(2, '0')}
              </div>

              {/* Glitch Static Overlay */}
              {isAnimating && <div className={styles.static}></div>}

              {/* Main Image */}
              <img 
                src={currentImage.url || currentImage} 
                alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
                className={styles.image}
                loading="lazy"
                aria-label={`Gallery image ${currentIndex + 1} of ${images.length}`}
              />

              {/* CRT Shadow Overlay */}
              <div className={styles.screenOverlay}></div>
            </div>
          </div>

          {/* Controls below screen */}
          <div className={styles.controlsRow}>
            <div className={styles.speakerGrille}></div>
            <div className={styles.knobs}>
              <div className={styles.knob}></div>
              <div className={styles.knob}></div>
            </div>
          </div>
        </div>

        {/* Legs */}
        <div className={styles.legs}>
          <div className={`${styles.leg} ${styles.legLeft}`}></div>
          <div className={`${styles.leg} ${styles.legRight}`}></div>
        </div>

        {/* Decorative elements */}
        <div className={styles.decorativeHeart}>💗</div>
      </div>

      {/* Manual Navigation */}
      <div className={styles.navButtons}>
        <button 
          onClick={prevChannel} 
          className={styles.navButton}
          disabled={isAnimating}
          aria-label="Previous Image"
        >
          <span>←</span> Previous
        </button>
        <button 
          onClick={nextChannel} 
          className={styles.navButton}
          disabled={isAnimating}
          aria-label="Next Image"
        >
          Next <span>→</span>
        </button>
      </div>

      {/* Preload Next Image (Hidden) */}
      <link rel="preload" as="image" href={nextImage.url || nextImage} />
      <img 
        src={nextImage.url || nextImage} 
        style={{ display: 'none' }} 
        alt="preload" 
        loading="eager"
      />
    </section>
  );
};

export default GallerySection;
