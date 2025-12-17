import React from 'react';

import anyamanImg from '../assets/anyaman.jpg'; 
import gerabahImg from '../assets/gerabah.jpg'; 
import ilustrasi from '../assets/ilustrasi.png'; 

const About: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* --- KOLOM KIRI: Teks & Foto Produk --- */}
            <div>
            <h2 className="text-4xl font-bold mb-6 text-black">Tentang Kami</h2>
            
            <div className="text-gray-700 text-lg leading-relaxed text-justify space-y-4">
                <p>
                UY Craft adalah platform e-commerce yang mempromosikan dan menjual berbagai 
                produk lokal dari Yogyakarta. Kami hadir untuk membantu para pengrajin dan 
                produsen lokal agar dapat terhubung langsung dengan konsumen, sehingga dapat 
                meningkatkan ekonomi kreatif di Indonesia.
                </p>
                <p>
                Produk-produk meliputi kerajinan tangan, pakaian khas daerah, aksesoris, 
                dan produk lokal lainnya yang memiliki nilai seni, keunikan, dan keaslian 
                budaya Indonesia.
                </p>
            </div>

            {/* Bagian 2 Gambar Kecil */}
            <div className="mt-10 flex gap-8">
                {/* Gambar 1 */}
                <div className="flex flex-col items-center">
                <div className="w-55 h-36 rounded-lg overflow-hidden shadow-md">
                    <img 
                    src={anyamanImg} 
                    alt="Karya anyaman bambu" 
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600">karya anyaman bambu</span>
                </div>

                {/* Gambar 2 */}
                <div className="flex flex-col items-center">
                <div className="w-55 h-36 rounded-lg overflow-hidden shadow-md">
                    <img 
                    src={gerabahImg} 
                    alt="Karya gerabah tanah liat" 
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600">karya gerabah tanah liat</span>
                </div>
            </div>
            </div>

            {/* --- KOLOM KANAN: Ilustrasi Besar --- */}
            <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
                {/* Background blob/shape abstrak (opsional, jika ilustrasinya transparan) */}
                {/* <div className="absolute top-10 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl -z-10"></div> */}
                
                <img 
                src={ilustrasi} 
                alt="Ilustrasi Pengrajin" 
                className="w-full h-auto object-contain drop-shadow-xl"
                />
            </div>
            </div>

        </div>
        </section>
    );
};

export default About;