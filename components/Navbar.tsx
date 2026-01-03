import React, { useState, useEffect } from 'react';
import { LogOut, Bell, Search, User } from 'lucide-react';

interface NavbarProps {
  onLogout: () => void;
  userEmail: string;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, userEmail }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-colors duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer">DORAMAFLIX</h1>
          <ul className="hidden md:flex gap-6 text-sm text-neutral-300">
            <li className="hover:text-white cursor-pointer transition">Início</li>
            <li className="hover:text-white cursor-pointer transition font-bold text-white">Séries</li>
            <li className="hover:text-white cursor-pointer transition">Bombando</li>
            <li className="hover:text-white cursor-pointer transition">Minha Lista</li>
          </ul>
        </div>

        <div className="flex items-center gap-6 text-white">
          <Search className="w-5 h-5 cursor-pointer hover:text-neutral-300 hidden sm:block" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-neutral-300 hidden sm:block" />
          
          <div className="flex items-center gap-2 group relative">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center cursor-pointer overflow-hidden">
                <User size={18} />
            </div>
            
            {/* Dropdown */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-black border border-neutral-800 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-3 border-b border-neutral-800">
                    <p className="text-xs text-neutral-400">Logado como</p>
                    <p className="text-sm font-bold truncate">{userEmail}</p>
                </div>
                <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-3 text-sm hover:underline flex items-center gap-2 text-neutral-300 hover:text-white"
                >
                    <LogOut size={14} />
                    Sair da DoramaFlix
                </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;