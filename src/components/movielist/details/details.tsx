import { FC } from 'react';
import {
    DetailsContainer,
    DetailText,
    DetailTextSection,
    H1Typography,
    DetailSection,
    GroupItemsBlock,
    H3Typography,
    MovieDetailContainer,
    ParagraphTypography,
    MovieImage,
} from 'components';
import { MovieDetails } from 'types';

export const Details: FC<MovieDetails> = (movie) => {
    return (
        <DetailsContainer>
            <MovieImage movie={movie} />
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