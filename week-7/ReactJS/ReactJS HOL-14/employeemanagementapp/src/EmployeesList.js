import React from 'react';
import EmployeeCard from './EmployeeProfile';

const employees = [
  { name: 'Shivaguru', role: 'Frontend Developer' },
  { name: 'Vishwa', role: 'UI/UX Designer' },
  { name: 'Prem', role: 'Project Manager' },
  { name: 'Ragavan', role: 'Backend Developer' },
];

const EmployeesList = () => {
  return (
    <div>
      {employees.map((emp, index) => (
        <EmployeeCard key={index} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeesList;
