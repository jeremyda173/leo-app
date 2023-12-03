/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import MessiLogo from '@/../../public/messi-logo.png';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Portada from '@/../../public/Portada.jpg';

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState(null);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Contenido del Dashboard */}
      <div className="flex-1 relative z-10">
        {/* Menú Horizontal */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 flex items-center justify-between">
          {/* Logo de Messi */}
          <div className="flex items-center">
            <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} />
          </div>

          {/* Opciones del Menú */}
          <div className="flex items-center">
            <a
              href="#"
              className={`mr-4 hover:text-gray-300 ${activeOption === 'home' ? 'border-b-2 border-white' : ''}`}
              onMouseEnter={() => setActiveOption('home')}
              onMouseLeave={() => setActiveOption(null)}
            >
              Home
            </a>
            <a
              href="#"
              className={`mr-4 hover:text-gray-300 ${activeOption === 'matchHistory' ? 'border-b-2 border-white' : ''}`}
              onMouseEnter={() => setActiveOption('matchHistory')}
              onMouseLeave={() => setActiveOption(null)}
            >
              Match History
            </a>
            <a
              href="#"
              className={`mr-4 hover:text-gray-300 ${activeOption === 'awards' ? 'border-b-2 border-white' : ''}`}
              onMouseEnter={() => setActiveOption('awards')}
              onMouseLeave={() => setActiveOption(null)}
            >
              Awards
            </a>
            <a
              href="#"
              className={`mr-4 hover:text-gray-300 ${activeOption === 'teams' ? 'border-b-2 border-white' : ''}`}
              onMouseEnter={() => setActiveOption('teams')}
              onMouseLeave={() => setActiveOption(null)}
            >
              Teams
            </a>
            <a
              href="#"
              className={`mr-4 hover:text-gray-300 ${activeOption === 'socialMedia' ? 'border-b-2 border-white' : ''}`}
              onMouseEnter={() => setActiveOption('socialMedia')}
              onMouseLeave={() => setActiveOption(null)}
            >
              Social Media
            </a>
            <a
              href="#"
              className={`mr-4 hover:text-gray-300 ${activeOption === 'family' ? 'border-b-2 border-white' : ''}`}
              onMouseEnter={() => setActiveOption('family')}
              onMouseLeave={() => setActiveOption(null)}
            >
              Family
            </a>
            {/* Agrega más opciones según sea necesario */}
          </div>
        </div>

        {/* Imagen de portada centrada con bordes de gradiente en las esquinas */}
        <div className="w-full h-auto overflow-hidden mt-16 relative">
          <div className="relative">
            <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-tr from-blue-500 to-white"></div>
            <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-tl from-red-500 to-white"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-br from-red-500 to-white"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-bl from-blue-500 to-white"></div>
            <Image src={Portada} alt="Portada" width={400} height={600} />
          </div>
        </div>

        {/* Contenido específico del dashboard */}
        <div className="container mx-auto p-8">
          <p className="text-2xl font-bold mb-4">Welcome to your Dashboard</p>

          {/* Sección de la historia personal de Messi */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Messi's Personal History</h2>
            <p>
              Lionel Messi, born on June 24, 1987, in Rosario, Argentina, is considered one of the greatest football players of all time.
              {/* Agrega más detalles de la historia personal de Messi según sea necesario */}
            </p>
          </div>

          {/* Otro contenido del dashboard */}
          <p>Dashboard content...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
