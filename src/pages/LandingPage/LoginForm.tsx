import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm: React.FC = () => {
	return (
		<Form
			layout='vertical'
		>
			<Form.Item label='E-Mail'
				name='email'
				required
				tooltip='This is a required field'>
				<Input placeholder='E-Mail' size='large' />
			</Form.Item>
			<Form.Item
				label='Password'
				required tooltip='This is a required field'
				name='passwordd'
			>
				<Input type='password' placeholder='Password' size='large' />
			</Form.Item>
			<Form.Item>
				<Button type='primary'>Login</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;