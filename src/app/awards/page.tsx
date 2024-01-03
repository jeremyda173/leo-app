/* eslint-disable react/no-unescaped-entities */
'use client';
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import Individuals from '@/app/awards/individuals/page';
import Teams from '@/app/awards/teams/page';

function Awards() {
  const [selectedOption, setSelectedOption] = useState('individuals');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <button
          className={`${
            selectedOption === 'individuals'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-l`}
          onClick={() => handleOptionChange('individuals')}
        >
          Individuals
        </button>
        <button
          className={`${
            selectedOption === 'teams'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-r`}
          onClick={() => handleOptionChange('teams')}
        >
          Teams
        </button>
      </div>
      {selectedOption === 'individuals' ? <Individuals /> : <Teams />}
    </div>
  );
}

export default Awards;
