import { useState } from "react";
import { Odds } from "../models/odds";
import { RollerFancy } from "./roller-fancy"

export const PickFancy = (props: { num: number, odds: Odds[], handlePick: (team: number) =>  void}) => {
  const { num, odds, handlePick } = props;

  const [donePick, setDonePick ] = useState(false);

  //TODO: Calculate team % odds
  // Each team - team picks / total
  const total = Object.values(odds).reduce( (total:number, {count}) => total + count, 0);
  const percentageOdds = odds.map( 
    (o) => { 
      return { teamName: o.teamName, percent: Math.round(((o.count/total)*100)) } 
    }
  );
  
  return (
<div className={ (donePick ? "bg-gray-800" : "") + " transition-all duration-1000 pick mb-5 text-3xl flex flex-col border-y py-8 my-4"}>
          <div className="flex flex-row justify-center">
            <RollerFancy num={num} odds={odds} handlePick={(n:number) => { setDonePick(true); handlePick(n) }}></RollerFancy>
          </div>
          <div className={(donePick ? "hidden" : "") + " text-base flex flex-row  justify-around mt-5 px-5"}>
            { percentageOdds.map((v, i) => (<div className=" border-2 border-gray-200 py-1 px-2" key={i}><span className="font-bold mr-1">{v.teamName}</span>{v.percent + '%'}</div>)) }
          </div>
        </div>    
  )
}