import { useState } from "react";
import { Odds } from "../models/odds";



export const Roller = (props: {
  odds: Odds[],
  handlePick: (pick: number) => void
}) => {
  const [cn, setCn] = useState(0);
  const [showButton, setShowButton] = useState(true);

  const rnd = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const selectTeam = (odds: Odds[]): number => {
    //Generate table with all picks
    const pickTable = odds.flatMap( (odd) => Array(odd.count).fill(odd.team) );
    return pickTable[rnd(0, pickTable.length - 1)];
  }

  const startRoll = () => {
    setShowButton(false);
    const id = setInterval( () => setCn(rnd(1, 6)), 45);

    setTimeout( () => { 
      clearInterval(id);
      const team = selectTeam(props.odds);
      setCn(team);
      props.handlePick(team);
    }, 5000);
    
  }
  
  return (
    <div className="roller w-20">
      <button 
        className={ (showButton ? '' : 'hidden') + ` rounded-xl px-1 py-1 border-blue-300 border-4 text-2xl text-blue-300
          hover:bg-black hover:bg-opacity-25 hover:text-blue-100 hover:border-blue-100
          transition duration-300`
        }
        onClick={() => startRoll() }>DRAW</button>

        <div className ={ (showButton ? 'hidden' : '')} >{cn}</div>
    </div>  
  )
}