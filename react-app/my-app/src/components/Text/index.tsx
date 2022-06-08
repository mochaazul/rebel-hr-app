import TextStyle, { TextType } from './style';

const Text = ({
	fontType = 'p',
	fontFamily = 'Poppins',
	children,
	className,
	text,
	fontSize,
	textAlign,
	fontStyle,
	fontWeight,
	onClick
}: TextType) => {
	// eslint-disable-next-line no-undef
	let content = <p>{ text || <>{ children }</> }</p>;
	if (fontType === 'h1') content = <h1>{ text || children }</h1>;
	else if (fontType === 'h2') content = <h2>{ text || children }</h2>;
	else if (fontType === 'h3') content = <h3>{ text || children }</h3>;
	else if (fontType === 'h4') content = <h4>{ text || children }</h4>;
	else if (fontType === 'pre') content = <pre>{ text || children }</pre>;

	return (
		<TextStyle
			className={ className }
			fontFamily={ fontFamily }
			fontSize={ fontSize }
			textAlign={ textAlign }
			fontStyle={ fontStyle }
			fontWeight={ fontWeight }
			onClick={ onClick && onClick }
		>
			{ content }
		</TextStyle>
	);
};

export default Text;
