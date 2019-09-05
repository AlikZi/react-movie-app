import React from 'react';
import '../styles/styles.scss';

const MainPage = () => (
  <div>
    <h1>Movie List</h1>
  </div>
);

export default MainPage;

/*constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {movies: []};
  }

  componentDidMount(){
    fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`)
      .then( res => res.json())
      .then( data => this.setState(() => ({movies: data['results']})))
      .catch(err => 
        console.log(err));
    }

    const moviesItems = this.state.movies.map(movie => (
      <div key={movie.id}>
        <p>{movie.title}</p>
        <p>{movie.overview}</p>
        <img class="card-image" alt={movie.title} src={URL_IMAGE + movie.poster_path}/>
      </div>
    ))
*/