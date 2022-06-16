import { Movie } from './movie';

type ApiResponse = {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};

export type { ApiResponse };
