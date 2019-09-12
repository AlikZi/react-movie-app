import React from 'react';
import moment from 'moment';
import YouTube from 'react-youtube';
import { API_KEY, URL_IMAGE, URL_BACKDROP } from '../api_source';

export default class MovieOverviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {},
                   trailerKey: '' }
  }
  componentDidMount() {
    const id = this.props.match.params.movieId;
    fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then( res => res.json())
      .then( (data) => {
        console.log(data);
        this.setState({movie:data})})
      .catch(err => 
      console.log(err));

    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    .then(res => res.json())
    .then( data => {
      const trailers = data.results.filter(video => video.type =="Trailer");
      this.setState({ trailerKey: trailers[0].key})
    })
  }
  render() {
    const opts = {
      height: '390',
      width: '640'
    };
    const { 
      title,
      overview,
      release_date,
      backdrop_path,
      poster_path,
      vote_average,
      genres
          }= this.state.movie;
    const date = moment(release_date, 'YYYY-MM-DD').format('MMMM D, YYYY');
    let genres_names;
    if(genres){
      genres_names = genres.map(genre => genre.name).join(', ')
    }
    return (
      <div>
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
                <p>Vote average: {vote_average}</p>
                
                <p>Genres: {genres_names}</p>
              </div>
            </div>
            <div className="overview-trailer-box">
              <div className="overview-text">
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>
              
              <YouTube
                videoId={this.state.trailerKey}
                className="trailer"
                opts={opts}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
