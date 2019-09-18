import { API_KEY } from '../api_source';
import { addMovies } from '../actions/movies';


// Fetch Popular Movies from TheMovieDB and store it in redux store
export default (store) => {
    fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then( res => res.json())
    .then( data => store.dispatch(addMovies(data['results'])))
}