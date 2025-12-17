import React from 'react';
import { 
    MagnifyingGlassIcon, 
    UserIcon, 
    HeartIcon, 
    ShoppingCartIcon 
} from '@heroicons/react/24/outline';
import logoimg from '../assets/logodark.png';

const Navbar: React.FC = () => {
    return (
        <nav className="flex sticky top-0 z-50 w-full h-16 bg-[#252525]">
        <div className="container mx-auto flex justify-between items-center h-16 px-4 ">
            {/* --- Logo Kiri --- */}
            <img 
                src={logoimg}
                alt="Logo UNY Market" 
                className="h-10 pl-4 box-content object-contain" 
            />

            {/* --- Search Bar --- */}
            <div className="relative w-1/3 mx-4 flex items-center justify-start rounded-full bg-white">
            <MagnifyingGlassIcon className="w-6 h-6 absolute left-3 text-gray-400" />
            <input
                type="text"
                className="w-full py-2 pl-10 pr-4 h-10 placeholder-gray-400 rounded-full bg-white focus:outline-none text-black"
                placeholder="Cari di UY Market"
            />
            </div>

            {/* --- Menu Tengah --- */}
            <div className="hidden md:flex items-center text-[#fff000] font-medium gap-8 lg:gap-14">
            <a href="/" className="hover:text-yellow-200 transition-colors">
                Home
            </a>
            <a href="/catalog" className="hover:text-yellow-200 transition-colors">
                Catalog
            </a>
            <a href="/contact" className="hover:text-yellow-200 transition-colors">
                Contact
            </a>
            </div>

            {/* --- Icon Kanan --- */}
            <div className="flex items-center gap-4 lg:gap-[19px]">
            <a href="/profile" className="hover:opacity-80 transition-opacity text-white">
                <UserIcon className="w-5 h-5" />
            </a>
            <a href="/wishlist" className="hover:opacity-80 transition-opacity text-white">
                <HeartIcon className="w-5 h-5" />
            </a>
            <a href="/cart" className="hover:opacity-80 transition-opacity text-white">
                <ShoppingCartIcon className="w-5 h-5" />
            </a>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;