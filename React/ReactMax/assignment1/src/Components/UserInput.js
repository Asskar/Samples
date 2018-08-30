import React from 'react';

const userInput = (props) =>
    <input onChange={props.change} value={props.userName} />

export default userInput;