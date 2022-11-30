import React from 'react';
import {render, fireEvent, screen, Matcher, MatcherOptions, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter as Router } from 'react-router-dom';
import { SearchMovieProvider } from 'context';
import { useGetMovies } from 'hooks';
import { Movies } from './movies';
import MockIntersectionObserver from '__mocks__/mockIntersectionObserver';
import { filterMovies } from 'utils';
import mockedMovies from '__fixtures__/movies.json';
import { Movie } from 'types';

window.IntersectionObserver = MockIntersectionObserver;
const mockedUseUsersQuery = useGetMovies as jest.Mock<unknown>;

jest.mock('../../hooks/useGetMovie', () => ({
    useGetMovies: jest.fn()
}));

const queryClient = new QueryClient();

const moviesResult: Movie = mockedMovies;

let getByTestId: ((id: Matcher, options?: MatcherOptions | undefined) => HTMLElement) | ((arg0: string) => Window | Document | Node | Element),
    queryAllByTestId: ((id: Matcher, options?: MatcherOptions | undefined) => HTMLElement[]) | ((arg0: string) => any),
    queryByPlaceholderText: ((id: Matcher, options?: MatcherOptions | undefined) => HTMLElement | null) | ((arg0: RegExp) => HTMLInputElement);

describe('<Movies />', () => {
    beforeEach(() => {
        mockedUseUsersQuery.mockImplementation(() => ({data: {pages: [mockedMovies]}}));

        const component = render(
            <QueryClientProvider client={queryClient}>
                <SearchMovieProvider>
                    <Router>
                        <Movies />
                    </Router>
                </SearchMovieProvider>
            </QueryClientProvider>
        )

        getByTestId = component.getByTestId;
        queryAllByTestId = component.queryAllByTestId;
        queryByPlaceholderText = component.queryByPlaceholderText;
    });

    describe('Show movies', () => {
        it('render all movies', () => {
            expect(screen.getByText(/Top Rated Movies/i)).toBeInTheDocument();
            expect(queryAllByTestId('movies')).toHaveLength(20)
        });
    })

    describe('Search Movies', () => {
        beforeEach(() => {
            mockedUseUsersQuery.mockImplementation(() => ({data: {pages: [filterMovies(moviesResult, 'man')]}}));
            const input = queryByPlaceholderText(/Search for movies/i) as HTMLInputElement;
            fireEvent.change(input, {target: {value: 'man'}});
        });

        it('renders searched movies', async () => {
            fireEvent.click(getByTestId('search-btn'));

            await waitFor(() => {
                expect(screen.getByText(/Searched Movies/i)).toBeInTheDocument();
                expect(screen.queryByPlaceholderText(/Search for movies/i)).toHaveValue('man');
                expect(queryAllByTestId('movies')).toHaveLength(5);
            });
        });
    });
});