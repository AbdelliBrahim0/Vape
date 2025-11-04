import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVape from "@/assets/hero-vape.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden py-16 sm:py-0">
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
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="block text-glow">L'Expérience</span>
              <span className="block gradient-text">Vape Ultimate</span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto sm:mx-0 leading-relaxed">
              Découvrez notre sélection premium de vapes, liquides et accessoires. 
              Qualité professionnelle, design élégant, performance inégalée.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.location.href = '/shop'}
              >
                Explorer la collection
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
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
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 md:gap-8 pt-4">
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
            </div>
          </div>

          {/* Right content - 3D Product */}
          <div className="relative mt-12 sm:mt-0 lg:h-[500px] flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing circles - Only show on larger screens */}
              <div className="hidden sm:block absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-primary/30 animate-glow-pulse" />
                <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-primary/20 animate-glow-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Product image with 3D effect */}
              <div className="relative z-10 animate-float px-4 sm:px-0">
                <img 
                  src={heroVape}
                  alt="Premium Vape Device"
                  className="w-full max-w-xs sm:max-w-md mx-auto rounded-3xl shadow-[var(--shadow-glow)] hover:scale-105 transition-transform duration-500"
                  style={{ 
                    transform: 'perspective(1000px) rotateY(-15deg)',
                  }}
                />
                {/* Floating badges */}
                <div className="absolute -top-2 right-2 sm:-top-4 sm:right-0 bg-gradient-to-br from-primary to-secondary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-black text-sm sm:text-lg shadow-[var(--shadow-neon)] animate-scale-in">
                  -30%
                </div>
                <div className="absolute -bottom-2 left-2 sm:-bottom-4 sm:left-0 bg-card/90 backdrop-blur-sm border border-primary/30 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-bold text-sm sm:text-base shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  🔥 Top ventes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
