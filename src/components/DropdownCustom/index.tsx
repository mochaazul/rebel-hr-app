import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

// const items: MenuProps['items'] = [
// 	{
// 		key: '1',
// 		label: (
// 			<a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
//         1st menu item
// 			</a>
// 		),
// 	},
// 	{
// 		key: '2',
// 		label: (
// 			<a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
//         2nd menu item (disabled)
// 			</a>
// 		),
// 		icon: <SmileOutlined />,
// 		disabled: true,
// 	},
// 	{
// 		key: '3',
// 		label: (
// 			<a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
//         3rd menu item (disabled)
// 			</a>
// 		),
// 		disabled: true,
// 	},
// 	{
// 		key: '4',
// 		danger: true,
// 		label: 'a danger item',
// 	},
// ];

interface DropdownProps {
  text: string,
  items: MenuProps['items']
}

const DropdownCustom: React.FC<DropdownProps> = ({ text, items }) => (
	<Dropdown menu={ { items } }>
		<a onClick={ e => e.preventDefault() }>
			<Space>
				{ text }
				<DownOutlined />
			</Space>
		</a>
	</Dropdown>
);

export default DropdownCustom;
