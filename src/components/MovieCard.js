import React from 'react';
import { URL_IMAGE } from '../api_source';

const MovieCard = ({ movie }) => {
    const {title, release_date, vote_average, overview, poster_path } = movie;
    return (
    <div className='movie-card'>
        <img className='movie-card-poster' alt={title} src={`${URL_IMAGE}${poster_path}`}/>
        <div className='movie-card-info'>
            <h2 className='movie-card-info-title'>{title}</h2>
            <p className='movie-card-info-date'>{release_date}</p>
            <p className='movie-card-info-vote'>{vote_average}</p>
            <p className='movie-card-info-overview'>{overview}</p>
        </div>
    </div>
)};

export default MovieCard;
