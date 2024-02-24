/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Button = ({buttonColor, buttonText}) => {
    return (
        <button className={`rounded-md px-3.5 py-2.5 text-sm font-semibold ${buttonColor}`}>{ buttonText }</button>
    );
};

export default Button;