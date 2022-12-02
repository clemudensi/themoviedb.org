import {Movie} from 'types';

export const filterMovies = (movieObj: Movie, str: string): Movie => {
  movieObj.results = movieObj.results.filter(movie => movie.title.toLowerCase().includes(str.toLowerCase()))
  return movieObj;
};