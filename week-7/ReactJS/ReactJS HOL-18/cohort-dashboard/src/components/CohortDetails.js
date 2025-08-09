import React from 'react';

const CohortDetails = (props) => {
  const { cohort } = props;

  return (
    <div>
      <h3>{cohort.code}</h3>
      <p>Name: {cohort.name}</p>
      <p>Status: {cohort.status}</p>
    </div>
  );
};

export default CohortDetails;
