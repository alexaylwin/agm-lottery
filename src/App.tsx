import React, { useState } from 'react';
import './App.css';
import { Pick } from './components/pick';
import { PickFancy } from "./components/pick-fancy";
import { defaultOdds, Odds } from './models/odds';
import logo from './logo.png';


function App() {

  
  const [odds, setOdds] = useState(defaultOdds);
  const [lastPick, setLastPick] = useState(0);

  const handlePick = (team: number) => { 
    const i = odds.findIndex( (odd: Odds) => odd.team === team );
    const o = [...odds];
    o.splice(i, 1);
    setOdds(o);
    const cp = lastPick + 1;
    setLastPick(cp);
  }

  return (
    <div className="h-screen w-full m-auto bg-neutral-500 text-gray-300">
      <header className="flex justify-between border-b-2 mb-8 pb-2 pl-1">
        <div className="flex justify-start" ><img src={ logo } className="w-16"></img></div>
        <div className='grow flex justify-center self-center -ml-16'>
          <h1 className="text-4xl">Draft Lottery</h1>
        </div>
      </header>
      <main className="flex flex-col w-full">
        <div className={lastPick >= 0 ? '' : 'hidden'}>
          <PickFancy num={1} odds={odds} handlePick={handlePick}></PickFancy>
        </div>
        <div className={lastPick >= 1 ? '' : 'hidden'}>
          <PickFancy num={2} odds={odds} handlePick={handlePick}></PickFancy>
        </div>
        <div className={lastPick >= 2 ? '' : 'hidden'}>
        <PickFancy num={3} odds={odds} handlePick={handlePick}></PickFancy>
        </div>
        <div className={lastPick >= 3 ? '' : 'hidden'}>
        <PickFancy num={4} odds={odds} handlePick={handlePick}></PickFancy>
        </div>
        <div className={lastPick >= 4 ? '' : 'hidden'}>
        <PickFancy num={5} odds={odds} handlePick={handlePick}></PickFancy>
        </div>
        <div className={lastPick >= 5 ? '' : 'hidden'}>
        <PickFancy num={6} odds={odds} handlePick={handlePick}></PickFancy>
        </div>
      </main>
    </div>
  );
}

export default App;
