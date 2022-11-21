import constate from 'constate';
import { useSearchInput } from 'hooks';

const [SearchMovieProvider, useCounterContext] = constate(useSearchInput);

export { SearchMovieProvider, useCounterContext };