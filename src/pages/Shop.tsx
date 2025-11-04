import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Star, Search, SlidersHorizontal } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const allProducts = [
  {
    id: 1,
    name: "VOZOL GEAR 20k 5%",
    category: "Puff",
    price: "45",
    originalPrice: "55",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/VOZOL-Gear-Power-20000-Puffs.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: 2,
    name: "VOZOL GEAR 10k 5%",
    category: "Puff",
    price: "35",
    originalPrice: "55",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/0c5EWQuea4cqPi4odwtz4wQX9NETaUNQ113o4MUb.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: 3,
    name: "Wotofo NexBar 10k",
    category: "Puff",
    price: "35",
    originalPrice: "59",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/wKU1v7SUfxdJ0cYyiIVwOjGJBw8AjxUm1WdRfCH8.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: 4,
    name: "wotofo nexbar 18k",
    category: "Puff",
    price: "45",
    originalPrice: "59",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/nexbar-18k-puffs-wotofo.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: 5,
    name: "Wotofo Ultra 20K DTL (chicha)",
    category: "Puff",
    price: "60",
    originalPrice: "79",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Gc5P23pawAA2lcT.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: 6,
    name: "Vape Adalya ADC25000 puffs",
    category: "Puff",
    price: "70",
    originalPrice: "99",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Vape-Adalya-25000-Puff-WATERMELON-ICE.webp",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: 7,
    name: "Kit Complet Wotofo NexPod 5000 puffs Tunisie",
    category: "Puff",
    price: "40",
    originalPrice: "59",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/9RRoPiPy2vsj61k5ju15M5Vs2C23YpuWwm96LG0c.png",
    badge: "En promotion",
    inStock: true,
  },
  {
    id: 8,
    name: "Cartouche NexPOD 5000 Puffs Tunisie - Capsule Nexpod 2% Nic",
    category: "Puff",
    price: "20",
    originalPrice: "55",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/LjPGLsmjPMz0ack7ePfdlpOMK3C7cyCKJWYPfndn.png",
    badge: "En promotion",
    inStock: true,
  },
  
  {
    id: 10,
    name: "Kit Aegis Legend 2 L200 Tunisie - Geek Vape Avec 2 Batterie Sony Vtc6 Original 3000mAh",
    category: "kit",
    price: "310",
    rating: 5,
    image: "https://selectvape.com/wp-content/uploads/2021/06/geekvape-l200-aegis-legend-2-device-595x595.jpg",
    inStock: true,
  },
  {
    id: 11,
    name: "Kit Aegis Legend 2 L200 Tunisie - Geek Vape Avec 2 Batterie Sony Vtc6 Original 3000mAh",
    category: "kit",
    price: "359",
    rating: 5,
    image: "https://vkdxb.com/cdn/shop/files/Geekvape-L200-classic-vape-starter-kit-DUBAI.jpg?v=1755832578&width=416",
    inStock: true,
  },
  {
    id: 12,
    name: "Box Vaporesso Armour Max Tunisie - Box 220W Durable & Robuste 2024",
    category: "BOX",
    price: "289",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/YRD0SCuWRNoD34yWmM10v7glLCi7cukoa2QmgNSs.png",
    inStock: true,
  },
  {
    id: 13,
    name: "Box L200 Tunisie - Legend 2 Geek Vape box robuste 200W , Etanche Norme LP68 , Anti-Choc",
    category: "BOX",
    price: "244",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/nNSuS2AWcNv5ntVbxJlBkZ2KkRmamU7Zckuhby7f.png",
    inStock: true,
  },
  {
    id: 14,
    name: "Box Centaurus Q200 Tunisie - Mod Lost Vape 200W",
    category: "BOX",
    price: "219",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/p5HvMwOrZK37VzutJIPedIIEde0qO0bdQhVdHhXO.png",
    inStock: true,
  },
  {
    id: 15,
    name: "Box MVP Tunisie - Dovpo Double Accu 220W",
    category: "BOX",
    price: "219",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/T8T4MdfzZDHnlSjx1X2LQuwmviZ2Gs25iDqmBwuI.png",
    inStock: true,
  },
  {
    id: 16,
    name: "Box Geek Vape T200 Tunisie - Box á Écran Tactile 200W ( Aegis Touch Authentique )",
    category: "BOX",
    price: "259",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/F28TxP905lRYiKKykL05rqBljFBmnQ8YPA2DZoY3.png",
    inStock: true,
  },
  {
    id: 17,
    name: "Box Drag 4 Tunisie - Voopoo 177W",
    category: "BOX",
    price: "259",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/99R3LdV5FivJIzl3NNp7zA9cBkbPvfUtbseh32e3.jpeg",
    inStock: true,
  },
  {
    id: 18,
    name: "Atomiseur Dead Rabbit V3 Tunisie - Ato Coton Reconstructible Dual Coil",
    category: "ATOMISEUR",
    price: "159",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/A7evd97vZtNeiTNOKSy5dxB8Fw2GKWvW287aTA8f.png",
    inStock: true,
  },
  {
    id: 19,
    name: "Atomiseur Wotofo Profile X Rta Tunisie - Ato Coton Reconstructible 8ml",
    category: "ATOMISEUR",
    price: "169",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/NBwkiSOCqqmV6I2xfEsvK3WCg2qmQI90oFtTh4y6.png",
    inStock: true,
  },
  {
    id: 20,
    name: "Atomiseur Kylin Mini V2 Tunisie - Ato Coton Reconstructible Single Coil Vandy Vape",
    category: "ATOMISEUR",
    price: "159",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/Lvq3qSbm6zgIYFIYBNpgpiXSDWtLp0Vji05fzcOO.png",
    inStock: true,
  },
  {
    id: 21,
    name: "Atomiseur Pyro v4 Tunisie - Ato Coton Reconstructible Rdta",
    category: "ATOMISEUR",
    price: "159",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/Bwyhrz325GQGAr7cjE16vMGN0HnzbSFOngXBkGqt.png",
    inStock: true,
  },
  {
    id: 22,
    name: "Pod Gotek X Aspire Tunisie - Kit Transparent Style Moderne",
    category: "POD",
    price: "119",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/tBrxyQ6KbF7PbLPlef6PKixQ8pezh0PCP7ATgMT8.png",
    inStock: true,
  },
  {
    id: 23,
    name: "Pod Vaporesso Osmall 2 tunisie - Type C",
    category: "POD",
    price: "75",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/LhBZqZGOhs0PIIYe1Vbvtt0mJrqe1eHmFnVgWq0j.png",
    inStock: true,
  },
  {
    id: 24,
    name: "Voopoo Doric Galaxy Tunisie - Pod Kit 500mAh + Power Bank 1800mAh 2ml 2024",
    category: "POD",
    price: "239",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/JIZGkxLc9i8962N3Ugq3WL3PAoz0OeLAQndV5zAw.webp",
    inStock: true,
  },
  {
    id: 25,
    name: "Voopoo Drag X2 Tunisie - Vape + Batterie Sumsung 2500mAh Original",
    category: "POD",
    price: "220",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/XYXISah6crR7315oueecWdlRS6Olj5hSg5u4v4dg.png",
    inStock: true,
  },
  {
    id: 26,
    name: "Base Master-DIY",
    category: "Préparation DIY",
    price: "120",
    originalPrice: "140",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Sans_titre-1_TvJC6H3.webp",
    inStock: true,
  },
  {
    id: 27,
    name: "Base Vape or DIY",
    category: "Préparation DIY",
    price: "140",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/51JjiyyPt9L.webp",
    inStock: true,
  },
  {
    id: 28,
    name: "arome concentré fruité",
    category: "Préparation DIY",
    price: "38",
    originalPrice: "40",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Arome-Cocktails-30ml-do-it-e-liquide-fr-380.webp",
    inStock: true,
  },
  {
    id: 29,
    name: "arome concentré gourmand",
    category: "Préparation DIY",
    price: "40",
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Arome-RoyalGold-30ml-do-it-e-liquide-fr-380.webp",
    inStock: true,
  },
  {
    id: 30,
    name: "E-liquide diy pret a vaper gourmand flacon de 33ml",
    category: "E-LIQUIDES",
    price: "18",
    originalPrice: "20",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/IkvfmeEVMMFi0vaMsnyVLRYQdqnNoEsSYXmo8Wwi.png",
    inStock: true,
  },
  {
    id: 31,
    name: "E-liquide diy pret a vaper fruité flacon de 33ml",
    category: "E-LIQUIDES",
    price: "13",
    originalPrice: "15",
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/Fra0gwaNR3R7j61W4W5TfgH6skjpyVPIpaOFy1or.jpeg",
    inStock: true,
  },
  {
    id: 32,
    name: "E-liquide diy pret a vaper fruité flacon de 33ml",
    category: "E-LIQUIDES",
    price: "13",
    originalPrice: "15",
    rating: 5,
    image: "https://media.taffe-elec.com/37261-large_default/e-liquide-kaji-100ml-vapeto-vape-or-diy-revolute.jpg",
    inStock: true,
  },
  {
    id: 33,
    name: "E-liquide diy pret a vaper fruité flacon de 33ml",
    category: "E-LIQUIDES",
    price: "13",
    originalPrice: "15",
    rating: 5,
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f8582f37-a621-575a-bd5b-19f4859ced54/0d8ec7e7-b587-52a7-8f5d-9ce59490296e.jpg",
    inStock: true,
  },
];

