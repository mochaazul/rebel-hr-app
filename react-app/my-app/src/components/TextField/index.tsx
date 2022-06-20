import React from 'react';
import { Input, ErrorText, InputType } from './style';

const TextField = ({ errorMessage, children, valid, ...props }: InputType) => {
    return (
        <>
            <Input { ...props } />
            { errorMessage && !valid && <ErrorText>{ errorMessage }</ErrorText> }
        </>
    );
};

export default TextField;