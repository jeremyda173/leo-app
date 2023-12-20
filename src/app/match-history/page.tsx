import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import BrazilFlag from '../../../public/Flag_of_Brazil.png';
import ArgentinaFlag from '../../../public/Flag_of_Argentina.png';

function MatchHistory() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="bg-gray-900 text-white p-4 rounded-md shadow-md w-80 mx-auto border border-gray-600">
          <h1 className="text-2xl font-bold mb-4 text-center bg-pink-500 p-2 rounded">Match History</h1>

          {/* Información del partido */}
          <div className="mb-4">
            <p className="text-lg font-bold mb-2 text-center">NOV 21</p>
            <p className="text-sm text-center">Eliminatoria Sudamericana - Jornada 6</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Image src={BrazilFlag} alt="Brazil Flag" width={50} height={50} />
                  <h2 className="text-lg font-bold mb-2 mt-2">Brasil</h2>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-2 ml-36">
                  <div className="bg-pink-500 p-4 rounded-md w-max text-black">
                    <p className="text-xl font-bold mb-2">0</p>
                  </div>
                  <span className="text-xl font-bold">-</span>
                  <div className="bg-pink-500 p-4 rounded-md w-max text-black">
                    <p className="text-xl font-bold mb-2">1</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Image src={ArgentinaFlag} alt="Argentina Flag" width={50} height={50} />
                  <h2 className="text-lg font-bold mb-2 mt-2">Argentina</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-36'>
          <div className='px-96'>
            <div className="border-t border-b border-gray-600 bg-sky-500 text-white p-2 rounded-md text-center -mt-4">
              <p className="text-sm">Resultado Finalizado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchHistory;