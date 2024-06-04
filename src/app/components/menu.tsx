'use client';
import { useState } from "react";
import React from "react";
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';
import Image from "next/image";

function Menu() {
    const [activeOption, setActiveOption] = useState(String);
    const [darkMode, setDarkMode] = useState(false); // Estado para controlar el modo oscuro

    // Función para cambiar el modo entre claro y oscuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    // Clases condicionales para los elementos del menú según el estado del modo oscuro
    const menuItemClass = darkMode ? "text-white" : "text-black";
    const menuBgClass = darkMode ? "bg-gray-800" : "bg-gray-200";
    
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
                        href="/match-history"
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
                        Teams
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
                    {/* Toggle para el modo oscuro */}
                    <label
                        className="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]"
                    >
                        <span
                            className="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"
                        ></span>
                        <div
                            className="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]"
                        >
                            <div
                                className="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"
                            ></div>
                        </div>
                        <div
                            className="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"
                        ></div>
                        <input className="peer h-[1em] w-[1em] opacity-0" id="toggleDarkMode" name="" type="checkbox" checked={darkMode} />
                        <span
                            className="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]"
                        >
                            <span className="relative h-full w-full rounded-full">
                                <span
                                    className="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"
                                ></span>
                            </span>
                        </span>
                    </label>

                </div>
            </div>
        </>
    );
}

export default Menu;