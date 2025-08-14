'use client';
import React, { useState } from "react";
import Image from 'next/image';
import { SVGProps } from 'react';
import MessiStats from '@/../../public/Messi_mia.jpg';
import MessiStats2 from '@/../../public/Messi_barc.jpeg';
import MessiStats3 from '@/../../public/Messi_arge.jpg';
import MessiStats4 from '@/../../public/MessiBarc.png';
import MessiStats5 from '@/../../public/Messi2014.jpg';
import MessiStats6 from '@/../../public/vsliverpool.png';
import MessiStats7 from "@/../../public/vsunited.jpg";
import MessiStats8 from '@/../../public/MessiBayern.jpg';
import MessiStats9 from '@/../../public/vspsg.jpg';
import Shield1 from '../../../public/Shield/LogoM.png';
import Shield2 from '../../../public/Shield/Al-Nassr.png';
import Shield3 from '../../../public/Shield/Espanyol.png';
import Shield4 from '../../../public/Shield/Real_Madrid.png';
import Shield5 from '../../../public/Shield/Uruguay.jpg';
import Shield6 from '../../../public/Shield/Alemania.png';
import Shield7 from '../../../public/Shield/LogoB.png';
import Shield8 from '../../../public/Shield/LogoP.png';
import Shield9 from '../../../public/Shield/bandera-argentina-re.png';
import Shield10 from '@/../../public/Shield/Manchester-cITY.png'
import Shield11 from '@/../../public/Shield/Bayern.png';
import Shield12 from '@/../../public/Shield/Liverpool_FC.svg.png';
import Shield13 from '@/../../public/Shield/Manchester united.png';
import { translate } from '@/app/components/translate';

type StaticImageData = any;

const playersData = [
  {
    id: 1,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'Inter Miami',
    opponent: 'Al Nassr',
    age: 36,
    result: '4-3',
    matchType: 'friendly_match',
    stats: {
      goals: 1,
      assists: 1,
      distance: '8.7 km',
      minutes: 45,
      shots: 3,
      passes: 28,
      position: 'Forward',
      performance: '8.5',
    },
    image: MessiStats,
    shield1: Shield1,
    shield2: Shield2,
    matchDate: 'January 19 2024',
  },
  {
    id: 2,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'Argentina',
    opponent: 'Uruguay',
    age: 36,
    result: '0-2',
    matchType: 'world_cup_qualifier',
    stats: {
      goals: 0,
      assists: 0,
      distance: '9.1 km',
      minutes: 90,
      shots: 2,
      passes: 65,
      position: 'Forward',
      performance: '6.8',
    },
    image: MessiStats3,
    shield1: Shield9,
    shield2: Shield5,
    matchDate: 'November 16 2023',
  },
  {
    id: 3,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'FC Barcelona',
    opponent: 'Manchester City',
    age: 29,
    result: '4-0',
    matchType: 'champions_league',
    stats: {
      goals: 3,
      assists: 0,
      distance: '9.5 km',
      minutes: 90,
      shots: 4,
      passes: 70,
      position: 'Forward',
      performance: '9.9',
    },
    image: MessiStats8,
    shield1: Shield7,
    shield2: Shield10,
    matchDate: 'October 19 2016',
  },
  {
    id: 4,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'FC Barcelona',
    opponent: 'Real Madrid',
    age: 29,
    result: '3-2',
    matchType: 'la_liga',
    stats: {
      goals: 2,
      assists: 0,
      distance: '10.4 km',
      minutes: 92,
      shots: 6,
      passes: 58,
      position: 'Forward',
      performance: '9.8',
    },
    image: MessiStats4,
    shield1: Shield7,
    shield2: Shield4,
    matchDate: 'April 23 2017',
  },
  {
    id: 5,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'FC Barcelona',
    opponent: 'PSG',
    age: 29,
    result: '6-1',
    matchType: 'champions_league',
    stats: {
      goals: 1,
      assists: 0,
      distance: '9.8 km',
      minutes: 90,
      shots: 4,
      passes: 54,
      position: 'Forward',
      performance: '8.7',
    },
    image: MessiStats9,
    shield1: Shield7,
    shield2: Shield8,
    matchDate: 'March 8 2017',
  },
  {
    id: 6,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'FC Barcelona',
    opponent: 'Bayern Munich',
    age: 27,
    result: '3-0',
    matchType: 'champions_league',
    stats: {
      goals: 2,
      assists: 0,
      distance: '9.6 km',
      minutes: 90,
      shots: 5,
      passes: 46,
      position: 'Forward',
      performance: '9.6',
    },
    image: MessiStats8,
    shield1: Shield7,
    shield2: Shield11,
    matchDate: 'May 6 2015',
  },
  {
    id: 7,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'FC Barcelona',
    opponent: 'Liverpool',
    age: 31,
    result: '3-0',
    matchType: 'champions_league',
    stats: {
      goals: 2,
      assists: 0,
      distance: '9.4 km',
      minutes: 90,
      shots: 4,
      passes: 49,
      position: 'Forward',
      performance: '9.7',
    },
    image: MessiStats6,
    shield1: Shield7,
    shield2: Shield12,
    matchDate: 'May 1 2019',
  },
  {
    id: 8,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'Argentina',
    opponent: 'Germany',
    age: 27,
    result: '0-1',
    matchType: 'world_cup_final',
    stats: {
      goals: 0,
      assists: 0,
      distance: '10.9 km',
      minutes: 120,
      shots: 4,
      passes: 54,
      position: 'Forward',
      performance: '7.0',
    },
    image: MessiStats5,
    shield1: Shield9,
    shield2: Shield6,
    matchDate: 'July 13 2014',
  },
  {
    id: 9,
    name: 'Lionel',
    fullName: 'Lionel Andrés Messi Cuccittini',
    team: 'FC Barcelona',
    opponent: 'Manchester United',
    age: 31,
    result: '3-0',
    matchType: 'champions_league',
    stats: {
      goals: 2,
      assists: 0,
      distance: '9.3 km',
      minutes: 90,
      shots: 4,
      passes: 50,
      position: 'Forward',
      performance: '9.5',
    },
    image: MessiStats7,
    shield1: Shield7,
    shield2: Shield13,
    matchDate: 'April 16 2019',
  },
];

