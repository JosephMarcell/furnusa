'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apa itu FURNUSA?",
    answer: "FURNUSA (Furniture Nusantara) adalah marketplace furniture online yang menyediakan berbagai macam furniture berkualitas tinggi dengan desain khas Nusantara. Kami menghubungkan pengrajin terbaik Indonesia dengan pelanggan yang mencari furniture berkualitas."
  },
  {
    question: "Bagaimana cara memesan furniture di FURNUSA?",
    answer: "Anda dapat memesan furniture dengan cara: 1) Pilih produk yang diinginkan, 2) Klik 'Beli Sekarang' atau 'Tambah ke Keranjang', 3) Isi data pengiriman, 4) Pilih metode pembayaran, 5) Konfirmasi pesanan. Tim kami akan menghubungi Anda untuk konfirmasi lebih lanjut."
  },
  {
    question: "Apakah furniture di FURNUSA original dan berkualitas?",
    answer: "Ya, semua furniture di FURNUSA adalah original dan dibuat oleh pengrajin berpengalaman. Kami melakukan kurasi ketat terhadap setiap penjual dan produk untuk memastikan kualitas terbaik. Setiap produk juga dilengkapi dengan garansi."
  },
  {
    question: "Berapa lama waktu pengiriman?",
    answer: "Waktu pengiriman bervariasi tergantung lokasi dan jenis produk: 1) Produk ready stock: 3-7 hari kerja, 2) Produk custom/made to order: 2-4 minggu, 3) Furniture besar: 1-2 minggu. Kami akan memberikan estimasi waktu yang lebih akurat saat konfirmasi pesanan."
  },
  {
    question: "Apakah ada layanan pemasangan furniture?",
    answer: "Ya, kami menyediakan layanan pemasangan gratis untuk furniture tertentu (nilai pembelian di atas Rp 5.000.000). Untuk furniture lainnya, tersedia layanan pemasangan dengan biaya tambahan. Tim teknisi kami berpengalaman dan profesional."
  },
  {
    question: "Bagaimana kebijakan pengembalian barang?",
    answer: "Kami menerima pengembalian barang dalam kondisi: 1) Barang rusak saat pengiriman, 2) Barang tidak sesuai deskripsi, 3) Cacat produksi. Pengembalian dapat dilakukan maksimal 7 hari setelah barang diterima dengan kondisi barang masih utuh dan kemasan asli."
  },
  {
    question: "Apa itu layanan Premium FURNUSA?",
    answer: "Layanan Premium adalah layanan custom design furniture sesuai kebutuhan dan keinginan Anda. Meliputi konsultasi gratis, pembuatan desain 3D, pemilihan material premium, dan pengerjaan oleh master craftsman. Cocok untuk proyek interior khusus."
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima berbagai metode pembayaran: 1) Transfer bank (BCA, Mandiri, BNI, BRI), 2) E-wallet (OVO, GoPay, DANA), 3) Kartu kredit/debit, 4) Cicilan 0% (untuk pembelian tertentu), 5) COD (Cash on Delivery) untuk area tertentu."
  },
  {
    question: "Apakah ada garansi untuk furniture yang dibeli?",
    answer: "Ya, setiap furniture dilengkapi dengan garansi: 1) Garansi struktur: 2-5 tahun (tergantung jenis produk), 2) Garansi finishing: 1-2 tahun, 3) Garansi spare part: 6 bulan-1 tahun. Garansi tidak berlaku untuk kerusakan akibat pemakaian yang tidak wajar."
  },
  {
    question: "Bagaimana cara menghubungi customer service?",
    answer: "Anda dapat menghubungi customer service kami melalui: 1) WhatsApp: +62 812-3456-7890, 2) Email: cs@furnusa.com, 3) Live chat di website (jam kerja 08:00-17:00 WIB), 4) Telepon: (021) 1234-5678. Tim kami siap membantu Anda setiap hari."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang FURNUSA
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-amber-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-amber-900 pr-4">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-amber-600 transform transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-amber-100 pt-4">
                    <p className="text-amber-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-800 to-orange-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-amber-100 mb-6">
            Tim customer service kami siap membantu Anda 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-400 text-amber-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Hubungi WhatsApp
            </button>
            <button className="border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-amber-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Kirim Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}