import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomLink } from "./CustomLink";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <h1 
          className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent cursor-pointer transition-transform hover:scale-105" 
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
        >
          NanoVapeLab
        </h1>
        
        <div className="hidden md:flex items-center h-full space-x-8">
          <CustomLink href="/" className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group">
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </CustomLink>
          <CustomLink href="/shop" className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group">
            Boutique
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </CustomLink>
          <CustomLink href="/about" className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group">
            À Propos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </CustomLink>
          <CustomLink href="/contact" className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </CustomLink>
        </div>

        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Rechercher"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-primary/10 relative transition-colors" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/cart';
            }}
            aria-label="Panier"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold transition-transform hover:scale-110">
              0
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
