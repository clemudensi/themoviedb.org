import { FC } from 'react';
import { CardImage, CardImageContainer} from 'components';
import { IMAGE_BASE_URL } from 'consts';
import { MovieCardProps } from 'types';


export const MovieImage: FC<MovieCardProps> = ({ movie }) => {
  return (
      <CardImageContainer>
          <CardImage
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
          />
      </CardImageContainer>
  )
}