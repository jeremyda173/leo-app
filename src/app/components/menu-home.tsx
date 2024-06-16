'use client';
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';
import Portada from '@/../../public/Portada2.jpg';
import Image from "next/image";
import DarkMode from "./dark-mode";

interface MenuProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Menu: React.FC<MenuProps> = ({ darkMode, toggleDarkMode }) => {
    const [activeOption, setActiveOption] = useState<string>('');

    return (
        <div className="relative">
            {/* Imagen de fondo */}
            <Image src={Portada} layout="fill" objectFit="cover" alt="Portada" className="z-0" />
            
            {/* Contenedor del menú */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-purple-600 to-blue-500 bg-opacity-75 py-4 shadow-lg">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo de Messi */}
                    <div className="flex items-center">
                        <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} className="mr-4"/>
                        <span className="text-white text-2xl font-bold">Messi</span>
                    </div>
                    {/* Opciones del Menú */}
                    <div className="flex items-center space-x-8">
                        {["home", "match-history", "awards", "teams", "family"].map(option => (
                            <a
                                key={option}
                                href={`/${option}`}
                                className={`relative text-white font-semibold transition-all duration-300 ${
                                    activeOption === option ? 'text-gray-200' : ''
                                }`}
                                onMouseEnter={() => setActiveOption(option)}
                                onMouseLeave={() => setActiveOption('')}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                                {activeOption === option && (
                                    <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>
                                )}
                            </a>
                        ))}
                        {/* Toggle para el modo oscuro */}
                        <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
