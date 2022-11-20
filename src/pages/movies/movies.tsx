import { useState } from 'react';
import { MovieList, MovieCard } from 'components';
import { useGetMovies } from 'hooks';

export const Movies = () => {
    const [page, setPage] = useState<number>(1);
    const movieListResponse = useGetMovies({api_key: process.env.REACT_APP_MOVIE_API_KEY}, page);

    return (
        <MovieList>
            {
                movieListResponse.data?.results.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))
            }
        </MovieList>
    )
}