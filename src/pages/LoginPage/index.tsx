import React from 'react';
import { Button, Form } from 'components';

import useLoginPage from './useLoginPage';
import LoginPageStyle from './style';

const LoginPage:React.FC = () => {
  const {
    onClickLogin,
    loginField
  } = useLoginPage();
  const {
    registeredValue, isFormValid, onSubmit
  } = Form.useForm({ fields: loginField });
  return (
    <LoginPageStyle>
      <Form className='login'
        onSubmit={ e => {
          const { email, password } = onSubmit(e);
          onClickLogin({
            username: email.value,
            password: password.value
          });
        } }
        autoComplete='off'
      >
        <Form.FormGroup className='group-wrapper'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.TextField
            id='email'
            placeholder='Email'
            { ...registeredValue('email') }
          />
        </Form.FormGroup>
        <Form.FormGroup className='group-wrapper'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.TextField
            id='password'
            placeholder='Password'
            { ...registeredValue('password') } />
        </Form.FormGroup>
        <Button
          label='Login'
          type='submit'
          disabled={ !isFormValid() }
        />
      </Form>
    </LoginPageStyle>
  );
};

export default LoginPage;
