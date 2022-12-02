import {useQuery, useInfiniteQuery} from 'react-query';
import type {UseQueryResult, UseInfiniteQueryResult} from 'react-query';
import { movieApi } from 'api';
import { Movie, MovieDetails } from 'types';

type movieParams = {
    query?: string;
    page?: number;
}

const getMovies = async (params: movieParams, page: unknown) =>
    (await movieApi.get<Movie>(`/4/list/${page}`, {params})).data;

const searchMovies = async (params: movieParams) =>
    (await movieApi.get<Movie>('/4/search/movie', {params})).data;

const getMovieDetails = async (id: string | undefined, params = {}) =>
    (await movieApi.get<Movie>(`/3/movie/${id}`, {params})).data;

export const useGetMovies = (params: movieParams, search = ''): UseInfiniteQueryResult<Movie> => {
    return useInfiniteQuery(['movie-list', search, params?.query], async ({pageParam = 1}) => {
        if (search) {
            return searchMovies({ ...params, page: pageParam });

        } else {
            return getMovies(params, pageParam);
        }
    },
        {
            getNextPageParam: lastPage => {
                return Number(lastPage?.page) < lastPage.total_pages ? Number(lastPage?.page) + 1 : undefined;
            },
            keepPreviousData: false,
        }
    );
};

export const useGetMovie = (id: string | undefined, params: movieParams): UseQueryResult<MovieDetails> => {
    return useQuery(['movie-detail'], async () => getMovieDetails(id, params));
};
