/* eslint-disable react/no-unescaped-entities */
'use client'
;import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Individuals from '@/app/awards/individuals/page';
import Teams from '@/app/awards/teams/page';

const Awards = () => {
  const [selectedOption, setSelectedOption] = useState('false');

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center mt-8">
        <button
          className={`${
            selectedOption === 'individuals'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-md focus:outline-none transition-colors duration-300 mb-2`}
          onClick={() => handleOptionChange('individuals')}
        >
          Individuals
        </button>
        <button
          className={`${
            selectedOption === 'teams'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-md focus:outline-none transition-colors duration-300`}
          onClick={() => handleOptionChange('teams')}
        >
          Teams
        </button>
      </div>

      <div className="mt-8 w-full h-3/4 p-6 border border-gray-300 rounded-md bg-white shadow-md">
        {selectedOption === 'individuals' && <Individuals />}
        {selectedOption === 'teams' && <Teams />}
      </div>
    </div>
  );
};

export default Awards;
