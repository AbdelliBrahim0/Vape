import { motion } from "framer-motion";
import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import MagicBento from '@/components/MagicBento';
import ScrollVelocity from '@/components/ScrollVelocity';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Footer } from '@/components/Footer';
import CategorySection from '@/components/CategorySection';
import { Star, ShoppingCart } from 'lucide-react';
import { ProductShowcaseCarousel } from '@/components/product-showcase-carousel';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import VapeLogo from '@/assets/test/VapeLogo.png';

// Données des produits (à importer depuis Shop.tsx dans un vrai projet)
const allProducts = [
  {
    id: '1',
    name: "VOZOL GEAR 20k 5%",
    price: 45,
    originalPrice: 55,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/VOZOL-Gear-Power-20000-Puffs.webp",
    badge: "En promotion",
    category: "Puff"
  },
  {
    id: '2',
    name: "VOZOL GEAR 10k 5%",
    price: 35,
    originalPrice: 55,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/0c5EWQuea4cqPi4odwtz4wQX9NETaUNQ113o4MUb.webp",
    badge: "En promotion",
    category: "Puff"
  },
  {
    id: '3',
    name: "Wotofo NexBar 10k",
    price: 35,
    originalPrice: 59,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/wKU1v7SUfxdJ0cYyiIVwOjGJBw8AjxUm1WdRfCH8.webp",
    badge: "En promotion",
    category: "Puff"
  },
  {
    id: '4',
    name: "Wotofo Ultra 20K DTL",
    price: 60,
    originalPrice: 79,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Gc5P23pawAA2lcT.webp",
    badge: "En promotion",
    category: "Puff"
  },
  {
    id: '5',
    name: "Vape Adalya ADC25000 puffs",
    price: 70,
    originalPrice: 99,
    rating: 5,
    image: "https://cloudtiktak.com/media/static/media/Vape-Adalya-25000-Puff-WATERMELON-ICE.webp",
    badge: "En promotion",
    category: "Puff"
  },
  {
    id: '6',
    name: "Kit Complet Wotofo NexPod 5000 puffs",
    price: 40,
    originalPrice: 59,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/9RRoPiPy2vsj61k5ju15M5Vs2C23YpuWwm96LG0c.png",
    badge: "En promotion",
    category: "Puff"
  },
  {
    id: '7',
    name: "Box Vaporesso Armour Max",
    price: 289,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/YRD0SCuWRNoD34yWmM10v7glLCi7cukoa2QmgNSs.png",
    category: "BOX"
  },
  {
    id: '8',
    name: "Box L200 Legend 2",
    price: 244,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/nNSuS2AWcNv5ntVbxJlBkZ2KkRmamU7Zckuhby7f.png",
    category: "BOX"
  },
  {
    id: '9',
    name: "Atomiseur Dead Rabbit V3",
    price: 159,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/A7evd97vZtNeiTNOKSy5dxB8Fw2GKWvW287aTA8f.png",
    category: "ATOMISEUR"
  },
  {
    id: '10',
    name: "Pod Vaporesso Osmall 2",
    price: 75,
    rating: 5,
    image: "https://cdn.youcan.shop/stores/e487b270c6f9abecf91e4d4cac023dea/products/LhBZqZGOhs0PIIYe1Vbvtt0mJrqe1eHmFnVgWq0j.png",
    category: "POD"
  }
];

// Nouveautés (les 6 premiers produits)
const newArrivals = allProducts.slice(0, 6);

// Meilleures ventes (sélection des produits les plus populaires)
const bestSellers = [
  allProducts[0],  // VOZOL GEAR 20k 5%
  allProducts[2],  // Wotofo NexBar 10k
  allProducts[6],  // Box Vaporesso Armour Max
  allProducts[8]   // Atomiseur Dead Rabbit V3
];

const Index = () => {
  const { addToCart } = useCart();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollVelocity texts={['🧪NanoVapeLab', 'Pure-Vape-Science🔬']} velocity={100} className="custom-scroll-text" />
      <div className="flex justify-center">
        <motion.img  
          src={VapeLogo}  
          alt="Vape Logo" 
          className="h-64 object-contain" 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         />
      </div>
      <ProductShowcaseCarousel className="-mt-16" />
      <div className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
        </div>
        <div className="relative text-center">
          <h2 className="inline-block text-4xl md:text-5xl font-extrabold text-[#0c80fd]">
            Nos Catégories
          </h2>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de produits de haute qualité
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <MagicBento 
            textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          />
        </div>
      </div>

      {/* Section Nouveautés */}
      <div className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nouveautés</h2>
            <p className="text-xl text-gray-300">Découvrez nos dernières arrivées</p>
          </div>
          
          <div className="relative">
            <div className="carousel-container">
              <div className="carousel-track">
                {newArrivals.map((product) => (
                  <div key={product.id} className="carousel-slide">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 mx-2">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        {product.badge && (
                          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-white mb-1 line-clamp-2 h-14">{product.name}</h3>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-white">{product.price} TND</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                {product.originalPrice} TND
                              </span>
                            )}
                          </div>
                          <Button 
                            onClick={() => addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image
                            })}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Ajouter au panier
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-10 -ml-4 hover:bg-opacity-100 transition-all"
              onClick={() => {
                const track = document.querySelector('.carousel-track');
                if (track) track.scrollBy({ left: -300, behavior: 'smooth' });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-10 -mr-4 hover:bg-opacity-100 transition-all"
              onClick={() => {
                const track = document.querySelector('.carousel-track');
                if (track) track.scrollBy({ left: 300, behavior: 'smooth' });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <style jsx>{`
            .carousel-container {
              width: 100%;
              overflow: hidden;
              position: relative;
            }
            .carousel-track {
              display: flex;
              overflow-x: auto;
              scroll-behavior: smooth;
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
              scroll-snap-type: x mandatory;
              padding: 1rem 0;
            }
            .carousel-track::-webkit-scrollbar {
              display: none;  /* Hide scrollbar for Chrome, Safari and Opera */
            }
            .carousel-slide {
              flex: 0 0 calc(100% / 3);
              padding: 0 0.5rem;
              scroll-snap-align: start;
            }
            @media (max-width: 1024px) {
              .carousel-slide {
                flex: 0 0 50%;
              }
            }
            @media (max-width: 640px) {
              .carousel-slide {
                flex: 0 0 100%;
              }
            }
          `}</style>
        </div>
      </div>

      {/* Section Meilleures ventes */}
      <div id="meilleures-ventes" className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meilleures ventes</h2>
            <p className="text-xl text-gray-300">Les produits les plus populaires</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-white mb-2 line-clamp-2 h-14">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">{product.price} TND</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice} TND
                        </span>
                      )}
                    </div>
                    <Button 
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                      })}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Ajouter au panier
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Autres sections... */}
      <Footer />
    </div>
  );
};

export default Index;