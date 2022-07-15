import { useState } from "react";
import { Odds } from "../models/odds";
import { Roller } from "./roller"

export const Pick = (props: { num: number, odds: Odds[], handlePick: (team: number) =>  void}) => {
  const { num, odds, handlePick } = props;

  const [donePick, setDonePick ] = useState(false);

  //TODO: Calculate team % odds
  // Each team - team picks / total
  const total = Object.values(odds).reduce( (total:number, {count}) => total + count, 0);
  const percentageOdds = odds.map( (o) => { return { teamName: o.teamName, percent: (o.count/total).toFixed(2) } });
  
  return (
<div className="pick mb-5 text-3xl flex flex-col border-y py-2 my-4">
          <div className="flex flex-row justify-center">
            <div className="pr-5 self-center">Pick {num}:</div>
            <Roller odds={odds} handlePick={handlePick}></Roller>
          </div>
          <div className={"text-base flex flex-row justify-center mt-2"}>
            { percentageOdds.map((v, i) => (<span key={i}>{v.teamName + ' - ' + v.percent + '%'},&nbsp;</span>)) }
          </div>
        </div>    
  )
}