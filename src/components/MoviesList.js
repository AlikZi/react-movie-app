import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

export const MoviesList = (props) => (
    <div>
        {
            // Check if movies are passed down, if not show the message
            props.movies.length === 0 ? (
                <h1>Sorry, we are facing technical issues at the moment. Please, try again later.</h1>
            ) : (
                <div className="movie-list">
                    {props.movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>))}
                </div>
            )
        }

    </div>
)

// Get movies from redux store
const mapStateToProps = (state) => {
    return {
        movies: state
    }
};

// Connect component to redux store
export default connect(mapStateToProps)(MoviesList);
