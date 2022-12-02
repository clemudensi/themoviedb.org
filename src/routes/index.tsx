import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { movieRouteConfigs } from 'consts';

const MovieRoutes: FC = memo(() => (
    <Routes>
        {
            Object.entries(movieRouteConfigs).map(([route, {Element, authRoute}]) =>
                !authRoute
                    ? <Route element={<Element/>} path={route} key={route} />
                    : null
            )
        }
    </Routes>
));

export { MovieRoutes };