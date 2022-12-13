import React from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import dataGenerator from 'helpers/dataGenerator';
import DropdownCustom from 'components/DropdownCustom';
import { Dropdown, MenuProps } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


interface DataType {
	name: string,
	email: string,
	tanggallahir: Date,
	password: string,
	role: string
}

const data:DataType[] = dataGenerator(20, 'pengguna');

const itemsDropdown: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
        Aktif
			</a>
		),
	},
	{
		key: '2',
		label: (
			<a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
        Non Aktif
			</a>
		),
	}
];

const columns: ColumnsType<DataType> = [
	{
		title: 'User',
		dataIndex: 'user',
		key: 'user',
		align: 'center',
		children: [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: 'Email',
				dataIndex: 'email',
				key: 'email'
			},
			// {
			// 	title: 'Tanggal Lahir',
			// 	dataIndex: 'tanggallahir',
			// 	key: 'tanggallahir',
			// },
			// {
			// 	title: 'Password',
			// 	dataIndex: 'password',
			// 	key: 'password'
			// },
			{
				title: 'Role',
				dataIndex: 'role',
				key: 'role',
				render: () => {
					return <DropdownCustom text='Aktif' items={ itemsDropdown } />;
				}
			},
			{
				title: 'Action',
				dataIndex: 'action',
				key: 'action',
				render: () => {
					return <div
						style={ { width: 40 } }
					>
						<a>
							<EditOutlined/>

						</a>
						<a>
							<DeleteOutlined />
						</a>
					</div>;
				}
			}
		]
	}
];

const UserPage:React.FC = () => {
	
	return (<>
		<Table
			bordered
			columns={ columns }
			dataSource={ data }
			size='middle'
		/>
	</>);
};

export default UserPage;