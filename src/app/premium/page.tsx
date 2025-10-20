export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Layanan Premium
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Wujudkan furniture impian Anda dengan layanan custom design eksklusif dari pengrajin terbaik
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-amber-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Free</h3>
                <div className="text-3xl font-bold text-amber-600 mb-2">Gratis</div>
                <p className="text-amber-700">Konsultasi dasar</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Konsultasi gratis 30 menit</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Saran desain dasar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Estimasi harga</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Rekomendasi material</span>
                </li>
              </ul>
              
              <button className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-opacity duration-200 hover:opacity-90" style={{backgroundColor: 'var(--primary)'}}>
                Mulai Konsultasi
              </button>
            </div>

            {/* Paket2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-amber-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populer
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Paket2</h3>
                <div className="text-3xl font-bold text-amber-600 mb-2">Rp 2.500.000</div>
                <p className="text-amber-700">Desain & Konsultasi</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Semua fitur Free</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Desain 3D rendering</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">2x revisi desain</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Gambar teknis detail</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Konsultasi unlimited</span>
                </li>
              </ul>
              
              <button className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-opacity duration-200 hover:opacity-90" style={{backgroundColor: 'var(--primary)'}}>
                Pilih Paket
              </button>
            </div>

            {/* Paket3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-amber-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Paket3</h3>
                <div className="text-3xl font-bold text-amber-600 mb-2">Rp 5.000.000</div>
                <p className="text-amber-700">Full Service Premium</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Semua fitur Paket2</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Produksi furniture</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Material premium</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Pengiriman & instalasi</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-amber-700">Garansi 2 tahun</span>
                </li>
              </ul>
              
              <button className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-opacity duration-200 hover:opacity-90" style={{backgroundColor: 'var(--primary)'}}>
                Pilih Premium
              </button>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Proses Pemesanan Premium
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: 'var(--primary)'}}>
                1
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Konsultasi</h3>
              <p className="text-amber-700 text-sm">Diskusi kebutuhan dan preferensi desain</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: 'var(--primary)'}}>
                2
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Desain</h3>
              <p className="text-amber-700 text-sm">Pembuatan sketsa dan 3D rendering</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: 'var(--primary)'}}>
                3
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Produksi</h3>
              <p className="text-amber-700 text-sm">Pengerjaan oleh craftsman berpengalaman</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: 'var(--primary)'}}>
                4
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Pengiriman</h3>
              <p className="text-amber-700 text-sm">Instalasi dan finishing di lokasi</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl p-8 lg:p-12 text-center text-white" style={{backgroundColor: 'var(--primary)'}}>
          <h2 className="text-3xl font-bold mb-4">
            Siap Mewujudkan Furniture Impian Anda?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Hubungi tim desainer kami untuk konsultasi gratis dan mulai perjalanan menciptakan furniture unik Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-900 font-semibold px-8 py-4 rounded-lg transition-opacity duration-200 hover:opacity-90">
              Konsultasi Gratis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
              Lihat Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}