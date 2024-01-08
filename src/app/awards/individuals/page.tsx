import 'tailwindcss/tailwind.css';
import React from 'react';

import BallonDOr from '@/app/awards/individuals/balon-oro/page';
import Botaoro from '@/app/awards/individuals/bota-oro/page';
import GoldenBoy from '@/app/awards/individuals/golden-boy/page';
import TheBest from '@/app/awards/individuals/the-best/page';

function PresentationIn() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="col-span-1">
        <BallonDOr />
      </div>
      <div className="col-span-1">
        <Botaoro />
      </div>
      <div className="col-span-1">
        <GoldenBoy />
      </div>
      <div className="col-span-1">
        <TheBest />
      </div>
    </div>
  );
}

export default PresentationIn;
