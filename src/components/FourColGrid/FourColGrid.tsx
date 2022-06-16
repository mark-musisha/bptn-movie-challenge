import { FC } from 'react';
import { useAppSelector } from '../../state/store';
import './fourcolgrid.scss';
import { Movie } from '../../types/movie';
import { useLocation } from 'react-router-dom';
import { selectMovies, selectLoading, selectloadingMore } from '../../state';
import { LikedButton, LoadMoreBtn, MovieThumb, Spinner } from '..';

type Props = {
	title: string;
	likedMovies?: Movie[] | undefined;
};

export const FourColGrid: FC<Props> = ({ title, likedMovies }) => {
	const location = useLocation();
	let movies;
	movies = useAppSelector(selectMovies);

	if (likedMovies) {
		movies = likedMovies;
	}

	const loading = useAppSelector(selectLoading);
	const loadingMore = useAppSelector(selectloadingMore);

	return (
		<div className='rmdb-grid'>
			<h1>{title}</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className='rmdb-grid-content'>
					{movies.length <= 0 ? <h1 className='no-movies'>No Movies</h1> : null}

					{movies.map((movie) => (
						<div key={movie.id} className='rmdb-grid-element'>
							<MovieThumb image={movie.poster_path} />
							<LikedButton movie={movie} />
						</div>
					))}
				</div>
			)}
			{location.pathname !== '/liked' ? (
				loadingMore ? (
					<Spinner />
				) : (
					<LoadMoreBtn />
				)
			) : null}
		</div>
	);
};
