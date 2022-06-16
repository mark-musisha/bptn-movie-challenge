import { FC } from 'react';
import { selectPage } from '../../state';
import { loadMorePopularMovies } from '../../state/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import './button.scss';

export const LoadMoreBtn: FC = () => {
	const dispatch = useAppDispatch();
	const page = useAppSelector(selectPage);

	const onLoadMore = () => {
		dispatch(loadMorePopularMovies(page + 1));
	};

	return (
		<button className='rmdb-loadmorebtn' onClick={onLoadMore}>
			Load More
		</button>
	);
};
