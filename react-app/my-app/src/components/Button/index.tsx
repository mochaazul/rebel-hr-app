
import { IButtonComponent } from 'interface/ui/ButtonComponentInterface';
import { ButtonHTMLAttributes } from 'react';
import ButtonStyle, { ButtonType } from './style';

const Button: React.FC<IButtonComponent> = ({
	...props
}) => {

  const [onSubmit, {}] = useForm()

	return (
		// <ButtonStyle
		// 	theme={ theme }
		// 	className={ className }
		// 	type={ type }
		// 	onClick={ onClick && onClick }
		// 	width={ width }
		// 	disabled={ disabled }
		// >
		// 	{ children || label }
		// </ButtonStyle>
    <></>
    );
};

export default Button;
