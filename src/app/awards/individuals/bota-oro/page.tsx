/* eslint-disable react/no-unescaped-entities */
'use client';
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import BotaDeOro from '@/../../public/Awards/botaOro.png';  // Assuming you have an image for Bota de Oro
import Image from 'next/image';

const awardsData = [
  { id: 1, title: 'Golden Boot', year: 2010, image: '/images/golden_boot_2010.jpg', goals: 34 },
  { id: 2, title: 'Golden Boot', year: 2012, image: '/images/golden_boot_2012.jpg', goals: 46 },
  { id: 3, title: 'Golden Boot', year: 2013, image: '/images/golden_boot_2013.jpg', goals: 28 },
  { id: 4, title: 'Golden Boot', year: 2016, image: '/images/golden_boot_2017.jpg', goals: 37 },
  { id: 5, title: 'Golden Boot', year: 2017, image: '/images/golden_boot_2018.jpg', goals: 36 },
  { id: 6, title: 'Golden Boot', year: 2018, image: '/images/golden_boot_2021.jpg', goals: 30 },
  // Add more Golden Boot awards as needed
];

function BotaDeOroModal() {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const openStatisticsModal = (year: number) => {
    setSelectedYear(year);
    setMainModalOpen(false);
    setStatisticsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Heading */}
      <h1 className='text-3xl font-bold text-center mb-4'>Golden boot</h1>

      {/* Image */}
      <Image src={BotaDeOro} alt="BotaDeOro" className="w-32 h-32 mb-4" />

      {/* Button to Open Main Modal */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setMainModalOpen(true)}>
        Open Bota de Oro's
      </button>

      {/* Main Modal */}
      {mainModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">Years Won</h2>
            <div className="flex flex-wrap justify-center">
              {awardsData
                .filter((award) => award.title === 'Golden Boot')
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

{statisticsModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-gray-800 p-8 rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-4">Statistics for {selectedYear}</h2>
      {awardsData.map((award) => {
        if (award.year === selectedYear) {
          return (
            <div key={award.id}>
              <p className="text-xl">
                Goals: <span className="text-white">{award.goals}</span>
              </p>
            </div>
          );
        }
        return null; // Return null if the year is not found
      })}
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

export default BotaDeOroModal;
