/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Modal from 'react-modal';

import Shield1 from '../../../public/Shield/LogoM.png';
import Shield2 from '../../../public/Shield/fc-dallas.png';

function GameB() {
   const [modalOpen, setModalOpen] = useState(false);
   const [messiStats, setMessiStats] = useState({
      minutesPlayed: 45,
      shots: 5,
      goals: 1,
      assists: 2,
      distanceCovered: '10 km',
      completedPasses: 40,
   });

   const openModal = () => {
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

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
            {/* Botones de acciones */}
            <div className="flex flex-wrap justify-around pt-8">
               <button className="w-full max-w-xs mb-4 md:m b-0 rounded-md shadow-md bg-green-500 text-white p-2" onClick={openModal}>
                  Datos de Messi
               </button>
            </div>
         </div>

         {/* Modal fuera del contenedor principal */}
         <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Datos de Messi"
            className="modal bg-gray-800 text-white p-8 rounded-md absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            overlayClassName="overlay"
            portalClassName="modal-portal"
         >
            <div>
               <h2 className="text-2xl font-bold mb-4">Datos de Messi en el partido</h2>
               <ul className="text-lg">
                  <li>Minutos Jugados: {messiStats.minutesPlayed}</li>
                  <li>Disparos: {messiStats.shots}</li>
                  <li>Gol: {messiStats.goals}</li>
                  <li>Asistencia: {messiStats.assists}</li>
                  <li>Distancia Recorrida: {messiStats.distanceCovered}</li>
                  <li>Pases (completados): {messiStats.completedPasses}</li>
               </ul>
               <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={closeModal}>
                  Cerrar
               </button>
            </div>
         </Modal>
      </div>
   );
}

export default GameB;
