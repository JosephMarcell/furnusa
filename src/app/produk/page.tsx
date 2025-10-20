import ProductGrid from '@/components/ProductGrid';

export default function ProdukPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Semua Produk
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Jelajahi koleksi lengkap furniture berkualitas tinggi dari berbagai pengrajin terbaik Nusantara
          </p>
        </div>

        {/* Product Grid Component */}
        <ProductGrid />
      </div>
    </div>
  );
}