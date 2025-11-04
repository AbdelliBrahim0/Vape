import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès! Nous vous répondrons bientôt.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Avenue Habib Bourguiba", "Tunis 1000, Tunisie"],
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+216 XX XXX XXX", "+216 YY YYY YYY"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@nanovapelab.tn", "support@nanovapelab.tn"],
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Sam: 9h - 20h", "Dimanche: 10h - 18h"],
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
              <span className="gradient-text">Contactez-Nous</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Notre équipe est là pour répondre à toutes vos questions. 
              N'hésitez pas à nous contacter !
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-3 bg-background/50 rounded-xl backdrop-blur-sm border border-primary/30">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-black mb-3 text-foreground group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground/70 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Form */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20 animate-slide-in-left">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 p-3 bg-primary/10 rounded-xl border border-primary/30 mb-4">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="font-bold text-primary">Envoyez-nous un message</span>
                </div>
                <h2 className="text-3xl font-black gradient-text mb-2">
                  Formulaire de Contact
                </h2>
                <p className="text-foreground/70">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-foreground">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+216 XX XXX XXX"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-foreground">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Écrivez votre message ici..."
                    rows={6}
                    className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>
              </form>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Map */}
              <Card className="overflow-hidden border-primary/20">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102972.88382647767!2d10.095369850000001!3d36.806495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sen!2stn!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20">
                <h3 className="text-2xl font-black gradient-text mb-6">
                  Informations Utiles
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-background/30 rounded-xl border border-primary/20">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Support en ligne</p>
                      <p className="text-sm text-foreground/70">
                        Chat disponible 24/7 pour répondre à vos questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-background/30 rounded-xl border border-primary/20">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Service client</p>
                      <p className="text-sm text-foreground/70">
                        Réponse garantie sous 24h pour tous vos messages
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-background/30 rounded-xl border border-primary/20">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Visite en magasin</p>
                      <p className="text-sm text-foreground/70">
                        Venez découvrir nos produits dans notre showroom
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
