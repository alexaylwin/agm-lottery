import { useState } from "react";
import { defaultOdds, getTeam, Odds } from "../models/odds";



export const Roller = (props: {
  odds: Odds[],
  handlePick: (pick: number) => void,
  num: number
}) => {
  const [cn, setCn] = useState('');
  const [showButton, setShowButton] = useState(true);
  const {odds, num, handlePick} = props;

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
    const id = setInterval( () => setCn(getTeam(rnd(1, 6)).teamName), 75);

    setTimeout( () => { 
      clearInterval(id);
      const team = selectTeam(props.odds);
      setCn(getTeam(team).teamName);
      props.handlePick(team);
    }, 7000);
    
  }
  
  return (
    <div className="roller w-auto flex flex-row justify-center">
      <div className={(!showButton ? '' : 'hidden') + " pr-5 self-center"}>Pick {num}:</div>
      <button 
        className={ (showButton ? '' : 'hidden') + ` rounded-xl px-1 py-1 border-blue-300 border-4 text-2xl text-blue-300
          hover:bg-black hover:bg-opacity-25 hover:text-blue-100 hover:border-blue-100
          transition duration-300`
        }
        onClick={() => startRoll() }>DRAW PICK #{num} </button>

        <div className ={ (showButton ? 'hidden' : '')} >{cn}</div>
    </div>  
  )
}