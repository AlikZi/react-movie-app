import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { URL_IMAGE } from '../api_source';

const MovieCard = ({ movie }) => {
    const {id, title, release_date, vote_average, overview, poster_path } = movie;
    const date = moment(release_date, 'YYYY-MM-DD').format('MMMM D, YYYY');
    return (
    <div className='movie-card'>
        <img className='movie-card-poster' alt={title} src={`${URL_IMAGE}${poster_path}`}/>
        <div className='movie-card-info'>
            <h2 className='movie-card-info-title'>{title}</h2>
            <p className='movie-card-info-date'>{date}</p>
            <p className='movie-card-info-vote'>{vote_average}</p>
            <p className='movie-card-info-overview'>{overview}</p>
            <Link to={`/movie/${id}`}><p>More Info</p></Link>
        </div>
    </div>
)};

export default MovieCard;
