import React, { useState } from 'react';
import { 
    MagnifyingGlassIcon, 
    UserIcon, 
    HeartIcon, 
    ShoppingCartIcon 
} from '@heroicons/react/24/outline';
import logoimg from '../assets/logodark.png';
// 1. Tambahkan useLocation di sini
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {

    const navigate = useNavigate();
    // 2. Panggil hook useLocation
    const location = useLocation(); 
    
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    // 3. LOGIKA MENYEMBUNYIKAN NAVBAR
    const hideOnPages = ['/signin', '/signup']; 

    // Jika user berada di halaman signin atau signup, Navbar tidak akan dirender (hilang)
    if (hideOnPages.includes(location.pathname)) {
        return null;
    }

    return (
        <nav className="flex sticky top-0 z-50 w-full h-16 bg-[#252525]">
            <div className="container mx-auto flex justify-between items-center h-16 px-4">
                
                {/* --- 1. Logo Kiri --- */}
                {/* Tambahkan cursor-pointer dan onClick ke Home agar user bisa balik jika tersesat */}
                <img 
                    src={logoimg}
                    alt="Logo UNY Market" 
                    className="h-10 pl-4 box-content object-contain cursor-pointer" 
                    onClick={() => navigate('/')}
                />

                {/* --- 2. Search Bar --- */}
                <div className="relative w-1/3 mx-4 flex items-center justify-start rounded-full bg-white">
                    <MagnifyingGlassIcon className="w-6 h-6 absolute left-3 text-gray-400" />
                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 h-10 placeholder-gray-400 rounded-full bg-white focus:outline-none text-black"
                        placeholder="Cari di UY Market"
                    />
                </div>

                {/* --- 3. LOGIKA KONDISIONAL (KANAN) --- */}
                {isLoggedIn ? (
                    // >>> KONDISI A: SUDAH LOGIN 
                    <>
                        {/* Menu Tengah */}
                        <div className="hidden md:flex items-center text-[#fff000] font-medium gap-8 lg:gap-14">
                            <button onClick={() => navigate('/')} className="hover:text-yellow-200 transition-colors">Home</button>
                            <button onClick={() => navigate('/catalog')} className="hover:text-yellow-200 transition-colors">Catalog</button>
                            <button onClick={() => navigate('/contact')} className="hover:text-yellow-200 transition-colors">Contact</button>
                        </div>

                        {/* Icon Kanan */}
                        <div className="flex items-center gap-4 lg:gap-[19px]">
                            <button onClick={() => navigate('/profile')} className="hover:opacity-80 transition-opacity text-white">
                                <UserIcon className="w-5 h-5" />
                            </button>
                            <button onClick={() => navigate('/wishlist')} className="hover:opacity-80 transition-opacity text-white">
                                <HeartIcon className="w-5 h-5" />
                            </button>
                            <button onClick={() => navigate('/cart')} className="hover:opacity-80 transition-opacity text-white">
                                <ShoppingCartIcon className="w-5 h-5" />
                            </button>
                            
                            {/* Tombol Logout Sementara */}
                            <button onClick={() => setIsLoggedIn(false)} className="text-xs text-red-400 ml-2">(Keluar)</button>
                        </div>
                    </>
                ) : (
                    // >>> KONDISI B: BELUM LOGIN 
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => navigate('/signup')}
                            className="bg-[#4D4D4D] hover:bg-[#3d3d3d] text-[#fff000] font-medium py-2 px-6 rounded-full transition duration-300">
                            Sign Up
                        </button>

                        <button 
                            onClick={() => navigate('/signin')}
                            className="bg-[#EED9C4] hover:bg-[#dec4aa] text-black font-semibold py-2 px-6 rounded-full transition duration-300"
                        >
                            Sign In
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;