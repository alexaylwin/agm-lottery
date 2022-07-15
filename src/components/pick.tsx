import { Odds } from "../models/odds";
import { Roller } from "./roller"

export const Pick = (props: { num: number, odds: Odds[], handlePick: (team: number) =>  void}) => {
  const { num, odds, handlePick } = props;

  //TODO: Calculate team % odds
  
  return (
<div className="pick mb-5 text-3xl flex flex-col border-y py-2 my-4">
          <div className="flex flex-row justify-center">
            <div className="pr-5 self-center">Pick {num}:</div>
            <Roller odds={odds} handlePick={handlePick}></Roller>
          </div>
          <div className='text-base flex flex-row justify-center mt-2'>
            (Team 1 - xx%, Team 2 - xx%, Team 3 - xx%, Team 4 - xx%, Team 5 - xx%, Team 6 - xx%)
          </div>
        </div>    
  )
}