import { useInfiniteQuery } from 'react-query';
import type { UseInfiniteQueryResult } from 'react-query';
import { movieApi } from 'api';
import { Movie } from 'types';

type movieParams = {
    api_key: string | undefined;
    query: string | undefined;
}

const getMovies = async (params: movieParams, page: unknown) =>
    (await movieApi.get<Movie>(`/4/list/${page}`, { params })).data;

const searchMovies = async (params: movieParams) =>
    (await movieApi.get<Movie>(`/4/search/movie`, { params })).data;

export const useGetMovies = (params: movieParams, search = ''): UseInfiniteQueryResult<Movie> => {
    return useInfiniteQuery(['movie-list', search], async ({pageParam = 1}) => {
      if (search) {
          return searchMovies(params);

      } else {
          return getMovies(params, pageParam);
      }
    },
        {
            getNextPageParam: lastPage => {
                return Number(lastPage?.page) < lastPage.total_pages ? Number(lastPage?.page) + 1 : undefined;
            },
            keepPreviousData: true,
        }
    );
}
