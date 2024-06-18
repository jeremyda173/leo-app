'use client';
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FlagUSA from '@/../../public/us.png';
import FlagDominicanRepublic from '@/../../public/DO.png';
import Portada from '@/../../public/Portada2.jpg';
import { translate, setLocale } from '@/app/components/translate';

const WelcomeSection = () => {
  const [showFlags, setShowFlags] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleToggleFlags = useCallback(() => {
    setShowFlags(prevShowFlags => !prevShowFlags);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setLocale(lang);
  };

  const handleKeyDown = (event: React.KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  return (
    <div className="relative">
      {/* Menú superpuesto */}
      <nav className="absolute top-4 left-4 z-10 bg-white bg-opacity-5 p-4 rounded">
        <ul className="flex space-x-4">
          {['home', 'match_history', 'awards', 'teams', 'family'].map((key) => (
            <li key={key}>
              <a
                href={`/${key}`}
                className="text-gray-800 font-bold hover:text-white hover:p-2 hover:rounded hover:bg-blue-600 hover:opacity-25"
              >
                {translate(`home.${key}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contenedor de la imagen con translate */}
      <div className="relative h-screen">
        <Image src={Portada} layout="fill" objectFit="cover" alt="Welcome Banner" />
      </div>

      {/* Título y banderas */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleToggleFlags}
          onKeyDown={(event) => handleKeyDown(event, handleToggleFlags)}
          className="flex items-center p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300"
          aria-label="Toggle Language Options"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-lg" />
        </button>

        {/* Contenedor de las banderas con animación y tamaño */}
        {showFlags && (
          <div className="absolute top-12 right-0 mt-2 w-24 bg-white bg-opacity-75 shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-1 flex items-center justify-between">
              <Image
                src={FlagUSA}
                alt="Flag USA"
                className="w-6 h-6 rounded transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Switch to English"
                onClick={() => handleLanguageChange('en')}
                onKeyDown={(event) => handleKeyDown(event, () => handleLanguageChange('en'))}
              />
              <Image
                src={FlagDominicanRepublic}
                alt="Flag Dominican Republic"
                className="w-6 h-6 rounded transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Switch to Spanish"
                onClick={() => handleLanguageChange('es')}
                onKeyDown={(event) => handleKeyDown(event, () => handleLanguageChange('es'))}
              />
            </div>
          </div>
        )}
      </div>        

      {/* Título con animación */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 absolute top-1/2 right-4 transform -translate-y-1/2 animate-fadeInRight">
        LIONEL MESSI
      </h1>

      {/* Línea divisora y textos debajo */}
      <div className="relative flex flex-col items-center mt-4">
        <hr className="w-11/12 border-t border-gray-400 mb-4" />
        <p id="home" className="text-justify mb-4 leading-relaxed max-w-4xl mx-auto">
          {translate('text.description')}
        </p>
        <p id="matchHistory" className="text-justify mb-4 leading-relaxed max-w-4xl mx-auto">
          {translate('text.journey')}
        </p>
        <p id="awards" className="text-justify mb-4 leading-relaxed max-w-4xl mx-auto">
          {translate('text.masia')}
        </p>
        <p id="teams" className="text-justify leading-relaxed max-w-4xl mx-auto">
          {translate('text.international')}
        </p>
        <p id="family" className="text-justify leading-relaxed max-w-4xl mx-auto">
          {translate('text.family')}
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
