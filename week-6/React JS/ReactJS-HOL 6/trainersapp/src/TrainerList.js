import React from 'react';
import { Link } from 'react-router-dom';
import trainers from './TrainersMock';

const TrainerList = () => {
  return (
    <div className="container">
      <h2>Trainers List</h2>
      <ul>
        {trainers.map(trainer => (
          <li key={trainer.trainerId}>
            <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerList;
