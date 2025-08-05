import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  render() {
    const items = [
      { itemname: "Laptop", price: 60000 },
      { itemname: "Mobile", price: 25000 },
      { itemname: "Headphones", price: 2000 },
      { itemname: "Watch", price: 5000 },
      { itemname: "Backpack", price: 1500 }
    ];

    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h1>Welcome to Online Shopping</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px"
        }}>
          {items.map((item, index) => (
            <Cart 
              key={index} 
              itemname={item.itemname} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
