import React from 'react';
import CohortDetails from './components/CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    {
      id: 1,
      name: 'React Bootcamp',
      status: 'ongoing',
      startDate: '2025-08-01',
      endDate: '2025-09-01'
    },
    {
      id: 2,
      name: 'Java Basics',
      status: 'completed',
      startDate: '2025-06-01',
      endDate: '2025-07-01'
    },
    {
      id: 3,
      name: 'Python for Data Science',
      status: 'ongoing',
      startDate: '2025-08-10',
      endDate: '2025-09-15'
    },
    {
      id: 4,
      name: 'Angular Mastery',
      status: 'completed',
      startDate: '2025-07-01',
      endDate: '2025-08-01'
    }
  ];

  return (
    <div className="center-container">
      {cohorts.map(cohort => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
