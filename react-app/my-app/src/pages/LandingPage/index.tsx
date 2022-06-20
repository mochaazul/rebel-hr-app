import { Text } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { removeUser } from 'stores/actions';
import { navigation } from 'helpers';
import LandingPageStyle from './style';

const LandingPage = () => {
	const { user } = useTypedSelector(state => state.user);
	const dispatch = useAppDispatch();
	const { navigate } = navigation();

	const text = user.accessToken ? 'Logout' : 'Login';

	const handleClick = () => {
		if (user.accessToken) {
			dispatch(removeUser());
		}
		navigate('/login');
	};

	return (
		<LandingPageStyle>
			<Text.H1>Welcome { user.name }</Text.H1>
			<Text.Paragraph onClick={ handleClick }>{ text }</Text.Paragraph>
		</LandingPageStyle>
	);
};

export default LandingPage;
