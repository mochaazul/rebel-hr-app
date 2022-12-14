import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DropdownCustom from 'components/DropdownCustom';
import {
	 Button,  Form, Input, MenuProps, Modal, Popover, Row,
} from 'antd';

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
		<Modal title='Add leave type' open={ isModalOpen } onOk={ handleOk } onCancel={ handleCancel } >
			<Form
				style={ { marginTop: '2rem' } }
				layout={ 'vertical' }
			>
				<Form.Item label='Nama Cuti'>
					<Input placeholder='Nama cuti'/>
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

export default RoleTypePage;