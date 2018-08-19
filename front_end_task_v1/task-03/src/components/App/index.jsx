import React, { Component } from 'react';
import './App.css';
import Domino from '../Domino';
import ControllBar from '../ControllBar';

class App extends Component {
  state = {
    inputSpeedRotateValue: null,
    inputSizeValue: null,
    dominoSize: {
      width: 100,
      height: 200,
    },
  };

  render() {
    const { inputSizeValue, inputSpeedRotateValue, dominoSize } = this.state;
    // eslint-disable-next-line
    console.log(inputSizeValue, inputSpeedRotateValue);
    return (
      <div className="App">
        <Domino size={dominoSize} />
        <ControllBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
