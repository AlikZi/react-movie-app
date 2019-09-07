import React from 'react';

const MovieCard = (props) => (
    <div>
        <h2>{props.movie.title}</h2>
        <p>{props.movie.release_date}</p>
        <p>{props.movie.vote_average}</p>
        <p>{props.movie.overview}</p>
    </div>
);

export default MovieCard;
