import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroVape from "@/assets/hero-vape.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ... (Le reste de vos composants AnimatedText et AnimatedGradientText reste ici)

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-start pt-24 sm:pt-32 md:items-center overflow-hidden py-16 sm:py-0">
      {/* ... (contenu de la section) */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left text-center sm:text-left">
            {/* ... (h1 et p) */}
            <motion.div 
              className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
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
            {/* ... (le reste de la div) */}
          </div>
          {/* ... (partie droite de la grille) */}
        </div>
      </div>
    </section>
  );
};