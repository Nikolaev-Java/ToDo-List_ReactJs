import React from 'react';
import classes from './InsertInput.module.css'
const InsertInput = ({hidden, ...props}) => {
    const classMode = [classes.insert__input];


    return (
        <input type="text" {...props} className={classMode.join(' ')}/>
    );
};

export default InsertInput;