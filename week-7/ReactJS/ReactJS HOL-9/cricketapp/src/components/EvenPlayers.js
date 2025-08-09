import React from 'react';

const EvenPlayers = ({ players }) => {
  const even = players.filter((_, index) => index % 2 !== 0);

  return (
    <ul>
      {even.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
