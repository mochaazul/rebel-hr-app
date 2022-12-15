import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import dataGenerator from 'helpers/dataGenerator';
import DropdownCustom from 'components/DropdownCustom';
import {
	 Button, DatePicker, Form, Input, MenuProps, Modal, Popover, Row, Select
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface DataType {
	name: string,
	noinduk: string,
	tanggallahir: Date,
	notelepon: string,
	masukkerja: Date,
	statuskerja: boolean,
	responsive?: []
}

const data:DataType[] = dataGenerator(20, 'pekerja');

const itemsDropdown: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<a >
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

const EmployeePage:React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isPopoverOpen, setIsPopoverOpen] = useState<number | null>(null);

	const hidePopover = () => {
		setIsPopoverOpen(null);
	};
	
	const handleOpenChange = (openPopover:boolean, index: number) => {
		if (openPopover) {
			setIsPopoverOpen(index);
		} else {
			setIsPopoverOpen(null);
		}
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onClickDelete = () => {
		setIsModalOpen(true);
	};

	const onFinishForm = (values: any) => {
		console.log('success', values);
	};
	
	const roleType = [
		{
			label: 'HR',
			value: 1,
			id: 1
		},
		{
			label: 'Employee',
			value: 2,
			id: 2
		},
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
					key: 'noinduk',
					responsive: ['lg']
				},
				{
					title: 'Tanggal Lahir',
					dataIndex: 'tanggallahir',
					key: 'tanggallahir',
					responsive: ['lg'],
				},
				{
					title: 'No. Telepon',
					dataIndex: 'notelepon',
					key: 'notelepon',
					responsive: ['lg'],
				},
				{
					title: 'Masuk Kerja',
					dataIndex: 'masukkerja',
					key: 'masukkerja',
					responsive: ['lg'],
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
					align: 'center',
					key: 'action',
					width: 120,
					render: (value, record, index) => {
						return <div style={ { justifyContent: 'space-evenly', display: 'flex' } }>
							<a>
								<EditOutlined/>

							</a>
							<Popover
								content={ <a onClick={ hidePopover }>Close</a> }
								title='Delete user'
								trigger='click'
								open={ isPopoverOpen === index }
								onOpenChange={ openPopover => { handleOpenChange(openPopover, index); } }
							>
								<a><DeleteOutlined /></a>
							</Popover>
						</div>;
					}
				}
			]
		}
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
		<Modal title='Tambah Karyawan' open={ isModalOpen } onOk={ handleOk } onCancel={ handleCancel }>
			<Form
				style={ { marginTop: '2rem' } }
				layout={ 'vertical' }
			>
				<Form.Item label='Nama Lengkap'
	        			   rules={ [
						{
							required: true,
							message: 'Please input your username!',
						},
			  ] } >
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
				<Form.Item label='Role'>
					<Select
						options={ roleType }
					/>
				</Form.Item>
			</Form>
		</Modal>
	</>);
};

export default EmployeePage;