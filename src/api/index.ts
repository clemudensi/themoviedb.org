import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://api.themoviedb.org';

export const movieApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 90000,
    headers: {
        'Content-type': 'application/json',
    },
    params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
    }
});
