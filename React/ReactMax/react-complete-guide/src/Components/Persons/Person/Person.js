import React, { Component } from 'react';
import classes from './Person.css'
import PropTypes from 'prop-types';

class Person extends Component {
    constructo() {
        super(this.props);
        this.inputElement = React.createRef();
    }

    componentDidMount = () => {
        this.inputElement.current.focus();
    }

    render = () =>
        <div onClick={this.props.click} className={classes.Person}>
            <h1>Name: {this.props.name}</h1>
            <h2>Age: {this.props.age}</h2>
            <p>{this.props.children}</p>
            <input ref={this.inputElement} />
        </div>
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
}

export default Person;