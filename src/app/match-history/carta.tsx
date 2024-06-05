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
            <div className="text-xs text-gray-400">{translate('auth.age')}: 36</div>
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
