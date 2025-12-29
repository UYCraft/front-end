import React from 'react';
import { motion } from 'framer-motion';

import anyamanImg from '../assets/anyaman.jpg'; 
import gerabahImg from '../assets/gerabah.jpg'; 
import ilustrasi from '../assets/ilustrasi.png'; 

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.8, ease: "easeOut" } 
    }
};

const About: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 px-8 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* --- KOLOM KIRI --- */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} 
            >
                <motion.h2 
                    variants={fadeInUp} 
                    className="text-4xl font-bold mb-6 text-black"
                >
                    Tentang Kami
                </motion.h2>
            
                <motion.div 
                    variants={fadeInUp} 
                    className="text-gray-700 text-lg leading-relaxed text-justify space-y-4"
                >
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
                </motion.div>

                {/* Gambar Kecil */}
                <motion.div 
                    variants={fadeInUp} 
                    className="mt-10 flex gap-8"
                >
                    <div className="flex flex-col items-center">
                        <motion.div 
                            className="w-55 h-36 rounded-lg overflow-hidden shadow-md cursor-pointer"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src={anyamanImg} alt="Karya anyaman" className="w-full h-full object-cover"/>
                        </motion.div>
                        <span className="mt-2 text-sm font-medium text-gray-600">karya anyaman bambu</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <motion.div 
                            className="w-55 h-36 rounded-lg overflow-hidden shadow-md cursor-pointer"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src={gerabahImg} alt="Karya gerabah" className="w-full h-full object-cover"/>
                        </motion.div>
                        <span className="mt-2 text-sm font-medium text-gray-600">karya gerabah tanah liat</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* --- KOLOM KANAN --- */}
            <motion.div 
                className="flex justify-center md:justify-end"
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                // PERUBAHAN DISINI JUGA:
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="relative w-full max-w-lg">
                    <motion.img 
                        src={ilustrasi} 
                        alt="Ilustrasi Pengrajin" 
                        className="w-full h-auto object-contain drop-shadow-xl"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>

        </div>
        </section>
    );
};

export default About;