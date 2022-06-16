import { FC } from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../global/config';
import { selectMovies } from '../../state';
import { useAppSelector } from '../../state/store';
import { Header } from '../Header/Header';
import './heroImage.scss';

export const HeroImage: FC = () => {
	const heroImageMovie = useAppSelector(selectMovies)[0];
	return (
		<div>
			<Header />
			{heroImageMovie?.backdrop_path ? (
				<div
					className='rmdb-heroimage'
					style={{
						background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%, rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImageMovie?.backdrop_path}'), #1c1c1c`,
					}}
				>
					<div className='rmdb-heroimage-content'>
						<div className='rmdb-heroimage-text'>
							<h1>{heroImageMovie?.title}</h1>
							<p>{heroImageMovie?.overview}</p>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};
