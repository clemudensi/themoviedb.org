import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    H3Typography,
    ParagraphTypography,
    CardGroupTitle,
    MovieTitle, MovieImage
} from 'components';
import { MovieCardProps } from 'types';

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
      <Link to={`/movies/${movie.id}`}>
          <MovieImage movie={movie} />
          <CardGroupTitle>
              <MovieTitle>
                  <H3Typography>
                      {movie.title}
                  </H3Typography>
              </MovieTitle>
              <ParagraphTypography>{movie.release_date}</ParagraphTypography>
          </CardGroupTitle>
      </Link>
  )
}