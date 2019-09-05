import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {movies: []};
  }

  componentDidMount(){
    fetch(`http://api.themoviedb.org/3/movie/popular?api_key=d1d0ff2b8b31a90e89109439b6b4f2ad&page=1`)
      .then( res => res.json())
      .then( data => this.setState(() => ({movies: data['results']})))
      .catch(err => 
        console.log(err));
    }
  render() {
    const moviesItems = this.state.movies.map(movie => (
      <div key={movie.id}>
        <p>{movie.title}</p>
        <p>{movie.overview}</p>
      </div>
    ))
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Movies</h1>
        { moviesItems }
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));