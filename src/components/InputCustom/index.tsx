import { Input } from 'antd';
import React from 'react';
type InputCustomProps = React.ComponentProps<typeof Input> & {
    errorText?: string
};

const InputCustom:React.FC<InputCustomProps> = props => {
	const {
		errorText,
		value,
		...restOfProps
	} = props;

	return (
		<>
			<Input
				value={ value }
				status={ errorText ? 'error' : '' }
				{ ...restOfProps }
			/>
			<p
				style={ {
					paddingLeft: 10,
					fontWeight: '600',
					color: 'red'
				} }
			>
				{ errorText }
			</p>
		</>
	);
};

export default InputCustom;