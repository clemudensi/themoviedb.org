import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    H3Typography,
    ParagraphTypography,
    CardGroupTitle,
    CardImage,
    CardImageContainer,
    MovieTitle
} from 'components';
import { MovieCardProps } from 'types';
import { IMAGE_BASE_URL } from 'consts';

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
      <Link to={`/movies/${movie.id}`}>
          <CardImageContainer>
              <CardImage
                  src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                  alt={movie.title}
              />
          </CardImageContainer>
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