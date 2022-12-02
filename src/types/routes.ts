import { FC } from 'react';

type Route =
    '/' |
    '/movies' |
    '/movies/:title';

interface RouteConfig {
    title?: string;
    Element: FC;
    authRoute: boolean;
}

export type { Route, RouteConfig };