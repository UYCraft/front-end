
import bgFull from '../assets/bgfull.jpg'; 

const LandingPage = () => {
  return (
    // Container utama setinggi layar (h-screen)
    <div className="relative w-full h-screen">
      
      {/* 1. Background Image Full Screen */}
      <img 
        src={bgFull} 
        alt="Background Kerajinan Tangan" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. Dark Overlay (Penting agar teks terbaca) 
          bg-black/60 artinya warna hitam dengan opacity 60%
      */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 3. Konten Text */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-20">
        <div className="max-w-2xl text-white mt-1">
          
          {/* Headline Besar */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-sans">
            Website E-Commerce <br />
            Kerajinan Tangan
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light w-full md:w-3/4">
            Merupakan E-Commerce yang menyediakan berbagai macam barang kerajinan tangan tentuYa berkualitas tinggi
          </p>

          {/* Tombol Belanja Sekarang */}
          <button className="bg-[#EED9C4] hover:bg-[#dec4aa] text-black font-semibold py-3 px-8 rounded-lg flex items-center gap-3 transition-all duration-300 group">
            <span>Belanja Sekarang</span>
            {/* Icon Panah (SVG) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
            >
              {/* Panah mengarah serong kanan bawah (sesuai gambar) */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" transform="rotate(90 12 12)" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;