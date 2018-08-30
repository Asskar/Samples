import React, { Component } from 'react';

import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'

import './App.css';

class App extends Component {
  state = {
    clickCounter: 0,
    userName: ""
  }

  onChangeHandler = ({ target }) =>
    this.setState({
      userName: target.value
    });

  onClickHandler = () =>
    this.setState({ clickCounter: this.state.clickCounter + 1 })

  render() {
    return (
      <div className="App">
        <UserOutput
          userName={this.state.userName}
        />
        <UserInput
          change={this.onChangeHandler}
          userName={this.state.userName}
        />
        <button
          onClick={this.onClickHandler}>
          Clicked: {this.state.clickCounter} times
        </button>
      </div>
    );
  }
}

export default App;
