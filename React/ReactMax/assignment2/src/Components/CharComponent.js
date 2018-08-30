import React from 'react';

const charComponent = ({ char, index, click }) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div onClick={() => click(index)} style={style} key={char + index}>
            {char}
        </div>
    );
}

export default charComponent;