import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URL } from '../global/config';
import { ApiResponse } from '../types/apiResponse';
import { initialState } from './initialState';

export const getPopularMovies = createAsyncThunk(
	'movies/getPopularMovies',
	async () => {
		const response = await axios.get(API_URL + API_KEY);
		const data: ApiResponse = response.data;
		return data;
	}
);
export const loadMorePopularMovies = createAsyncThunk(
	'movies/loadMorePopularMovies',
	async (page: number) => {
		const response = await axios.get(API_URL + API_KEY + `&page=${page}`);
		const data: ApiResponse = response.data;
		return data;
	}
);

export const moviesSlice = createSlice({
	name: 'movies',
	initialState: initialState,
	reducers: {
		likeMovie(state, action) {
			const movie = state.movies.find((movie) => movie.id === action.payload);
			const likedMovie = state.favouriteMovies.find(
				(movie) => movie.id === action.payload
			);

			if (!likedMovie) {
				if (movie) {
					movie['liked'] = true;
					state.favouriteMovies.push(movie);
				}
				localStorage.setItem(
					'favouriteMovies',
					JSON.stringify(state.favouriteMovies)
				);
			}
		},

		dislikeMovie(state, action) {
			const foundMovie = state.movies.find(
				(movie) => movie.id === action.payload
			);
			const movie = state.favouriteMovies.find(
				(movie) => movie.id === action.payload
			);

			if (foundMovie) {
				foundMovie['liked'] = false;
			}

			if (movie) {
				movie.liked = false;
			}

			state.favouriteMovies = state.favouriteMovies.filter(
				(movie) => movie.id !== action.payload
			);
			localStorage.setItem(
				'favouriteMovies',
				JSON.stringify(state.favouriteMovies)
			);
		},
		setLikedMovies(state, action) {
			state.favouriteMovies = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getPopularMovies.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(getPopularMovies.fulfilled, (state, action) => {
			state.movies = action.payload.results;
			state.total_pages = action.payload.total_pages;
			state.total_results = action.payload.total_results;
			state.page = action.payload.page;
			state.loading = false;
			state.error = '';
		});

		builder.addCase(getPopularMovies.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		//Loadmoremovies cases
		builder.addCase(loadMorePopularMovies.pending, (state, action) => {
			state.loadingMore = true;
		});

		builder.addCase(loadMorePopularMovies.fulfilled, (state, action) => {
			state.movies = [...state.movies, ...action.payload.results];
			state.total_pages = action.payload.total_pages;
			state.total_results = action.payload.total_results;
			state.page = action.payload.page;
			state.loadingMore = false;
		});

		builder.addCase(loadMorePopularMovies.rejected, (state, action) => {
			state.error = action.error.message;
			state.loadingMore = false;
		});
	},
});

export const movieAction = moviesSlice.actions;

export default moviesSlice.reducer;
