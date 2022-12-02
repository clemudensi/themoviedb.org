import constate from 'constate';
import { useSearchInput } from 'hooks';

const [SearchMovieProvider, useSearchContext] = constate(useSearchInput);

export { SearchMovieProvider, useSearchContext };