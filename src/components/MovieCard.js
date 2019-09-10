import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { URL_IMAGE } from '../api_source';

const MovieCard = ({ movie }) => {
    const {id, title, release_date, vote_average, overview, poster_path } = movie;
    const date = moment(release_date, 'YYYY-MM-DD').format('MMMM D, YYYY');
    const rate = vote_average.toFixed(1);
    return (
    <div className='moviecard'>
    <Link to={`/movie/${id}`}><img className='moviecard-poster' alt={title} src={`${URL_IMAGE}${poster_path}`}/></Link>
        <div className='moviecard-info'>
            <div className='moviecard-info-header'>
                <p className='moviecard-info-header-rate'>{rate}</p>
                <div className='moviecard-info-header-text'>
                    <h3 className='moviecard-info-header-text-title'>{title}</h3>
                    <p className='moviecard-info-header-text-date'>{date}</p>
                </div>
            </div>
            <p className='moviecard-info-overview'>{overview}</p>
            
            <Link style={{ textDecoration: 'none'}} to={`/movie/${id}`}><p className='moviecard-info-link'>More Info</p></Link>
        </div>
    </div>
)};

export default MovieCard;
