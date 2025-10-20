'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { usePremium } from '@/contexts/PremiumContext';
import ARPreview from '@/components/ARPreview';
import { Lock } from 'lucide-react';

// Sample product data (in a real app, this would come from an API)
const getProductById = (id: string) => {
  const products = [
    {
      id: 1,
      name: "Meja Makan Kayu Jati Minimalis",
      price: "Rp 3.500.000",
      originalPrice: "Rp 4.200.000",
      seller: "Furniture Jepara",
      rating: 4.8,
      reviews: 124,
      category: "Meja",
      discount: "17%",
      description: "Meja makan kayu jati solid dengan desain minimalis modern. Dibuat dari kayu jati pilihan dengan finishing natural yang tahan lama. Cocok untuk ruang makan keluarga dengan kapasitas 6 orang.",
      specifications: {
        "Material": "Kayu Jati Solid",
        "Dimensi": "180cm x 90cm x 75cm",
        "Berat": "45 kg",
        "Finishing": "Natural Wood Coating",
        "Kapasitas": "6 Orang",
        "Garansi": "2 Tahun"
      },
      features: [
        "Kayu jati berkualitas tinggi",
        "Desain minimalis dan elegan",
        "Tahan rayap dan cuaca",
        "Finishing anti air",
        "Mudah dibersihkan",
        "Ramah lingkungan"
      ],
      images: ["/api/placeholder/600/600", "/api/placeholder/600/600", "/api/placeholder/600/600"],
      inStock: true,
      stockCount: 15
    }
  ];
  
  return products.find(p => p.id === parseInt(id)) || null;
};

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
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
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-32 h-32 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-amber-600' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </button>
              ))}
              {/* AR Preview sebagai foto terakhir */}
              <button
                onClick={() => setArOpen(true)}
                className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-amber-600 flex items-center justify-center"
                aria-label="AR Preview"
                title="AR Preview (Premium)"
              >
                <Lock size={20} className="text-amber-600" />
              </button>
            </div>
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
                <span className="text-3xl font-bold text-amber-800">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                    <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                      -{product.discount}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                {product.inStock ? `Stok tersedia (${product.stockCount} unit)` : 'Stok habis'}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-medium text-amber-900">Jumlah:</span>
              <div className="flex items-center border border-amber-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-amber-700 hover:bg-amber-100"
                >
                  -
                </button>
                <span className="px-4 py-2 font-medium text-amber-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  className="px-3 py-2 text-amber-700 hover:bg-amber-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Beli Sekarang
              </button>
              <button className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Tambah ke Keranjang
              </button>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-900">Deskripsi Produk</h3>
              <p className="text-amber-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-900">Keunggulan</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-amber-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-900">Spesifikasi</h3>
              <div className="bg-white rounded-lg p-4 space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-amber-100 pb-2">
                    <span className="font-medium text-amber-800">{key}</span>
                    <span className="text-amber-700">{value}</span>
                  </div>
                ))}
              </div>
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