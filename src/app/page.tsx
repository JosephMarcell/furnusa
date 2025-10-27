import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductGrid />
      {/* Catalog Section on Landing Page */}
      <section className="py-16 wood-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold" style={{color: 'var(--wood-dark)'}}>Catalog</h2>
              <p className="text-lg" style={{color: 'var(--wood-primary)'}}>Lihat katalog online kami langsung dari beranda.</p>
            </div>
            <a
              href="/catalog"
              className="text-sm font-medium underline"
              style={{color: 'var(--wood-primary)'}}
            >
              Lihat semua katalog
            </a>
          </div>

          {/* Heyzine Embed */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm" style={{color: 'var(--wood-primary)'}}>Sumber: heyzine.com</p>
              <a
                href="https://heyzine.com/flip-book/8ac4587a00.html#page/1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{color: 'var(--wood-primary)'}}
              >
                Buka di tab baru
              </a>
            </div>
            <iframe
              src="https://heyzine.com/flip-book/8ac4587a00.html#page/1"
              title="Katalog Online Heyzine"
              loading="lazy"
              className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-lg border"
              style={{borderColor: 'var(--wood-light)'}}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
