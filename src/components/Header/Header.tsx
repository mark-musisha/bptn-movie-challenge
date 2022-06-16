import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

export const Header: FC = () => (
	<div className='rmdb-header'>
		<div className='rmdb-header-content'>
			<Link to='/'>
				<img className='rmdb-logo' src='./images/logo.png' alt='rmdb-logo' />
			</Link>
			<nav className='nav'>
				<NavLink to='/' className='Home'>
					Home
				</NavLink>
				<NavLink to='/liked' className='liked'>
					Liked
				</NavLink>
			</nav>
			<img
				className='rmdb-tmdb-logo'
				src='./images/tmdb_logo.png'
				alt='tmdb-logo'
			/>
		</div>
	</div>
);
