import { Images } from 'constant';

import Header from './style';

const Dashboard = () => {
	return (
		<Header>
			<div className='navbar'>
				<img src={ Images.PokemonIllu } alt='logo' className='logo' />
			</div>
			<div className='navbar-backdrop' />
		</Header>
	);
};

export default Dashboard;
