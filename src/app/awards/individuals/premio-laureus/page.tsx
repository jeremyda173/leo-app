/* eslint-disable react/no-unescaped-entities */
'use client';
import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';
import MessiLureus from '@/../../public/Awards/Laureus.jpeg'; // Assuming you have an image for Messi's Lureus
import Image from 'next/image';
import { translate } from '@/app/components/translate';

const laureusData = [
  { id: 1, title: 'Laureus', year: '2019', goals: 52, assists: 25 },
  { id: 2, title: 'Laureus', year: '2023', goals: 45, assists: 22 },
  // Add more Lureus awards as needed
];

const LaureusModal: React.FC = () => {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const openStatisticsModal = (year: string) => {
    setSelectedYear(year);
    setMainModalOpen(false);
    setStatisticsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-80 bg-gradient-to-b from-gray-200 to-gray-800 text-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-4">{translate("words.laureus")}</h1>

      {/* Image */}
      <Image src={MessiLureus} alt="Pichichi" className="w-32 h-32 mb-4" />

      {/* Button to Open Main Modal */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setMainModalOpen(true)}
      >
        {translate("modal.ver_mas")}
      </button>

      {/* Main Modal */}
      {mainModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">Years Won</h2>
            <div className="flex flex-wrap justify-center">
              {laureusData
                .filter((award) => award.title === 'Laureus')
                .map((award) => (
                  <div
                    key={award.id}
                    className="m-4 p-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-xl text-center cursor-pointer"
                    onClick={() => openStatisticsModal(award.year)}
                    role="button"
                    aria-label={`Open statistics for ${award.year}`}
                  >
                    <p className="text-lg font-bold text-black">{award.year}</p>
                  </div>
                ))}
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setMainModalOpen(false)}
            >
              {translate("modal.close")}
            </button>
          </div>
        </div>
      )}

      {/* Statistics Modal */}
      {statisticsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Statistics for {selectedYear}</h2>
            {laureusData.map((award) => {
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
              {translate("modal.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaureusModal;