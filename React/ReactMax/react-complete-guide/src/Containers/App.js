import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cocpit from '../Components/Cocpit/Cocpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] ctor');
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount()');
  }

  state = {
    persons: [
      { id: 1, name: 'Iga', age: 20 },
      { id: 2, name: 'Michał', age: 21 },
      { id: 3, name: 'Vladimir', age: 23 }
    ],
    showPeople: false
  };

  togglePersonHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    });
  }

  deletePersonHandler = (index) => {  
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({ persons: persons })
  }

  render() {
    return (
      <div className={classes.App}>
        <Cocpit showPeople={this.state.showPeople} peronsCount={this.state.persons.length} toggle={this.togglePersonHandler}/>
        <Persons persons={this.state.persons} showPeople={this.state.showPeople} remove={(index) => this.deletePersonHandler(index)}/>
      </div>
    );
  }
}

export default App;
