/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import BImage from '@/../../public/Shield/LogoB.png';
import PImage from '@/../../public/Shield/LogoP.png';
import MImage from '@/../../public/Shield/LogoM.png';
// import Link from "next/link";
// import Portada from '@/../../public/Portada.jpg';

function Page() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-4">
  <div className="absolute top-0 left-0 w-full h-full opacity-40">
    <div className={`h-full ${pageLoaded ? 'bg-gradient-to-b from-gray-900 to-gray-800' : ''} transition duration-1000 ease-in-out`}></div>
  </div>

      <header className="text-center py-4">
        {/* <h1 className="text-3xl font-bold">Lionel Messi Gallery</h1> */}
      </header>

    {/* <div className="bg-white">
      <Image src={Portada} alt="Barcelona" className="w-full h-full object-cover rounded-md"/>
    </div> */}

      <div className="flex items-center justify-center">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-screen-lg">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
{/* Barcelona */}

  <div className={`relative group overflow-hidden mb-8 bg-gradient-to-b from-blue-500 to-red-500 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
    <div className="flex flex-col items-center">
      <Image
        src={BImage}
        alt="Barcelona"
        className="w-auto h-48 object-cover rounded-md"
      />
      <p className="font-bold mt-4 text-lg text-center text-white">
        Barcelona
      </p>
    </div>
  </div>

            {/* Paris Saint-Germain */}
            <div className={`relative group overflow-hidden mb-8 bg-gradient-to-b from-blue-900 via-white to-red-500 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center">
                <Image
                  src={PImage}
                  alt="Paris Saint-Germain"
                  className="w-auto h-48 object-cover rounded-md"
                />
                <p className="font-bold mt-4 text-lg text-center text-white">
                  <a href="../groups/barcelona/page">Paris Saint-Germain</a>
                </p>
              </div>
            </div>

            {/* Inter */}
            <div className={`relative group overflow-hidden mb-8 bg-gradient-to-b from-black to-pink-500 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center">
                <Image
                  src={MImage}
                  alt="Inter"
                  className="w-auto h-48 object-cover rounded-md"
                />
                <p className="font-bold mt-4 text-lg text-center text-white">
                  Inter
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-lg font-semibold">
          "Cuando tienes sueños, nada es imposible."
        </p>
        <p className="text-sm">- Lionel Messi</p>
      </div>
    </div>
  );
}

export default Page;
