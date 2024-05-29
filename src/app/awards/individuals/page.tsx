/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import BallonDOr from '@/app/awards/individuals/balon-oro/page';
import Botaoro from '@/app/awards/individuals/bota-oro/page';
import GoldenBoy from '@/app/awards/individuals/golden-boy/page';
import TheBest from '@/app/awards/individuals/the-best/page';
import TitleLaureus from '@/app/awards/individuals/premio-laureus/page';
import TitlePichichi from '@/app/awards/individuals/trofeo-pichichi/page';

function PresentationIn() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {/* Ballon d'Or */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <BallonDOr />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Ballon d'Or</h2>
          <p className="text-gray-700 text-sm text-justify">
            El "Balón de Oro" es un prestigioso premio de fútbol otorgado anualmente al mejor jugador del mundo, según la votación de periodistas deportivos de todo el mundo. El reconocimiento, creado por la revista France Football en 1956, destaca el rendimiento excepcional de futbolistas a lo largo del año calendario.
          </p>
        </div>
      </div>

      {/* Bota de Oro */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <Botaoro />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Bota de Oro</h2>
          <p className="text-gray-700 text-sm text-justify">
            La Bota de Oro es un premio que reconoce el talento y la capacidad goleadora de los futbolistas en las ligas europeas y se ha convertido en un símbolo de excelencia en el arte del gol.
          </p>
        </div>
      </div>

      {/* Golden Boy */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <GoldenBoy />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Golden Boy</h2>
          <p className="text-gray-700 text-sm text-justify">
            El Premio Golden Boy es un trofeo anual que desde el año 2003 entrega el diario deportivo italiano Tuttosport al mejor futbolista del fútbol europeo menor de 21 años.
          </p>
        </div>
      </div>

      {/* The Best */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <TheBest />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">The Best</h2>
          <p className="text-gray-700 text-sm text-justify">
            Los Premios The Best fueron creados por la FIFA en 2016 tras su 'divorcio' con France Football. Se premia al mejor jugador, a la mejor jugadora, al mejor entrenador masculino y al mejor entrenador o entrenadora femenina.
          </p>
        </div>
      </div>
      {/* Laureus */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <TitleLaureus />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Laureus</h2>
          <p className="text-gray-700 text-sm text-justify">
            Los Premios Laureus World Sports, también conocidos como los "Oscar del deporte", son una serie de galardones anuales que honran a los deportistas más destacados del mundo. Fundados en 1999 por la Laureus Sport for Good Foundation, estos premios reconocen logros deportivos excepcionales en varias categorías.
          </p>
        </div>
      </div>
      {/* Pichichi */}
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <TitlePichichi />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Trofeo Pichichi</h2>
          <p className="text-gray-700 text-sm text-justify">
            El Trofeo Pichichi es un galardón otorgado anualmente por el diario deportivo español Marca al máximo goleador de la Primera División de España. Nombrado en honor al legendario delantero del Athletic Club, Rafael "Pichichi" Moreno, este premio reconoce la destreza y el talento de los goleadores más destacados de La Liga.
          </p>
        </div>
      </div>


    </div>
  );
}

export default PresentationIn;

