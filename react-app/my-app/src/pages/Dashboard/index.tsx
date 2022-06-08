import useDashboard from './useDashboard';
import DashoardStyle from './style';
import { Button } from 'components';

const Dashboard = () => {
	const {
		allPokemon,
		pokemon,
		limit,
		isLoading,
		onChangeLimit,
		onClickPagination
	} = useDashboard();

	// const renderPokemonList = data => {
	// 	if (!data?.length) return null

	// 	return data?.map((pokemon, index) => (
	// 		<div key={ index } className='pokemon'>
	// 			<h1>{ pokemon.name }</h1>
	// 		</div>
	// 	))
	// }

	return (
		<>
			<DashoardStyle>
				<h1>PAGINATION</h1>
				<div className='list-container'>
					{/* { renderPokemonList(pokemon) } */ }
					{ isLoading && <h1>LOADING...</h1> }
				</div>

				<div style={ { margin: '40px 0' } }>
					<select onChange={ onChangeLimit } value={ limit }>
						<option value='10'>10</option>
						<option value='20'>20</option>
						<option value='30'>30</option>
					</select>
					<Button label='Prev Page' onClick={ () => onClickPagination('prev') } />
					<Button label='Next Page' onClick={ () => onClickPagination('next') } />
				</div>

				<h1>LOAD MORE</h1>
				<div className='list-container'>
					{/* { renderPokemonList(allPokemon) } */ }
				</div>
			</DashoardStyle>
		</>
	);
};

export default Dashboard;
