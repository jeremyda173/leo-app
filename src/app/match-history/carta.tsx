'use client';
import React, { useState } from "react";
import Image from 'next/image';
import { SVGProps } from 'react';
import MessiStats from '@/../../public/Messi_mia.jpg';
import RonaldoStats from '@/../../public/Messi_barc.jpeg';
import NeymarStats from '@/../../public/Messi_arge.jpg';
import MbappeStats from '@/../../public/masia.jpg';
import HaalandStats from '@/../../public/MessiFr.jpg';
import Shield1 from '../../../public/Shield/LogoM.png';
import Shield2 from '../../../public/Shield/Al-Nassr.png';
import { translate } from '@/app/components/translate';

// Temporalmente definimos StaticImageData como any
type StaticImageData = any;

const playersData = [
  {
    id: 1,
    name: 'Lionel',
    fullName: 'Andrés Messi Cuccittini',
    team: 'Inter Miami',
    age: 36,
    stats: {
      goals: 2,
      assists: 1,
      distance: '11 km',
      minutes: 90,
      shots: 5,
      passes: 94,
      position: 'Forward',
      performance: '9.1',
    },
    image: MessiStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'January 19',
  },
  {
    id: 2,
    name: 'Cristiano',
    fullName: 'Ronaldo dos Santos Aveiro',
    team: 'Al-Nassr',
    age: 38,
    stats: {
      goals: 40,
      assists: 10,
      distance: 150,
      minutes: 2500,
      shots: 60,
      passes: 900,
      position: 'Forward',
      performance: 'Excellent',
    },
    image: RonaldoStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'February 20',
  },
  {
    id: 3,
    name: 'Neymar',
    fullName: 'Neymar da Silva Santos Júnior',
    team: 'Paris Saint-Germain',
    age: 31,
    stats: {
      goals: 25,
      assists: 15,
      distance: 120,
      minutes: 1800,
      shots: 55,
      passes: 950,
      position: 'Forward',
      performance: 'Excellent',
    },
    image: NeymarStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'March 10',
  },
  {
    id: 4,
    name: 'Kylian',
    fullName: 'Kylian Mbappé Lottin',
    team: 'Paris Saint-Germain',
    age: 24,
    stats: {
      goals: 35,
      assists: 12,
      distance: 130,
      minutes: 2200,
      shots: 70,
      passes: 1100,
      position: 'Forward',
      performance: 'Excellent',
    },
    image: MbappeStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'April 15',
  },
  {
    id: 5,
    name: 'Erling',
    fullName: 'Erling Braut Haaland',
    team: 'Manchester City',
    age: 23,
    stats: {
      goals: 45,
      assists: 8,
      distance: 140,
      minutes: 2300,
      shots: 80,
      passes: 850,
      position: 'Forward',
      performance: 'Excellent',
    },
    image: HaalandStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'May 22',
  },
  {
    id: 6,
    name: 'Kevin',
    fullName: 'Kevin De Bruyne',
    team: 'Manchester City',
    age: 32,
    stats: {
      goals: 20,
      assists: 25,
      distance: 160,
      minutes: 2100,
      shots: 45,
      passes: 1300,
      position: 'Midfielder',
      performance: 'Excellent',
    },
    image: HaalandStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'June 5',
  },
  {
    id: 7,
    name: 'Robert',
    fullName: 'Robert Lewandowski',
    team: 'FC Barcelona',
    age: 34,
    stats: {
      goals: 30,
      assists: 5,
      distance: 110,
      minutes: 2400,
      shots: 65,
      passes: 800,
      position: 'Forward',
      performance: 'Excellent',
    },
    image: HaalandStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'July 10',
  },
  {
    id: 8,
    name: 'Karim',
    fullName: 'Karim Benzema',
    team: 'Real Madrid',
    age: 35,
    stats: {
      goals: 25,
      assists: 10,
      distance: 100,
      minutes: 2200,
      shots: 50,
      passes: 900,
      position: 'Forward',
      performance: 'Excellent',
    },
    image: HaalandStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'August 14',
  },
  {
    id: 9,
    name: 'Luka',
    fullName: 'Luka Modric',
    team: 'Real Madrid',
    age: 37,
    stats: {
      goals: 10,
      assists: 20,
      distance: 170,
      minutes: 2300,
      shots: 40,
      passes: 1400,
      position: 'Midfielder',
      performance: 'Excellent',
    },
    image: HaalandStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'September 18',
  },
  {
    id: 10,
    name: 'Mohamed',
    fullName: 'Mohamed Salah',
    team: 'Liverpool',
    age: 31,
    stats: {
      goals: 28,
      assists: 12,
      distance: 125,
      minutes: 2250,
      shots: 55,
      passes: 1000,
      position: 'Forward',
      performance: 'Excellent',
    },
    image: HaalandStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'October 22',
  }
];

