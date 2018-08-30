import React, { Component } from 'react';
import Person from './Person/Person'

class Perons extends Component {
    constructor(props) {
        super(props);
        console.log('[Perons.js]');
    }

    render = () => {
        let personList = null;

        if (this.props.showPeople) {
            personList = this.props.persons.map((p, index) => this.renderPersons(p, index, this.props.remove))
        }

        return personList;
    }

    renderPersons = (person, index, remove) =>
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => remove(index)}
        />
}



export default Perons;