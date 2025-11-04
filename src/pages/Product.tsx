import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Check, Truck, Shield, Zap, Heart } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "VOZOL GEAR 20k 5%",
    category: "Puff",
    price: "45",
    oldPrice: "55",
    rating: 5,
    reviews: 0,
    inStock: true,
    images: [
      "https://cloudtiktak.com/media/static/media/VOZOL-Gear-Power-20000-Puffs.webp",
      "https://cloudtiktak.com/media/static/media/VOZOL-Gear-Power-20000-Puffs.webp",
      "https://cloudtiktak.com/media/static/media/VOZOL-Gear-Power-20000-Puffs.webp",
    ],
    description: "Le VOZOL GEAR 20k 5% est un puff jetable de haute qualité, offrant une expérience de vape exceptionnelle. Avec un design moderne et une grande capacité, il est parfait pour les vapoteurs nomades.",
    features: [
      "Jusqu'à 20000 bouffées",
      "Taux de nicotine de 5%",
      "Batterie longue durée",
      "Design compact et portable",
      "Saveurs intenses et variées",
    ],
    specs: {
      "Capacité": "20ml",
      "Nicotine": "5%",
      "Batterie": "650mAh",
      "Bouffées": "20000",
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4 animate-slide-in-left">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-card/30 backdrop-blur-sm">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground px-4 py-2 rounded-xl font-black shadow-lg">
                  -25%
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-primary/50" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-primary/50" />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-primary shadow-[var(--shadow-neon)]"
                        : "border-primary/20 hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <p className="text-primary font-bold text-lg mb-2">{product.category}</p>
                <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-foreground/20"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-foreground/90">
                    {product.rating} ({product.reviews} avis)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-black gradient-text">
                  {product.price} DT
                </span>
                <span className="text-2xl text-foreground/40 line-through">
                  {product.oldPrice} DT
                </span>
              </div>

              {/* Description */}
              <p className="text-foreground/70 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4 p-6 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <label className="font-bold text-foreground">Quantité:</label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="border-primary/30 hover:bg-primary/10"
                    >
                      -
                    </Button>
                    <span className="font-black text-2xl w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="border-primary/30 hover:bg-primary/10"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Ajouter au panier
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-bold text-lg border-primary/30 hover:bg-primary/10"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Favoris
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-primary/20 text-center">
                  <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-bold">Livraison rapide</p>
                </Card>
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-primary/20 text-center">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-bold">Garantie 1 an</p>
                </Card>
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-primary/20 text-center">
                  <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-bold">En stock</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-24 animate-slide-in-up">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-card/30 backdrop-blur-sm border border-primary/20 p-1">
                <TabsTrigger value="features" className="font-bold">Caractéristiques</TabsTrigger>
                <TabsTrigger value="specs" className="font-bold">Spécifications</TabsTrigger>
                <TabsTrigger value="reviews" className="font-bold">Avis ({product.reviews})</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-8">
                <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20">
                  <h3 className="text-2xl font-black mb-6 gradient-text">Caractéristiques principales</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground/80 font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="mt-8">
                <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20">
                  <h3 className="text-2xl font-black mb-6 gradient-text">Spécifications techniques</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-primary/10 pb-4">
                        <span className="font-bold text-foreground/70">{key}</span>
                        <span className="font-black text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20 text-center">
                  <h3 className="text-2xl font-black mb-4 gradient-text">Avis clients</h3>
                  <p className="text-foreground/60">Les avis clients seront bientôt disponibles.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
