interface MovieResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
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
    comments: {
        [movie: string]: string;
    };
    created_by: {
        gravatar_hash: string;
        id: string;
        name: string;
        username: string;
    };
    description: string;
    id: string;
    name: string;
    object_ids: {
        [movie: string]: string;
    };
    page: number;
    poster_path: string;
    public: boolean;
    results: MovieResult[];
    total_pages: number;
    total_results: number;
}

interface ApiResponse<T> {
    readonly results: T;
}

export type { Movie }