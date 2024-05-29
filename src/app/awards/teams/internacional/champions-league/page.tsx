'use client';
import 'tailwindcss/tailwind.css';
import React from 'react';
import Image from 'next/image';
import ChampionsLeague from '@/../../public/Awards/Champions.png';

const messiStats = {
  appearances: 149,
  goals: 123,
  assists: 35,
  hatTricks: 8,
  trophies: 4,
  topScorer: 6, // Number of times Messi has been the top scorer
};

function Champions() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-10 px-4">
      {/* Heading */}
      <h1 className="text-5xl font-bold my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient">
        ⚽ Messi in the Champions League 🏆
      </h1>

      {/* Image */}
      <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
        <Image src={ChampionsLeague} alt="Champions League" className="w-64 h-64 shadow-2xl rounded-full" />
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
            👑 Top Scorer: <span className="font-semibold text-yellow-400">{messiStats.topScorer} times</span>
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">🎥 Best Goals</h2>
        <div className="relative w-full overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed//hTRdB4t7hR0?si=4oiNhjTwaLLgrlk1" // Replace 'someVideoID' with the actual YouTube video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Champions;
