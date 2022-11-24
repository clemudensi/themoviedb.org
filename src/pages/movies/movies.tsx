import { useCallback, useEffect, useMemo, useState } from 'react';
import { useInView, InViewHookResponse } from 'react-intersection-observer';
import { useQueryClient } from 'react-query';
import { MovieList, MovieCard, CardGroup, Hero } from 'components';
import { useGetMovies, useDebounced } from 'hooks';
import { useCounterContext } from 'context';

export const Movies = () => {
    const [searchInput, setSearchInput] = useState<string|undefined>('');
    const queryClient = useQueryClient();
    const { search } = useCounterContext();
    const inputDebounced = useDebounced(search, 500);

    const { ref, inView }: InViewHookResponse = useInView({
        threshold: 0,
    });

    const movieListResponse = useGetMovies(
        {
            query: searchInput,
        },
        searchInput,
    );
    const { isFetching, isFetchingNextPage, hasNextPage} = movieListResponse;

    const fetchNextMovies = useCallback(() => {
        if (!isFetching && !isFetchingNextPage && hasNextPage) {
            void movieListResponse.fetchNextPage();
        }
    }, [hasNextPage, isFetching, isFetchingNextPage, movieListResponse.data?.pages]);

    const handleSearch = async () => {
        await queryClient.invalidateQueries({ queryKey: ['movie-list'] })
        setSearchInput(inputDebounced);
    };

    useEffect(() => {
        if (inView && movieListResponse.data?.pages) {

            fetchNextMovies();
        }
    }, [inView]);


    const lastMovie = useMemo(() => movieListResponse.data?.pages.map(movie =>
        movie.results).flat(), [movieListResponse.data?.pages])

    return (
        <>
            <Hero handleSearch={handleSearch} />
            <MovieList>
                {
                    lastMovie && lastMovie.map((movie, index) => (
                        <CardGroup key={movie.id} ref={index === lastMovie?.length - 1 ? ref : null}>
                            <MovieCard movie={movie} />
                        </CardGroup>
                    ))
                }
            </MovieList>
        </>
    )
}