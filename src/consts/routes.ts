import { Route, RouteConfig } from 'types';

import {
    MovieDetails,
    Movies,
} from 'pages';

const movieRouteConfigs: Record<Route, RouteConfig> = {
    '/': {
        title: 'Movies',
        Element: Movies,
        authRoute: false,
    },
    '/movies': {
        title: 'Movies',
        Element: Movies,
        authRoute: false,
    },
    '/movies/:title': {
        title: 'Movie Details',
        Element: MovieDetails,
        authRoute: false,
    }
};

export { movieRouteConfigs };