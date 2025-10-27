export default function CatalogPage() {
  return (
    <section className="py-16 wood-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3" style={{color: 'var(--wood-dark)'}}>Catalog</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--wood-primary)'}}>
            Halaman ini menampilkan katalog online Heyzine. Gunakan tombol di kanan untuk membuka di tab baru.
          </p>
        </div>

        {/* Online Catalog (Heyzine) */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <h2 className="text-xl font-semibold mb-3" style={{color: 'var(--wood-dark)'}}>Katalog Online (Heyzine)</h2>
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
            className="w-full h-[70vh] rounded-lg border"
            style={{borderColor: 'var(--wood-light)'}}
          />
        </div>
      </div>
    </section>
  );
}