interface Player {
  id: number;
  name: string;
  fullName: string;
  team: string;
  age: number;
  stats: {
    goals: number;
    assists: number;
    distance: number | string;
    minutes: number;
    shots: number;
    passes: number;
    position: string;
    performance: string;
  };
  image: StaticImageData;
  shield1: StaticImageData;
  shield2: StaticImageData;
  matchDate: string;
}

interface CardProps {
  player: Player;
}

export default function MatchHistory() {
  const [activeCardIndex, setActiveCardIndex] = useState(4);  // Inicia en la carta número 5

  const handleNextClick = () => {
    if (activeCardIndex < playersData.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 text-black p-4 rounded-md shadow-md max-w-md border-2">
          Match Schedule
        </h1>
      </div>
      <div className="flex justify-center rounded-sm item">
        <div className="flex space-x-4 p-4">
          {playersData.map((player, index) => (
            <div key={player.id} className={`${index === activeCardIndex ? 'block' : 'hidden'}`}>
              <Card player={player} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`bg-blue-500 text-white p-2 rounded-full mr-4 ${activeCardIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          onClick={handlePrevClick}
          disabled={activeCardIndex === 0}
        >
          &#8592;
        </button>
        <button
          className={`bg-blue-500 text-white p-2 rounded-full ${activeCardIndex === playersData.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          onClick={handleNextClick}
          disabled={activeCardIndex === playersData.length - 1}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

function Card({ player }: CardProps) {
  return (
    <div className="bg-[#1F1F1F] rounded-lg overflow-hidden w-[400px] text-white">
      <div className="relative">
        <Image src={player.image} alt={player.fullName} className="w-full h-[200px] object-cover" width={400} height={150} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-4 pb-4">
          <h1 className="text-xl font-bold">{player.name}</h1>
          <div className="text-xs text-gray-400">{player.fullName}</div>
        </div>
      </div>
      <div className="px-4 py-2 bg-[#292929]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">{translate('auth.team')}: {player.team}</div>
            <div className="text-xs text-gray-400">{translate('auth.age')}: {player.age}</div>
          </div>
          <div className="flex items-center space-x-1">
            <ShieldIcon className="h-5 w-5 text-blue-500" />
            <span className="text-xs text-gray-400">{translate('auth.friendly_match')}</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="text-xs text-gray-400 mb-2">{translate('stats.title')}</div>
        <div className="bg-[#292929] rounded-lg p-2">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {Object.keys(player.stats).slice(0, 4).map((key) => (
              <div key={key}>
                <div className="font-bold">{player.stats[key as keyof typeof player.stats]}</div>
                <div className="text-gray-400">{translate(`stats.${key}`)}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-xs mt-2">
            {Object.keys(player.stats).slice(4).map((key) => (
              <div key={key}>
                <div className="font-bold">{player.stats[key as keyof typeof player.stats]}</div>
                <div className="text-gray-400">{translate(`stats.${key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2">
            <Image src={player.shield1} alt="Team Shield 1" width={50} height={50} />
            <h2 className="font-bold text-purple-300">{translate('teams.inter_miami')}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={player.shield2} alt="Team Shield 2" width={50} height={50} />
            <h2 className="font-bold text-purple-300">{translate('teams.al_nassr')}</h2>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 text-center py-2">{translate('dates.' + player.matchDate.replace(' ', '_').toLowerCase())}</div>
    </div>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21h13a2 2 0 0 0 2-2v-2a7 7 0 0 0-7-7h-3a7 7 0 0 0-7 7v2a2 2 0 0 0 2 2z" />
    </svg>
  );
}
