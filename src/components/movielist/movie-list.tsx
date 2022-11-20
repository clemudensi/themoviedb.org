import React, { FC } from 'react';
import {
    MovieListContainer,
    MovieListSection,
    H2Typography,
    MovieListItems,
} from 'components';

type Props = {
    children?: React.ReactNode
};

export const MovieList: FC<Props> = ({ children }) => {
    return (
        <MovieListSection>
            <MovieListContainer>
                <H2Typography>Top Rated Movies</H2Typography>
                <MovieListItems>
                    {children}
                </MovieListItems>
            </MovieListContainer>
        </MovieListSection>
    )
}