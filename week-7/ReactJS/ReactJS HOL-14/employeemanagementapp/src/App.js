import React, { useState } from 'react';
import EmployeesList from './EmployeesList';
import ThemeContext from './themeContext';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginBottom: '20px',
    backgroundColor: theme === 'light' ? '#333' : '#eee',
    color: theme === 'light' ? '#fff' : '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h1>Employee Management App</h1>
        <button style={buttonStyle} onClick={toggleTheme}>
          Toggle Theme
        </button>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
