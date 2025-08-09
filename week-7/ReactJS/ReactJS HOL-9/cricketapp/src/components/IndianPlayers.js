import React from 'react';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';

const IndianPlayers = ({ IndianTeam }) => {
  return (
    <div>
      <h2>Odd Players</h2>
      <OddPlayers players={IndianTeam} />

      <h2>Even Players</h2>
      <EvenPlayers players={IndianTeam} />
    </div>
  );
};

export default IndianPlayers;
