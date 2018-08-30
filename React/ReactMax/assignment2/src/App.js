import React, { Component } from 'react';
import './App.css';
import InputLength from './Components/InputLength'
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';


class App extends Component {
  state = {
    text: ''
  };

  onChangeHandler = event =>
    this.setState({ text: event.target.value });

  onCharClickHandler = index => {
    const { text } = this.state;
    const newState = Array.from(text).splice(index + 1).join('');

    this.setState({
      text: newState
    });
  }

  render = () => {
    const { text } = this.state;
    const textLength = text.length
    const textArray = Array.from(text);

    return (
      <div className="App">
        <InputLength change={this.onChangeHandler} text={text} textLength={textLength} />
        <ValidationComponent textLength={textLength} />
        {textArray.map((c, i) => <CharComponent key={i} char={c} index={i} click={() => this.onCharClickHandler(i)} />)}
      </div>
    );
  }
}

export default App;
