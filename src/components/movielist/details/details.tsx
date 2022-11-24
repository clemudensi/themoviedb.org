import { FC } from 'react';
import {
    DetailsContainer,
    DetailText,
    DetailTextSection,
    ImageContainer,
    CardImage,
    MovieDetailImage,
    H1Typography,
    DetailSection,
    GroupItemsBlock,
    H3Typography,
    MovieDetailContainer,
    ParagraphTypography,
} from 'components';
import { MovieDetails } from 'types';
import {IMAGE_BASE_URL} from "../../../consts";

export const Details: FC<MovieDetails> = (movie) => {
    return (
        <DetailsContainer>
            <MovieDetailImage>
                <ImageContainer>
                    <CardImage
                        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                    />
                </ImageContainer>
            </MovieDetailImage>
            <DetailTextSection>
                <DetailText>
                    <H1Typography>
                        {movie.title}
                    </H1Typography>
                </DetailText>
                <DetailSection>
                    <GroupItemsBlock>
                        <H3Typography>
                            Movie Overview
                        </H3Typography>
                        <MovieDetailContainer>
                            <ParagraphTypography>
                                {movie.overview}
                            </ParagraphTypography>
                        </MovieDetailContainer>
                    </GroupItemsBlock>
                </DetailSection>
            </DetailTextSection>
        </DetailsContainer>
    )
}