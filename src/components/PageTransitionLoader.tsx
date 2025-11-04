import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '@/contexts/PageTransitionContext';
import { useIsMobile } from '@/hooks/use-mobile';
import VDphone from '@/assets/test/VDphone.webm';
import vd from '@/assets/test/vd.webm';

export const PageTransitionLoader = () => {
  const { isTransitioning, skipTransition, endTransition } = usePageTransition();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const isMobile = useIsMobile();

  const videoSrc = isMobile ? VDphone : vd;

  useEffect(() => {
    if (isTransitioning && videoRef.current) {
      videoRef.current.src = videoSrc;
      setVideoError(false);
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Erreur lors de la lecture de la vidéo:', error);
          setVideoError(true);
        });
      }
    }
  }, [isTransitioning, videoSrc]);

  const handleVideoError = () => {
    console.error('Erreur de chargement de la vidéo');
    setVideoError(true);
  };

  const onVideoEnded = () => {
    endTransition();
  };

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={skipTransition}
        >
          <div className="w-full h-full flex items-center justify-center">
            {videoError ? (
              <div className="text-white">Erreur de chargement</div>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                onError={handleVideoError}
                onEnded={onVideoEnded}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};