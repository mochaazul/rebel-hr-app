import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import dataGenerator from 'helpers/dataGenerator';
import DropdownCustom from 'components/DropdownCustom';
import {
	 Button, DatePicker, Form, Input, MenuProps, Modal, Popover, Row, Select
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';

interface DataType {
	name: string,
	noinduk: string,
	tanggallahir: Date,
	notelepon: string,
	masukkerja: Date,
	statuskerja: boolean,
	email: string,
	role: string,
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
	const [isEditModal, setIsEditModal] = useState<boolean>(false);
	const [formValue, setFormValue] = useState<DataType>({
		name: '',
		noinduk: '',
		tanggallahir: new Date(),
		notelepon: '',
		masukkerja: new Date(),
		statuskerja: true,
		email: '',
		role: ''
	});

	const [form] = useForm();
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

	const handleEdit = (record:DataType) => {
		setIsEditModal(true);
		form.setFieldsValue(record);
		setIsModalOpen(true);
	};

	const handleSubmit = () => {
		if (isEditModal) setIsEditModal(false);
		form.resetFields(['name', 'description', 'noleave', 'code', 'periode']);
		setIsModalOpen(false);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log(errorInfo);
	  };
	
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
							<a onClick={ () => {
								handleEdit(record);
							} } >
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
		<Modal title='Tambah Karyawan' open={ isModalOpen } footer={ null }>
			<Form
				form={ form }
				style={ { marginTop: '2rem' } }
				layout={ 'vertical' }
				onFinish={ handleSubmit }
				onFinishFailed={ onFinishFailed }
				initialValues={ formValue }
			>
				<Form.Item name={ 'name' } label='Nama Lengkap' rules={ [{ required: true, message: 'Harap mengisi form nama!', }] } >
					<Input value={ formValue.name } onChange={ e => setFormValue({ ...formValue, name: e.target.value }) } placeholder='Nama lengkap'/>
				</Form.Item>
				<Form.Item name={ 'noinduk' } label='NIK' rules={ [{ required: true, message: 'Harap mengisi from NIK' }] }>
					<Input value={ formValue.noinduk } onChange={ e => setFormValue({ ...formValue, noinduk: e.target.value }) } placeholder='NIK'/>
				</Form.Item>
				{ /* <Form.Item name={ 'tanggallahir' } label='Birth Date' rules={ [{ required: true, message: 'Harap mengisi form tanggal lahir!' }] }>
					<DatePicker style={ { width: '100%' } }/>
				</Form.Item> */ }
				<Form.Item name={ 'notelepon' } label='No. Telepon' rules={ [{ required: true, message: 'Harap mengisi nomor telepon' }] }>
					<Input placeholder='No. Telepon'/>
				</Form.Item>
				{ /* <Form.Item label='Masuk Kerja'>
					<DatePicker style={ { width: '100%' } }/>
				</Form.Item> */ }
				<Form.Item name={ 'email' } rules={ [{ required: true, message: 'Harap mengisi form email' }, { type: 'email', message: 'Harap mengisi dengan tipe email' }] } label='Email'>
					<Input value={ formValue.email } onChange={ e => setFormValue({ ...formValue, email: e.target.value }) } placeholder='Email'/>
				</Form.Item>
				<Form.Item name={ 'role' } rules={ [{ required: true, message: 'Harap memilih role' }] } label='Role'>
					<Select
						options={ roleType }
						value={ formValue.role }
					/>
				</Form.Item>
				<div style={ { flexDirection: 'row', justifyContent: 'space-evenly', display: 'flex' } }>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
					<Button onClick={ handleCancel }>
						Cancel
					</Button>
				</div>
			</Form>
		</Modal>
	</>);
};

export default EmployeePage;