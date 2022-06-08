import { useEffect, useState } from 'react';

import { PokemonActions } from 'stores/actions';

const useDashboard = () => {
	const [getAllPokemon, { data: pokemon, isLoading }] = PokemonActions.useLazyGetAllPokemonQuery();

	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(10);
	const [allPokemon, setAllPokemon] = useState([]);

	useEffect(() => {
		getAllPokemon(`?limit=${ limit }&offset=${ offset }`);
	}, [limit, offset]);

	useEffect(() => {
		if (pokemon?.length) {
			// setAllPokemon([...allPokemon, ...pokemon])
		}
	}, [pokemon]);

	const onChangeLimit = (e?: React.ChangeEvent<HTMLSelectElement>) => e ? setLimit(Number(e.target.value)) : undefined;

	const onClickPagination = (type: string) => {
		if (type === 'next') setOffset(Number(offset) + Number(limit));
		else if (offset > limit) setOffset(Number(offset) - Number(limit));
	};

	return {
		pokemon,
		allPokemon,
		limit,
		isLoading,
		onChangeLimit,
		onClickPagination
	};
};

export default useDashboard;
