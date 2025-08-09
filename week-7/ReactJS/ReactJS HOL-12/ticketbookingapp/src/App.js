import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const buttonStyle = {
    margin: "20px",
    padding: "10px 20px",
    backgroundColor: isLoggedIn ? "#e74c3c" : "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🛫 Ticket Booking App</h1>
      <button style={buttonStyle} onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* 🔁 Conditional Rendering */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
