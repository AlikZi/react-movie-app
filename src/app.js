import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import populateStore from './populateStore/populatestore';
import './styles/styles.scss';

// Configure store
const store = configureStore();

// Fetch Popular Movies from TheMovieDB and store it in redux store
populateStore(store);

// Build main jsx and provide redux store to the app
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));