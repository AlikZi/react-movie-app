import { createStore } from 'redux';
import moviesReducer from '../reducers/movies';


// configure store
export default () => {
    const store = createStore(moviesReducer);

    return store;
}