import React, { useState } from 'react';
import './App.css';
import { Pick } from './components/pick';
import { defaultOdds, Odds } from './models/odds';
import logo from './logo.png';


function App() {

  
  const [odds, setOdds] = useState(defaultOdds);

  const handlePick = (team: number) => { 
    const i = odds.findIndex( (odd: Odds) => odd.team === team );
    const o = [...odds];
    o.splice(i, 1);
    setOdds(o);
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
        <Pick num={1} odds={odds} handlePick={handlePick}></Pick>
        <Pick num={2} odds={odds} handlePick={handlePick}></Pick>
        <Pick num={3} odds={odds} handlePick={handlePick}></Pick>
        <Pick num={4} odds={odds} handlePick={handlePick}></Pick>
        <Pick num={5} odds={odds} handlePick={handlePick}></Pick>
        <Pick num={6} odds={odds} handlePick={handlePick}></Pick>
      </main>
    </div>
  );
}

export default App;
