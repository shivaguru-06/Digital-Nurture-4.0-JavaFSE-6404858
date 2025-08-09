import React from 'react';

const Scorebelow70 = ({ players }) => {
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <ul>
      {lowScorers.map((player, index) => (
        <li key={index}>
          {player.name} - {player.score}
        </li>
      ))}
    </ul>
  );
};

export default Scorebelow70;
