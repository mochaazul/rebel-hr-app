import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DropdownCustom from 'components/DropdownCustom';
import {
	AutoComplete, Button, DatePicker, Form, Input, MenuProps, Modal, Row, Select
} from 'antd';
import { DefaultOptionType } from 'antd/es/select';

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

const itemsDropdown: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<a>
        Aktif
			</a>
		),
	},
	{
		key: '2',
		label: (
			<a>
        Non Aktif
			</a>
		),
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
			},
			{
				title: 'Status',
				dataIndex: 'status',
				key: 'status',
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

const renderTitle = (title: string) => (
	<span>
		{ title }
		<a
			style={ { float: 'right' } }
			href='https://www.google.com/search?q=antd'
			target='_blank'
			rel='noopener noreferrer'
		>
      more
		</a>
	</span>
);

const renderItem = (title: string, count: number, id:number) => ({
	value: title,
	label: (
		<div
			style={ {
				display: 'flex',
				justifyContent: 'space-between',
			} }
		>
			{ title }
			<span>
				{ count }
			</span>
		</div>
	),
	id
});

const options = [
	{
		label: renderTitle('Front end'),
		options: [renderItem('Mahmoud', 10000, 1), renderItem('Andhi', 10600, 2)],
	},
	{
		label: renderTitle('Backend'),
		options: [renderItem('Dika', 60100, 3), renderItem('Yasri', 30010, 4)],
	},
	{
		label: renderTitle('Finance'),
		options: [renderItem('Fulan', 100000, 5)],
	},
];

const leaveType = [
	{
		label: 'Sick leave',
		value: 1,
		id: 1
	},
	{
		label: 'Annual leave',
		value: 2,
		id: 2
	},
	{
		label: 'Additional leave',
		value: 3,
		id: 3
	},
];

const LeaveTypePage:React.FC = () => {
	
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [hasSelectedEmployee, setHasSelectedEmployee] = useState<boolean>(false);
	const [selectedEmployeeId, setSelectedEmployeeId] = useState<number|null>(null);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const selected = (value:string, option: DefaultOptionType) => {
		setHasSelectedEmployee(true);
		setSelectedEmployeeId(option.id);
	};

	return (<>
		<Row style={ { marginBottom: '1rem' } }>
			<Button type='primary' onClick={ showModal }>Add Leave Type</Button>
		</Row>
		<Table
			bordered
			columns={ columns }
			dataSource={ data }
			size='middle'
		/>
		<Modal title='Add leave type' open={ isModalOpen } onOk={ handleOk } onCancel={ handleCancel } >
			<Form
				style={ { marginTop: '2rem' } }
				layout={ 'vertical' }
			>
				<Form.Item label='Leave Type'>
					<Select
						options={ leaveType }
					/>
				</Form.Item>
				<Form.Item label='Description'>
					<Input placeholder='Deskripsi'/>
				</Form.Item>
				<Form.Item label='Periode'>
					<Input placeholder='Hari'/>
				</Form.Item>
				<Form.Item label='Kode'>
					<Input placeholder='Code '/>
				</Form.Item>
				<Form.Item label='Pembaharuan Cuti'>
					<Input placeholder='Pembaharuan Cuti'/>
				</Form.Item>

			</Form>
		</Modal>
	</>);
};

export default LeaveTypePage;