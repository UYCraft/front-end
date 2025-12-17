import React from 'react';
import logoimg from '../assets/logodark.png';
import unylogo from '../assets/uny_logo.png';
import fblogo from '../assets/fb_footer.png';
import iglogo from '../assets/ig_footer.png';
import xlogo from '../assets/x_footer.png';
import ytlogo from '../assets/yt_footer.png';
import wafooter from '../assets/wa_footer.png';
import gmailfooter from '../assets/gmail_footer.png';
import locfooter from '../assets/loc_footer.png';
import uwit from '../assets/uwit.png';

const Bottombar: React.FC = () => {
  return (
    <footer className="w-full">
        <div className="w-full h-full">
          <img 
            className="w-full h-full object-cover" 
            src={uwit}
            alt="Footer Background Left" 
          />
        </div>

      
      <div className="bg-[#010006] px-12 py-12 text-white">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* --- KOLOM KIRI: Logo & Deskripsi --- */}
          <div className="lg:col-span-3 mt-2">
            <div className="flex items-center">
              {/* w-[53px] -> w-14 (56px) */}
              <img 
                className="w-14 h-14 object-contain" 
                src={unylogo} 
                alt="Logo UNY" 
              />
              {/* ml-[31px] -> ml-8 (32px), h-[46px] -> h-12 (48px) */}
              <img 
                className="w-28 h-12 ml-8 object-contain" 
                src={logoimg}
                alt="Logo Craft Market" 
              />
            </div>

            {/* w-[777px] -> max-w-3xl (768px). Gunakan max-w agar responsif */}
            <div className="max-w-3xl text-justify mt-9 text-xl leading-relaxed">
              Uy Craft Market merupakan sebuah aplikasi E-Commerce Marketplace berbasis website yang digunakan untuk menghubungkan para penjual dan pembeli produk kerajinan tangan lokal di Indonesia.
            </div>
            
            {/* Social Media Icons */}
            <div className="w-60 grid grid-cols-4 gap-4 mt-9">
              <div className="w-12 h-12 hover:opacity-80 transition cursor-pointer">
                <img src={fblogo} alt="Facebook" className="w-full h-full" />
              </div>
              <div className="w-12 h-12 hover:opacity-80 transition cursor-pointer">
                <img src={iglogo} alt="Instagram" className="w-full h-full" />
              </div>
              <div className="w-12 h-12 hover:opacity-80 transition cursor-pointer">
                <img src={xlogo} alt="X" className="w-full h-full rounded-full" />
              </div>
              <div className="w-12 h-12 hover:opacity-80 transition cursor-pointer">
                <img src={ytlogo} alt="Youtube" className="w-full h-full rounded-full" />
              </div>
            </div>
          </div>

          {/* --- KOLOM KANAN: Contact Us --- */}
          {/* mt-15 -> mt-16 (64px) atau mt-10 di layar kecil */}
          <div className="lg:col-span-2 mt-10 lg:mt-6 flex flex-col lg:items-center">
            <div className="w-full lg:w-80">
              {/* text-[24px] -> text-2xl */}
              {/* mb-[21px] -> mb-5 (20px) */}
              <div className="text-left lg:text-center text-2xl font-bold mb-5">
                Contact Us
              </div>
              
              {/* Item Kontak */}
              {/* text-[20px] -> text-xl */}
              <div className="flex items-center mb-3">
                <img src={wafooter} alt="WhatsApp" className="rounded-full w-7 h-7" />
                {/* ml-[15px] -> ml-4 (16px) */}
                <div className="ml-4 text-xl">+6263265478956</div>
              </div>

              <div className="flex items-center mb-3">
                <img src={gmailfooter} alt="Gmail" className="rounded-full w-7 h-7" />
                <div className="ml-4 text-xl">uycraftmarket@gmail.com</div>
              </div>

              <div className="flex items-start mb-3">
                <img src={locfooter} alt="Location" className="rounded-full w-7 h-7 mt-1" />
                <div className="ml-4 text-xl">
                  Jl. Colombo No.1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman,
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT --- */} 
        {/* mt-[45px] -> mt-12 (48px) */}
        <div className="text-center mt-12 text-lg font-medium border-t border-gray-800 pt-8">
          Copyright © 2025. UYCraft Market All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;