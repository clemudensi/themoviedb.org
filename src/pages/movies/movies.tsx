import { useCallback, useEffect, useMemo, useState } from 'react';
import { useInView, InViewHookResponse } from 'react-intersection-observer';
import { useQueryClient } from 'react-query';
import {
    MovieList,
    MovieCard,
    CardGroup,
    Hero,
    Spinner
} from 'components';
import { useGetMovies } from 'hooks';
import { useSearchContext } from 'context';
import {filterMovies} from "../../utils";
import {Movie} from "../../types";

export const Movies = () => {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string|undefined>('');
    const queryClient = useQueryClient();
    const { search } = useSearchContext();

    const { ref, inView }: InViewHookResponse = useInView({
        threshold: 0,
    });

    const movieListResponse = useGetMovies(
        {
            query: searchInput,
        },
        searchInput,
    );
    const { isFetching, isFetchingNextPage, hasNextPage, isLoading } = movieListResponse;

    const fetchNextMovies = useCallback(() => {
        if (!isFetching && !isFetchingNextPage && hasNextPage) {
            void movieListResponse.fetchNextPage();
        }
    }, [hasNextPage, isFetching, isFetchingNextPage, movieListResponse.data?.pages]);

    const handleSearch = async (): Promise<void> => {
        await queryClient.invalidateQueries({ queryKey: ['movie-list'] })
        setSearchInput(search);
        setIsSearching(true);
    };

    useEffect(() => {
        if (inView && movieListResponse.data?.pages) {

            fetchNextMovies();
        }
    }, [inView]);


    const lastMovie = useMemo(() => movieListResponse.data?.pages.map(movie =>
        movie.results).flat(), [movieListResponse.data?.pages]);

    return (
        <>
            <Hero handleSearch={handleSearch} />
            {
                isLoading ? <Spinner /> :
                    <MovieList isSearching={isSearching}>
                        {
                            lastMovie && lastMovie.map((movie, index) => (
                                <CardGroup key={movie.id} ref={index === lastMovie?.length - 1 ? ref : null} data-testid="movies">
                                    <MovieCard movie={movie} />
                                </CardGroup>
                            ))
                        }
                    </MovieList>
            }
        </>
    )
}