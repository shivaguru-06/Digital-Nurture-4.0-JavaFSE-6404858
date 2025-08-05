import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  
  updateEntry = () => {
    this.setState({ entryCount: this.state.entryCount + 1 });
  };


  updateExit = () => {
    this.setState({ exitCount: this.state.exitCount + 1 });
  };

  render() {
    return (
      <div style={{
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial'
      }}>
        <h1>People Counter</h1>
        <p>People Entered: {this.state.entryCount}</p>
        <p>People Exited: {this.state.exitCount}</p>

        <button 
          onClick={this.updateEntry}
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Login
        </button>

        <button 
          onClick={this.updateExit}
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;
