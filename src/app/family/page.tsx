import React from 'react';
import 'tailwindcss/tailwind.css';

function Family() {
    return (
        <div className="container mx-auto px-4 sm:px-8 mt-8">
            <div className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Información Familiar</h2>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-600">Nombre:</label>
                    <p id="nombre" className="text-gray-800">Juan</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="apellido" className="block text-gray-600">Apellido:</label>
                    <p id="apellido" className="text-gray-800">Pérez</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="edad" className="block text-gray-600">Edad:</label>
                    <p id="edad" className="text-gray-800">25 años</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="fecha-nacimiento" className="block text-gray-600">Fecha de Nacimiento:</label>
                    <p id="fecha-nacimiento" className="text-gray-800">10 de mayo, 1999</p>
                </div>
                <div>
                    <label htmlFor="padres" className="block text-gray-600">Padres:</label>
                    <p id="padres" className="text-gray-800">María Rodríguez y Carlos Pérez</p>
                </div>
            </div>
        </div>
    );
}

export default Family;
