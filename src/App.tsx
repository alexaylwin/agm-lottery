import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Pick } from './components/pick';
import { defaultOdds, Odds } from './models/odds';



function App() {

  
  const [odds, setOdds] = useState(defaultOdds);

  const handlePick = (team: number) => { 
    console.log('team - ' + team );
    const i = odds.findIndex( (odd: Odds) => odd.team === team );
    const o = [...odds];
    o.splice(i, 1);
    setOdds(o);
    // setOdds(
    //   odds.splice( odds.findIndex( (odd) => odd.team == team), 1)
    // );
  }

  return (
    <div className="h-screen w-full m-auto bg-neutral-500 text-gray-300">
      <header className="flex-col flex border-b-2 mb-8 pb-2">
        <div className='' onClick={() => console.log(odds)}>Bowman AGM 2022</div>
        <div className='grow flex justify-center'>
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
