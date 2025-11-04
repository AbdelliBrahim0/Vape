import React, { useState, useEffect } from 'react';
import './CategorySection.css';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type LayoutType = 'featured-slider' | 'grid-2x2' | 'masonry' | 'carousel';

interface CategorySectionProps {
  title: string;
  layout: LayoutType;
  products: Product[];
  className?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  layout,
  products,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  // Gestion du défilement automatique du slider
  useEffect(() => {
    if (layout === 'featured-slider') {
      const interval = setInterval(() => {
        if (!isHovered) {
          setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 1.5));
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, layout, products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 1.5));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 1.5)) % Math.ceil(products.length / 1.5));
  };
  const renderProducts = () => {
    switch (layout) {
      case 'featured-slider':
        return (
          <div 
            className="featured-slider-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="featured-slider"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {products.map((product, index) => (
                <motion.div 
                  key={`${product.id}-${index}`} 
                  className="featured-product"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="image-container">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`;
                      }}
                    />
                    <div className="category-badge">{product.category}</div>
                  </div>
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <div className="price-container">
                      <span className="price">{product.price.toFixed(2)}€</span>
                      <button className="add-to-cart" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>+</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button 
              className="nav-arrow prev" 
              onClick={prevSlide}
              aria-label="Précédent"
            >
              ‹
            </button>
            <button 
              className="nav-arrow next" 
              onClick={nextSlide}
              aria-label="Suivant"
            >
              ›
            </button>
          </div>
        );

      case 'grid-2x2':
        return (
          <div className="grid-2x2">
            {products.slice(0, 4).map((product, index) => (
              <motion.div 
                key={product.id} 
                className="grid-product"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(product.name)}`;
                    }}
                  />
                  <div className="category-badge">{product.category}</div>
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <div className="price-container">
                    <span className="price">{product.price.toFixed(2)}€</span>
                    <button className="add-to-cart" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={`category-section ${layout} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {renderProducts()}
      <button className="view-more">Voir plus de {title}</button>
    </section>
  );
};

export default React.memo(CategorySection);
