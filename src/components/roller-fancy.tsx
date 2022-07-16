import { useState } from "react";
import { defaultOdds, getTeam, Odds } from "../models/odds";



export const RollerFancy = (props: {
  odds: Odds[],
  handlePick: (pick: number) => void,
  num: number
}) => {
  const [cn, setCn] = useState('');
  const [showButton, setShowButton] = useState(true);
  const [rollDone, setRollDone] = useState(false);
  const {odds, num, handlePick} = props;
  const [hl, setHl] = useState()

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
    const id = setInterval( () => setCn(odds[rnd(0, odds.length)].teamName), 250);

    setTimeout( () => { 
      clearInterval(id);
      const team = selectTeam(odds);
      setCn(getTeam(team).teamName);
      setTimeout( () => {
        handlePick(team);
        setRollDone(true)
      }, 3000)
    }, 9000);
    
  }
  
  return (
    <div className="roller w-auto flex flex-row justify-center">
      <button 
        className={ (showButton ? '' : 'hidden') + ` rounded-xl px-1 py-1 border-blue-300 border-4 text-2xl text-blue-300
          hover:bg-black hover:bg-opacity-25 hover:text-blue-100 hover:border-blue-100
          transition duration-300`
        }
        onClick={() => startRoll() }>DRAW PICK #{num} </button>
        <div className={( !rollDone && !showButton ? '' : 'hidden') + " grid grid-cols-3 gap-4 px-5"}>
          {odds.map( (o) => { return (
              <div className={(o.teamName == cn ? "text-blue-400 " : "text-blue-100 ") + "transition-colors duration-150"}>{o.teamName}</div>
            )
          })}
        </div>
        <div className={(rollDone ? '' : 'hidden') + " pr-5 self-center flex"}>
            <div>Pick {num}:&nbsp;</div>
            <div>{cn}</div>
        </div>
    </div>  
  )
}