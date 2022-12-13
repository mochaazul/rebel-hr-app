import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import dataGenerator from 'helpers/dataGenerator';
import DropdownCustom from 'components/DropdownCustom';
import {
	AutoComplete, Button, DatePicker, Form, Input, MenuProps, Modal, Row, Select
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { DefaultOptionType } from 'antd/es/select';

interface DataType {
	name: string,
	noinduk: string,
	tanggallahir: Date,
	notelepon: string,
	masukkerja: Date,
	statuskerja: boolean
}

const data:DataType[] = dataGenerator(20, 'pekerja');

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
				key: 'statuskerja',
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

const EmployeePage:React.FC = () => {
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

	return (<>
		<Row style={ { marginBottom: '1rem' } }>
			<Button type='primary' onClick={ showModal }>Tambah Karyawan</Button>
		</Row>
		<Table
			bordered
			columns={ columns }
			dataSource={ data }
			size='middle'
		/>
		<Modal title='Tambah Karyawan' open={ isModalOpen } onOk={ handleOk } onCancel={ handleCancel } >
			<Form
				style={ { marginTop: '2rem' } }
				layout={ 'vertical' }
			>
				<Form.Item label='Nama Lengkap'>
					<Input placeholder='Nama lengkap'/>
				</Form.Item>
				<Form.Item label='NIK'>
					<Input placeholder='NIK'/>
				</Form.Item>
				<Form.Item label='Start Date'>
					<DatePicker style={ { width: '100%' } }/>
				</Form.Item>
				<Form.Item label='No. Telepon'>
					<Input placeholder='No. Telepon'/>
				</Form.Item>
				<Form.Item label='Masuk Kerja'>
					<DatePicker style={ { width: '100%' } }/>
				</Form.Item>
				<Form.Item label='Email'>
					<Input placeholder='Email'/>
				</Form.Item>
				<Form.Item label='Leave Type'>
					<Select
						options={ leaveType }
					/>
				</Form.Item>
			</Form>
			
		</Modal>
	</>);
};

export default EmployeePage;