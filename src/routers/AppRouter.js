import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import MovieOverviewPage from '../components/MovieOverviewPage';
import NotFoundPage from "../components/NotFoundPage";

// Create browser history for react router
export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/movie/:movieId" component={MovieOverviewPage} />
                <Route component={NotFoundPage} />
            </Switch>
        
        </div>
    </Router>
);

export default AppRouter;