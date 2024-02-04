/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from "react";
import Image from "next/image";
import BImage from '@/../../public/Shield/LogoB.png';
import PImage from '@/../../public/Shield/LogoP.png';
import MImage from '@/../../public/Shield/LogoM.png';
import Barcelona from "../barcelona/page";
import Paris from "../psg/page";
import Miami from "../inter-miami/page";

interface Club {
  name: string;
  image: any; // O puedes definir el tipo correcto aquí (por ejemplo: StaticImageData)
  component: React.ReactNode;
}

const ClubInfo: React.FC<Club> = ({ name, image, component }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="flex items-center justify-center mb-4">
      <Image src={image} alt={name} width={80} height={80} />
    </div>
    <p className="text-lg font-bold mb-4">{name}</p>
    <div className="text-gray-700">{component}</div>
  </div>
);

function Groups() {
  const [pageLoaded] = useState(true);
  const [selectedClub, setSelectedClub] = useState<string | null>(null);

  const clubs: Club[] = [
    { name: 'Barcelona', image: BImage, component: <Barcelona /> },
    { name: 'PSG', image: PImage, component: <Paris /> },
    { name: 'Inter', image: MImage, component: <Miami /> },
  ];

  const handleClubClick = (club: string) => {
    setSelectedClub((prevClub) => (prevClub === club ? null : club));
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-4">
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className={`h-full ${pageLoaded ? 'bg-gradient-to-b from-gray-900 to-gray-800' : ''} transition duration-1000 ease-in-out`}></div>
      </div>

      <header className="text-center py-4">
        {/* <h1 className="text-3xl font-bold">Lionel Messi Gallery</h1> */}
      </header>

      <div className="flex items-center justify-center">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-screen-lg">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {clubs.map((club) => (
              <div
                key={club.name}
                onClick={() => handleClubClick(club.name)}
                className={`relative group overflow-hidden mb-8 bg-gradient-to-b from-blue-500 to-red-500 rounded-md transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
                  pageLoaded ? 'opacity-100' : 'opacity-0'
                } ${selectedClub === club.name ? 'ring ring-white' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={club.image}
                    alt={club.name}
                    className="w-auto h-48 object-cover rounded-md"
                  />
                  <p className="font-bold mt-4 text-lg text-center text-white">
                    {club.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-lg font-semibold">
          "Cuando tienes sueños, nada es imposible."
        </p>
        <p className="text-sm">- Lionel Messi</p>
      </div>

      <div className="mt-8">
        {selectedClub && (
          <div className="flex items-center justify-center">
            <ClubInfo {...clubs.find((club) => club.name === selectedClub)!} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Groups;

