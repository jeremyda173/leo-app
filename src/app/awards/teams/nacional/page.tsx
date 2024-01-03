
import React from "react";
import 'tailwindcss/tailwind.css';

function Presentation() {
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
      <p className="text-lg mb-8">Selecciona una opción:</p>
    </div>
  );
}

export default Presentation;