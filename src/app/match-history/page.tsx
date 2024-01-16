'use client';
import React, { useState } from "react";
import MatchHistory from "../match-history/carta";
import NextGameA from "../match-history/carta2";
import NextGameB from "../match-history/next-game";
import NextGameform from '../match-history/next-game2';

function CartaMatch() {
  const cards = ["MatchHistory", "MatchHistoryB", "MatchHistoryC", "NextGameform"];
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleNextClick = () => {
    const newIndex = (activeCardIndex + 1) % cards.length;
    setActiveCardIndex(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = (activeCardIndex - 1 + cards.length) % cards.length;
    setActiveCardIndex(newIndex);
  };

  const activeCard = cards[activeCardIndex];

  return (
    <div>
      <div className="flex space-x-4">
        {activeCard === "MatchHistory" && <MatchHistory />}
        {activeCard === "NextGameform" && <NextGameform />}
        {activeCard === "MatchHistoryB" && <NextGameA />}
        {activeCard === "MatchHistoryC" && <NextGameB />}
        
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-full mr-4"
          onClick={handlePrevClick}
        >
          &larr; Anterior
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-full"
          onClick={handleNextClick}
        >
          Siguiente &rarr;
        </button>
      </div>
    </div>
  );
}

export default CartaMatch;
