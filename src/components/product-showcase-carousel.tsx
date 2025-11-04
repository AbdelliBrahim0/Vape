"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Eye, Star, Zap } from "lucide-react"
// Utilisation du favicon.ico du dossier public

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  isNew?: boolean
  isLimited?: boolean
  isBestseller?: boolean
  colors: string[]
  description: string
}

const showcaseProducts: Product[] = [
  {
    id: 1,
    name: "GRENADINE PÊCHE FRAISE ANANAS",
    price: 45,
    originalPrice: 55,
    image: "https://eliquidevapotrotter.com/wp-content/uploads/2024/07/eliquide-francais-vapotrotter-fifty-vape-roue-de-la-fortune-1.webp",
    category: "E-liquide Fruité",
    rating: 4.7,
    reviews: 128,
    isNew: true,
    colors: ["#FF6B6B", "#FF9E7D", "#FFD166"],
    description: `Une explosion de saveurs tropicales :\n- Mélange sucré de grenadine, pêche, fraise et ananas\n- Arômes naturels et rafraîchissants\n- Sans diacétyle ni additifs nocifs\n- Fabriqué en France\n- Volume : 50ml`,
  },
  {
    id: 2,
    name: "FRUIT DU SERPENT 50ML",
    price: 50,
    originalPrice: 60,
    image: "https://eliquidevapotrotter.com/wp-content/uploads/2024/07/le-mat-1.webp",
    category: "E-liquide Exotique",
    rating: 4.8,
    reviews: 95,
    isLimited: true,
    colors: ["#4ECDC4", "#45B7D1", "#3D5A80"],
    description: `Un mélange mystérieux de fruits exotiques :\n- Association unique de fruits tropicaux\n- Goût frais et envoûtant\n- Ratio PG/VG optimal pour un hit parfait\n- Sans colorants artificiels\n- Volume : 50ml`,
  },
  {
    id: 3,
    name: "Le Drag' du 86 50ml",
    price: 55,
    originalPrice: 65,
    image: "https://vapstore-cbd.fr/2976-large_default/le-drag-du-86-by-vap-store.jpg",
    category: "E-liquide Gourmand",
    rating: 4.9,
    reviews: 210,
    isBestseller: true,
    colors: ["#9B5DE5", "#F15BB5", "#FEE440"],
    description: `Un délice sucré irrésistible :\n- Saveur de tarte aux pommes caramélisées\n- Notes de cannelle et de vanille\n- Vapeur dense et saveur intense\n- Fabriqué en France\n- Volume : 50ml`,
  },
  {
    id: 4,
    name: "WINROOT 3x50ml",
    price: 120,
    originalPrice: 150,
    image: "https://m.media-amazon.com/images/I/819Q-3peZYL.jpg",
    category: "Pack E-liquide",
    rating: 4.6,
    reviews: 178,
    isNew: true,
    colors: ["#00BBF9", "#00F5D4", "#9B5DE5"],
    description: `Pack économique 3x50ml :\n- 3 saveurs fruitées au choix\n- Sans nicotine\n- Qualité premium à prix réduit\n- Idéal pour les gros consommateurs\n- Volume total : 150ml`,
  },
  {
    id: 5,
    name: "RAGNAROK ULTIMATE A&L",
    price: 60,
    originalPrice: 75,
    image: "https://www.daze-vapor-house.com/4713/ragnarok-sels-de-nicotine-aromes-et-liquides.jpg",
    category: "Sels de Nicotine",
    rating: 4.9,
    reviews: 264,
    isBestseller: true,
    colors: ["#F94144", "#F3722C", "#F8961E"],
    description: `L'expérience ultime des sels de nicotine :\n- Mélange explosif de fruits rouges et agrumes\n- Hit doux et rapide\n- Concentration en nicotine personnalisable\n- Pour une vapeur riche en saveurs\n- Volume : 30ml`
  },
]

export function ProductShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState<Record<number, string>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    // Auto-avancement toutes les 5 secondes
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseProducts.length);
    }, 5000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [])

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProducts.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseProducts.length) % showcaseProducts.length)
  }

  const currentProduct = showcaseProducts[currentIndex]

  return (
    <motion.div
      ref={containerRef}
      className="mt-24 py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            SHOWCASE
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our most innovative and sought-after pieces
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Product Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              className="relative"
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                        "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                {/* Product Image */}
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="relative z-10 w-full h-full object-contain"
                  onLoad={() => {
                    // Trigger re-render when image loads
                    window.dispatchEvent(new Event('resize'));
                  }}
                />

                {/* Badges */}
                <div className="absolute top-6 left-6 z-20 flex flex-col space-y-2">
                  {currentProduct.isNew && (
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      NEW
                    </motion.div>
                  )}
                  {currentProduct.isLimited && (
                    <motion.div
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Zap className="w-3 h-3" />
                      <span>LIMITED</span>
                    </motion.div>
                  )}
                  {currentProduct.isBestseller && (
                    <motion.div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      BESTSELLER
                    </motion.div>
                  )}
                </div>

                {/* Quick Actions */}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="space-y-8"
              key={`info-${currentIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-semibold">{currentProduct.category}</span>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(currentProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400">({currentProduct.reviews})</span>
                </div>
              </div>

              {/* Product Name */}
              <motion.h3
                className="text-4xl md:text-5xl font-black leading-tight bg-clip-text text-transparent uppercase tracking-widest drop-shadow-lg"
                style={{ 
                  backgroundImage: 
                    currentProduct.id === 1 ? 'linear-gradient(to right, #d80050, #ff8a9d)' :
                    currentProduct.id === 2 ? 'linear-gradient(to right, #e86500, #ffa64d)' : 
                    currentProduct.id === 3 ? 'linear-gradient(to right, #c7fc04, #6b7280)' : 
                    currentProduct.id === 4 ? 'linear-gradient(to right, #f2b538, #de443a)' : 
                    'linear-gradient(to right, #f97316, #8b5cf6, #06b6d4)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {currentProduct.name}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {currentProduct.description}
              </motion.p>

              {/* Price & Actions */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex space-x-4">
                  <motion.button
                    className={`flex-1 py-4 rounded-xl font-bold text-white text-lg relative overflow-hidden group ${
                      currentProduct.id === 1
                        ? 'bg-gradient-to-r from-[#d80050] to-[#ff8a9d]'
                        : currentProduct.id === 2 
                        ? 'bg-gradient-to-r from-[#e86500] to-[#ffa64d]' 
                        : currentProduct.id === 3
                        ? 'bg-gradient-to-r from-[#c7fc04] to-gray-500'
                        : currentProduct.id === 4
                        ? 'bg-gradient-to-r from-[#f2b538] to-[#de443a]'
                        : 'bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <ShoppingBag className="w-5 h-5" />
                      <span>Consulter</span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevProduct}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors duration-300 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            onClick={nextProduct}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors duration-300 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Product Indicators */}
        <div className="flex justify-center space-x-4 mt-12">
          {showcaseProducts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-16 h-2 rounded-full overflow-hidden ${
                index === currentIndex ? "bg-white/30" : "bg-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {showcaseProducts.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex ? "border-purple-500 scale-105" : "border-gray-700 hover:border-gray-600"
              }`}
              whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // En cas d'erreur de chargement de l'image
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <h5 className="text-white text-sm font-semibold truncate">{product.name}</h5>
                <p className="text-purple-400 text-xs">${product.price}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
