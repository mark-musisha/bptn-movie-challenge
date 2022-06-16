import React, { FC } from 'react';
import {
	AiFillLike,
	AiOutlineLike,
	AiTwotoneDislike,
	AiOutlineDislike,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { movieAction } from '../../state/moviesSlice';
import { Movie } from '../../types/movie';
import './btn.scss';

type Props = {
	movie: Movie;
};

export const LikedButton: FC<Props> = ({ movie }) => {
	const dispatch = useDispatch();

	const onLikeMovie = (event: any, movieId: number) => {
		dispatch(movieAction.likeMovie(movieId));
	};

	const onDislike = (event: any, movieId: number) => {
		dispatch(movieAction.dislikeMovie(movieId));
	};
	return (
		<div className='icon-wrapper'>
			{movie?.liked ? (
				<AiFillLike className='icon icon-fill' size={30} color='lightgray' />
			) : (
				<AiOutlineLike
					className='icon'
					size={30}
					color='lightgray'
					onClick={(event) => onLikeMovie(event, movie.id)}
				/>
			)}
			{movie?.liked === false ? (
				<AiTwotoneDislike
					className='icon icon-fill'
					size={30}
					color='lightgray'
				/>
			) : (
				<AiOutlineDislike
					className='icon '
					size={30}
					color='lightgray'
					onClick={(event) => onDislike(event, movie.id)}
				/>
			)}
		</div>
	);
};
