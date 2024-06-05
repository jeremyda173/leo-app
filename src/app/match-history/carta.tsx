import React from 'react';
import Button from '@/app/components/button';
import Image from 'next/image';
import { SVGProps } from 'react';
import MessiStats from '@/../../public/Messi_arge.jpg';
import Shield1 from '../../../public/Shield/LogoM.png';
import Shield2 from '../../../public/Shield/Al-Nassr.png';
import { translate, setLocale } from '@/app/components/translate';

export default function Component() {
  return (
    <div className="bg-[#1F1F1F] rounded-lg overflow-hidden w-[400px] text-white">
      <div className="relative">
        <Image src={MessiStats} alt="StarCraft II" className="w-full h-[200px] object-cover" width={400} height={150} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-4 pb-4">
          <h1 className="text-xl font-bold">Lionel</h1>
          <div className="text-xs text-gray-400">Andrés Messi Cuccittini</div>
        </div>
      </div>
      <div className="px-4 py-2 bg-[#292929]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">{translate('auth.team')}: Inter Miami</div>
            <div className="text-xs text-gray-400">World Ranking: #10</div>
          </div>
          <div className="flex items-center space-x-1">
            <ShieldIcon className="h-5 w-5 text-blue-500" />
            <span className="text-xs text-gray-400">World Cup</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="text-xs text-gray-400 mb-2">{translate('stats.title')}</div>
        <div className="bg-[#292929] rounded-lg p-2">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.goals')}</div>
            </div>
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.assists')}</div>
            </div>
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.distance')}</div>
            </div>
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.minutes')}</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-xs mt-2">
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.shots')}</div>
            </div>
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.passes')}</div>
            </div>
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.position')}</div>
            </div>
            <div>
              <div className="font-bold">0</div>
              <div className="text-gray-400">{translate('stats.performance')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2">
            <Image src={Shield1} alt="Inter Miami Shield" width={50} height={50} />
            <h2 className="font-bold text-purple-300">{translate('teams.inter_miami')}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={Shield2} alt="Al-Nassr Shield" width={50} height={50} />
            <h2 className="font-bold text-purple-300">{translate('teams.al_nassr')}</h2>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 text-center py-2">{translate('dates.january_19')}</div>
    </div>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
      <path d="M21.42 18.89C19.92 17.61 17.58 17 15 17c-2.58 0-4.92.61-6.42 1.89C7.31 20.07 6.67 21.45 6 22.92c-.33.74-.68 1.51-1.05 2.24C5.52 25.92 7.55 26 10 26h4c2.45 0 4.48-.08 5.05-.84-.37-.73-.72-1.5-1.05-2.24-.67-1.47-1.31-2.85-2.53-4.03z" />
    </svg>
  );
}
