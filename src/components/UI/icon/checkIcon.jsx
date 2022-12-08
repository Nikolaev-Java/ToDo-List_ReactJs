import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";

const CheckIcon = ({className}) => {
    return (
        <FontAwesomeIcon className={className} icon={faCircleCheck} />
    );
};

export default CheckIcon;