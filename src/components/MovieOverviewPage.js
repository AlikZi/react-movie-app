import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { API_KEY, URL_IMAGE, URL_BACKDROP } from '../api_source';


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
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then( res => res.json())
      .then( (data) => {
        console.log(data);
        this.setState({movie:data})})
      .catch(err => 
      console.log(err));

    // Fetch up to two movie trailers from TMDB and set the state
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    .then(res => res.json())
    .then( data => {
      // Get only videos with "Trailer" type, save up to two videos in trailers variable
      const trailers = data.results.filter(video => video.type =="Trailer").slice(0, 2);
      this.setState({ videos: trailers})
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
          }= this.state.movie;
    
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
            <h3 className="videos-header">Trailers</h3>
            <div className="movie-videos">
                {videos}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
