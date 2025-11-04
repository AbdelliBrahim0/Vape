import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '@/contexts/PageTransitionContext';

export const PageTransitionLoader = () => {
  const { isTransitioning } = usePageTransition();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Redémarrer la vidéo à chaque fois que le loader apparaît
  useEffect(() => {
    console.log('Transition state changed:', isTransitioning);
    
    if (isTransitioning && videoRef.current) {
      console.log('Initializing video playback...');
      
      // Réinitialiser l'état d'erreur
      setVideoError(false);
      
      // Réinitialiser et démarrer la vidéo
      videoRef.current.currentTime = 0;
      
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playback started successfully');
          })
          .catch(error => {
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

  console.log('Rendering PageTransitionLoader, isTransitioning:', isTransitioning, 'videoError:', videoError);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full h-full max-w-4xl mx-auto flex items-center justify-center">
        {videoError ? (
          <div className="text-white text-center p-4">
            <p className="text-xl font-bold mb-2">Erreur de chargement de la vidéo</p>
            <p className="text-sm opacity-80">Le contenu de transition n'a pas pu être chargé.</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            src="/test/vd.mp4"
            className="w-full h-auto max-h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
            onCanPlayThrough={() => console.log('Video can play through')}
          >
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        )}
      </div>
    </div>
  );
};
