import { Input, Button, Form } from 'components';

import useLandingPage from './useLandingPage';
import LandingPageStyle from './style';
import useForm from 'components/Form/useForm';

const LandingPage = () => {
	const {
		onChangeInput,
		onClickLogin,
		loginField
	} = useLandingPage();
	const { registeredValue, isFormValid, onSubmit } = useForm({
		initialState: loginField
	});
	return (
		<LandingPageStyle>
			<Form className='login' onSubmit={ onSubmit } autoComplete='off'>
				<Form.TextField
					placeholder='Email'
					className='mb-20'
					{ ...registeredValue('email') }
				/>
				<Form.TextField
					placeholder='Password'
					className='mb-20'
					{ ...registeredValue('password') } />
				<Button
					label='Login'
					type='submit'
					disabled={ !isFormValid() }
				/>
			</Form>
		</LandingPageStyle>
	);
};

export default LandingPage;
