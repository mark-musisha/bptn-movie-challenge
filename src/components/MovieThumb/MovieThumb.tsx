import { FC } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../global/config';

type Props = {
	image: string;
};

export const MovieThumb: FC<Props> = ({ image }) => (
	<div className='rmdb-moviethumb'>
		<img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} alt='moviethumb' />
	</div>
);
