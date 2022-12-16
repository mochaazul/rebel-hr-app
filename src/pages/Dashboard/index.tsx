import {
	AutoComplete, Button, DatePicker, Form, Input, Modal, Radio, Row
} from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { DashoardStyle } from './style';
import Select, { DefaultOptionType } from 'antd/es/select';
import { useNavigate } from 'react-router-dom';
import dataGenerator from 'helpers/dataGenerator';

interface DataType {
	name: string,
	period: string,
	start_date: string,
	end_date: string,
	noleave: number,
	prev_period: number,
	curr_period: number,
	additional_leave: number,
	total_leave: number,
	cur_leave_status: string,
	leave_taken: number,
	leave_available: number,
	total_leave_acc: number,
	notes: string,
	responsive?: []
}

interface LeaveRecordType {
	leave_type: string,
	start_date: string,
	end_date: string,
	reason: string,
	status: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		width: 300,
		fixed: 'left',
		align: 'center'
	},
	{
		title: 'Starting in 2020/ RW 4th Renewal',
		dataIndex: 'period',
		key: 'period',
		children: [
			{
				title: 'Start Period',
				dataIndex: 'start_date',
				key: 'start_date'
			},
			{
				title: 'End Period',
				dataIndex: 'end_date',
				key: 'end_date'
			},
			{
				title: 'No. of Leave',
				dataIndex: 'noleave',
				key: 'noleave',
				children: [
					{
						title: 'Previous Period',
						dataIndex: 'prev_period',
						key: 'prev_period',
						width: 40,
					},
					{
						title: 'Current Period',
						dataIndex: 'curr_period',
						key: 'curr_period',
						width: 40,

					},
					{
						title: 'Additional',
						dataIndex: 'additional_leave',
						key: 'additional_leave',
						width: 40,

					},
					{
						title: 'Total',
						dataIndex: 'total_leave',
						key: 'total_leave',
						width: 40,
					},
				]
			},
			{
				title: 'Current Leave Status',
				dataIndex: 'cur_leave_status',
				key: 'cur_leave_status',
				children: [
					{
						title: 'Taken',
						dataIndex: 'leave_taken',
						key: 'leave_taken',
						width: 40,

					},
					{
						title: 'Available',
						dataIndex: 'leave_available',
						key: 'leave_available',
						width: 40,

					},
					{
						title: 'Total Leave Acc. to next period',
						dataIndex: 'total_leave_acc',
						key: 'total_leave_acc',
						width: 150

					},
					{
						title: 'Note',
						dataIndex: 'notes',
						key: 'notes',
					},
					{
						title: 'Reason',
						dataIndex: 'reason',
						key: 'reason',
					},
				]
			}
		]
	}
];

const expendableColumn: ColumnsType<LeaveRecordType> = [
	{
		title: 'Leave Record',
		dataIndex: 'leave_record',
		key: 'leave_record',
		children: [{
			title: 'Leave Type',
			dataIndex: 'leave_type',
			key: 'leave_type'
		}, {
			title: 'Start Date',
			dataIndex: 'start_date',
			key: 'start_date'
		}, {
			title: 'End Date',
			dataIndex: 'end_date',
			key: 'end_date'
		}, {
			title: 'Reason',
			dataIndex: 'reason',
			key: 'reason'
		}, {
			title: 'Status',
			dataIndex: 'status',
			key: 'status'
		}]
	}
];

// Generate random data
const data: DataType[] = dataGenerator(20, 'cuti');

const expendableData: LeaveRecordType[] = [{
	leave_type: 'Annual Leave',
	start_date: new Date().toDateString(),
	end_date: new Date().toDateString(),
	reason: 'Healing',
	status: 'approved'
}, {
	leave_type: 'Sick Leave',
	start_date: new Date().toDateString(),
	end_date: new Date().toDateString(),
	reason: 'Mau GCU',
	status: 'approved'
}];

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

const Dashboard:React.FC = () => {

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

	return (
		<>
			<DashoardStyle>
				<Row style={ { marginBottom: '1rem' } }>
					<Button type='primary' onClick={ showModal }>Add Record</Button>
				</Row>
				<Table
					bordered
					columns={ columns }
					dataSource={ data }
					size='middle'
					expandable={ {
						expandedRowRender: (record:DataType) => (
							<Table
								bordered
								columns={ expendableColumn }
								dataSource={ expendableData }
								size='middle'
							/>
						)
					} }
				/>
				<Modal title='Add record' open={ isModalOpen } onOk={ handleOk } onCancel={ handleCancel } >
					<AutoComplete
						popupClassName='certain-category-search-dropdown'
						style={ { width: '100%' } }
						options={ options }
						onSelect={ selected }
					>
						<Input.Search size='large' placeholder='Find employee' />
					</AutoComplete>
					{
						hasSelectedEmployee &&
						<Form
							style={ { marginTop: '2rem' } }
							layout={ 'vertical' }
						>
							<Form.Item label='Leave Type'>
								<Select
									options={ leaveType }
								/>
							</Form.Item>
							<Form.Item label='Start Date'>
								<DatePicker style={ { width: '100%' } }/>
							</Form.Item>
							<Form.Item label='Duration'>
								<Input placeholder='Days'/>
							</Form.Item>
						</Form>
					}
				</Modal>
			</DashoardStyle>
		</>
	);
};

export default Dashboard;
