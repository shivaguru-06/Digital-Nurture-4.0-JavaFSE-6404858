import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import IndianPlayers from './components/IndianPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

function App() {
  const flag = false; 

  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 80 },
    { name: "Dhoni", score: 50 },
    { name: "KL Rahul", score: 60 },
    { name: "Pant", score: 30 },
    { name: "Jadeja", score: 70 },
    { name: "Ashwin", score: 45 },
    { name: "Shami", score: 20 },
    { name: "Bumrah", score: 25 },
    { name: "Surya", score: 78 },
    { name: "Gill", score: 95 }
  ];

  const T20players = ["Virat", "Rohit", "Pant", "Surya"];
  const RanjiPlayers = ["Jadeja", "Ashwin", "Gill", "Shami"];
  const IndianPlayersMerged = [...T20players, ...RanjiPlayers];

  const IndianTeam = ["Virat", "Rohit", "Pant", "Surya", "Jadeja", "Ashwin", "Gill", "Shami"];

  if (flag) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />

        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <IndianPlayers IndianTeam={IndianTeam} />

        <h1>List of Indian Players Merged</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayersMerged} />
      </div>
    );
  }
}

export default App;
