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
            href="/match-history"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'matchHistory' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('matchHistory')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Match History
          </a>
          <a
            href="/awards"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'awards' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('awards')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Awards
          </a>
          <a
            href="/dashboard"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'teams' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('teams')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Teams
          </a>
          <a
            href="/social-media"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'socialMedia' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('socialMedia')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Social Media
          </a>
          <a
            href="/family"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'family' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('family')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Family
          </a>
          {/* Agrega más opciones según sea necesario */}
        </div>
      </div>

      {/* Contenido del Dashboard */}
      <div className="flex-1 relative z-10 container mx-auto p-8 flex items-center">
        {/* Imagen más grande */}
        <div className='w-3/4 border rounded overflow-hidden mr-8'>
          <Image src={Portada} alt={'Messi'} />
        </div>

        {/* Texto más pequeño */}
        <div className="flex flex-col max-w-md">
          <p className="text-lg font-bold mb-4">Welcome to page Leo Messi</p>

          {/* Sección de la historia personal de Messi */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Messi's Personal History</h2>
            <p className='text-justify'>
              Lionel Messi es un futbolista argentino nacido el 24 de junio de 1987 en Rosario, Argentina. Desde joven, Messi mostró un talento excepcional para el fútbol.
            </p>
                <br></br>
            <p className='text-justify'>
              A la edad de 13 años, se trasladó a Barcelona, España, para unirse a la academia juvenil del FC Barcelona, La Masia. Messi rápidamente se destacó en las categorías juveniles del Barcelona, 
              y a los 16 años hizo su debut con el primer equipo en un partido amistoso. Su actuación impresionante llevó al entrenador Frank Rijkaard a darle la oportunidad en la liga española.
            </p>
            {/* Agrega más detalles de la historia personal de Messi según sea necesario */}
          </div>

          {/* Otro contenido del dashboard */}
          <p>Contenido del dashboard...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
