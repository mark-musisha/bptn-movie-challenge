import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HeroImage, FourColGrid } from '../../components';
import { selectFavouriteMovies } from '../../state';
import { movieAction } from '../../state/moviesSlice';
import { useAppSelector } from '../../state/store';

export const LikedMovies: FC = () => {
	const dispatch = useDispatch();
	const movies = useAppSelector(selectFavouriteMovies);

	useEffect(() => {
		const movies = localStorage.getItem('favouriteMovies');

		if (movies) {
			const parsedMovies = JSON.parse(movies);
			dispatch(movieAction.setLikedMovies(parsedMovies));
		}
	}, [dispatch]);

	return (
		<div className='rmdb-home'>
			<HeroImage />
			<FourColGrid title='liked movies' likedMovies={movies} />
		</div>
	);
};
