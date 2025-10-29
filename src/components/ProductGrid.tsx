'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { sampleProducts } from '@/data/products';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('Furniture');
  
  const categories = ['Furniture', 'Merchandise'];
  
  const filteredProducts = selectedCategory === 'Furniture' 
    ? sampleProducts.filter(product => product.category !== 'Merchandise')
    : sampleProducts.filter(product => product.category === 'Merchandise');



  return (
    <section className="py-16 wood-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: 'var(--wood-dark)'}}>
            Koleksi Furniture Terbaik
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--wood-primary)'}}>
            Temukan furniture berkualitas tinggi dengan desain yang memukau untuk melengkapi rumah impian Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'wood-gradient-primary text-white shadow-lg'
                  : 'bg-white hover:wood-gradient-warm hover:text-white border-2'
              }`}
              style={selectedCategory !== category ? {
                color: 'var(--wood-primary)',
                borderColor: 'var(--wood-secondary)'
              } : {}}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/produk/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                {/* Product Image */}
                <div className="relative aspect-square wood-gradient-warm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        BARU
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}
                      </span>
                    )}
                  </div>

                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 transition-colors hover:text-[var(--wood-primary)]" style={{color: 'var(--wood-dark)'}}>
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold" style={{color: 'var(--wood-primary)'}}>{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Seller */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{product.seller}</span>
                    <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'var(--wood-light)', color: 'var(--wood-primary)'}}>
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Link 
            href="/produk"
            className="inline-block wood-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-opacity duration-200"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>

    </section>
  );
}