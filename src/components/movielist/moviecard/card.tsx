import { FC } from 'react';
import {
    H3Typography,
    Link,
    LinkTypography,
    ParagraphTypography,
    CardGroup,
    CardGroupTitle,
    CardImage,
    CardImageContainer,
    MovieTitle
} from 'components';
import { MovieCardProps } from 'types';
import { IMAGE_BASE_URL } from '../../../constants';

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
      <CardGroup>
          <CardImageContainer>
              <CardImage
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
              />
          </CardImageContainer>
          <CardGroupTitle>
              <MovieTitle>
                  <H3Typography>
                      <Link href={movie.backdrop_path}>
                          <LinkTypography aria-hidden="true" />
                          {movie.title}
                      </Link>
                  </H3Typography>
              </MovieTitle>
              <ParagraphTypography>{movie.release_date}</ParagraphTypography>
          </CardGroupTitle>
      </CardGroup>
  )
}