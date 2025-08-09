import React, { useContext } from 'react';
import ThemeContext from './themeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#2c3e50',
    color: theme === 'light' ? '#000' : '#ecf0f1',
    padding: '15px',
    margin: '10px auto',
    borderRadius: '8px',
    width: '50%',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    padding: '8px 15px',
    backgroundColor: theme === 'light' ? '#3498db' : '#16a085',
    color: '#fff',
    border: 'none',
    borderRadius: '5px'
  };

  return (
    <div style={cardStyle}>
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <button style={buttonStyle}>View Profile</button>
    </div>
  );
};

export default EmployeeCard;
