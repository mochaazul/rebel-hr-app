import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from 'routes';
import { store, persistor, RootState } from './stores';

import './App.css';
import { ConfigProvider, FloatButton } from 'antd';
import { theme } from 'antd';
import { BulbOutlined, ToolFilled } from '@ant-design/icons';
import { toggleTheme } from 'stores/Theme/themeSlice';

function App() {

	const themeSetting = useSelector((state:RootState) => state.theme);
	const dispatch = useDispatch();

	return (
		<>
			<ConfigProvider
				theme={ {
					algorithm: themeSetting.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
				} }
			>
				  <Routes />
			</ConfigProvider>
			<FloatButton.Group icon={ <ToolFilled /> } type='primary' trigger='click'>
				<FloatButton icon={ <BulbOutlined /> } onClick={ () => dispatch(toggleTheme()) }/>
			</FloatButton.Group>
		</>
	);
}

export default App;
