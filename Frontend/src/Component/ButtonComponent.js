import React from 'react';
import './Button.css'; 

const ButtonComponent = ({ onClickHandler, buttonText }) => {
    return (
        <button id="button" onClick={onClickHandler}>{buttonText}</button>
    );
};

export default ButtonComponent;
