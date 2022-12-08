import React from 'react';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TrashIcon = ({...props}) => {
    return (
        <FontAwesomeIcon icon={faTrashCan} {...props}/>
    );
};

export default TrashIcon;