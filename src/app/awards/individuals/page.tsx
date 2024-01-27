/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import BallonDOr from '@/app/awards/individuals/balon-oro/page';
import Botaoro from '@/app/awards/individuals/bota-oro/page';
import GoldenBoy from '@/app/awards/individuals/golden-boy/page';
import TheBest from '@/app/awards/individuals/the-best/page';

function PresentationIn() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <BallonDOr />
        <div className="p-2">
          <h2 className="text-lg font-semibold mb-1">Ballon d'Or</h2>
          <p className="text-gray-700 text-sm">
            Description or additional information about the award goes here.
          </p>
        </div>
      </div>

      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <Botaoro />
        <div className="p-2">
          <h2 className="text-lg font-semibold mb-1">Bota de Oro</h2>
          <p className="text-gray-700 text-sm">
            Description or additional information about the award goes here.
          </p>
        </div>
      </div>

      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <GoldenBoy />
        <div className="p-2">
          <h2 className="text-lg font-semibold mb-1">Golden Boy</h2>
          <p className="text-gray-700 text-sm">
            Description or additional information about the award goes here.
          </p>
        </div>
      </div>

      <div className="max-w-xs mx-2 mb-4 bg-white rounded-md overflow-hidden shadow-md">
        <TheBest />
        <div className="p-2">
          <h2 className="text-lg font-semibold mb-1">The Best</h2>
          <p className="text-gray-700 text-sm">
            Description or additional information about the award goes here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PresentationIn;
