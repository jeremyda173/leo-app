'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Individuals from '@/app/awards/individuals/page';
import Teams from '@/app/awards/teams/page';

const Awards = () => {
  const [selectedOption, setSelectedOption] = useState('individuals');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const renderButton = (option: string, label: string) => (
    <button
      className={`${
        selectedOption === option
          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
          : 'bg-gray-300 text-gray-700'
      } py-3 px-6 rounded-full focus:outline-none transition-colors duration-300`}
      onClick={() => handleOptionChange(option)}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 via-indigo-800 to-blue-900 text-white">
      <div className="space-x-8 mt-24">
        {renderButton('individuals', 'Individuals')}
        {renderButton('teams', 'Teams')}
      </div>

      <div className="mt-8 w-full h-3/4 p-6 border border-gray-300 rounded-md bg-gray-800 shadow-md">
        {selectedOption === 'individuals' && <Individuals />}
        {selectedOption === 'teams' && <Teams />}
      </div>
    </div>
  );
};

export default Awards;
