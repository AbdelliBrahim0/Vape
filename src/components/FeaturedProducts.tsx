import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from '@/contexts/CartContext';

const allProducts = [
  {
    id: "1",
    name: "VOZOL GEAR 20k 5%",
    category: "Puff",
    price: 45,
    originalPrice: 55,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/VOZOL-Gear-Power-20000-Puffs.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: "2",
    name: "VOZOL GEAR 10k 5%",
    category: "Puff",
    price: 35,
    originalPrice: 55,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/0c5EWQuea4cqPi4odwtz4wQX9NETaUNQ113o4MUb.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: "3",
    name: "Wotofo NexBar 10k",
    category: "Puff",
    price: 35,
    originalPrice: 59,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/wKU1v7SUfxdJ0cYyiIVwOjGJBw8AjxUm1WdRfCH8.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: "4",
    name: "wotofo nexbar 18k",
    category: "Puff",
    price: 45,
    originalPrice: 59,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/nexbar-18k-puffs-wotofo.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: "5",
    name: "Wotofo Ultra 20K DTL (chicha)",
    category: "Puff",
    price: 60,
    originalPrice: 79,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Gc5P23pawAA2lcT.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: "6",
    name: "Vape Adalya ADC25000 puffs",
    category: "Puff",
    price: 70,
    originalPrice: 99,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Vape-Adalya-25000-Puff-WATERMELON-ICE.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: "7",
    name: "Kit Complet Wotofo NexPod 5000 puffs Tunisie",
    category: "Puff",
    price: 40,
    originalPrice: 59,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/9RRoPiPy2vsj61k5ju15M5Vs2C23YpuWwm96LG0c.png",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: "8",
    name: "Cartouche NexPOD 5000 Puffs Tunisie - Capsule Nexpod 2% Nic",
    category: "Puff",
    price: 20,
    originalPrice: 55,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/LjPGLsmjPMz0ack7ePfdlpOMK3C7cyCKJWYPfndn.png",
    badge: "En promotion",
    inStock: true,
  },
  
  {
    id: "10",
    name: "Kit Aegis Legend 2 L200 Tunisie - Geek Vape Avec 2 Batterie Sony Vtc6 Original 3000mAh",
    category: "kit",
    price: 310,
    rating: 5,
    image: "https://selectvape.com/wp-content/uploads/2021/06/geekvape-l200-aegis-legend-2-device-595x595.jpg",
    inStock: true,
  },
  {
    id: "11",
    name: "Kit Aegis Legend 2 L200 Tunisie - Geek Vape Avec 2 Batterie Sony Vtc6 Original 3000mAh",
    category: "kit",
    price: 359,
    rating: 5,
    image: "https://vkdxb.com/cdn/shop/files/Geekvape-L200-classic-vape-starter-kit-DUBAI.jpg?v=1755832578&width=416",
    inStock: true,
  },
  {
    id: "12",
    name: "Box Vaporesso Armour Max Tunisie - Box 220W Durable & Robuste 2024",
    category: "BOX",
    price: 289,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/YRD0SCuWRNoD34yWmM10v7glLCi7cukoa2QmgNSs.png",
    inStock: true,
  },
  {
    id: "13",
    name: "Box L200 Tunisie - Legend 2 Geek Vape box robuste 200W , Etanche Norme LP68 , Anti-Choc",
    category: "BOX",
    price: 244,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/nNSuS2AWcNv5ntVbxJlBkZ2KkRmamU7Zckuhby7f.png",
    inStock: true,
  },
  {
    id: "14",
    name: "Box Centaurus Q200 Tunisie - Mod Lost Vape 200W",
    category: "BOX",
    price: 219,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/p5HvMwOrZK37VzutJIPedIIEde0qO0bdQhVdHhXO.png",
    inStock: true,
  },
  {
    id: "15",
    name: "Box MVP Tunisie - Dovpo Double Accu 220W",
    category: "BOX",
    price: 219,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/T8T4MdfzZDHnlSjx1X2LQuwmviZ2Gs25iDqmBwuI.png",
    inStock: true,
  },
  {
    id: "16",
    name: "Box Geek Vape T200 Tunisie - Box á Écran Tactile 200W ( Aegis Touch Authentique )",
    category: "BOX",
    price: 259,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/F28TxP905lRYiKKykL05rqBljFBmnQ8YPA2DZoY3.png",
    inStock: true,
  },
  {
    id: "17",
    name: "Box Drag 4 Tunisie - Voopoo 177W",
    category: "BOX",
    price: 259,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/99R3LdV5FivJIzl3NNp7zA9cBkbPvfUtbseh32e3.jpeg",
    inStock: true,
  },
  {
    id: "18",
    name: "Atomiseur Dead Rabbit V3 Tunisie - Ato Coton Reconstructible Dual Coil",
    category: "ATOMISEUR",
    price: 159,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/A7evd97vZtNeiTNOKSy5dxB8Fw2GKWvW287aTA8f.png",
    inStock: true,
  },
  {
    id: "19",
    name: "Atomiseur Wotofo Profile X Rta Tunisie - Ato Coton Reconstructible 8ml",
    category: "ATOMISEUR",
    price: 169,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/NBwkiSOCqqmV6I2xfEsvK3WCg2qmQI90oFtTh4y6.png",
    inStock: true,
  },
  {
    id: "20",
    name: "Atomiseur Kylin Mini V2 Tunisie - Ato Coton Reconstructible Single Coil Vandy Vape",
    category: "ATOMISEUR",
    price: 159,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/Lvq3qSbm6zgIYFIYBNpgpiXSDWtLp0Vji05fzcOO.png",
    inStock: true,
  },
  {
    id: "21",
    name: "Atomiseur Pyro v4 Tunisie - Ato Coton Reconstructible Rdta",
    category: "ATOMISEUR",
    price: 159,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/Bwyhrz325GQGAr7cjE16vMGN0HnzbSFOngXBkGqt.png",
    inStock: true,
  },
  {
    id: "22",
    name: "Pod Gotek X Aspire Tunisie - Kit Transparent Style Moderne",
    category: "POD",
    price: 119,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/tBrxyQ6KbF7PbLPlef6PKixQ8pezh0PCP7ATgMT8.png",
    inStock: true,
  },
  {
    id: "23",
    name: "Pod Vaporesso Osmall 2 tunisie - Type C",
    category: "POD",
    price: 75,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/LhBZqZGOhs0PIIYe1Vbvtt0mJrqe1eHmFnVgWq0j.png",
    inStock: true,
  },
  {
    id: "24",
    name: "Voopoo Doric Galaxy Tunisie - Pod Kit 500mAh + Power Bank 1800mAh 2ml 2024",
    category: "POD",
    price: 239,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/JIZGkxLc9i8962N3Ugq3WL3PAoz0OeLAQndV5zAw.webp",
    inStock: true,
  },
  {
    id: "25",
    name: "Voopoo Drag X2 Tunisie - Vape + Batterie Sumsung 2500mAh Original",
    category: "POD",
    price: 220,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/XYXISah6crR7315oueecWdlRS6Olj5hSg5u4v4dg.png",
    inStock: true,
  },
  {
    id: "26",
    name: "Base Master-DIY",
    category: "Préparation DIY",
    price: 120,
    originalPrice: 140,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Sans_titre-1_TvJC6H3.webp",
    inStock: true,
  },
  {
    id: "27",
    name: "Base Vape or DIY",
    category: "Préparation DIY",
    price: 140,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/51JjiyyPt9L.webp",
    inStock: true,
  },
  {
    id: "28",
    name: "arome concentré fruité",
    category: "Préparation DIY",
    price: 38,
    originalPrice: 40,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Arome-Cocktails-30ml-do-it-e-liquide-fr-380.webp",
    inStock: true,
  },
  {
    id: "29",
    name: "arome concentré gourmand",
    category: "Préparation DIY",
    price: 40,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Arome-RoyalGold-30ml-do-it-e-liquide-fr-380.webp",
    inStock: true,
  },
  {
    id: "30",
    name: "E-liquide diy pret a vaper gourmand flacon de 33ml",
    category: "E-LIQUIDES",
    price: 18,
    originalPrice: 20,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/IkvfmeEVMMFi0vaMsnyVLRYQdqnNoEsSYXmo8Wwi.png",
    inStock: true,
  },
  {
    id: "31",
    name: "E-liquide diy pret a vaper fruité flacon de 33ml",
    category: "E-LIQUIDES",
    price: 13,
    originalPrice: 15,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/Fra0gwaNR3R7j61W4W5TfgH6skjpyVPIpaOFy1or.jpeg",
    inStock: true,
  },
  {
    id: "32",
    name: "E-liquide diy pret a vaper fruité flacon de 33ml",
    category: "E-LIQUIDES",
    price: 13,
    originalPrice: 15,
    rating: 5,
    image: "https://media.taffe-elec.com/37261-large_default/e-liquide-kaji-100ml-vapeto-vape-or-diy-revolute.jpg",
    inStock: true,
  },
  {
    id: "33",
    name: "E-liquide diy pret a vaper fruité flacon de 33ml",
    category: "E-LIQUIDES",
    price: 13,
    originalPrice: 15,
    rating: 5,
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f8582f37-a621-575a-bd5b-19f4859ced54/0d8ec7e7-b587-52a7-8f5d-9ce59490296e.jpg",
    inStock: true,
  },
  {
    id: "34",
    name: "Kit Aegis Legend 2 L200 Tunisie - Geek Vape Avec 2 Batterie Sony Vtc6 Original 3000mAh",
    category: "kit",
    price: 310,
    rating: 5,
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/ec464a7f-70aa-571a-b9a6-1c4b2ad6a67f/687763f5-f218-5b81-b1ec-5af65a9793dd.jpg",
    inStock: true,
  },
  {
    id: "35",
    name: "Kit Aegis Legend 2 L200 Tunisie - Geek Vape Avec 2 Batterie Sony Vtc6 Original 3000mAh",
    category: "kit",
    price: 310,
    rating: 5,
    image: "https://vapor-cloud-tunisia.com/765-large_default/kit-z200-200w-geekvape.jpg",
    inStock: true,
  },
];

