import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div style={{
        border: '1px solid gray', 
        padding: '15px',
        borderRadius: '8px',
        width: '220px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        textAlign: 'center'
      }}>
        <h3>Item: {this.props.itemname}</h3>
        <p>Price: ₹{this.props.price}</p>
      </div>
    );
  }
}


Cart.defaultProps = {
  itemname: "Default Item",
  price: 0
};

export default Cart;
