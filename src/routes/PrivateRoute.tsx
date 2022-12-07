import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Breadcrumb, Layout, theme } from 'antd';
import DashboardMenu from 'components/DashboardMenu';
const { Header, Content,  Sider } = Layout;

const PrivateRoute = () => {

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const navTo = useNavigate();

	const location = useLocation();

	const getBreadCrumb = () => {
		return location.pathname.split('/').filter(path => path)
			.map(path => {
				return path[0].toUpperCase() + path.slice(1);
			});
	};

	return (
		<Layout style={ { minHeight: '100vh' } }>
			<Sider
				breakpoint='lg'
				collapsedWidth='0'
				onBreakpoint={ broken => {
					console.log(broken);
				} }
				onCollapse={ (collapsed, type) => {
					console.log(collapsed, type);
				} }
			>
				<div style={ { height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' } } />
				<div className='logo' />
				<DashboardMenu />
 			</Sider>
			<Layout>
				<Header style={ { padding: 0, background: colorBgContainer } }/>
				<Content style={ { margin: '0px 16px 0' } }>
					<Breadcrumb style={ { margin: '16px 0' } }>
						{
							getBreadCrumb().map((item, index) => (
								<Breadcrumb.Item key={ index }>{ item }</Breadcrumb.Item>
							))
						}
					</Breadcrumb>
					<div style={ { padding: 24, minHeight: 360, background: colorBgContainer } }>
						<Outlet/>
					</div>
				</Content>
			</Layout>
		</Layout>
	);

	// return <Navigate to='/login' replace />;
};

export default PrivateRoute;