/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import BImage from '@/../../public/Messi_barc.jpeg';
import AImage from '@/../../public/Messi_arge.jpg';
import PImage from '@/../../public/Mess_psg.jpg';
import MImage from '@/../../public/Messi_mia.jpg';

function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="text-center py-4">
        <h1 className="text-3xl font-bold">Lionel Messi Gallery</h1>
      </header>

      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {/* Barcelona */}
            <div className="relative group overflow-hidden">
              <Image src={BImage} alt="Barcelona" className="w-full h-48 object-cover transition-transform transform scale-100 group-hover:scale-105" />
              <div className="absolute inset-0 bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col items-center justify-center">
                <p className="font-bold mb-2 text-sm">Barcelona</p>
              </div>
            </div>

            {/* Argentina */}
            <div className="relative group overflow-hidden">
              <div className="w-full h-48 relative">
                <Image src={AImage} alt="Argentina" className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col items-center justify-center">
                  <p className="font-bold mb-2 text-sm">Argentina</p>
                </div>
              </div>
            </div>

            {/* Paris Saint-Germain */}
            <div className="relative group overflow-hidden">
              <Image src={PImage} alt="Paris Saint-Germain" className="w-full h-48 object-cover transition-transform transform scale-100 group-hover:scale-105" />
              <div className="absolute inset-0 bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col items-center justify-center">
                <p className="font-bold mb-2 text-sm">Paris Saint-Germain</p>
              </div>
            </div>

            {/* Miami */}
            <div className="relative group overflow-hidden">
              <div className="w-full h-48 relative">
                <Image src={MImage} alt="Miami" className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col items-center justify-center">
                  <p className="font-bold mb-2 text-sm">Miami</p>
                </div>
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
