'use client';
import React from "react";
import MatchHistory from "../match-history/carta";

function CartaMatch() {

  return (
    <div>
      <div className="flex justify-center rounded-sm">
        <div className="flex space-x-4 p-4">
         <MatchHistory />
        </div>
      </div>
    </div>
  );
}

export default CartaMatch;
