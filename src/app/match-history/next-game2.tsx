import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import AlNassr from '../../../public/Al-Nassr.png';
import InterMiami from '../../../public/LogoM.png';


function NextGameB() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-purple-800 text-white min-h-screen flex items-center ml-12">
      <div className="container mx-auto px-4 sm:px-96 relative">
        <div className="bg-gray-800 text-whit p-4 rounded-md shadow-2xl w-96 mx-auto border border-gray-600 transform hover:scale-105 transition-transform">
          <h1 className="text-3xl font-extrabold mb-4 text-center bg-purple-600 p-2 rounded">Match History</h1>

          {/* Información del primer partido */}
          <div className="mb-4">
            <p className="text-xl font-semibold mb-2 text-center">FEB 01</p>
            <p className="text-sm text-center">Amistoso</p>
            <div className="flex items-center justify-center flex-col space-y-2 mt-4">
              <div className="flex items-center space-x-2">
                <Image src={AlNassr} alt="Brazil Flag" width={50} height={50} />
                <h2 className="text-lg font-bold mb-2 mt-2 text-purple-300">Al-Nassr</h2>
              </div>
              <span className="text-xl font-bold text-purple-300 pl-12">VS</span>
              <div className="flex items-center space-x-2">
                <Image src={InterMiami} alt="Argentina Flag" width={50} height={50} />
                <h2 className="text-lg font-bold mb-2 mt-2 text-purple-300">Inter-Miami</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-blue-500 text-white p-2 rounded-md text-center">
          <p className="text-sm">Encuentro pendiente</p>
        </div>
      </div>
    </div>
  );
}

export default NextGameB;