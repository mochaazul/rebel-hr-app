import React from 'react';

import {
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

type optionType = {
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	path?: string }

function getItem(option:optionType
): MenuItem {
	return {
		key: option.key,
		icon: option.icon,
		children: option.children,
		label: option.label,
		path: option.path
	} as MenuItem;
}

const navigationList = [{ label: 'Tracker', key: '0', icon: <PieChartOutlined/>, path: '/dashboard' },
	{ label: 'Leave Settings', key: '1', icon: <UserOutlined/>, path: '' },
	{ label: 'Leave Types', key: '2', path: '/leave-type' },
	{ label: 'Database', key: '3', icon: <TeamOutlined/>, path: '' },
	{ label: 'Employee', key: '4', path: '/employee' },
	{ label: 'Users', key: '5', icon: <UserOutlined/>, path: '/users' },
	{ label: 'Roles', key: '6', icon: <FileOutlined/>, path: '/roles' }];

const tempNavigationHandler = (key:string) => {
	const item = navigationList.find((el:MenuItem) => el?.key === key);
	if (item?.path) return item?.path;
	else return 'dashboard';
};

const items: MenuItem[] = [
	getItem({ label: 'Tracker', key: '0', icon: <PieChartOutlined/>, path: '/dashboard' }),
	getItem({ label: 'Leave Settings', key: '1', icon: <UserOutlined/>, path: '', children: [
		getItem({ label: 'Leave Types', key: '2', path: '/leave-type' }),
	] }),
	getItem({ label: 'Database', key: '3', icon: <TeamOutlined/>, path: '', children: [
		getItem({ label: 'Employee', key: '4' }),
	] }),
	getItem({ label: 'Users', key: '5', icon: <UserOutlined/>, path: '/dashboard' }),
	getItem({ label: 'Roles', key: '6', icon: <FileOutlined/>, path: '/dashboard' }),
];

const DashboardMenu = () => {
	const navigate = useNavigate();

	const menuClickHandler = (info: MenuInfo) => {
		navigate(tempNavigationHandler(info.key));
	};

	return (
		<Menu
			defaultSelectedKeys={ ['1'] }
			mode='inline' items={ items }
			onSelect={ menuClickHandler }
			theme={ 'dark' }
		/>
	);
};

export default DashboardMenu;