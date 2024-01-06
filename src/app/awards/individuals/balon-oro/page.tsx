/* eslint-disable react/no-unescaped-entities */
'use client';
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import BalonOro from '@/../../public/Awards/Balon de oro.png';
import Image from 'next/image';

const awardsData = [
  { id: 1, title: 'FIFA Ballon d\'Or', year: 2009, image: '/images/ballon_dor_2009.jpg', goals: 47, assists: 11 },
  { id: 2, title: 'FIFA Ballon d\'Or', year: 2010, image: '/images/ballon_dor_2010.jpg', goals: 53, assists: 24 },
  { id: 3, title: 'FIFA Ballon d\'Or', year: 2011, image: '/images/ballon_dor_2011.jpg', goals: 73, assists: 29 },
  { id: 4, title: 'FIFA Ballon d\'Or', year: 2012, image: '/images/ballon_dor_2012.jpg', goals: 79, assists: 29 },
  { id: 5, title: 'FIFA Ballon d\'Or', year: 2015, image: '/images/ballon_dor_2015.jpg', goals: 52, assists: 26 },
  { id: 6, title: 'FIFA Ballon d\'Or', year: 2019, image: '/images/ballon_dor_2019.jpg', goals: 51, assists: 22 },
  // Agrega más premios Balón de Oro según sea necesario
];

function BallonDOrModal() {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const openStatisticsModal = (year: number | React.SetStateAction<null>) => {
    setSelectedYear(year);
    setMainModalOpen(false);
    setStatisticsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Heading */}
      <h1 className='text-5xl font-bold text-center mb-4'>Messi's Awards Gallery</h1>

      {/* Image */}
      <Image src={BalonOro} alt="BalonOro" className="w-32 h-32 mb-4" />

      {/* Button to Open Main Modal */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setMainModalOpen(true)}>
        Open BallonDor's
      </button>

      {/* Main Modal */}
      {mainModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">Years Won</h2>
            <div className="flex flex-wrap justify-center">
              {awardsData
                .filter((award) => award.title === 'FIFA Ballon d\'Or')
                .map((award) => (
                  <div
                    key={award.id}
                    className="m-4 p-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-xl text-center cursor-pointer"
                    onClick={() => openStatisticsModal(award.year)}
                  >
                    <p className="text-lg font-bold text-black">{award.year}</p>
                  </div>
                ))}
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setMainModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Statistics Modal */}
      {statisticsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Statistics for {selectedYear}</h2>
            <p className="text-xl">
              Goals: <span className="text-white">{awardsData.find((award) => award.year === selectedYear).goals}</span>
            </p>
            <p className="text-xl">
              Assists: <span className="text-white">{awardsData.find((award) => award.year === selectedYear).assists}</span>
            </p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => {
                setStatisticsModalOpen(false);
                setMainModalOpen(true);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BallonDOrModal;
