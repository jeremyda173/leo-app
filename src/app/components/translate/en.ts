import Champions from "@/app/awards/teams/internacional/champions-league/page";
import { Agent } from "http";

const en = {
    auth: {
      team: 'Team',
      friendly_match: 'Friendly Match',
      world_cup: 'World cup',
      champions_league: 'Champions League',
      age: 'Age',
      la_liga: 'La Liga',
    },
    stats: {
      title: 'Stats',
      goals: 'Goal(s)',
      assists: 'Assist(s)',
      distance: 'Distance',
      minutes: 'Minutes',
      shots: 'Shot(s)',
      passes: 'Passes(c)',
      position: 'Position',
      performance: 'Performance',
      result: 'Result',
    },
    teams: {
      inter_miami: 'Inter Miami',
      al_nassr: 'Al-Nassr',
      real_madrid: 'Real madrid',
      fc_barcelona: 'FC Barcelona',
      alemania: 'Alemania',
      uruguay: 'Uruguay',
      espanyol: 'Espanyol',
      argentina: 'Argentina',
      psg: 'PSG',
      liverpool: 'Liverpool',
      manchester_city: 'Manchester City',
      manchester_united: 'Manchester United',
      bayern_munich: 'Bayern Munich',
    },
    dates: {
      january_19: 'January 19',
      september_10: 'September 10',
      may_10: 'May 10',
      march_15: 'May 15',
      april_3: 'April 3',
      september_12: 'September 12',
      june_20: 'July 20',
      february_5: 'February 5',
      july_5: 'July 5',
      august_18: 'August 18',
    },
    home: {
      home: 'Home',
      match_history: 'Match History',
      awards: 'Awards',
      groups: 'Teams',
      family: 'Family'
    },
    text: {
      description: "On a warm summer afternoon in Rosario, Argentina, a boy destined to change the history of football was born on June 24, 1987. Lionel Messi came into the world on June 24, 1987, and from his earliest days, his destiny was linked to soccer. With the ball as an inseparable companion, Messi showed exceptional talent from an early age, dazzling everyone who had the luck to see him play in the dusty streets of his hometown.",
      journey: "At the age of 13, destiny had a twist that would change his life forever. Messi left his native Argentina and moved to Barcelona, Spain, to join La Masia, FC Barcelona's prestigious youth academy. The transition was not easy; he missed his homeland and family, but the dream of conquering European football drove him to overcome any obstacle.",
      masia: "At La Masia, Messi continued his meteoric rise. His skill with the ball, his game vision, and his speed amazed teammates and coaches alike. The young Argentine became a prized jewel, and his name began to resonate throughout the football world. At 16, the crucial moment arrived: Lionel Messi made his debut with FC Barcelona's first team in a friendly match.",
      international: "But Messi also brought his brilliance to the international stage. With the Argentine national team, he experienced epic moments and challenges. The FIFA World Cup became an unrelenting quest for Messi, a burning desire to lead his country to the ultimate glory. Every tournament was a new opportunity for 'La Pulga' to prove his worth on the world stage."
    },
    awards: {
      golden_ball: " The Golden Ball is a prestigious football award given annually to the best player in the world, as voted by sports journalists worldwide. Created by France Football magazine in 1956, the accolade highlights exceptional performances by footballers throughout the calendar year.",
      golden_boot: " The Golden Boot is an award that recognizes the talent and goal-scoring ability of footballers in European leagues and has become a symbol of excellence in the art of scoring goals.",
      golden_boy: " The Golden Boy Award is an annual trophy presented by the Italian sports newspaper Tuttosport since 2003 to the best footballer under 21 in European football.",
      the_best: " The Best Awards were created by FIFA in 2016 after their 'divorce' with France Football. They honor the best male player, best female player, best male coach, and best female coach.",
      laureus: " The Laureus World Sports Awards, also known as the Oscars of Sport, are a series of annual awards that honor the world's most outstanding athletes. Founded in 1999 by the Laureus Sport for Good Foundation, these awards recognize exceptional sporting achievements in various categories.",
      pichichi: " The Pichichi Trophy is an award given annually by the Spanish sports newspaper Marca to the top scorer of Spain's La Liga. Named in honor of the legendary Athletic Club forward, Rafael Pichichi Moreno, this award recognizes the skill and talent of La Liga's top goal-scorers."
    },
    words: {
      golden_boot: " Golden Boot",
      golden_ball: " Golden Ball",
      golden_boy: " Golden Boy",
      the_best: " The Best",
      laureus: " Laureus",
      pichichi: " Trophy Pichichi",
    },
    modal: {
      close: "Close",
      open_golden_ball: "Open Golden Ball",
      open_golden_boot: "Open Golden Boot",
      open_golden_boy: "Open Golden Boy",
      open_laureus: "Open Laureus",
      open_the_best: "Open The Best",
    },    
  };
  
  export default en;
  