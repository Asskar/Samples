import React from 'react';

import Styles from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [Styles.InputElement]
    let validationMessage = null;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(Styles.Invalid)
        validationMessage = (<div className={Styles.validationMessage}>{props.validationMessage}</div>)
    }

    console.log(props.validationMessgae)
        
    
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
    }

    return (
        <div className={Styles.Input}>
            <label className={Styles.Label}>{props.name}</label>
            {inputElement}
            {validationMessage}
        </div>
    );
};

export default input;