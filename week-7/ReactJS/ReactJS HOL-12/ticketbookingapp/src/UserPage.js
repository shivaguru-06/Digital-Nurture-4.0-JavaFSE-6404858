
import React from 'react';

const UserPage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome Back! 🧳</h2>
      <p>You can now book your tickets:</p>
      <button style={styles.button}>Book Chennai → Delhi</button>
      <button style={styles.button}>Book Mumbai → Bangalore</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#e8faff",
    borderRadius: "10px",
    margin: "20px auto",
    width: "60%",
    textAlign: "left"
  },
  button: {
    margin: "10px 0",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default UserPage;
