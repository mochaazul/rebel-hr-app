import { Input, Button, Text } from 'components';

import useLandingPage from './useLandingPage';
import LandingPageStyle from './style';

const LandingPage = () => {
	const {
		onChangeInput,
		onClickLogin
	} = useLandingPage();

	return (
		<LandingPageStyle>
			<Text.H1>Asdsdasdasd</Text.H1>
			{/* <div className='login'>
				<Input
					name='username'
					placeholder='Username'
					className='mb-20'
					onChange={ onChangeInput }
				/>
				<Input
					name='password'
					placeholder='Password'
					type='password'
					className='mb-20'
					onChange={ onChangeInput }
				/>
				<Button
					label='Login'
					onClick={ onClickLogin }
				/>
			</div> */}
		</LandingPageStyle>
	);
};

export default LandingPage;
