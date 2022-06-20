
import ButtonStyle, { ButtonType } from './style';

const Button: React.FC<ButtonType> = ({
	theme, className, type, onClick, width, disabled, children, label, ...props
}) => {

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
