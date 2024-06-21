/* eslint-disable react/no-unescaped-entities */
'use client';
import React, {useState, useCallback } from 'react';
import BallonDOr from '@/app/awards/individuals/balon-oro/page';
import Botaoro from '@/app/awards/individuals/bota-oro/page';
import GoldenBoy from '@/app/awards/individuals/golden-boy/page';
import TheBest from '@/app/awards/individuals/the-best/page';
import TitleLaureus from '@/app/awards/individuals/premio-laureus/page';
import TitlePichichi from '@/app/awards/individuals/trofeo-pichichi/page';
import { translate, setLocale } from "@/app/components/translate";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import FlagUSA from "@/../../public/us.png";
import FlagDominicanRepublic from "@/../../public/DO.png";

function PresentationIn() {
  const [showFlags, setShowFlags] = useState(false);
  const [language, setLanguage] = useState("en")

  const handleToggleFlags = useCallback(() => {
    setShowFlags((prevShowFlags) => !prevShowFlags);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setLocale(lang);
  };

  const handleKeyDown = (event: React.KeyboardEvent, callback: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      callback();
    }
  };

  return (
    
    <div className="flex flex-wrap justify-center p-4">
      {/* Ballon d'Or */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <BallonDOr />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{translate("words.golden_ball")}</h2>
          <p className="text-gray-700 text-sm text-justify">{translate("awards.golden_ball")}
          </p>
        </div>
      </div>

      {/* Bota de Oro */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <Botaoro />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{translate("words.golden_boot")}</h2>
          <p className="text-gray-700 text-sm text-justify">
            {translate("awards.golden_boot")}
          </p>
        </div>
      </div>

      {/* Golden Boy */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <GoldenBoy />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{translate("words.golden_boy")}</h2>
          <p className="text-gray-700 text-sm text-justify">
            {translate("awards.golden_boy")}
          </p>
        </div>
      </div>

      {/* The Best */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <TheBest />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{translate("words.the_best")}</h2>
          <p className="text-gray-700 text-sm text-justify">
            {translate("awards.the_best")}
          </p>
        </div>
      </div>
      {/* Laureus */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <TitleLaureus />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{translate("words.laureus")}</h2>
          <p className="text-gray-700 text-sm text-justify">
            {translate("awards.laureus")}
          </p>
        </div>
      </div>
      {/* Pichichi */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <TitlePichichi />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{translate("words.pichichi")}</h2>
          <p className="text-gray-700 text-sm text-justify">
           {translate("awards.pichichi")}
          </p>
        </div>
      </div>


    </div>
  );
}

export default PresentationIn;

