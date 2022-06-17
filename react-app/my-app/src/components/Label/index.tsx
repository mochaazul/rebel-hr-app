import React from 'react';
interface LabelType extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> { }

const Label = ({ children, ...props }: LabelType) => {
    return (
        <label { ...props }>{ children }</label>
    );
};

export default Label;