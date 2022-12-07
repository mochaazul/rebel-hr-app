import React from 'react';
import { FormGroupWrapper, FormGroupWrapperInterface } from './style';

const FormGroup = ({ children, ...props }: FormGroupWrapperInterface) => {
	return (

		<FormGroupWrapper { ...props }>
			{ children }
		</FormGroupWrapper>
	);
};

export default FormGroup;