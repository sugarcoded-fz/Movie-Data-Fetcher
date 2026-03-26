const api_key = "6bb791f6c589d9de46ce5886acdc9afc"
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingForDayMovies = async () => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${api_key}`);
    const data = await res.json();
    return data.results;
}

export const fetchPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${api_key}`);
    const data = await res.json();
    return data.results;
}

export const fetchUpcomingMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${api_key}`);
    const data = await res.json();
    return data.results;
}

export const fetchTopRatedMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${api_key}`);
    const data = await res.json();
    return data.results;
}

export const fetchMovieDetail = async (id) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${api_key}`);
    if (!res.ok) {
        throw new Error("Failed to fetch movie details");
    }
    const data = await res.json();
    return data;
}

export const searchMovie = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${api_key}&query=${query}`);
    const data = await res.json();
    return data.results;
}
