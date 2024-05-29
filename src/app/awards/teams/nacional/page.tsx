import React from "react";
import 'tailwindcss/tailwind.css';
import Copa from '@/app/awards/teams/nacional/copa/page';
import LigaC from '@/app/awards/teams/nacional/liga/page';
import Home from "@/app/awards/teams/nacional/super-copa/page";

function PresentationNa() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 py-10 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-95 rounded-2xl shadow-2xl p-10">
          <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Premios Nacionales de Lionel Messi</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-4 border-blue-500 pb-2">Copas Nacionales</h2>
              <Copa />
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-4 border-blue-500 pb-2">Ligas Nacionales</h2>
              <LigaC />
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-4 border-blue-500 pb-2">Supercopas</h2>
              <Home />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationNa;
