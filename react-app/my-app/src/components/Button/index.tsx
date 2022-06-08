
import ButtonStyle, { ButtonType } from './style';


const Button = ({
	children,
	label = 'Submit',
	theme = 'primary',
	type = 'button',
	width = '200px',
	className,
	disabled = false,
	onClick
}: ButtonType) => {
	return (
		<ButtonStyle
			theme={ theme }
			className={ className }
			type={ type }
			onClick={ onClick && onClick }
			width={ width }
			disabled={ disabled }
		>
			{ children || label }
		</ButtonStyle>
	);
};

export default Button;
