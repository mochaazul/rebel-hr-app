import React, { useEffect, useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DropdownCustom from 'components/DropdownCustom';
import {
	 Button, Form, Input, MenuProps, Modal, Popover, Row,
} from 'antd';
import { useForm } from 'antd/es/form/Form';

interface DataType {
	id?:number,
	name: string,
	description: string,
	noleave: string,
	periode: string,
	code: string
}

const data:DataType[] = [{
	id: 1,
	name: 'Sick Leave',
	description: 'Cuti sakit',
	code: 'SIC',
	noleave: '12',
	periode: 'bulanan'
}, {
	id: 2,
	name: 'Annual leave',
	description: 'Jatah cuti tahunan',
	noleave: '15',
	code: 'ANN',
	periode: 'per 15 Bulan'
}, {
	id: 3,
	name: 'Additional leave',
	description: 'Cuti lain-lain',
	code: 'ADD',
	noleave: '12',
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

const LeaveTypePage:React.FC = () => {
	
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isEditModal, setIsEditModal] = useState<boolean>(false);
	const [formValue, setFormValue] = useState<DataType>({
		name: '',
		description: '',
		code: '',
		noleave: '',
		periode: '',
	});
	const [form] = useForm();

	const [isPopoverOpen, setIsPopoverOpen] = useState<number | null>(null);

	const hidePopover = () => {
		setIsPopoverOpen(null);
	};

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
					key: 'description',
					responsive: ['lg'],
				},
				{
					title: 'Kode',
					dataIndex: 'code',
					key: 'code',
					responsive: ['lg'],
				},
				{
					title: 'No. of Leave',
					dataIndex: 'noleave',
					key: 'noleave',
					responsive: ['lg'],
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
					dataIndex: 'id',
					key: 'id',
					align: 'center',
					width: 120,
					render: (text, record, index) => {
						
						return (<div style={ { justifyContent: 'space-evenly', display: 'flex' } }>

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
						</div>);
					}
				}
			]
		}
	];
	
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

	const handleCancel = () => {
		form.resetFields(['name', 'description', 'noleave', 'code', 'periode']);
		if (isEditModal) setIsEditModal(false);
		setIsModalOpen(false);
	};

	return (<>
		<Row style={ { marginBottom: '1rem' } }>
			<Button type='primary' onClick={ () => {
				showModal();
			} }>Add Leave Type</Button>
		</Row>
		<Table
			bordered
			columns={ columns }
			dataSource={ data }
			size='middle'
		/>
		<Modal title='Add leave type' open={ isModalOpen } footer={ null } >
			<Form
				form={ form }
				style={ { marginTop: '2rem' } }
				layout={ 'vertical' }
				onFinish={ handleSubmit }
				onFinishFailed={ onFinishFailed }
				initialValues={ formValue }
			>
				<Form.Item name={ 'name' } label='Nama Cuti' rules={ [{ required: true, message: 'Harap mengisi form nama cuti' }] }>
					<Input value= { formValue.name } onChange={ e => setFormValue({ ...formValue, name: e.target.value }) } placeholder='Nama cuti' />
				</Form.Item>
				<Form.Item name={ 'description' } label='Description' rules={ [{ required: true, message: 'Harap mengisi form deskripsi' }] } >
					<Input value= { formValue.description } onChange={ e => setFormValue({ ...formValue, description: e.target.value }) } placeholder='Deskripsi'/>
				</Form.Item>
				<Form.Item name={ 'noleave' } label='Jumlah Cuti' rules={ [{ required: true, message: 'Harap mengisi form jumlah cuti' }] } >
					<Input value= { formValue.noleave } onChange={ e => setFormValue({ ...formValue, noleave: e.target.value }) } placeholder='Hari'/>
				</Form.Item>
				<Form.Item name={ 'code' } label='Kode' rules={ [{ required: true, message: 'Harap mengisi form kode cuti' }] } >
					<Input value= { formValue.code } onChange={ e => setFormValue({ ...formValue, code: e.target.value }) } placeholder='Kode'/>
				</Form.Item>
				<Form.Item name={ 'periode' } label='Pembaharuan Cuti' rules={ [{ required: true, message: 'Harap mengisi form pembaharuan cuti' }] } >
					<Input value= { formValue.periode } onChange={ e => setFormValue({ ...formValue, periode: e.target.value }) } placeholder='Periode Pembaharuan'/>
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

export default LeaveTypePage;