import { State } from '../types/state';

export const initialState: State = {
	movies: [],
	favouriteMovies: [],
	page: 0,
	total_pages: 0,
	total_results: 0,
	loading: false,
	loadingMore: false,
	searchTerm: '',
	error: '',
};
