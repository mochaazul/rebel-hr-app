import React from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import dataGenerator from 'helpers/dataGenerator';

interface DataType {
	name: string,
	noinduk: string,
	tanggallahir: Date,
	notelepon: string,
	masukkerja: Date,
	statuskerja: boolean
}

const data:DataType[] = dataGenerator(20, 'pekerja');

const columns: ColumnsType<DataType> = [
	{
		title: 'Employee',
		dataIndex: 'employee',
		key: 'employee',
		align: 'center',
		children: [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: 'No. Induk',
				dataIndex: 'noinduk',
				key: 'noinduk'
			},
			{
				title: 'Tanggal Lahir',
				dataIndex: 'tanggallahir',
				key: 'tanggallahir',
			},
			{
				title: 'No. Telepon',
				dataIndex: 'notelepon',
				key: 'notelepon'
			},
			{
				title: 'Masuk Kerja',
				dataIndex: 'masukkerja',
				key: 'masukkerja'
			},
			{
				title: 'Status Kerja',
				dataIndex: 'statuskerja',
				key: 'statuskerja'
			}
		]
	}
];

const EmployeePage:React.FC = () => {
	
	return (<>
		<Table
			bordered
			columns={ columns }
			dataSource={ data }
			size='middle'
		/>
	</>);
};

export default EmployeePage;