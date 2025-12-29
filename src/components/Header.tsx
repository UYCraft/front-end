import React from 'react';
import { motion } from 'framer-motion'; 
import bgFull from '../assets/bgfull.jpg'; 

// --- VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" } 
    },
};

const Header: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
        
        {/* 1. Background Image */}
        <motion.img 
            src={bgFull} 
            alt="Background Kerajinan Tangan" 
            className="absolute inset-0 w-full h-full object-cover"
            
            initial={{ scale: 1.2, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }}   
            transition={{ duration: 1.5, ease: "easeOut" }} 
            
            viewport={{ once: false }} 
        />

        {/* 2. Dark Overlay */}
        <motion.div 
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            viewport={{ once: false }}   
        ></motion.div>

        {/* 3. Konten Text Wrapper */}
        <div className="relative z-10 h-full flex items-center px-8 md:px-20">
            
            <motion.div 
                className="max-w-2xl text-white mt-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" 

                viewport={{ once: false, amount: 0.5 }} 
            >
            
                {/* Headline Besar */}
                <motion.h1 
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-sans"
                    variants={textVariants}
                >
                    Website E-Commerce <br />
                    Kerajinan Tangan
                </motion.h1>

                {/* Subtext */}
                <motion.p 
                    className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light w-full md:w-3/4"
                    variants={textVariants}
                >
                    Merupakan E-Commerce yang menyediakan berbagai macam barang kerajinan tangan tentunya berkualitas tinggi
                </motion.p>

                {/* Tombol Belanja Sekarang */}
                <motion.button 
                    className="bg-[#EED9C4] hover:bg-[#dec4aa] text-black font-semibold py-3 px-8 rounded-lg flex items-center gap-3 transition-all duration-300 group"
                    variants={textVariants}
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}   
                >
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" transform="rotate(90 12 12)" />
                    </svg>
                </motion.button>

            </motion.div>
        </div>
        </div>
    )
}

export default Header