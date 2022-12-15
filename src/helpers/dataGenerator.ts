import { randomNumber } from './index';

const dataGenerator = (dataLength:number, type:string) => {
	const data: any = [];
	switch (type) {
		case 'cuti':
			for (let i = 0; i < dataLength; i++) {
				data.push({
					name: 'Si Jono',
					period: 'period',
					start_date: new Date().toDateString(),
					end_date: new Date().toDateString(),
					noleave: randomNumber(13, 1),
					prev_period: randomNumber(13, 1),
					curr_period: randomNumber(13, 1),
					additional_leave: randomNumber(13, 1),
					total_leave: randomNumber(13, 1),
					cur_leave_status: 'string',
					leave_taken: randomNumber(13, 1),
					leave_available: randomNumber(13, 1),
					total_leave_acc: randomNumber(13, 1),
					notes: randomNumber(13, 1) === 5 ? 'Need approval' : '',
					reason: randomNumber(2, 1) === 1 ? 'Liburan' : 'Pulang Kampung'
				});
			}
			break;
		case 'pekerja':
			for (let i = 0; i < dataLength; i++) {
				data.push({
					name: 'Si Jono',
					noinduk: randomNumber(1000000000000, 99999999999),
					tanggallahir: new Date().toDateString(),
					notelepon: `08${randomNumber(1000000000, 9999999999)}`,
					masukkerja: new Date().toDateString(),
					statuskerja: randomNumber(10, 1) === 2 ? 'Non Aktif' : 'Aktif',
				});
			}
			break;
		case 'pengguna':
			for (let i = 0; i < dataLength; i++) {
				data.push({
					name: 'Si Jono',
					email: 'jono@rebelworks.com',
					tanggallahir: new Date().toDateString(),
					password: 'rahasia',
					role: randomNumber(10, 1) === 2 ? 'Admin' : 'User',
				});
			}
			break;
		default:
	}

	return data;
};

export default dataGenerator;