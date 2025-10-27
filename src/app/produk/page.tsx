import ProductGrid from '@/components/ProductGrid';

export default function ProdukPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Product Grid Component */}
        <ProductGrid />
      </div>
    </div>
  );
}