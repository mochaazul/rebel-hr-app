import React from 'react';
import { Input, ErrorText, InputType } from './style';

const TextField = ({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	errorMessage, children, valid, ...props
}: InputType) => {
	return (
		<>
			<Input { ...props } />
			{ errorMessage && !valid && <ErrorText>{ errorMessage }</ErrorText> }
		</>
	);
};

export default TextField;