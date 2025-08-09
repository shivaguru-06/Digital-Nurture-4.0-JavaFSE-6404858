import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: '',
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (parseFloat(this.state.rupees) / 88).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    const formStyle = {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      width: "300px",
      margin: "0 auto"
    };

    const inputStyle = {
      padding: "10px",
      width: "80%",
      margin: "10px 0",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px"
    };

    const buttonStyle = {
      padding: "10px 20px",
      backgroundColor: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    };

    const resultStyle = {
      marginTop: "15px",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#34495e"
    };

    return (
      <div>
        <h2>💱 Currency Convertor</h2>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter ₹ in Rupees"
            value={this.state.rupees}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button style={buttonStyle} type="submit">Convert</button>
        </form>
        <p style={resultStyle}>Converted Euro: €{this.state.euro}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
