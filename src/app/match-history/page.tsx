import React from 'react';
import 'tailwindcss/tailwind.css';

function MatchHistory() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="bg-gray-400 text-white p-4 rounded-md shadow-md w-60 mx-auto border border-gray-600">
          <h1 className="text-2xl font-bold mb-4">Match History</h1>

          {/* Información del partido */}
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">NOV 21</p>
            <p className="text-sm">Eliminatoria Sudamericana - Jornada 6</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">Brasil</h2>
                <div className="bg-gray-400 p-2 rounded-md w-max mx-auto text-black">
                  <p className="text-xl font-bold mb-2">0</p>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">Argentina</h2>
                <div className="bg-gray-400 p-2 rounded-md w-max mx-auto text-black">
                  <p className="text-xl font-bold mb-2">1</p>
                </div>
              </div>
            </div>
            <div className="border-t border-b border-gray-600 bg-pink-500 text-white p-2 rounded-md text-center mt-4">
              <p className="text-sm">Resultado Finalizado</p>
            </div>
          </div>

          {/* Puedes agregar más partidos siguiendo el mismo patrón */}
          {/* <div className="mb-8">
            ... Otra información del partido ...
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MatchHistory;
