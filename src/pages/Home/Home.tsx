import { FC, useEffect } from 'react';
import { HeroImage, FourColGrid } from '../../components';
import { getPopularMovies } from '../../state/moviesSlice';
import { useAppDispatch } from '../../state/store';

export const Home: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPopularMovies());
	}, [dispatch]);

	return (
		<div className='rmdb-home'>
			<HeroImage />
			<FourColGrid title='popular movies' />
		</div>
	);
};
