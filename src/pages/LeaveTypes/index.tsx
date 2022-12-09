import React from 'react';
import Table, { ColumnsType } from 'antd/es/table';

interface DataType {
	name: string,
	description: string,
	noleave: number,
	periode: string,
	code: string
}

const data:DataType[] = [{
	name: 'Sick Leave',
	description: 'Cuti sakit',
	code: 'SIC',
	noleave: 12,
	periode: 'bulanan'
}, {
	name: 'Annual leave',
	description: 'Jatah cuti tahunan',
	noleave: 15,
	code: 'ANN',
	periode: 'per 15 Bulan'
}, {
	name: 'Additional leave',
	description: 'Cuti lain-lain',
	code: 'ADD',
	noleave: 12,
	periode: 'tahunan'
}

];

const columns: ColumnsType<DataType> = [
	{
		title: 'Leave Type',
		dataIndex: 'leave_type',
		key: 'leave_type',
		align: 'center',
		children: [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: 'Description',
				dataIndex: 'description',
				key: 'description'
			},
			{
				title: 'Kode',
				dataIndex: 'code',
				key: 'code'
			},
			{
				title: 'No. of Leave',
				dataIndex: 'noleave',
				key: 'noleave',
			},
			{
				title: 'Periode',
				dataIndex: 'periode',
				key: 'periode'
			}
		]
	}
];

const LeaveTypePage:React.FC = () => {
	
	return (<>
		<Table
			bordered
			columns={ columns }
			dataSource={ data }
			size='middle'
		/>
	</>);
};

export default LeaveTypePage;