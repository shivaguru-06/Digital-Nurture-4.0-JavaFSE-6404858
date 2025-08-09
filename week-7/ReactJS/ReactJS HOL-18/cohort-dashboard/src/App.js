import React from 'react';
import CohortDetails from './components/CohortDetails';
import { CohortData } from './components/Cohort';

function App() {
  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      {CohortData.map(cohort => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
