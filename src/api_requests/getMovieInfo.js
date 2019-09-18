import { API_KEY } from '../api_source';

// Fetch details about the movie from TMDB
export function getMovieInfo(id){
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then( res => res.json())
}
