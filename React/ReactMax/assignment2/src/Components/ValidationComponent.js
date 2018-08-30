import React from 'react';

const validationComponent = ({ textLength }) => {
    let valiationSummary = null;

    if (textLength < 5) {
        valiationSummary = <p> Text must be shorter than 5 characters! </p>;
    }
    else if (textLength > 10) {
        valiationSummary = <p> Text must be longer than 10 characters! </p>;
    }

    return valiationSummary;
}

export default validationComponent;