import 'tailwindcss/tailwind.css';
import BallonDOr from '@/app/awards/individuals/balon-oro/page';
import Botaoro from '@/app/awards/individuals/bota-oro/page';
import GoldenBoy from '@/app/awards/individuals/golden-boy/page';
import React from 'react';

function PresentationIn() {
  return (
    <div>
        < BallonDOr />
        < Botaoro />
        < GoldenBoy />
    </div>
  );
}

export default PresentationIn;