import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const MoviesList = (props) => (
    <div className="movie-list">
        {props.movies.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>))}
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