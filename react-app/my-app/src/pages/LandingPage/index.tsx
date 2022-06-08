import { Input, Button } from 'components';

import useLandingPage from './useLandingPage';
import LandingPageStyle from './style';

const LandingPage = () => {
	const {
		onChangeInput,
		onClickLogin
	} = useLandingPage();

	return (
		<LandingPageStyle>
			<div className='login'>
				<Input
					name='email'
					placeholder='Email'
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
			</div>
		</LandingPageStyle>
	);
};

export default LandingPage;
