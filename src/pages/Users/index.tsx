import React from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import dataGenerator from 'helpers/dataGenerator';

interface DataType {
	name: string,
	email: string,
	tanggallahir: Date,
	password: string,
	role: string
}

const data:DataType[] = dataGenerator(20, 'pengguna');

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
			{
				title: 'Tanggal Lahir',
				dataIndex: 'tanggallahir',
				key: 'tanggallahir',
			},
			{
				title: 'Password',
				dataIndex: 'password',
				key: 'password'
			},
			{
				title: 'Role',
				dataIndex: 'role',
				key: 'role'
			},
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