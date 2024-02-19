'use client';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import PSGTitles from '@/app/groups/psg/titles';

interface Stats {
  goals: number;
  assists: number;
  matches: number;
}

const MessiStats: React.FC = () => {
  const [currentGoals, setCurrentGoals] = useState<number>(0);
  const [currentAssists, setCurrentAssists] = useState<number>(0);
  const totalGoals: number = 32;
  const totalAssists: number = 34;
  const totalMatches: number = 75;
  const [currentAssistsPerMatch, setCurrentAssistsPerMatch] = useState<number>(0);

  useEffect(() => {
    const goalInterval = setInterval(() => {
        if (currentGoals < totalGoals) {
          setCurrentGoals((prevGoals) => prevGoals + 1);
        }
      }, 100);

    const assistInterval = setInterval(() => {
      if (currentAssists < totalAssists) {
        setCurrentAssists((prevAssists) => prevAssists + 1);
        setCurrentAssistsPerMatch((prevAssistsPerMatch) => (currentAssists + 1) / totalMatches);
      }
    }, 100);

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
    <><div className="container mx-auto p-4 max-w-md">
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


    </div>
    <div className="flex space-x-4">
      <PSGTitles />
    </div>

      </>
    
  );
};

export default MessiStats;
