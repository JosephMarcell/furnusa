export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  seller: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: string;
  description?: string;
  type?: string;
  motif?: string;
  philosophy?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export const sampleProducts: Product[] = [
  // Merchandise Items
  {
    id: 9,
    name: "Dharmasara Keseimbangan",
    price: "Rp 35.000",
    seller: "FURNUSA Merchandise",
    rating: 5.0,
    reviews: 0,
    image: "/merchandise/Dharmasara Keseimbangan.png",
    category: "Merchandise",
    isNew: true,
    type: "Bantal cushion dengan motif patra freestyle budaya Kutai, Kalimantan Timur.",
    motif: "Terinspirasi dari topi seraung, rompi baju adat tari Ronggeng Paser, dan mahkota kebesaran Kesultanan Kutai.",
    philosophy: "Menyampaikan pesan peninggalan sejarah pada masa kerajaan dan busana adat lainnya, serta menambah pengetahuan filosofi di balik patra. Menyandingkan simbol kedaulatan dan simbol kerakyatan Kutai, melambangkan prinsip keseimbangan.",
    description: "Motif Dharmasara Keseimbangan dirancang untuk merepresentasikan keseimbangan antara kedaulatan dan kerakyatan dalam budaya Kutai. Menggunakan elemen seraung, rompi adat Ronggeng Paser, dan mahkota kebesaran, pola ini menjadi pengingat nilai sejarah dan filosofi yang menguatkan identitas budaya."
  },
  {
    id: 10,
    name: "Aliran Seraung Kesejahteraan",
    price: "Rp 35.000",
    seller: "FURNUSA Merchandise",
    rating: 5.0,
    reviews: 0,
    image: "/merchandise/Aliran Seraung Kesejahteraan.png",
    category: "Merchandise",
    type: "Bantal cushion dengan motif patra mix budaya Kutai, Kalimantan Timur.",
    motif: "Terinspirasi dari topi seraung dan baju adat tari Ronggeng Paser.",
    philosophy: "Menyampaikan pesan kerja keras para petani (perlindungan seraung) berpadu dengan kegembiraan dan dinamika sosial (tari Ronggeng Paser), sebagai upaya pelestarian budaya Nusantara.",
    description: "Aliran Seraung Kesejahteraan menggabungkan elemen perlindungan dan kegembiraan sebagai simbol kesejahteraan. Kombinasi seraung dan atribut tari Ronggeng Paser menghasilkan motif berenergi yang merefleksikan harmoni sosial dan budaya."
  },
  {
    id: 11,
    name: "Kecantikan Kepala Enggang",
    price: "Rp 35.000",
    seller: "FURNUSA Merchandise",
    rating: 5.0,
    reviews: 0,
    image: "/merchandise/Kecantikan Kepala Enggang.png",
    category: "Merchandise",
    type: "Bantal cushion dengan motif patra freestyle budaya Bontang, Kalimantan Timur.",
    motif: "Menampilkan detail geometris dan kontras warna dengan inspirasi aksesoris tari Kancet Lasan.",
    philosophy: "Menyampaikan keindahan tarian Kancet Lasan yang berfokus pada keagungan dan detail rumit mahkota. Melambangkan martabat, spiritualitas, dan keterampilan seni hias masyarakat Dayak Kenyah.",
    description: "Kecantikan Kepala Enggang menonjolkan elemen mahkota yang megah dengan detail yang rumit, berpadu kontras warna khas etnik. Motif ini menghadirkan kesan anggun dan kuat yang merepresentasikan nilai budaya Dayak Kenyah."
  },
  {
    id: 12,
    name: "Betang Berundak",
    price: "Rp 35.000",
    seller: "FURNUSA Merchandise",
    rating: 5.0,
    reviews: 0,
    image: "/merchandise/Betang Berundak.png",
    category: "Merchandise",
    type: "Bantal cushion dengan motif mix patra budaya Kalimantan Timur, suku Dayak.",
    motif: "Terinspirasi dari rumah adat Betang suku Dayak; susunan patra rumah adat simetris dipadukan siluet patra acak (asimetris).",
    philosophy: "Melambangkan kekuatan komunal, stabilitas, dan prinsip hidup bersama. Pola klasik yang simpel namun sarat nilai etnik.",
    description: "Betang Berundak memadukan keteraturan dan dinamika melalui susunan patra simetris dengan siluet acak. Motif ini menghadirkan nuansa khas Dayak yang menekankan nilai kebersamaan dan stabilitas sosial."
  }
  ,
  // Furniture items (new)
  {
    id: 13,
    name: "BrounTan",
    price: "Rp 850.000 – 1.200.000",
    seller: "FURNUSA Design",
    rating: 5.0,
    reviews: 0,
    image: "/furniture/BrounTan.png",
    category: "Furniture",
    isNew: true,
    type: "Kursi panjang (4-seater)",
    philosophy: "Simplicity with character — sederhana namun berkarakter kuat, mencerminkan fungsi dan estetika yang seimbang.",
    description: "Dirancang untuk menghadirkan kehangatan dan kenyamanan dalam ruang publik. Dengan kaki kayu solid dan dudukan berlapis kulit sintetis, desain ini menonjolkan keseimbangan antara kekuatan material alami dan sentuhan modern.",
    features: [
      "Desain ergonomis dengan kapasitas duduk hingga 4 orang.",
      "Proporsi ideal untuk area publik seperti lobi, kafe, atau ruang tunggu.",
      "Kombinasi warna dan material memberikan kesan profesional dan hangat."
    ],
    specifications: {
      "Rangka & Kaki": "Kayu solid (jati atau mahoni)",
      "Dudukan": "Busa density medium dilapis kulit sintetis coklat tua",
      "Finishing": "Clear coat matte"
    }
  },
  {
    id: 14,
    name: "TongkonWave",
    price: "Rp 1.200.000 – 1.800.000",
    seller: "FURNUSA Design",
    rating: 5.0,
    reviews: 0,
    image: "/furniture/TongkonWave.png",
    category: "Furniture",
    description: "Terinspirasi dari bentuk atap rumah adat Toraja yakni Tongkonan. TongkonWave merepresentasikan keharmonisan antara budaya dan desain kontemporer. Lengkungan dinamisnya menggambarkan semangat kebersamaan dan akar tradisi yang kuat, diwujudkan dalam bentuk modern yang mengalir seperti gelombang.",
    features: [
      "Siluet organik menciptakan kesan artistik dan eksklusif.",
      "Menggabungkan nilai tradisi Nusantara dengan estetika modern.",
      "Ideal sebagai statement piece di ruang komunal atau galeri."
    ],
    specifications: {
      "Rangka": "Kayu mahoni CNC-cut",
      "Dudukan": "Busa HR dilapis kain woven tekstur lembut",
      "Finishing": "PU matte natural"
    }
  },
  {
    id: 15,
    name: "Sage Rest",
    price: "Rp 850.000 – 1.400.000",
    seller: "FURNUSA Design",
    rating: 5.0,
    reviews: 0,
    image: "/furniture/Sage Rest.png",
    category: "Furniture",
    type: "Kursi lounge (armchair)",
    description: "Sage Rest menekankan konsep mindful seating — duduk dengan tenang, menikmati waktu, dan menghargai kesederhanaan desain alami. Bentuknya yang tegas namun lembut menunjukkan keseimbangan antara fungsi dan estetika modern-rustic.",
    features: [
      "Desain ergonomis yang nyaman untuk relaksasi.",
      "Kombinasi rotan dan kayu menciptakan kehangatan visual.",
      "Cocok untuk ruang baca, lounge, atau area santai pribadi."
    ],
    specifications: {
      "Rangka": "Kayu jati atau mahoni solid",
      "Dudukan": "Busa HR dilapis kain linen natural",
      "Detail": "Anyaman rotan alami atau sintetis",
      "Finishing": "Natural oil matte"
    }
  },
  {
    id: 16,
    name: "Contour Cane",
    price: "Rp 900.000 – 1.500.000",
    seller: "FURNUSA Design",
    rating: 5.0,
    reviews: 0,
    image: "/furniture/Contour Cane.png",
    category: "Furniture",
    type: "Kursi besar organik",
    description: "Contour Cane dirancang dengan filosofi soft strength — perpaduan antara kelengkungan lembut dan struktur kuat. Bentuk bundarnya memberi rasa perlindungan dan kenyamanan, cocok sebagai kursi relaksasi atau elemen dekoratif utama dalam ruang.",
    features: [
      "Bentuk lembut dan ergonomis untuk kenyamanan maksimal.",
      "Tampilan elegan yang dapat menjadi pusat perhatian ruangan.",
      "Fleksibel untuk berbagai gaya interior (modern, tropis, kontemporer)."
    ],
    specifications: {
      "Rangka": "Kayu solid (jati belanda / mahoni)",
      "Dudukan": "Busa HR dengan kain woven lembut",
      "Finishing": "Natural matte varnish"
    }
  },
  {
    id: 17,
    name: "Cane harmony",
    price: "Rp 850.000 – 1.500.000",
    seller: "FURNUSA Design",
    rating: 5.0,
    reviews: 0,
    image: "/furniture/Cane harmony.png",
    category: "Furniture",
    type: "Lemari / kabinet rotan",
    description: "Cane Harmony menggabungkan kesederhanaan fungsional dan kehangatan alami. Anyaman rotan pada pintu merepresentasikan sirkulasi udara dan transparansi, sedangkan struktur kayu solid melambangkan keteguhan. Filosofinya adalah natural order in living — keseimbangan antara estetika dan fungsi.",
    features: [
      "Desain Japandi-Boho yang ringan dan elegan.",
      "Ventilasi alami dari pintu rotan.",
      "Proporsi ideal untuk ruang rumah atau kafe modern."
    ],
    specifications: {
      "Kayu": "Jati belanda solid",
      "Pintu": "Anyaman rotan pola hexagonal",
      "Finishing": "Natural wood oil",
      "Dimensi": "Disesuaikan kebutuhan ruang"
    }
  },
  {
    id: 18,
    name: "KR “Kawung Rattan” Chair",
    price: "Rp 1.000.000 – 1.600.000",
    seller: "FURNUSA Design",
    rating: 5.0,
    reviews: 0,
    image: "/furniture/KR “Kawung Rattan” Chair.png",
    category: "Furniture",
    type: "Kursi motif kawung",
    description: "Terinspirasi dari motif Kawung tradisional Jawa yang melambangkan keseimbangan dan kesempurnaan, KR “Kawung Rattan” Chair menghadirkan filosofi budaya dalam wujud furnitur modern. Pola dudukan yang terpisah namun tersusun harmonis mencerminkan keteraturan dan kontinuitas kehidupan.",
    features: [
      "Pola dudukan unik, menciptakan visual khas dan bermakna.",
      "Menggabungkan nilai tradisional dengan gaya kontemporer.",
      "Cocok sebagai kursi aksen untuk ruang publik atau pameran desain."
    ],
    specifications: {
      "Rangka": "Kayu solid",
      "Dudukan": "Rotan alami atau sintetis dengan pola kawung",
      "Finishing": "Clear matte varnish"
    }
  }
];