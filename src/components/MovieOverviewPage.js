import React from 'react';

const MovieOverviewPage = ({ match }) => (
  <div>
    <h1>Movie Number - {match.params.movieId}</h1>
  </div>
);

export default MovieOverviewPage;