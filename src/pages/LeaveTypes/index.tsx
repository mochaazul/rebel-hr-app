import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DropdownCustom from 'components/DropdownCustom';
import {
	 Button, Form, Input, MenuProps, Modal, Popover, Row,
} from 'antd';

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

const LeaveTypePage:React.FC = () => {
	
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
					align: 'center',
					width: 120,
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

export default LeaveTypePage;