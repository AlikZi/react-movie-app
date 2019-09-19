import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';
import { URL_IMAGE, URL_BACKDROP } from '../api_source';
import { getMovieInfo } from '../api_requests/getMovieInfo';
import { getMovieTrailers } from '../api_requests/getMovieTrailers';


export default class MovieOverviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {},
                   videos: [] }
  }
  componentDidMount() {
    // When component mounts scroll to the top of the page
    window.scrollTo(0, 0);
    const id = this.props.match.params.movieId;

    // Fetch details about the movie from TMDB and set the state
    getMovieInfo(id).then( data => {
      this.setState({movie: data});
    })
    // Fetch up to two movie trailers from TMDB and set the state
    getMovieTrailers(id).then( data => {
      this.setState({videos: data});
    })   
  }

  render() {
    // Destructure movie for 
    const { 
      title,
      overview,
      release_date,
      backdrop_path,
      poster_path,
      vote_average,
      genres
          } = this.state.movie;
    
    // Format rate to have one decimal
    let rate = vote_average ? vote_average.toFixed(1) : 0.0;

    // Format release date
    const date = moment(release_date, 'YYYY-MM-DD').format('MMMM D, YYYY');

    // Transform the  list of genres into string
    let genres_names = genres ? genres.map(genre => genre.name).join(', ') : [];

    // Create divs that contain iframe with trailer and name below the iframe and save in "videos"
    const videos = this.state.videos.map(video =>{
      return (
      <div key={video.key} className="movie-videos__item">
        <div className="video-container">
            <iframe key={video.key} width="320" height="180" allowFullScreen={true} src={`https://www.youtube.com/embed/${video.key}`} frameBorder="0"/>
        </div>
        <p className="movie-videos__item--name">{video.name}</p>
      </div>
      );
    });

    return ( 
      <div>
        { 
          // Check if state has movie object is empty, if it is --> show message, otherwise render page
          _.isEmpty(this.state.movie) ? (
          <h1>Sorry, something is wrong. Please, try again later.</h1>
        ) : (
        <div>
        <Link className="back-link" to={`/`}>
          <img alt="Back Button" className="back-link__button" src="/images/left-arrow.svg"/>
        </Link>
        <div className="backdrop">
          <img className="backdrop__image" alt={title} src={`${URL_BACKDROP}${backdrop_path}`}/>
        </div>
        <div className='overview'>
          <div className="container">
            <div className="poster-title-box">
              <img className="poster-title-box__poster" alt={title} src={`${URL_IMAGE}${poster_path}`}/>
              <div className="poster-title-box__info">
                <h2 className="poster-title-box__info--title">{title}</h2>
                <p className='poster-title-box__info--date'>{date}</p>
                <p className='poster-title-box__info--genres'>{genres_names}</p>
              </div>
              <p className="poster-title-box__rate">{rate}</p>
            </div>
            <div className="overview-text">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
            <div className="movie-videos">
                {videos}
            </div>
          </div>
        </div>
        </div>
        )}
      </div>
    );
  }
};
