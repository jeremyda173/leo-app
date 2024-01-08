import 'tailwindcss/tailwind.css';
import BallonDOr from '@/app/awards/individuals/balon-oro/page';
import Botaoro from '@/app/awards/individuals/bota-oro/page';
import GoldenBoy from '@/app/awards/individuals/golden-boy/page';
import TheBest from '@/app/awards/individuals/the-best/page';
import React from 'react';

function PresentationIn() {
  return (
    <div>
        < BallonDOr />
        < Botaoro />
        < GoldenBoy />
        < TheBest />
    </div>
  );
}

export default PresentationIn;