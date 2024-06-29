'use client';
import React from "react";
import MatchHistory from "./carta";

function CartaMatch() {

  return (
    <div>
      <div className="flex justify-center rounded-sm bg-slate-900">
        <div className="flex space-x-4 p-4">
         <MatchHistory />
        </div>
      </div>
    </div>
  );
}

export default CartaMatch;