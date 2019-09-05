import React from 'react';
import '../styles/styles.scss';

const MovieOverviewPage = ({ match }) => (
  <div>
    <h1>Movie Number - {match.params.movieId}</h1>
  </div>
);

export default MovieOverviewPage;