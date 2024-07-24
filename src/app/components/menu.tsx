'use client';
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';
import Image from "next/image";

const Menu: React.FC = () => {
    const [activeOption, setActiveOption] = useState<string>('');

    useEffect(() => {
        const path = window.location.pathname.split('/')[1];
        setActiveOption(path);
    }, []);

    return (
        <>
            {/* Menú Horizontal */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 flex flex-wrap items-center justify-between">
                {/* Logo de Messi */}
                <div className="flex items-center">
                    <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} />
                </div>
                {/* Opciones del Menú */}
                <div className="flex items-center space-x-6 flex-wrap sm:flex-nowrap">
                    <a
                        href="/home"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'home' ? 'text-gray-200' : ''}`}
                        onClick={() => setActiveOption('home')}
                    >
                        Home
                        {activeOption === 'home' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/match_history"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'match_history' ? 'text-gray-200' : ''}`}
                        onClick={() => setActiveOption('match_history')}
                    >
                        Match History
                        {activeOption === 'match_history' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/awards"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'awards' ? 'text-gray-200' : ''}`}
                        onClick={() => setActiveOption('awards')}
                    >
                        Awards
                        {activeOption === 'awards' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/groups"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'groups' ? 'text-gray-200' : ''}`}
                        onClick={() => setActiveOption('groups')}
                    >
                        Groups
                        {activeOption === 'groups' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/family"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'family' ? 'text-gray-200' : ''}`}
                        onClick={() => setActiveOption('family')}
                    >
                        Family
                        {activeOption === 'family' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                </div>
            </div>

            {/* Estilos */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .sm:flex-nowrap {
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </>
    );
}

export default Menu
