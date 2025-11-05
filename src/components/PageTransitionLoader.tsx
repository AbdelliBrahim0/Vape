import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { usePageTransition } from '@/contexts/PageTransitionContext';
import { useIsMobile } from '@/hooks/use-mobile';
import VDphone from '@/assets/test/VDphone.webm';
import vd from '@/assets/test/vd.webm';

const Checkbox = ({ checked, onChange, label }) => (
  <label className="flex items-center space-x-3 cursor-pointer">
    <div className="relative">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <div className={`w-5 h-5 rounded-md transition-all duration-300 ${checked ? 'bg-blue-500 border-blue-500' : 'bg-gray-700 border-gray-600'} border-2`}></div>
      {checked && (
        <svg className="absolute w-4 h-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className="text-gray-300 font-medium select-none">{label}</span>
  </label>
);

const CursorFollower = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{ translateX: smoothX, translateY: smoothY }}
      className="fixed top-0 left-0 z-50 px-4 py-2 text-lg font-semibold text-white bg-black bg-opacity-50 rounded-full pointer-events-none backdrop-blur-sm"
    >
      cliquer n'importe où pour passer
    </motion.div>
  );
};

export const PageTransitionLoader = () => {
  const { isTransitioning, skipTransition, endTransition } = usePageTransition();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const isMobile = useIsMobile();
  const [hideTransition, setHideTransition] = useState(
    () => localStorage.getItem('hideTransition') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('hideTransition', hideTransition.toString());
  }, [hideTransition]);

  const handleCheckboxChange = (e) => {
    setHideTransition(e.target.checked);
  };

  const videoSrc = isMobile ? VDphone : vd;

  useEffect(() => {
    if (!hideTransition && isTransitioning && videoRef.current) {
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
    } else if (hideTransition && isTransitioning) {
      endTransition();
    }
  }, [isTransitioning, videoSrc, hideTransition, endTransition]);

  const handleVideoError = () => {
    console.error('Erreur de chargement de la vidéo');
    setVideoError(true);
    endTransition();
  };

  const onVideoEnded = () => {
    endTransition();
  };

  if (hideTransition) {
    return null;
  }

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
          {!isMobile && <CursorFollower />}
          <div className={`absolute z-10 ${isMobile ? 'bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-sm' : 'bottom-5 right-5'} p-4 bg-black bg-opacity-40 backdrop-blur-md rounded-xl`}>
            <div className="flex flex-col items-center space-y-3">
              {isMobile && <p className="text-gray-200 text-center font-semibold">cliquer n'importe où pour passer</p>}
              <Checkbox checked={hideTransition} onChange={handleCheckboxChange} label="Ne plus afficher" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};