// Carta de Celia (Madre)

import React from 'react';
import Image from 'next/image';
import Celia from '@/../../public/Family/MadreMessi.jpg';

function CartaCelia() {
    // Datos de la madre
    const nombreMadre = "Celia";
    const apellidoMadre = "Cuccittini";
    const edadMadre = "64";
    const ocupacionMadre = "Limpiadora"; 

    return (
        <div className="max-w-md mx-auto my-8 bg-white p-8 rounded-lg shadow-md">
            {/* Madre */}
            <h2 className="text-3xl font-bold text-green-700 mb-4">Madre</h2>
            
            {/* Imagen */}
            <div className="w-full h-48 mb-4">
                <Image src={Celia} alt="Imagen de Celia" className="object-cover w-full h-full rounded" />
            </div>

            {/* Nombre de la madre */}
            <p className="text-lg mb-2 text-black">
                <span className='font-bold'>Nombre:</span> {nombreMadre}
            </p>

            {/* Apellido de la madre */}
            <p className="text-lg mb-2 text-black">
                <span className='font-bold'>Apellido:</span> {apellidoMadre}
            </p>

            {/* Edad de la madre */}
            <p className="text-lg mb-2 text-black">
                <span className='font-bold'>Edad:</span> {edadMadre}
            </p>

            {/* Ocupación de la madre */}
            <p className="text-lg mb-2 text-black">
                <span className='font-bold'>Ocupación:</span> {ocupacionMadre} 
            </p>

            {/* Botón de ver más */}
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                Ver Más
            </button>
        </div>
    );
}

export default CartaCelia;