// Nouveautés (les 6 premiers produits)
const newArrivals = allProducts.slice(0, 6);

// Meilleures ventes (un mélange de produits populaires)
const bestSellers = [
  allProducts[0], // VOZOL GEAR 20k 5%
  allProducts[2], // Wotofo NexBar 10k
  allProducts[4], // Wotofo Ultra 20K DTL
  allProducts[9], // Kit Aegis Legend 2
  allProducts[11], // Box Vaporesso Armour Max
  allProducts[17], // Atomiseur Dead Rabbit V3
];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const { addToCart } = useCart();

  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return parseFloat(a.price) - parseFloat(b.price);
      if (sortBy === "price-high") return parseFloat(b.price) - parseFloat(a.price);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-center mb-6 animate-slide-in-up">
            <span className="gradient-text">Notre Boutique</span>
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto animate-slide-in-up">
            Explorez notre collection complète de produits premium
          </p>
        </div>
      </section>

      

      {/* Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
                <Input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="bg-background/50 border-primary/30">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="Puff">Puff</SelectItem>
                  <SelectItem value="kit">kit</SelectItem>
                  <SelectItem value="BOX">BOX</SelectItem>
                  <SelectItem value="ATOMISEUR">ATOMISEUR</SelectItem>
                  <SelectItem value="POD">POD</SelectItem>
                  <SelectItem value="Préparation DIY">Préparation DIY</SelectItem>
                  <SelectItem value="E-LIQUIDES">E-LIQUIDES</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-background/50 border-primary/30">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">En vedette</SelectItem>
                  <SelectItem value="price-low">Prix croissant</SelectItem>
                  <SelectItem value="price-high">Prix décroissant</SelectItem>
                  <SelectItem value="rating">Meilleures notes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-foreground/70">
              <span className="font-bold text-primary">{filteredProducts.length}</span> produits trouvés
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground px-4 py-2 rounded-xl font-black text-sm shadow-lg">
                      {product.badge}
                    </div>
                  )}

                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl font-black text-foreground/60">Rupture de stock</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <div className="flex gap-2">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[var(--shadow-neon)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                        disabled={!product.inStock}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: product.id.toString(),
                            name: product.name,
                            price: parseFloat(product.price),
                            image: product.image,
                            quantity: 1
                          });
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Ajouter
                      </Button>
                      <Button 
                        variant="outline"
                        className="bg-background/80 hover:bg-background text-foreground font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                        onClick={() => window.location.href = `/product/${product.id}`}
                      >
                        Détails
                      </Button>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors duration-500" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors duration-500" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-sm font-semibold text-primary/80">
                    {product.category}
                  </div>
                  {/* Truncate the product name to a single line */}
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-2xl font-bold text-foreground/60">
                Aucun produit trouvé
              </p>
              <p className="text-foreground/40 mt-2">
                Essayez de modifier vos filtres de recherche
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(Math.max(1, currentPage - 1));
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(Math.min(totalPages, currentPage + 1));
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
