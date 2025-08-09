import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Have a great day!");
  };

  sayWelcome = (msg) => {
    alert(`Welcome! ${msg}`);
  };

  handleClick = (event) => {
    alert("I was clicked");
    console.log(event);
  };

  render() {
    const buttonStyle = {
      padding: "10px 20px",
      margin: "10px",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "all 0.3s ease"
    };

    const containerStyle = {
      textAlign: "center",
      fontFamily: "Segoe UI, sans-serif",
      padding: "40px",
      background: "linear-gradient(to right, #f0f2f5, #e0f7fa)",
      minHeight: "100vh"
    };

    const headingStyle = {
      fontSize: "32px",
      color: "#2c3e50",
      marginBottom: "30px"
    };

    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>🚀 Event Examples App</h1>

        <h2>Counter: {this.state.count}</h2>
        <button style={buttonStyle} onClick={this.increment}>➕ Increment</button>
        <button style={buttonStyle} onClick={this.decrement}>➖ Decrement</button>

        <hr />

        <button style={buttonStyle} onClick={() => this.sayWelcome("Enjoy the event lab!")}>
          🙋‍♂️ Say Welcome
        </button>

        <hr />

        <button style={buttonStyle} onClick={this.handleClick}>
          🔘 Synthetic Event
        </button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
