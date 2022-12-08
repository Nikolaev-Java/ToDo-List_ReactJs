// @flow
import React from 'react';
import classes from './ButtonIcon.module.css'

export function ButtonIcon({children,...props}) {
    let rootCl =[classes.buttonIcon];
    switch (props.styleBtn){
        case "trash": {rootCl.push(classes.trash); break}
        case "edit": {rootCl.push(classes.edit); break}
     }
    return (
        <button className={rootCl.join(' ')}>{children}</button>

    );
};


export default ButtonIcon;