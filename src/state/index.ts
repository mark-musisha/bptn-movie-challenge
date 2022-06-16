import { RootState } from './store';

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectFavouriteMovies = (state: RootState) =>
	state.movies.favouriteMovies;
export const selectPage = (state: RootState) => state.movies.page;
export const selectTotalPages = (state: RootState) => state.movies.total_pages;
export const selectTotalResults = (state: RootState) =>
	state.movies.total_results;
export const selectLoading = (state: RootState) => state.movies.loading;
export const selectSearchTerm = (state: RootState) => state.movies.searchTerm;
export const selectError = (state: RootState) => state.movies.error;
export const selectloadingMore = (state: RootState) => state.movies.loadingMore;
