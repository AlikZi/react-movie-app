import React from 'react';
import moment from 'moment';
import { API_KEY } from '../api_source';

export default class MovieOverviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} }
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
  }
  render() {
    const { title, overview, release_date }= this.state.movie;
    const date = moment(release_date, 'YYYY-MM-DD').format('MMMM D, YYYY');
    return (
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{overview}</p>
      </div>
    );
  }
};
