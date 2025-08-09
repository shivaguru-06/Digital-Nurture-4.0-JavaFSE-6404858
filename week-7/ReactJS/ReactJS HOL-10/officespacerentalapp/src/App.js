import React from 'react';
import office1 from './images/co-workzone.jpg';
import office2 from './images/sky offices.jpg';
import office3 from './images/startup.jpg';



const officeList = [
  {
    name: "Co-Work Zone",
    rent: 55000,
    address: "MG Road, Bengaluru",
    image: office1
  },
  {
    name: "Startup Hub",
    rent: 75000,
    address: "T Nagar, Chennai",
    image: office3
  },
  {
    name: "Sky Offices",
    rent: 60000,
    address: "Kondapur, Hyderabad",
    image: office2
  }
];



function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* ✅ JSX Heading */}
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Office Space Rental App</h1>

      {/* ✅ Loop through office list */}
      {officeList.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? "red" : "green"
        };

        return (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "20px auto",
            width: "60%",
            borderRadius: "10px",
            background: "#f9f9f9"
          }}>
            {/* ✅ Image using JSX attribute */}
            <img src={office.image} alt={office.name} style={{ width: "100%", borderRadius: "8px" }} />

            {/* ✅ JavaScript Expressions in JSX */}
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
