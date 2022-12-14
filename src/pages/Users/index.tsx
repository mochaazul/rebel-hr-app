import React, { useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import dataGenerator from 'helpers/dataGenerator';
import DropdownCustom from 'components/DropdownCustom';
import {  MenuProps, Popover } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface DataType {
	name: string,
	email: string,
	tanggallahir: Date,
	password: string,
	role: string
}

const data:DataType[] = dataGenerator(20, 'pengguna');

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

const UserPage:React.FC = () => {

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
	
	const columns: ColumnsType<DataType> = [
		{
			title: 'User',
			dataIndex: 'user',
			key: 'user',
			align: 'center',
			children: [
				{
					title: 'Name',
					dataIndex: 'name',
					key: 'name'
				},
				{
					title: 'Email',
					dataIndex: 'email',
					key: 'email'
				},
				{
					title: 'Role',
					dataIndex: 'role',
					key: 'role',
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
	
	return (<>
		<Table
			bordered
			columns={ columns }
			dataSource={ data }
			size='middle'
		/>
	</>);
};

export default UserPage;