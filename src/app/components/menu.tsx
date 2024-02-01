'use client';
import { useState } from "react";
import React from "react";
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';
import Image from "next/image";

function Menu(){
    const [activeOption, setActiveOption] = useState(String);
    return(
        <>
      {/* Menú Horizontal */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 flex items-center justify-between">
        {/* Logo de Messi */}
        <div className="flex items-center">
          <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} />
        </div>
        {/* Opciones del Menú */}
        <div className="flex items-center">
          <a
            href="/home"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'home' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('home')}
            onMouseLeave={() => setActiveOption(String)}
          >
            Home
          </a>
          <a
            href="/match-history"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'matchHistory' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('matchHistory')}
            onMouseLeave={() => setActiveOption(String)}
          >
            Match History
          </a>
          <a
            href="/awards"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'awards' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('awards')}
            onMouseLeave={() => setActiveOption(String)}
          >
            Awards
          </a>
          <a
            href="/teams"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'teams' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('teams')}
            onMouseLeave={() => setActiveOption(String)}
          >
            Teams
          </a>
  
          <a
            href="/family"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'family' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('family')}
            onMouseLeave={() => setActiveOption(String)}
          >
            Family
          </a>
          {/* Agrega más opciones según sea necesario */}
        </div>
      </div>
      </>
    );
}

export default Menu;

