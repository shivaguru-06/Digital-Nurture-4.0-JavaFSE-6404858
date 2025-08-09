import React from 'react';

const GuestPage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome Guest! ✈️</h2>
      <p>Please login to book your tickets.</p>
      <ul>
        <li>Flight: Chennai → Delhi | ₹5000</li>
        <li>Flight: Mumbai → Bangalore | ₹4000</li>
        <li>Flight: Kolkata → Hyderabad | ₹4500</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    margin: "20px auto",
    width: "60%",
    textAlign: "left"
  }
};

export default GuestPage;
