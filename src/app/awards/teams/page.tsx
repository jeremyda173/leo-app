'use client';
/* eslint-disable react/no-unescaped-entities */
import 'tailwindcss/tailwind.css';
import React from 'react';
import { useRouter } from 'next/navigation';

function Presentation() {
  const router = useRouter();

  const handleOptionChange = (option: string) => {
    if (option === 'Nacional') {
      router.push('/awards/teams/nacional');
    } else if (option === 'Internacional') {
      router.push('/awards/teams/internacional');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
      <p className="text-lg mb-8">Selecciona una opción:</p>
      <div className="space-x-4">
        <button
          onClick={() => handleOptionChange('Nacional')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Nacional
        </button>
        <button
          onClick={() => handleOptionChange('Internacional')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Internacional
        </button>
      </div>
    </div>
  );
}

export default Presentation;
