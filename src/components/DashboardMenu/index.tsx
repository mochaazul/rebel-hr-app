import React from 'react';

import {
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

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

	const menuClickHandler = (info: MenuInfo) => {
		console.log(info);
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