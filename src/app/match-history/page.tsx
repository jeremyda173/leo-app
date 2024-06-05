'use client';
import React, { useState } from "react";
import MatchHistory from "../match-history/carta";
import NextGameA from "../match-history/carta2";
import NextGameB from "../match-history/next-game";
import NextGameform from '../match-history/next-game2';

function CartaMatch() {
  const cards = ["MatchHistory", "MatchHistoryB", "MatchHistoryC", "NextGameform"];
  const [activeCardIndex, setActiveCardIndex] = useState(2);

  const handleNextClick = () => {
    if (activeCardIndex < cards.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  const activeCard = cards[activeCardIndex];

  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 text-black p-4 rounded-md shadow-md max-w-md border-2">
          Match schedule
        </h1>
      </div>
      <div className="flex justify-center rounded-sm">
        <div className="flex space-x-4">
          {activeCard === "MatchHistory" && <MatchHistory />}
          {activeCard === "NextGameform" && <NextGameform />}
          {activeCard === "MatchHistoryB" && <NextGameA />}
          {activeCard === "MatchHistoryC" && <NextGameB />}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div>
          <button
            className="bg-blue-500 text-white p-2 rounded-full mr-4"
            onClick={handlePrevClick} disabled={activeCardIndex === 0}
          >
            &#8592;
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-full"
            onClick={handleNextClick} disabled={activeCardIndex === cards.length - 1}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartaMatch;
