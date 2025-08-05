import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  return (
    <div className={styles.box}>
      <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
        {cohort.status}
      </h3>
      <dl>
        <dt>Name</dt>
        <dd>{cohort.name}</dd>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date</dt>
        <dd>{cohort.endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
