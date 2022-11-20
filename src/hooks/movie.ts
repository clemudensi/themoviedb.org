import { useQuery } from 'react-query';
import { AxiosPromise } from 'axios';
import type { UseQueryResult } from 'react-query';
import { movieApi } from 'api';
import { Movie } from 'types';

type movieParams = {
    api_key: string | undefined
}

export const useGetMovies = (params: movieParams, page: number, search = ''): UseQueryResult<Movie> => {
    let response;
    return useQuery(['movie-list'], async () => {
      if (search) response =  await movieApi.get<AxiosPromise>(`/4/search/movie`, { params });
      response =  await movieApi.get<AxiosPromise>(`/4/list/${page}`, { params });
      return response.data
    });
}
