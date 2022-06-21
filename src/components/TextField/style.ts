import React from 'react';
import styled from 'styled-components';

export interface InputType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    valid?: string;
    errorMessage?: string;
    ref?: React.RefObject<HTMLInputElement>;
};

const Input = styled.input<InputType>`
    min-width:330px;
`;

const ErrorText = styled.span`
    color: red ;
`;
export { Input, ErrorText };