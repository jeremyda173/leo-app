import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import Shield1 from '../../../public/Shield/LogoM.png';
import Shield2 from '../../../public/Shield/fc-dallas.png';

function GameB() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-purple-800 text-white min-h-screen flex items-center ml-20">
      <div className="container mx-auto px-4 sm:px-96 relative">
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-2xl w-80 mx-auto border border-gray-600 transform hover:scale-105 transition-transform">
          <h1 className="text-3xl font-extrabold mb-4 text-center bg-purple-600 p-2 rounded">Match History</h1>

          {/* Información del partido */}
          <div className="mb-4">
            <p className="text-xl font-semibold mb-2 text-center">JAN 21</p>
            <p className="text-sm text-center">Amistoso</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Image src={Shield1} alt="Brazil Flag" width={50} height={50} />
                  <h2 className="text-lg font-bold mb-2 mt-2 text-purple-300">Inter Miami</h2>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-2 ml-36">
                  <div className="bg-purple-600 p-4 rounded-md w-max text-white">
                    <p className="text-xl font-bold mb-2">0</p>
                  </div>
                  <span className="text-xl font-bold text-purple-300">-</span>
                  <div className="bg-purple-600 p-4 rounded-md w-max text-white">
                    <p className="text-xl font-bold mb-2">1</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Image src={Shield2} alt="Argentina Flag" width={50} height={50} />
                  <h2 className="text-lg font-bold mb-2 mt-2 text-purple-300">Dallas FC</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-blue-500 text-white p-2 rounded-md text-center">
          <p className="text-sm">Resultado Finalizado</p>
        </div>
      </div>
    </div>
  );
}

export default GameB;