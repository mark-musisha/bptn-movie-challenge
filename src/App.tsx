import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, LikedMovies, NotFound } from './pages';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/liked' element={<LikedMovies />} />
				<Route element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
