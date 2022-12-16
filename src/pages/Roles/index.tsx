import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DropdownCustom from 'components/DropdownCustom';
import {
	 Button,  Form, Input, MenuProps, Modal, Popover, Row,
} from 'antd';
import { useForm } from 'antd/es/form/Form';

interface DataType {
	rolestype: string,
	description: string,
	privilege: string
}

const data:DataType[] = [{
	rolestype: 'HR',
	description: 'HR Rebelworks',
	privilege: 'Admin, editing cms, menambah cuti'
}, {
	rolestype: 'Employee',
	description: 'Pekerja Rebelworks',
	privilege: 'Apply cuti'
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

const RoleTypePage:React.FC = () => {
	
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isEditModal, setIsEditModal] = useState<boolean>(false);
	const [isPopoverOpen, setIsPopoverOpen] = useState<number | null>(null);
	const [formValue, setFormValue] = useState<DataType>({
		rolestype: '',
		description: '',
		privilege: '',
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

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleSubmit = () => {
		if (isEditModal) setIsEditModal(false);
		form.resetFields(['name', 'description', 'noleave', 'code', 'periode']);
		setIsModalOpen(false);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log(errorInfo);
	  };

	  const handleEdit = (record:DataType) => {
		setIsEditModal(true);
		form.setFieldsValue(record);
		setIsModalOpen(true);
	}
	
	const columns: ColumnsType<DataType> = [
		{
			title: 'Roles',
			dataIndex: 'roles',
			key: 'roles',
			align: 'center',
			children: [
				{
					title: 'Roles Type',
					dataIndex: 'rolestype',
					key: 'rolestype'
				},
				{
					title: 'Description',
					dataIndex: 'description',
					key: 'description'
				},
				{
					title: 'Privilege',
					dataIndex: 'privilege',
					key: 'privilege',
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
					align: 'center',
					render: (text, record, index) => {
						return (<div style={ { justifyContent: 'space-evenly', display: 'flex' } }>
							<a onClick={ () => {
								handleEdit(record);
							}}>
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
		<Modal title='Add Role Type' open={ isModalOpen } footer={ null } >
			<Form
				form={ form }
				style={ { marginTop: '2rem' } }
				layout={ 'vertical' }
				onFinish={ handleSubmit }
				onFinishFailed={ onFinishFailed }
				initialValues={ formValue }
			>
				<Form.Item name={ 'rolestype' } label='Nama Role' rules={ [{ required: true, message: 'Harap mengisi form nama cuti' }] } >
					<Input value={ formValue.rolestype } onChange={ e => setFormValue({ ...formValue, rolestype: e.target.value }) } placeholder='Nama Role'/>
				</Form.Item>
				<Form.Item name={ 'description' } label='Deskripsi' rules={ [{ required: true, message: 'harap mengisi form deskripsi' }] } >
					<Input value={ formValue.description } onChange={ e => setFormValue({ ...formValue, description: e.target.value }) } placeholder='Deskripsi'/>
				</Form.Item>
				<Form.Item name={ 'privilege' } label='Privilege' rules={ [{ required: true, message: 'harap mengisi form deskripsi' }] }>
					<Input value={ formValue.privilege } onChange={ e => setFormValue({ ...formValue, privilege: e.target.value }) } placeholder='Hari'/>
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

export default RoleTypePage;