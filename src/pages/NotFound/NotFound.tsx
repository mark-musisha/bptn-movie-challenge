import React, { FC } from 'react';
import { Header } from '../../components/Header/Header';

export const NotFound: FC = () => {
	return (
		<div className='div'>
			<Header />
			<h1>Page does not exist</h1>
		</div>
	);
};
