'use client';
import React, { useState } from 'react';
import Individuals from '@/app/awards/individuals/page';
import Teams from '@/app/awards/teams/page';

const Awards = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const renderButton = (option: React.SetStateAction<string>, label: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined) => (
    <button
      className={`${
        selectedOption === option
          ? 'bg-blue-500 text-white'
          : 'bg-gray-300 text-gray-700'
      } py-2 px-4 rounded-md focus:outline-none transition-colors duration-300`}
      onClick={() => handleOptionChange(option)}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-4 mt-8">
        {renderButton('individuals', 'Individuals')}
        {renderButton('teams', 'Teams')}
      </div>

      <div className="mt-8 p-6 bg-white rounded-md shadow-md w-full max-w-screen-md">
        {selectedOption === 'individuals' && <Individuals />}
        {selectedOption === 'teams' && <Teams />}
      </div>
    </div>
  );
};

export default Awards;
