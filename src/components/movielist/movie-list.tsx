import React, { FC } from 'react';
import {
    MovieListContainer,
    BGWhite,
    H2Typography,
    MovieListItems,
} from 'components';
import { SEARCHED_MOVIES, TOP_MOVIES } from 'consts';

type Props = {
    children?: React.ReactNode;
    isSearching?: boolean;
};

export const MovieList: FC<Props> = ({ children, isSearching }) => {
    return (
        <BGWhite>
            <MovieListContainer>
                <H2Typography>{isSearching ? SEARCHED_MOVIES : TOP_MOVIES}</H2Typography>
                <MovieListItems>
                    {children}
                </MovieListItems>
            </MovieListContainer>
        </BGWhite>
    )
}