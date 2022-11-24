import React, { FC } from 'react';
import {
    MovieListContainer,
    BGWhite,
    H2Typography,
    MovieListItems,
} from 'components';

type Props = {
    children?: React.ReactNode
};

export const MovieList: FC<Props> = ({ children }) => {
    return (
        <BGWhite>
            <MovieListContainer>
                <H2Typography>Top Rated Movies</H2Typography>
                <MovieListItems>
                    {children}
                </MovieListItems>
            </MovieListContainer>
        </BGWhite>
    )
}