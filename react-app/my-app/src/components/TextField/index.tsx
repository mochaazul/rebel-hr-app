import React from 'react';

type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;
    valid?: string;
    errorMessage?: string;
    touched?: boolean;
    validationRules?: any;
    type?: string;
};

const TextField = ({ label, errorMessage, touched, children, validationRules, valid, type, ...props }: InputType) => {
    return (
        <>
            <input { ...props } />
            { errorMessage && !valid && <span>{ errorMessage }</span> }
        </>
    );
};

export default TextField;