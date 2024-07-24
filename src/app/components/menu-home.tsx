'use client';
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';
import Portada from '@/../../public/Portada2.jpg';
import Image from "next/image";
import { useRouter } from 'next/router';

interface MenuProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Menu: React.FC<MenuProps> = ({ darkMode, toggleDarkMode }) => {
    const [activeOption, setActiveOption] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        // Get the current path and set the active option accordingly
        const path = router.pathname.split('/')[1];
        setActiveOption(path);
    }, [router.pathname]);

    return (
        <div className="relative">
            {/* Imagen de fondo */}
            <Image src={Portada} layout="fill" objectFit="cover" alt="Portada" className="z-0" />

            {/* Contenedor del menú */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-purple-600 to-blue-500 bg-opacity-75 py-4 shadow-lg">
                <div className="container mx-auto flex flex-col items-center">
                    {/* Logo de Messi */}
                    <div className="flex items-center">
                        <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} className="mr-4" />
                        <span className="text-white text-2xl font-bold">Messi</span>
                    </div>
                    {/* Opciones del Menú */}
                    <div className="flex flex-col items-center mt-4 space-y-4">
                        {["home", "match-history", "awards", "teams", "family"].map(option => (
                            <a
                                key={option}
                                href={`/${option}`}
                                className={`text-white font-semibold transition-all duration-300 ${
                                    activeOption === option ? 'text-gray-200' : ''
                                }`}
                                onMouseEnter={() => setActiveOption(option)}
                                onMouseLeave={() => setActiveOption(router.pathname.split('/')[1])}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                                {activeOption === option && (
                                    <span className="block w-full h-1 bg-white rounded"></span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
