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
      <Footer />
    </div>
  );
};

export default Contact;