interface Player {
  id: number;
  name: string;
  fullName: string;
  team: string;
  opponent: string; 
  result: string;
  matchType: string;
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
  const [activeCardIndex, setActiveCardIndex] = useState();

  // const handleCardClick = (index: number) => {
  //   setActiveCardIndex(index);
  // };

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {playersData.map((player, index) => (
          <Card key={player.id} player={player} isActive={index === activeCardIndex} onClick={function (): void {
            throw new Error("Function not implemented.");
          } } />
        ))}
      </div>
    </div>
  );
}

function Card({ player, isActive}: CardProps) {
  const [isZoom, setIsZoom] = useState(false);
  return (
    <div className="flex-shrink-0 w-full">
      <div className={`bg-[#1F1F1F] rounded-lg overflow-hidden text-white ${isActive ? 'opacity-100' : 'opacity-50'} transition-opacity hover:bg-[#292929] hover:opacity-100 shadow-md h-full flex flex-col ease-in-out delay-150 hover:-translate-y-4 hover:scale-20 duration-300`}>
        {/* Imagen del jugador */}
        <div className="relative flex-shrink-0 h-[200px] sm:h-[250px]">
          <Image src={player.image} alt={player.fullName} className="w-full h-full object-cover rounded-t-lg" layout="fill" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg" />
          <div className="absolute bottom-0 left-4 pb-4">
            <h1 className="text-xl sm:text-2xl font-bold">{player.name}</h1>
            <div className="text-sm sm:text-base text-gray-400">{player.fullName}</div>
          </div>
        </div>
        {/* Detalles del jugador */}
        <div className="px-4 py-2 flex-grow">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm text-gray-400">{translate('auth.team')}: {player.team}</div>
              <div className="text-xs sm:text-sm text-gray-400">{translate('auth.age')}: {player.age}</div>
            </div>
            <div className="flex items-center space-x-1">
              <ShieldIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              <span className="text-xs sm:text-sm text-gray-400">{translate(`auth.${player.matchType.replace(/ /g, '_').toLowerCase()}`)}</span>
            </div>
          </div>
        </div>
        {/* Estadísticas del jugador */}
        <div className="px-4 py-2">
          <div className="text-xs sm:text-sm text-gray-400 mb-2">{translate('stats.title')}</div>
          <div className="bg-[#292929] rounded-lg p-2">
            <div className="grid grid-cols-4 gap-2 text-center text-xs sm:text-sm">
              {Object.keys(player.stats).slice(0, 4).map((key) => (
                <div key={key}>
                  <div className="font-bold">{player.stats[key as keyof typeof player.stats]}</div>
                  <div className="text-gray-400">{translate(`stats.${key}`)}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs sm:text-sm mt-2">
              {Object.keys(player.stats).slice(4).map((key) => (
                <div key={key}>
                  <div className="font-bold">{player.stats[key as keyof typeof player.stats]}</div>
                  <div className="text-gray-400">{translate(`stats.${key}`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Escudos de los equipos y resultado del partido */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-2">
              <Image src={player.shield1} alt="Team Shield 1" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12" />
              <h2 className="font-bold text-sm sm:text-base text-purple-300">{translate(`teams.${player.team.replace(/ /g, '_').toLowerCase()}`)}</h2>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={player.shield2} alt="Team Shield 2" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12" />
              <h2 className="font-bold text-sm sm:text-base text-purple-300">{translate(`teams.${player.opponent.replace(/ /g, '_').toLowerCase()}`)}</h2>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-gray-400 mt-2">{translate('stats.result')}: {player.result}</div>
        </div>
        {/* Fecha del partido */}
        <div className="text-xs sm:text-sm text-gray-400 text-center py-2 bg-[#292929] rounded-b-lg">{translate('dates.' + player.matchDate.replace(' ', '_').toLowerCase())}</div>
      </div>
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
