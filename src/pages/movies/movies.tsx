import {useCallback, useEffect} from 'react';
import { useInView, InViewHookResponse } from 'react-intersection-observer';
import { MovieList, MovieCard, CardGroup } from 'components';
import { useGetMovies, useDebounced } from 'hooks';
import { useCounterContext } from 'context';

export const Movies = () => {
    const { search } = useCounterContext();
    const inputDebounced = useDebounced(search, 500);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const { ref, inView }: InViewHookResponse = useInView({
        threshold: 0,
    });

    const movieListResponse = useGetMovies(
        {
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            query: inputDebounced,
        },
        inputDebounced,
    );

    const fetchNextMovies = useCallback(() => {
        if (!movieListResponse.isFetchingNextPage && movieListResponse.hasNextPage) {
            void movieListResponse.fetchNextPage()
        }
    }, [movieListResponse])

    useEffect(() => {
        if (inView && movieListResponse.data?.pages) {

            fetchNextMovies();
        }
    }, [movieListResponse.data, inView, fetchNextMovies]);

    return (
        <MovieList>
            {
                movieListResponse.data?.pages.map(movie =>
                    movie.results).flat().map((movie, index) => (
                    <CardGroup key={movie.id} ref={index === movieListResponse.data?.pages[movieListResponse.data?.pages.length - 1].results.length - 1 ? ref : null}>
                        <MovieCard movie={movie} />
                    </CardGroup>
                ))
            }
        </MovieList>
    )
}