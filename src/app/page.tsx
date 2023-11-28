"use client";
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import MessiLogo from '@/../../public/messi-logo.png';  // Asegúrate de importar la ruta correcta de la imagen
import Image from 'next/image';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [equiposOpen, setEquiposOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setEquiposOpen(false);
  };

  const toggleEquipos = () => {
    setEquiposOpen(!equiposOpen);
  };

  useEffect(() => {
    console.log("use client");
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-black min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        <div className="md:h-16 md:mb-4 flex items-center mt-8 order-2 md:order-1"> 
          <button
            className="ml-4 px-2 py-1 rounded text-white transition-colors"
            onClick={toggleMenu}
          >
            Menú
          </button>

          {menuOpen && (
            <div className="absolute top-8 right-20 w-64 h-full p-4 rounded shadow-md" style={{ background: 'linear-gradient(to bottom, #004d98, rgba(0, 77, 152, 0))' }}>
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-bold text-white">Menú</div>
                <button
                  className="text-white hover:text-white focus:outline-none"
                  onClick={toggleMenu}
                >
                  <div className='hover:bg-red-600 p-2'>  
                    X
                  </div> 
                </button>
              </div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">Historial de partidos</a></li>
                <li className="mb-2">
                  <div className="flex items-center">
                    <button
                      className="text-left focus:outline-none"
                      onClick={toggleEquipos}
                    >
                      Equipos
                    </button>
                  </div>
                  {equiposOpen && (
                    <ul className="pl-4 space-y-1">
                      <li><a href="#" className="hover:text-purple-400 pb-2 pt-2">Argentina</a></li>
                      <li><a href="#" className="hover:text-purple-400 pb-2 pt-2">Paris Saint-Germain</a></li>
                      <li><a href="#" className="hover:text-purple-400 pb-2 pt-2">Miami</a></li>
                      <li><a href="#" className="hover:text-purple-400 pb-2 pt-2">Barcelona</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="#" className="hover:text-purple-400">Vida personal</a></li>
                <li><a href="#" className="hover:text-purple-400">Historia</a></li>
                <li><a href="#" className="hover:text-purple-400">Estadísticas y premios</a></li>
              </ul>
            </div>
          )}
        </div>

        <div className="md:h-16 md:mb-4 md:ml-auto order-1 md:order-2"> 
          <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} />
        </div>

        <div className="text-center mt-4 md:mt-0 order-3">
          {/* Contenido de la Página */}
          <div className="text-black">
            {/* Contenido de la sección de Equipos */}
            {equiposOpen && (
              <div className="pl-4 space-y-1">
                <p>Contenido de la sección de Equipos...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
