import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVape from "@/assets/hero-vape.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in-left">
            

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="block text-glow">L'Expérience</span>
              <span className="block gradient-text">Vape Ultimate</span>
            </h1>

            <p className="text-xl text-foreground/70 max-w-xl leading-relaxed">
              Découvrez notre sélection premium de vapes, liquides et accessoires. 
              Qualité professionnelle, design streetGang, performance inégalée.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                onClick={() => window.location.href = '/shop'}
              >
                Explorer la collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-bold text-lg px-8 py-6 rounded-xl neon-border hover:bg-primary/10 transition-all duration-300"
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

            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-black gradient-text">500+</div>
                <div className="text-sm text-foreground/60">Produits</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <div className="text-3xl font-black gradient-text">4K+</div>
                <div className="text-sm text-foreground/60">Clients satisfaits</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <div className="text-3xl font-black gradient-text">12/7</div>
                <div className="text-sm text-foreground/60">Support</div>
              </div>
            </div>
          </div>

          {/* Right content - 3D Product */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-slide-in-right">
            <div className="relative">
              {/* Glowing circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full border-2 border-primary/30 animate-glow-pulse" />
                <div className="absolute w-[500px] h-[500px] rounded-full border border-primary/20 animate-glow-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Product image with 3D effect */}
              <div className="relative z-10 animate-float">
                <img 
                  src={heroVape}
                  alt="Premium Vape Device"
                  className="w-full max-w-md rounded-3xl shadow-[var(--shadow-glow)] hover:scale-105 transition-transform duration-500"
                  style={{ 
                    transform: 'perspective(1000px) rotateY(-15deg)',
                  }}
                />
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground px-6 py-3 rounded-2xl font-black text-lg shadow-[var(--shadow-neon)] animate-scale-in">
                  -30%
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-2xl font-bold shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
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
