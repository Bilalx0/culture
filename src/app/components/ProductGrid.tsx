'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Tahini with Honey', image: '/images/silaimachine.jpg', bgColor: 'bg-[#FFE5B4]' },
    { id: 2, name: 'Pure Honey', image: '/images/silaimachine.jpg', bgColor: 'bg-[#B4E9FF]' },
    { id: 3, name: 'Butter & Almonds', image: '/images/silaimachine.jpg', bgColor: 'bg-[#FFB4B4]' },
    { id: 4, name: 'Natural Honey', image: '/images/silaimachine.jpg', bgColor: 'bg-[#B4FFB4]' },
  ];

  return (
    <div className="min-h-screen bg-[#D35F50] p-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold">
            No
          </div>
          <h1 className="text-4xl font-bold text-black">Wildly Loved</h1>
        </div>
        <p className="text-lg text-black max-w-xl">
          Our wild honey and tahini products are crafted with care, bringing you natural goodness in every jar.
        </p>
      </div>

      {/* Product Grid with Scroll Animation */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 0 }} // Start aligned
            whileInView={{
              opacity: 1,
              y: index % 2 === 0 ? -40 : 40, // Move up/down dynamically
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered effect
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Oval Background */}
            <div className={`aspect-[3/4] rounded-full ${product.bgColor} transform transition-transform group-hover:scale-105`}>
              {/* Image Container */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image src={product.image} alt={product.name} fill className="object-contain" />
                </div>
              </div>

              {/* Product Name */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-xl font-semibold text-black">{product.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
