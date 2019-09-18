import { API_KEY } from '../api_source';

// Fetch up to two movie trailers from TMDB
export function getMovieTrailers(id){
    return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    .then( res => res.json())
    .then( data => {
        // Get only videos with "Trailer" type, save up to two videos in trailers variable
        const trailers = data.results.filter(video => video.type =="Trailer").slice(0, 2);
        return trailers})
}
