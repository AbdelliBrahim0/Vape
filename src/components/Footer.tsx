import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-card/30 backdrop-blur-xl border-t border-primary/20 mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black gradient-text">NanoVapeLab</h3>
            <p className="text-foreground/70">
              Votre destination premium pour tout ce qui concerne la vape. 
              Qualité, performance, style.
            </p>
            <div className="flex gap-3">
              <div className="p-3 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/30 cursor-pointer transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5 text-primary" />
              </div>
              <div className="p-3 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/30 cursor-pointer transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div className="p-3 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/30 cursor-pointer transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-foreground">Liens Rapides</h4>
            <ul className="space-y-3">
              {["Nouveautés", "Meilleures ventes", "Promotions", "DIY Lab"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors font-semibold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-foreground">Catégories</h4>
            <ul className="space-y-3">
              {["Vapes & Mods", "E-Liquides", "Pods & Kits", "Atomiseurs"].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors font-semibold">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/70">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold">Tunis, Tunisie</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold">+216 XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold">contact@nanovapelab.tn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center">
          <p className="text-foreground/60 font-semibold">
            © 2024 NanoVapeLab. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
