import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Droplets, Puzzle, Box, Atom, FlaskConical } from 'lucide-react';
import './Categories.css';


const categoriesData = [
  {
    id: 'vapes',
    area: 'vapes',
    title: 'Vapes & Mods',
    subtitle: 'Puissance et performance',
    href: '/categories/vapes-mods',
    Icon: Zap,
  },
  {
    id: 'eliq',
    area: 'eliq',
    title: 'E-Liquides',
    subtitle: 'Saveurs intenses',
    href: '/categories/e-liquides',
    Icon: Droplets,
  },
  {
    id: 'pods',
    area: 'pods',
    title: 'Pods & Kits',
    subtitle: 'Simplicité et discrétion',
    href: '/categories/pods-kits',
    Icon: Puzzle,
    badge: 'Nouveau',
  },
  {
    id: 'box',
    area: 'box',
    title: 'Box & Mods',
    subtitle: 'Personnalisation ultime',
    href: '/categories/box-mods',
    Icon: Box,
  },
  {
    id: 'atom',
    area: 'atom',
    title: 'Atomiseurs',
    subtitle: 'Experts de la vape',
    href: '/categories/atomiseurs',
    Icon: Atom,
  },
  {
    id: 'diy',
    area: 'diy',
    title: 'DIY Lab',
    subtitle: 'Créez votre saveur',
    href: '/categories/diy-lab',
    Icon: FlaskConical,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const CategoryCard = ({ category, index }: { category: (typeof categoriesData)[0]; index: number }) => {
  return (
    <motion.div
      className={`h-full`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <Link
        to={category.href}
        className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-gray-800/50 p-4 md:p-6 shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label={`Explorer la catégorie ${category.title}`}
      >
        <div className="relative z-10">
          <category.Icon className="mb-4 h-8 w-8 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
          <p className="text-sm text-gray-400">{category.subtitle}</p>
          {category.badge && (
            <span className="absolute top-0 right-0 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
              {category.badge}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/70"></div>
        <div className="absolute inset-0 translate-x-full transform bg-blue-500/10 transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
      </Link>
    </motion.div>
  );
};

export const Categories = () => {
  return (
    <section className="bg-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 md:mb-12 text-center text-3xl md:text-4xl font-bold text-white">Explorez nos Catégories</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
          {categoriesData.map((category, index) => (
            <div key={category.id} className="aspect-square">
              <CategoryCard category={category} index={index} />
            </div>
          ))}
        </div>
        <div className="hidden md:block categories-mosaic-grid">
          {categoriesData.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};