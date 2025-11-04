import React from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useCart } from "@/contexts/CartContext";

interface OrderFormProps {
  onClose: () => void;
  onSubmit: (orderData: {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
  }) => void;
}

export const OrderForm = ({ onClose, onSubmit }: OrderFormProps) => {
  const { cart, getTotalPrice } = useCart();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card/95 backdrop-blur-lg rounded-2xl border border-primary/20 shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-in">
        <div className="p-6 border-b border-primary/10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black gradient-text">Finaliser la commande</h2>
            <button
              onClick={onClose}
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/5 p-4 rounded-xl">
              <p className="text-sm text-foreground/60">Articles</p>
              <p className="font-bold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-xl">
              <p className="text-sm text-foreground/60">Total</p>
              <p className="text-xl font-black gradient-text">{getTotalPrice().toFixed(3)} DT</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Prénom *</label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Nom *</label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">Téléphone *</label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre numéro de téléphone"
              required
              className="bg-background/50 border-primary/30 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">Adresse de livraison *</label>
            <Textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Votre adresse complète"
              rows={3}
              required
              className="bg-background/50 border-primary/30 focus:border-primary"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-primary/10">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-primary/30 hover:bg-primary/10"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              Confirmer la commande
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
