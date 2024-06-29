'use client';
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';
import Image from "next/image";


const Menu: React.FC = () => {
    const [activeOption, setActiveOption] = useState<string>('');
    return (
        <>
            {/* Menú Horizontal */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 flex items-center justify-between">
                {/* Logo de Messi */}
                <div className="flex items-center">
                    <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} />
                </div>
                {/* Opciones del Menú */}
                <div className="flex items-center space-x-6">
                    <a
                        href="/home"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'home' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('home')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        Home
                        {activeOption === 'home' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/match_history"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'matchHistory' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('matchHistory')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        Match History
                        {activeOption === 'matchHistory' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/awards"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'awards' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('awards')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        Awards
                        {activeOption === 'awards' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/groups"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'teams' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('teams')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        Groups
                        {activeOption === 'teams' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/family"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'family' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('family')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        Family
                        {activeOption === 'family' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                </div>
            </div>
        </>
    );
}

export default Menu;