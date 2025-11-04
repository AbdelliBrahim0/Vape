import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVape from "@/assets/hero-vape.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Composant pour l'animation des lettres
export const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Diviser le texte en lettres
  const letters = Array.from(text);
  
  // Variantes d'animation
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, 
        delayChildren: 0.04 * i 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      style={{ overflow: "hidden", display: "flex" }}
    >
      {letters.map((char, index) => (
        <motion.span 
          key={index} 
          variants={child}
          className={char === " " ? "w-2" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Composant pour le texte avec dégradé animé
export const AnimatedGradientText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: "200% center",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-start pt-24 sm:pt-32 md:items-center overflow-hidden py-16 sm:py-0">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="hidden sm:block absolute top-20 left-10 w-40 sm:w-64 h-40 sm:h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="hidden sm:block absolute bottom-20 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left text-center sm:text-left">
            <motion.h1 
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="block">
                <AnimatedText text="L'Expérience" className="text-glow" />
              </div>
              <div className="block">
                <AnimatedGradientText 
                  text="Vape Ultimate" 
                  className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black" 
                />
              </div>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto sm:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Découvrez notre sélection premium de vapes, liquides et accessoires. 
              <motion.span 
                className="block mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                Qualité professionnelle, design élégant, performance inégalée.
              </motion.span>
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
import { Link } from "react-router-dom";

// ... (le reste du code existant)

            <motion.div 
              className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4"
// ... (le reste du code existant)
            >
              <Link to="/shop">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 w-full sm:w-auto"
                >
                  Explorer la collection
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl neon-border hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('meilleures-ventes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Nos offres
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 md:gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black gradient-text">500+</div>
                <div className="text-xs sm:text-sm text-foreground/60">Produits</div>
              </div>
              <div className="hidden sm:block h-8 sm:h-12 w-px bg-border" />
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black gradient-text">4K+</div>
                <div className="text-xs sm:text-sm text-foreground/60">Clients satisfaits</div>
              </div>
              <div className="hidden sm:block h-8 sm:h-12 w-px bg-border" />
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black gradient-text">12/7</div>
                <div className="text-xs sm:text-sm text-foreground/60">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right content - 3D Product */}
          <motion.div 
            className="relative mt-12 sm:mt-0 lg:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing circles - Only show on larger screens */}
              <div className="hidden sm:block absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-primary/30 animate-glow-pulse" />
                <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-primary/20 animate-glow-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Product image with 3D effect */}
              <motion.div 
                className="relative z-10 px-4 sm:px-0"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <img 
                  src={heroVape}
                  alt="Premium Vape Device"
                  className="w-full max-w-xs sm:max-w-md mx-auto rounded-3xl shadow-[var(--shadow-glow)] hover:scale-105 transition-transform duration-500"
                  style={{ 
                    transform: 'perspective(1000px) rotateY(-15deg)',
                  }}
                />
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-2 right-2 sm:-top-4 sm:right-0 bg-gradient-to-br from-primary to-secondary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-black text-sm sm:text-lg shadow-[var(--shadow-neon)]"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 1.2, 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                >
                  -30%
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 left-2 sm:-bottom-4 sm:left-0 bg-card/90 backdrop-blur-sm border border-primary/30 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-bold text-sm sm:text-base shadow-lg"
                  initial={{ scale: 0, rotate: 10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 1.5, 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                >
                  
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
