import { FC, useEffect } from 'react';
import { HeroImage, FourColGrid } from '../../components';
import { selectMovies } from '../../state';
import { getPopularMovies } from '../../state/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../state/store';

export const Home: FC = () => {
	const dispatch = useAppDispatch();
	const movies = useAppSelector(selectMovies);

	useEffect(() => {
		if (movies.length < 1) {
			dispatch(getPopularMovies());
		}
	});

	return (
		<div className='rmdb-home'>
			<HeroImage />
			<FourColGrid title='popular movies' />
		</div>
	);
};
