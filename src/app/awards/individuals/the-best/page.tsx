/* eslint-disable react/no-unescaped-entities */
'use client';
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import TheBest from '@/../../public/Awards/theBest.png';  // Assuming you have an image for The Best
import Image from 'next/image';

const awardsData = [
  { id: 1, title: 'FIFA The Best', year: 2009, image: '/images/the_best_2019.jpg' },
  { id: 2, title: 'FIFA The Best', year: 2022, image: '/images/the_best_2019.jpg' },
  { id: 3, title: 'FIFA The Best', year: 2022, image: '/images/the_best_2019.jpg' },
  { id: 4, title: 'FIFA The Best', year: 2023, image: '/images/the_best_2019.jpg' },
  // Add more FIFA The Best awards as needed
];


function TheBestModal() {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const openStatisticsModal = (year: number) => {
    setSelectedYear(year);
    setMainModalOpen(false);
    setStatisticsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-80 bg-gradient-to-b from-gray-200 to-gray-800 text-white">
      {/* Heading */}
      <h1 className=' text-3xl font-bold text-center mb-4'>FIFA The Best</h1>

      {/* Image */}
      <Image src={TheBest} alt="TheBest" className="h-32 w-28 mb-4" />

      {/* Button to Open Main Modal */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setMainModalOpen(true)}>
        Open The Best's
      </button>

      {/* Main Modal */}
      {mainModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">Years Won</h2>
            <div className="flex flex-wrap justify-center">
              {awardsData
                .filter((award) => award.title === 'FIFA The Best')
                .map((award) => (
                  <div
                    key={award.id}
                    className="m-4 p-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-xl text-center"
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
    </div>
  );
}

export default TheBestModal;
