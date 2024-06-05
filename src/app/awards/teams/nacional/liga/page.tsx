'use client';
import React from "react";
import Image from "next/image";
import LaLigaImage from "@/../../public/Awards/LaLiga.png";
import Ligue1Image from "@/../../public/Awards/Ligue_1.png";
import 'tailwindcss/tailwind.css';

function Liga() {
  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Ligas Ganadas por Lionel Messi</h1>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image src={LaLigaImage} alt="La Liga" width={100} height={100} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">FC Barcelona</h2>
              <p className="text-gray-700">La Liga: 10 veces (2004–05, 2005–06, 2008–09, 2009–10, 2010–11, 2012–13, 2014–15, 2015–16, 2017–18, 2018–19)</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image src={Ligue1Image} alt="Ligue 1" width={100} height={100} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Paris Saint-Germain (PSG)</h2>
              <p className="text-gray-700">Ligue 1: 1 vez (2021–22)</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Liga;
