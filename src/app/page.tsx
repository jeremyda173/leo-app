"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Código que se ejecuta solo en el cliente
    console.log("use client");

    // Si hay alguna lógica específica para el cliente, agrégala aquí.
    // Por ejemplo, manipulación del DOM o interacciones del usuario.
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez al montar el componente.

  return (
    <div className="bg-gray-800 text-white min-h-screen p-4">
      <div className="container mx-auto">

        {/* Botón del Menú */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleMenu}
        >
          Menú
        </button>

        {/* Contenedor del Menú Vertical */}
        {menuOpen && (
          <div className="flex flex-col mt-4">
            <a href="#" className="py-2">Historial de partidos</a>
            <a href="#" className="py-2">Equipos</a>
            <ul className="pl-4">
              <li><a href="#">Barcelona</a></li>
              <li><a href="#">Argentina</a></li>
              <li><a href="#">Paris Saint-Germain</a></li>
              <li><a href="#">Miami</a></li>
            </ul>
            <a href="#" className="py-2">Vida personal</a>
            <a href="#" className="py-2">Historia</a>
            <a href="#" className="py-2">Estadísticas y premios</a>
          </div>
        )}

        {/* Contenido de la Página */}
        <h1 className="text-2xl font-bold mb-4 bg-blue-700 text-white text-center pb-4 w-full">
          Home
        </h1>
      </div>
    </div>
  );
}

export default Home;
