import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Award, Users, TrendingUp, Zap, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { value: "4K+", label: "Clients satisfaits", icon: Users },
    { value: "500+", label: "Produits premium", icon: Award },
    { value: "6 ans", label: "D'expérience", icon: TrendingUp },
    { value: "12/7", label: "Support client", icon: Zap },
  ];

  const values = [
    {
      icon: Target,
      title: "Qualité Premium",
      description: "Nous sélectionnons uniquement les meilleurs produits pour garantir votre satisfaction totale.",
    },
    {
      icon: Heart,
      title: "Passion Vape",
      description: "Notre équipe partage votre passion et comprend vos besoins en tant que vapoteurs.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Conseils professionnels et accompagnement personnalisé pour tous vos projets vape.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Toujours à la pointe des dernières technologies et tendances du marché.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">À Propos de NanoVapeLab</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Votre destination premium pour tout ce qui concerne la vape en Tunisie. 
              Depuis 2019, nous révolutionnons l'expérience vape avec passion et expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-4 bg-background/50 rounded-2xl backdrop-blur-sm border border-primary/30">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/70 font-semibold">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/30 backdrop-blur-sm border-primary/20 animate-slide-in-up">
              <h2 className="text-4xl font-black mb-6 gradient-text">Notre Histoire</h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  NanoVapeLab est né d'une passion commune pour la vape et d'une vision claire : 
                  offrir aux vapoteurs tunisiens l'accès aux meilleurs produits du marché dans 
                  un environnement moderne et professionnel.
                </p>
                <p className="text-lg">
                  Fondée en 2019, notre boutique s'est rapidement imposée comme la référence 
                  incontournable pour tous les amateurs de vape. Notre équipe d'experts passionnés 
                  sélectionne rigoureusement chaque produit pour garantir qualité, performance et 
                  satisfaction.
                </p>
                <p className="text-lg">
                  Aujourd'hui, nous sommes fiers de servir plus de 50 000 clients satisfaits et de 
                  continuer à innover pour offrir la meilleure expérience vape possible. Notre 
                  engagement envers l'excellence et notre approche streetGang unique nous 
                  distinguent dans l'industrie.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-blue/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">Nos Valeurs</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Les principes qui guident notre mission quotidienne
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-4 bg-background/50 rounded-2xl backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">Notre Équipe</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Des passionnés à votre service
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/30 backdrop-blur-sm border-primary/20 text-center max-w-4xl mx-auto animate-scale-in">
            <Users className="h-20 w-20 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-black mb-4 gradient-text">
              Une Équipe Passionnée et Dévouée
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Notre équipe est composée d'experts passionnés par l'univers de la vape. 
              Chaque membre apporte son expertise unique pour vous offrir les meilleurs 
              conseils et un service client exceptionnel. Nous sommes là pour vous 
              accompagner dans votre parcours vape, du débutant au connaisseur.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
