import React from 'react';
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EditIcon = (props) => {
    return (
        <FontAwesomeIcon icon={faPenToSquare} {...props}/>
    );
};

export default EditIcon;