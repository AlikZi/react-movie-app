import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history';
import MainPage from '../components/MainPage';
import MovieOverviewPage from '../components/MovieOverviewPage';
import NotFoundPage from "../components/NotFoundPage";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/movie/:movieId" component={MovieOverviewPage} />
                <Route component={NotFoundPage} />
            </Switch>
        
        </div>
    </Router>
);

export default AppRouter;