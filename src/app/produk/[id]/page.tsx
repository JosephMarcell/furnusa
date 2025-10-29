'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePremium } from '@/contexts/PremiumContext';
import ARPreview from '@/components/ARPreview';
import { Lock } from 'lucide-react';
import { sampleProducts } from '@/data/products';

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = sampleProducts.find(p => p.id === parseInt(productId));
  const [arOpen, setArOpen] = useState(false);
  const { isPremium } = usePremium();
  const router = useRouter();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-900 mb-4">Produk Tidak Ditemukan</h1>
          <Link href="/" className="text-amber-600 hover:text-amber-800">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-amber-700 mb-8">
          <Link href="/" className="hover:text-amber-900">Beranda</Link>
          <span>/</span>
          <Link href="/produk" className="hover:text-amber-900">Produk</Link>
          <span>/</span>
          <span className="text-amber-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <button
              onClick={() => setArOpen(true)}
              className="w-full flex items-center justify-center gap-2 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              aria-label="AR Preview"
              title="AR Preview (Premium)"
            >
              <Lock size={20} />
              Lihat AR (Premium)
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-amber-900 mb-2">{product.name}</h1>
              <p className="text-amber-700">oleh {product.seller}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium text-amber-900">{product.rating}</span>
                <span className="text-amber-700">({product.reviews} ulasan)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {product.category !== 'Merchandise' && (
                  <span className="text-lg font-medium text-amber-700">Harga Jasa Desain:</span>
                )}
                <span className="text-3xl font-bold text-amber-800">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                    {product.discount && (
                      <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                        -{product.discount}
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Category */}
            <div>
              <span className="text-sm px-2 py-1 rounded" style={{backgroundColor: 'var(--wood-light)', color: 'var(--wood-primary)'}}>
                {product.category}
              </span>
            </div>

            {/* Detail Produk (conditional) */}
            {(product.type || product.motif || product.philosophy) && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-900">Detail Produk</h3>
                {product.type && (
                  <div>
                    <span className="font-medium text-amber-800">Jenis:</span>
                    <p className="text-amber-700">{product.type}</p>
                  </div>
                )}
                {product.motif && (
                  <div>
                    <span className="font-medium text-amber-800">Motif / Patra:</span>
                    <p className="text-amber-700">{product.motif}</p>
                  </div>
                )}
                {product.philosophy && (
                  <div>
                    <span className="font-medium text-amber-800">Filosofi:</span>
                    <p className="text-amber-700">{product.philosophy}</p>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Beli Sekarang
              </button>
              <button className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Tambah ke Keranjang
              </button>
            </div>

            {/* Keunggulan (conditional) */}
            {Array.isArray((product as any).features) && (product as any).features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-900">Keunggulan</h3>
                <ul className="space-y-2">
                  {(product as any).features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-amber-700">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Spesifikasi (conditional) */}
            {product && (product as any).specifications && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-900">Spesifikasi</h3>
                <div className="bg-white rounded-lg p-4 space-y-3">
                  {Object.entries((product as any).specifications as Record<string, string>).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-amber-100 pb-2">
                      <span className="font-medium text-amber-800">{key}</span>
                      <span className="text-amber-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-900">Deskripsi Produk</h3>
              <p className="text-amber-700 leading-relaxed">{product.description || 'Belum ada deskripsi tambahan.'}</p>
            </div>
          </div>
        </div>

        {product && (
          <ARPreview
            productId={product.id}
            productName={product.name}
            isOpen={arOpen}
            onClose={() => setArOpen(false)}
            isPremium={isPremium}
            onUpgradeToPremium={() => router.push('/premium')}
          />
        )}
      </div>
    </div>
  );
}