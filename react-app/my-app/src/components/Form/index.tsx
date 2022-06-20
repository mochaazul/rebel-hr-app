import React from 'react';

import useForm from './useForm';
import Label from '../Label';
import TextField from '../TextField';
import TextArea from '../TextArea';
import FormGroup from '../FormGroup';

interface FormType extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> { }

const Form = ({ children, ...props }: FormType) => {
    return (
        <form { ...props }>{ children }</form>
    );
};

export default Object.assign(Form, {
    TextField,
    TextArea,
    Label,
    FormGroup,
    useForm
});