'use client';
import React from "react";
import Image from "next/image";
import CopaDelReyImage from "@/../../public/Awards/Copa_del_Rey.png";
import USOpenCupImage from "@/../../public/Awards/League Cup.png";
import 'tailwindcss/tailwind.css';

function Copa() {
  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Copas Nacionales Ganadas por Lionel Messi</h1>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image src={CopaDelReyImage} alt="Copa del Rey" width={100} height={100} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">FC Barcelona</h2>
              <p className="text-gray-700">Copa del Rey: 7 veces (2008–09, 2011–12, 2014–15, 2015–16, 2016–17, 2017–18, 2020–21)</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image src={USOpenCupImage} alt="U.S. Open Cup" width={100} height={100} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Inter Miami</h2>
              <p className="text-gray-700">U.S. Open Cup: 1 vez (2023)</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Copa;
