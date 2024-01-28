'use client';
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Individuals from '@/app/awards/individuals/page';
import Teams from '@/app/awards/teams/page';

const Awards = () => {
  const [selectedOption, setSelectedOption] = useState('individuals');

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const renderButton = (option: React.SetStateAction<string>, label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined) => (
    <button
      className={`${
        selectedOption === option
          ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
          : 'bg-gray-400 text-gray-800'
      } py-3 px-6 rounded-full focus:outline-none transition-colors duration-300`}
      onClick={() => handleOptionChange(option)}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center h-0 bg-gradient-to-b from-purple-800 via-indigo-700 to-blue-800 text-white">
      <div className="space-x-8 mt-24">
        {renderButton('individuals', 'Individuals')}
        {renderButton('teams', 'Teams')}
      </div>

      <div className="mt-8 w-full h-full p-6 border rounded-md shadow-md">
        {selectedOption === 'individuals' && <Individuals />}
        {selectedOption === 'teams' && <Teams />}
      </div>
    </div>
  );
};

export default Awards;
