import React from 'react';

const inputLength = ({change, text, textLength}) =>
    <div>
        <input type="text" onChange={change} value={text} />
        <p> Input length is equals to: {textLength} </p>
    </div>

export default inputLength;