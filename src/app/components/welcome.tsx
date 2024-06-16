// WelcomeSection.js

import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FlagUSA from '@/../../public/us.png';
import FlagDominicanRepublic from '@/../../public/DO.png';
import Portada from '@/../../public/Portada2.jpg';

const WelcomeSection = () => {
  const [showFlags, setShowFlags] = useState(false);

  const handleToggleFlags = () => {
    setShowFlags(!showFlags);
  };

  return (
    <div className="relative">
      {/* Menú superpuesto */}
      <nav className="absolute top-4 left-4 z-10 bg-white bg-opacity-20 p-4 rounded">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800 font-bold hover:text-white hover:p-2 hover:rounded hover:bg-blue-600 hover:opacity-25">Home</a></li>
          <li><a href="#" className="text-gray-800 font-bold hover:text-white hover:p-2 hover:rounded hover:bg-blue-600 hover:opacity-25">Match History</a></li>
          <li><a href="#" className="text-gray-800 font-bold hover:text-white hover:p-2 hover:rounded hover:bg-blue-600 hover:opacity-25">Awards</a></li>
          <li><a href="#" className="text-gray-800 font-bold hover:text-white hover:p-2 hover:rounded hover:bg-blue-600 hover:opacity-25">Teams</a></li>
          <li><a href="#" className="text-gray-800 font-bold hover:text-white hover:p-2 hover:rounded hover:bg-blue-600 hover:opacity-25">Family</a></li>
        </ul>
      </nav>

      {/* Contenido de la imagen con translate */}
      <div className="relative h-screen">
        <Image src={Portada} layout="fill" objectFit="cover" alt="Welcome Banner" />
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleToggleFlags}
            className="flex items-center p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300"
          >
            <FontAwesomeIcon icon={faGlobe} className="text-lg" />
          </button>

          {/* Contenedor de las banderas con animación y tamaño */}
          {showFlags && (
            <div className="absolute top-12 right-0 mt-2 w-24 bg-white bg-opacity-75 shadow-lg rounded-lg overflow-hidden">
              <div className="px-2 py-1 flex items-center justify-between">
                <Image src={FlagUSA} alt="Flag USA" className="w-6 h-6 rounded transform hover:scale-110 transition-transform duration-300 cursor-pointer" /> {/* Imagen de la bandera de Estados Unidos */}
                <Image src={FlagDominicanRepublic} alt="Flag Dominican Republic" className="w-6 h-6 rounded transform hover:scale-110 transition-transform duration-300 cursor-pointer" /> {/* Imagen de la bandera de República Dominicana */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
