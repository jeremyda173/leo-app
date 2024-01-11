//Carta de Mateo

//Carta de Ciro

import React from 'react';
import Image from 'next/image';
import Ciro from '@/../../public/Family/CiroMessi.jpg';

function CartaCiro() {
    // Placeholder values for the last name and age
    const nombre = "Ciro";
    const apellido = "Messi Rocuzzo";
    const edad = "6";
    const ocupacion = "-";

    return (
        <div className="max-w-md mx-auto my-8 bg-white p-8 rounded-lg shadow-md">
            {/* Esposa */}
            <h2 className="text-3xl font-bold text-green-700 mb-4">Hijo</h2>
            
            {/* Imagen */}
            <div className="w-full h-48 mb-4">
                <Image src={Ciro} alt="Imagen de Ciro" className="object-cover w-full h-full rounded" />
            </div>

            {/* Nombre */}
            <p className="text-lg mb-2 text-black">
                <span className='font-bold'>Nombre:</span> {nombre}
            </p>

            {/* Apellido */}
            <p className="text-lg mb-2 text-black">
                <span className='font-bold'>Apellido:</span> {apellido}
            </p>

            {/* Edad */}
            <p className="text-lg mb-2 text-black">
                <span className='font-bold'>Edad:</span> {edad}
            </p>

            {/* Profesión/Ocupación: Diseñadora gráfica */}
            <p className="text-lg mb-2 text-black">
            <span className='font-bold'>Ocupación:</span> {ocupacion} 
            </p>

            {/* Boton de ver mas */}
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                Ver Más
            </button>
        </div>
    );
}

export default CartaCiro;