// Helper function to get random items from an array
const getRandomItems = (arr: any[], n: number) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const productsByCategory = allProducts.reduce((acc: { [key: string]: any[] }, product) => {
  const category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});

const randomProductsByCategory = Object.keys(productsByCategory).map(category => ({
  category,
  products: getRandomItems(productsByCategory[category], 4)
}));

const animations = [
  'animate-slide-in-up',
  'animate-scale-in',
  'animate-fade-in',
  'animate-slide-in-left',
  'animate-slide-in-right',
];

export const FeaturedProducts = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {randomProductsByCategory.map(({ category, products }, categoryIndex) => (
          <div key={category} className="mb-16">
            <div className="text-center mb-12 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="gradient-text">{category}</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 ${animations[categoryIndex % animations.length]}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badge */}
                    {product.badge &&
                      <div className="absolute top-4 right-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground px-4 py-2 rounded-xl font-black text-sm shadow-lg">
                        {product.badge}
                      </div>
                    }

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[var(--shadow-neon)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                        onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                         panier
                      </Button>
                    </div>

                    {/* 3D floating effect corners */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors duration-500" />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-3">
                    <div className="text-sm font-semibold text-primary/80">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors truncate whitespace-nowrap overflow-hidden">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-bold text-foreground/90">{product.rating}</span>
                      </div>
                      <div className="text-2xl font-black gradient-text">
                        {product.price} DT
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button 
                size="lg"
                variant="outline"
                className="font-bold text-lg px-8 py-6 rounded-xl neon-border hover:bg-primary/10"
                onClick={() => window.location.href = `/shop?category=${category}`}
              >
                Voir tous les produits {category}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
