import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Domino from '../Domino';
import ControllBar from '../ControllBar';
import selectOptions from '../../selectors/select-options';

const firstRadomTypeDomino = () => {
  const randomNumber = Math.round(Math.random() * selectOptions.length);
  const data = selectOptions[randomNumber];
  return data.value;
};
class App extends Component {
  state = {
    inputSpeedRotateValue: '0',
    inputSizeValue: '0',
    turn: null,
    dominoSize: {
      width: 100,
      height: 200,
    },
    isAnimated: false,
    selectValue: null,
    selectedType: firstRadomTypeDomino(),
    options: selectOptions,
  };

  handleRotateDominoLeft = evt => {
    const { turn } = this.state;

    evt.preventDefault();

    if (turn === 'left') return;

    this.setState({
      isAnimated: true,
      turn: 'left',
    });
  };

  handleRotateDominoRight = evt => {
    const { turn } = this.state;

    evt.preventDefault();

    if (turn === 'right') return;

    this.setState({
      isAnimated: true,
      turn: 'right',
    });
  };

  handleReset = evt => {
    evt.preventDefault();

    this.setState(
      {
        isAnimated: false,
        turn: null,
        dominoSize: {
          width: 100,
          height: 200,
        },
        inputSpeedRotateValue: '0',
        inputSizeValue: '0',
      },
      () => this.randomDominoType(),
    );
  };

  onChangeSize = evt => {
    evt.preventDefault();

    this.setState({
      inputSizeValue: evt.target.value,
    });
  };

  onChangeSpeedRotateDomino = evt => {
    evt.preventDefault();

    this.setState({
      inputSpeedRotateValue: evt.target.value,
    });
  };

  onChangeSelect = val => {
    this.setState({
      selectedType: val.value,
      selectValue: val.label,
    });
  };

  randomDominoType = () => {
    const randomNumber = Math.round(Math.random() * selectOptions.length);
    const data = selectOptions[randomNumber];

    this.setState({
      selectedType: data.value,
    });
  };

  changeTurn = () => {
    this.setState({
      turn: 'left',
    });
  };

  render() {
    const {
      inputSizeValue,
      inputSpeedRotateValue,
      dominoSize,
      turn,
      isAnimated,
      selectValue,
      options,
      selectedType,
    } = this.state;

    return (
      <div className="App">
        <Domino
          size={dominoSize}
          turn={turn}
          speed={inputSpeedRotateValue}
          sized={inputSizeValue}
          isAnimated={isAnimated}
          selectedType={selectedType}
        />
        <ControllBar
          inputSizeValue={inputSizeValue}
          onChangeSize={this.onChangeSize}
          handleRotateLeft={this.handleRotateDominoLeft}
          handleRotateRight={this.handleRotateDominoRight}
          handleReset={this.handleReset}
          inputSpeedRotateValue={inputSpeedRotateValue}
          onChangeSpeedRotate={this.onChangeSpeedRotateDomino}
          selectValue={selectValue}
          onChangeSelect={this.onChangeSelect}
          selectOptions={options}
        />
      </div>
    );
  }
}

export default hot(module)(App);
