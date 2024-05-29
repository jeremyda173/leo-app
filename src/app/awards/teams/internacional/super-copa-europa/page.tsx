'use client';
import 'tailwindcss/tailwind.css';
import React from 'react';
import Image from 'next/image';
import SuperCupImg from '@/../../public/Awards/supercopa.png';

const messiStats = {
  appearances: 3,
  goals: 4,
  assists: 3,
  hatTricks: 0,
  trophies: 3,
  topScorer: 1,
};

function SuperCup() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-10 px-4">
      {/* Heading */}
      <h1 className="text-5xl font-bold my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient">
        ⚽ Messi in the UEFA Super Cup 🏆
      </h1>

      {/* Image */}
      <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
        <div className="w-48 h-48 relative rounded-full shadow-2xl">
          <Image
            src={SuperCupImg}
            alt="UEFA Super Cup"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-8 rounded-lg shadow-lg text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">📊 Statistics</h2>
        <div className="space-y-4">
          <p className="text-xl">
            🏟️ Appearances: <span className="font-semibold text-yellow-400">{messiStats.appearances}</span>
          </p>
          <p className="text-xl">
            ⚽ Goals: <span className="font-semibold text-yellow-400">{messiStats.goals}</span>
          </p>
          <p className="text-xl">
            🎯 Assists: <span className="font-semibold text-yellow-400">{messiStats.assists}</span>
          </p>
          <p className="text-xl">
            🎩 Hat Tricks: <span className="font-semibold text-yellow-400">{messiStats.hatTricks}</span>
          </p>
          <p className="text-xl">
            🏆 Trophies: <span className="font-semibold text-yellow-400">{messiStats.trophies}</span>
          </p>
          <p className="text-xl">
            👑 Top Scorer: <span className="font-semibold text-yellow-400">{messiStats.topScorer} time</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuperCup;
