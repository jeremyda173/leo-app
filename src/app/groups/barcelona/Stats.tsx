'use client';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import ChampionsImage from '@/../../public/Awards/Champions.png'; // Ruta de la imagen de Champions League
import LigaImage from '@/../../public/Awards/supercopa.png'; // Ruta de la imagen de La Liga
// import CopaImage from '@/../../public/Awards/Champions.png'; // Ruta de la imagen de la Copa del Rey
import Image from 'next/image';

interface Stats {
  goals: number;
  assists: number;
  matches: number;
}

const MessiStats: React.FC = () => {
  const [currentGoals, setCurrentGoals] = useState<number>(0);
  const [currentAssists, setCurrentAssists] = useState<number>(0);
  const totalGoals: number = 672;
  const totalAssists: number = 269;
  const totalMatches: number = 778;
  const [currentAssistsPerMatch, setCurrentAssistsPerMatch] = useState<number>(0);

  useEffect(() => {
    const goalInterval = setInterval(() => {
      if (currentGoals < totalGoals) {
        setCurrentGoals((prevGoals) => prevGoals + 1);
      }
    }, 10);

    const assistInterval = setInterval(() => {
      if (currentAssists < totalAssists) {
        setCurrentAssists((prevAssists) => prevAssists + 1);
        setCurrentAssistsPerMatch((prevAssistsPerMatch) => (currentAssists + 1) / totalMatches);
      }
    }, 10);

    return () => {
      clearInterval(goalInterval);
      clearInterval(assistInterval);
    };
  }, [currentGoals, currentAssists, totalMatches, totalGoals, totalAssists]);

  const calculateGoalColor = () => {
    const percentage: number = (currentGoals / totalGoals) * 100;
    const hue: number = 240 - (percentage * 2.4);
    return `linear-gradient(90deg, hsl(${hue}, 70%, 50%) ${percentage}%, transparent ${percentage}%)`;
  };

  const calculateAssistColor = () => {
    const goalPercentage: number = (currentGoals / totalGoals) * 100;
    const assistPercentage: number = (currentAssists / totalAssists) * 100;
    const hue: number = 240 - (goalPercentage * 2.4);
    return `linear-gradient(90deg, hsl(${hue}, 70%, 50%) ${assistPercentage}%, transparent ${assistPercentage}%)`;
  };

  const calculateMatchColor = () => {
    const percentage: number = (totalMatches / totalMatches) * 100;
    const hue: number = percentage * 2.4;
    return `linear-gradient(90deg, transparent ${percentage}%, hsl(${hue}, 70%, 50%) ${percentage}%)`;
  };

  const stats: Stats = {
    goals: totalGoals,
    assists: totalAssists,
    matches: totalMatches,
  };

  const goalsPerMatch: string = (currentGoals / stats.matches).toFixed(2);
  const assistsAverage: string = currentAssistsPerMatch.toFixed(2);

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="bg-blue-700 text-white rounded-md p-2 text-center">
        <h1 className="text-lg font-bold">Messi Stats</h1>
      </div>
      <div
        className="rounded-md p-4 mt-2 shadow-md"
        style={{ background: calculateGoalColor(), transition: 'background 0.5s ease-in-out' }}
      >
        <p className="text-xl">Goals: {currentGoals}</p>
        <p className="text-md">Goals per match: {goalsPerMatch}</p>
      </div>
      <div
        className="mt-2 rounded-md p-4 shadow-md"
        style={{ background: calculateAssistColor(), transition: 'background 0.5s ease-in-out' }}
      >
        <p className="text-xl">Assists: {currentAssists}</p>
        <p className="text-md">Assists per match: {assistsAverage}</p>
      </div>
      <div
        className="mt-2 rounded-md p-4 shadow-md"
        style={{ background: calculateMatchColor(), transition: 'background 0.5s ease-in-out' }}
      >
        <p className="text-md">Matches played: {stats.matches}</p>
      </div>
      <div className="mt-4">
        <Image src={ChampionsImage} alt="Champions League" className="mb-2" />
        <p className="text-md">Champions League Titles: 4</p>
      </div>
      <div className="mt-4">
        <Image src={LigaImage} alt="La Liga" className="mb-2" />
        <p className="text-md">La Liga Titles: X (Número de títulos)</p>
      </div>
      {/* <div className="mt-4">
        <Image src={CopaImage} alt="Copa del Rey" className="mb-2" />
        <p className="text-md">Copa del Rey Titles: Y (Número de títulos)</p>
      </div> */}
    </div>
  );
};

export default MessiStats;



















// import React from 'react';
// import 'tailwindcss/tailwind.css';

// interface Stats {
//   goals: number;
//   assists: number;
//   passes: number;
// }

// const MessiStats: React.FC = () => {
//   const stats: Stats = {
//     goals: 821,
//     assists: 402,
//     passes: 1234,
//   };

//   return (
// <div className="container mx-auto p-4">
//   <div className="bg-slate-400 text-white rounded-md p-4 text-center">
//     <h1 className="text-2xl font-bold">Messi Stats</h1>
//   </div>
//   <div className="bg-blue-300 text-white rounded-2xl p-4 mt-4 shadow-md">
//     <p className="text-xl">Goals: {stats.goals}</p>
//     <p className="text-xl">Assists: {stats.assists}</p>
//     <p className="text-xl">Passes: {stats.passes}</p>
//   </div>
// </div>
//   );
// };

// export default MessiStats;
