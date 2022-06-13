import { useState } from 'react';

import { Languages } from 'constant';
import { validation } from 'helpers';

import InputStyle, { InputType } from './style';

const Input = ({
	type = 'text',
	name,
	value,
	label = '',
	placeholder = '',
	className = '',
	onChange
}: InputType) => {
	const [, setInvalidMessage] = useState('');
	const showPassword = false;

	const handleOnBlur = () => {
		if (name === 'email') {
			if (!validation.email(value || '')) {
				setInvalidMessage(Languages.validation.emailFormat);
			} else {
				setInvalidMessage('');
			}
		}
	};

	const handleOnChange = (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => onChange && onChange(e);

	const renderInputType = () => {
		if (type === 'area') {
			return renderTextAreaInput();
		}

		return renderTextInput();
	};

	const renderTextInput = () => (
		<div className='input-container'>
			<input
				name={ name }
				value={ value }
				placeholder={ placeholder }
				type={ type === 'password' && showPassword ? 'text' : type }
				onChange={ handleOnChange }
				onBlur={ handleOnBlur }
			/>
		</div>
	);

	const renderTextAreaInput = () => (
		<textarea
			onChange={ handleOnChange }
			placeholder={ placeholder }
		/>
	);

	return (
		<InputStyle className={ className }>
			{ renderInputType() }
		</InputStyle>
	);
};

export default Input;
