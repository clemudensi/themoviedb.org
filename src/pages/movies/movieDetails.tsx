import { useGetMovie } from 'hooks';
import { useParams } from 'react-router-dom';
import { Details } from 'components';
import { RouteConfig } from 'types';

export const MovieDetails = () => {
    const { title } = useParams<{title: string}>() as RouteConfig;
    const movieDetail = useGetMovie(title, {});
    return (
        <>
            {movieDetail.isLoading && <>Loading...</>}
            {movieDetail.data && <Details {...movieDetail.data}  />}
        </>
    )
}