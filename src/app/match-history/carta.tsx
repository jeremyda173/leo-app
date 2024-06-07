'use client';
import React, { useState } from "react";
import Image from 'next/image';
import { SVGProps } from 'react';
import MessiStats from '@/../../public/Messi_mia.jpg';
import MessiStats2 from '@/../../public/Messi_barc.jpeg';
import MessiStats3 from '@/../../public/Messi_arge.jpg';
import MessiStats4 from '@/../../public/masia.jpg';
import MessiStats5 from '@/../../public/MessiFr.jpg';
import Shield1 from '../../../public/Shield/LogoM.png';
import Shield2 from '../../../public/Shield/Al-Nassr.png';
import  Shield3 from '../../../public/Shield/Espanyol.png';
import Shield4 from '../../../public/Shield/Real_Madrid.png';
import Shield5 from '../../../public/Shield/Uruguay.jpg';
import Shield6 from '../../../public/Shield/Alemania.png';
import Shield7 from '../../../public/Shield/LogoB.png';
import Shield8 from '../../../public/Shield/LogoP.png';
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
    name: 'Lionel',
    fullName: 'Andrés Messi Cuccittini',
    team: 'Inter Miami',
    age: 36,
    stats: {
      goals: 1,
      assists: 4,
      distance: '9 km',
      minutes: 85,
      shots: 4,
      passes: 101,
      position: 'Forward',
      performance: '8.5',
    },
    image: MessiStats2,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'September 10',
  },
  {
    id: 3,
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
    shield1: Shield6,
    shield2: Shield2,
    matchDate: 'March 10',
  },
  {
    id: 4,
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
    matchDate: 'April 15',
  },
  {
    id: 5,
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
    matchDate: 'May 22',
  },
  {
    id: 6,
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
    matchDate: 'June 5',
  },
  {
    id: 7,
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
    matchDate: 'July 10',
  },
  {
    id: 8,
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
    matchDate: 'August 14',
  },
  {
    id: 9,
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
    matchDate: 'September 18',
  },
  {
    id: 10,
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
  isActive: boolean;
  onClick: () => void;
}

export default function MatchHistory() {
  const [activeCardIndex, setActiveCardIndex] = useState(Math.floor(playersData.length / 2));
  const [, setCarouselPosition] = useState(-Math.floor(window.innerWidth / 8)); // Posición inicial centrada

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
    setCarouselPosition(-index * (window.innerWidth / 5)); // Centra la carta clicada en la pantalla
  };

  // Dividir los equipos en dos grupos
  const halfLength = Math.ceil(playersData.length / 2);
  const firstHalf = playersData.slice(0, halfLength);
  const secondHalf = playersData.slice(halfLength);

  return (
    <div className="flex justify-center space-x-4">
      <div className="flex flex-col justify-center space-y-4">
        {firstHalf.map((player, index) => (
          <Card key={player.id} player={player} isActive={index === activeCardIndex} onClick={() => handleCardClick(index)} />
        ))}
      </div>
      <div className="flex flex-col justify-center space-y-4">
        {secondHalf.map((player, index) => (
          <Card key={player.id} player={player} isActive={index === activeCardIndex} onClick={() => handleCardClick(index + halfLength)} />
        ))}
      </div>
    </div>
  );
}

function Card({ player, isActive}: CardProps) {
  return (
    <div className={`bg-[#1F1F1F] rounded-lg overflow-hidden w-[400px] text-white ${isActive ? 'opacity-100' : 'opacity-50'} transition-opacity hover:bg-[#292929] hover:opacity-100`}>
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
