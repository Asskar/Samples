import React from 'react';
import classes from './Cocpit.css'

const cocpit = (props) => {
    let buttonStyle;

    if (props.showPeople) {
        buttonStyle = classes.red;
    }

    const conditionalClasses = [];
    if (props.peronsCount <= 2) {
        conditionalClasses.push(classes.red);
    }

    if (props.peronsCount <= 1) {
        conditionalClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hello</h1>
            <p className={conditionalClasses.join(' ')}>This is really working!</p>
            <button className={buttonStyle} onClick={props.toggle}>I show PEOPLE </button>
        </div>
    );
}

export default cocpit;