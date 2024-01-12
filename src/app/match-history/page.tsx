import React from "react";
import MatchHistory from "../match-history/carta";
import MatchHistoryB from "../match-history/carta2";
import NextGamefrom from '../match-history/next-game';

function CartaMatch() {
 return (
    <div className="flex space-x-4">
    <MatchHistory />
    <MatchHistoryB />
    <NextGamefrom />
    </div>
 );
}


export default CartaMatch;