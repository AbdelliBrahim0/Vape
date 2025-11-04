import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '@/contexts/PageTransitionContext';
import { useIsMobile } from '@/hooks/use-mobile';

export const PageTransitionLoader = () => {
  const { isTransitioning, skipTransition, endTransition } = usePageTransition();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isTransitioning && videoRef.current) {
      setVideoError(false);
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1.25; // Set playback speed to 1.25x
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Erreur lors de la lecture de la vidéo:', error);
          setVideoError(true);
        });
      }
    }
  }, [isTransitioning]);

  const handleVideoError = () => {
    console.error('Erreur de chargement de la vidéo');
    setVideoError(true);
  };

  const onVideoEnded = () => {
    endTransition();
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTransitioning, handleMouseMove]);

import videoDesktop from '/public/test/vd.webm';
import videoMobile from '/public/test/VDphone.webm';

// ... (le reste du code existant)

  useEffect(() => {
    const videoSrc = isMobile ? videoMobile : videoDesktop;
    const video = videoRef.current;
// ... (le reste du code existant)

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center cursor-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={skipTransition}
        >
          <div className="w-full h-full flex items-center justify-center">
            {videoError ? (
              <div className="text-white text-center p-4">
                <p className="text-xl font-bold mb-2">Erreur de chargement de la vidéo</p>
                <p className="text-sm opacity-80">Le contenu de transition n'a pas pu être chargé.</p>
              </div>
            ) : (
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                onError={handleVideoError}
                onEnded={onVideoEnded}
              />
            )}
          </div>
          <motion.div
            className="absolute text-white text-lg font-semibold px-4 py-2 rounded-full bg-blue-800/70 backdrop-blur-sm pointer-events-none"
            style={{ left: mousePosition.x + 15, top: mousePosition.y + 15 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            Cliquer n'importe où pour passer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
