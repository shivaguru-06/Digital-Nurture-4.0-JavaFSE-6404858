import React from 'react';
import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Shivaguru"
        School="ABC High School"
        total={450}
        goal={500}
      />
    </div>
  );
}

export default App;
