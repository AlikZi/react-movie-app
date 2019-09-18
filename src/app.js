import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getMovies from './api_requests/getMovies';
import './styles/styles.scss';

// Configure store
const store = configureStore();

// Fetch Popular Movies from TheMovieDB and store it in redux store
getMovies(store);

// Build main jsx and provide redux store to the app
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));