import React from 'react';

import useForm from './useForm';
import Label from '../Label';
import TextField from '../TextField';
import TextArea from '../TextArea';
import FormGroup from '../FormGroup';
import { FormStyled, FormType } from './style';

const Form = ({ children, ...props }: FormType) => {
    return (
        <FormStyled { ...props }>{ children }</FormStyled>
    );
};

export default Object.assign(Form, {
    TextField,
    TextArea,
    Label,
    FormGroup,
    useForm
});