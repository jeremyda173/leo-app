'use client';
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';
import Image from "next/image";
import DarkMode from "./dark-mode";
import LanguageToggle from "./menu-button";

interface MenuProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

type Language = 'en' | 'es';

const Menu: React.FC<MenuProps> = ({ darkMode, toggleDarkMode }) => {
    const [activeOption, setActiveOption] = useState<string>('');
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    const menuOptions: Record<Language, { home: string; matchHistory: string; awards: string; teams: string; family: string; }> = {
        en: {
            home: 'Home',
            matchHistory: 'Match History',
            awards: 'Awards',
            teams: 'Teams',
            family: 'Family'
        },
        es: {
            home: 'Inicio',
            matchHistory: 'Historial de Partidos',
            awards: 'Premios',
            teams: 'Equipos',
            family: 'Familia'
        }
    };

    const options = menuOptions[language];

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
                        {options.home}
                        {activeOption === 'home' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/match-history"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'matchHistory' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('matchHistory')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        {options.matchHistory}
                        {activeOption === 'matchHistory' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/awards"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'awards' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('awards')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        {options.awards}
                        {activeOption === 'awards' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/groups"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'teams' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('teams')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        {options.teams}
                        {activeOption === 'teams' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    <a
                        href="/family"
                        className={`relative text-white font-semibold transition-all duration-300 ${activeOption === 'family' ? 'text-gray-200' : ''}`}
                        onMouseEnter={() => setActiveOption('family')}
                        onMouseLeave={() => setActiveOption('')}
                    >
                        {options.family}
                        {activeOption === 'family' && <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded"></span>}
                    </a>
                    {/* Toggle para el modo oscuro */}
                    <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    {/* Toggle para el idioma */}
                    <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
                </div>
            </div>
        </>
    );
}

export default Menu;
