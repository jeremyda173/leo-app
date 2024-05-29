import React from "react";
import Image from "next/image";
import SupercopaDeEspañaImage from "@/../../public/Awards/SupercopaEspaña.png";
import TropheeDesChampionsImage from "@/../../public/Awards/Supercopa_da_França.png";
import 'tailwindcss/tailwind.css';

function SuperCopaSpain() {
  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Supercopas Ganadas por Lionel Messi</h1>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image src={SupercopaDeEspañaImage} alt="Supercopa de España" width={100} height={100} className="border-gray-300" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">FC Barcelona</h2>
              <p className="text-gray-700">Supercopa de España: 8 veces (2005, 2006, 2009, 2010, 2011, 2013, 2016, 2018)</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image src={TropheeDesChampionsImage} alt="Trophée des Champions" width={100} height={100} className="border-gray-300" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Paris Saint-Germain (PSG)</h2>
              <p className="text-gray-700">Trophée des Champions: 1 vez (2022)</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SuperCopaSpain;
