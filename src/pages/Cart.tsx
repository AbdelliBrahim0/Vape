import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag, MessageSquareText } from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { OrderForm } from "@/components/OrderForm";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleUpdateQuantity = (id: string, delta: number) => {
    const item = cart.find(cartItem => cartItem.id === id);
    if (item) {
      updateQuantity(id, item.quantity + delta);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleSubmitOrder = (orderData: {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
  }) => {
    const { firstName, lastName, phone, address } = orderData;
    const itemsList = cart
      .map(item => `${item.quantity}x ${item.name} (${item.price} DT)`)
      .join('%0A');
    
    const message = `Bonjour,%0A%0A` +
      `Je souhaite passer une commande :%0A%0A` +
      `*Nom complet :* ${firstName} ${lastName}%0A` +
      `*Téléphone :* ${phone}%0A` +
      `*Adresse :* ${address}%0A%0A` +
      `*Détails de la commande :*%0A${itemsList}%0A%0A` +
      `*Total : ${total.toFixed(3)} DT*%0A%0A` +
      `Merci !`;

    window.open(`https://wa.me/21652956361?text=${message}`, '_blank');
    setShowOrderForm(false);
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 7;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-center mb-12 animate-slide-in-up">
            <span className="gradient-text">Votre Panier</span>
          </h1>

          {cart.length === 0 ? (
            <Card className="p-16 bg-card/30 backdrop-blur-sm border-primary/20 text-center animate-scale-in">
              <ShoppingBag className="h-24 w-24 text-primary/40 mx-auto mb-6" />
              <h2 className="text-3xl font-black mb-4 text-foreground/60">
                Votre panier est vide
              </h2>
              <p className="text-foreground/50 mb-8">
                Découvrez nos produits premium et commencez vos achats
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-[var(--shadow-neon)]"
                onClick={() => window.location.href = '/shop'}
              >
                Continuer vos achats
              </Button>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item, index) => (
                  <Card
                    key={item.id}
                    className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-6">
                      {/* Image */}
                      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl border-2 border-primary/30">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <p className="text-sm text-primary font-bold">{item.category}</p>
                          <h3 className="text-xl font-black text-foreground">{item.name}</h3>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-xl border border-primary/20">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              className="h-8 w-8 hover:bg-primary/10"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-black text-lg w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="h-8 w-8 hover:bg-primary/10"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-2xl font-black gradient-text">
                              {(item.price * item.quantity).toFixed(2)} DT
                            </p>
                            <p className="text-sm text-foreground/60">
                              {item.price.toFixed(2)} DT / unité
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Remove */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-destructive hover:bg-destructive/10 h-10 w-10"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Summary */}
              <div className="space-y-6 animate-slide-in-right">
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 space-y-6">
                  <h2 className="text-2xl font-black gradient-text">Résumé</h2>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70">
                      Code promo
                    </label>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="PROMO2024"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="bg-background/50 border-primary/30"
                      />
                      <Button
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/10 font-bold"
                      >
                        Appliquer
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-primary/20 pt-4">
                    <div className="flex justify-between text-foreground/70">
                      <span className="font-semibold">Sous-total</span>
                      <span className="font-bold">{subtotal.toFixed(2)} DT</span>
                    </div>
                    <div className="flex justify-between text-foreground/70">
                      <span className="font-semibold">Livraison</span>
                      <span className="font-bold">
                        {shipping === 0 ? "Gratuite" : `${shipping.toFixed(2)} DT`}
                      </span>
                    </div>
                    {subtotal < 100 && (
                      <p className="text-xs text-primary">
                        Livraison gratuite dès 100 DT d'achat
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center border-t border-primary/20 pt-4">
                    <span className="text-xl font-black text-foreground">Total</span>
                    <span className="text-3xl font-black gradient-text">
                      {total.toFixed(3)} DT
                    </span>
                  </div>

                  <Button
                    onClick={() => setShowOrderForm(true)}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6 shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  >
                    <MessageSquareText className="mr-2 h-5 w-5" />
                    Passer la commande
                  </Button>
                  
                  {showOrderForm && (
                    <OrderForm 
                      onClose={() => setShowOrderForm(false)} 
                      onSubmit={handleSubmitOrder} 
                    />
                  )}

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full font-bold border-primary/30 hover:bg-primary/10"
                    onClick={() => window.location.href = '/shop'}
                  >
                    Continuer vos achats
                  </Button>
                </Card>

                
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
