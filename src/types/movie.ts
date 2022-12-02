interface MovieResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface Movie {
    average_rating: number;
    backdrop_path: string;
    comments?: {
        [movie: string]: string;
    };
    created_by: {
        gravatar_hash: string;
        id: string;
        name: string;
        username: string;
    };
    description: string;
    id: number;
    name: string;
    object_ids?: {
        [movie: string]: string;
    };
    page: number;
    poster_path: string;
    public?: boolean;
    results: MovieResult[];
    total_pages: number;
    total_results: number;
}

interface MovieDetails extends MovieResult {
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    }
    budget: number;
    homepage: string;
    imdb_id: string;
}

export type { Movie, MovieDetails }