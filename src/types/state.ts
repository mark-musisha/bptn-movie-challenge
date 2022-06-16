import { Movie } from './movie';
type State = {
	movies: Movie[];
	favouriteMovies: Movie[];
	page: number;
	total_pages: number;
	total_results: number;
	loading: boolean;
	loadingMore: boolean;
	searchTerm: string;
	error: string | undefined;
};

export type { State };
