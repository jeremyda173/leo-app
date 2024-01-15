'use client';
import React, { useState } from "react";
import MatchHistory from "../match-history/carta";
import MatchHistoryB from "../match-history/carta2";
import MatchHistoryC from "../match-history/carta3";
import NextGameform from '../match-history/next-game';

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
        {activeCard === "MatchHistoryB" && <MatchHistoryB />}
        {activeCard === "MatchHistoryC" && <MatchHistoryC />}
        {activeCard === "NextGameform" && <NextGameform />}
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
