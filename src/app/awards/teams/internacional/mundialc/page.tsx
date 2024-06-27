'use client';
import 'tailwindcss/tailwind.css';
import React from 'react';
import Image from 'next/image';
import ClubWorldCupImg from '@/../../public/Awards/Copa_Mundial_de_Clubes.png';

const messiStats = {
  appearances: 5,
  goals: 5,
  assists: 5,
  hatTricks: 0,
  trophies: 3,
  topScorer: 2,
};

function ClubWorldCup() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-800 py-10 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold my-8 text-center text-blue-700">
        ⚽ Messi in the FIFA Club World Cup 🏆
      </h1>

      {/* Image */}
      <div className="mb-8">
        <Image src={ClubWorldCupImg} alt="FIFA Club World Cup" width={200} height={200} className="shadow-lg rounded-full" />
      </div>

      {/* Statistics */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-8 max-w-md w-full border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">📊 Statistics</h2>
        <div className="space-y-4 text-xl">
          <p>
            🏟️ Appearances: <span className="font-semibold text-blue-500">{messiStats.appearances}</span>
          </p>
          <p>
            ⚽ Goals: <span className="font-semibold text-blue-500">{messiStats.goals}</span>
          </p>
          <p>
            🎯 Assists: <span className="font-semibold text-blue-500">{messiStats.assists}</span>
          </p>
          <p>
            🎩 Hat Tricks: <span className="font-semibold text-blue-500">{messiStats.hatTricks}</span>
          </p>
          <p>
            🏆 Trophies: <span className="font-semibold text-blue-500">{messiStats.trophies}</span>
          </p>
          <p>
            👑 Top Scorer: <span className="font-semibold text-blue-500">{messiStats.topScorer} times</span>
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">🎥 Best Goals</h2>
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/lt4304VxrOE?si=4NzZU62Byd2Nd4JB"
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

export default ClubWorldCup;
