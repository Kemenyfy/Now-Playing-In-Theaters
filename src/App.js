import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }


  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9fe2614f2b9d0f56b7e758ac2b8ef828")
      .then(resp => resp.json())
      .then(json => {
        console.log(json.results)
        this.setState({
          movies: json.results
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Now Playing in a Theater Near You</h1>
        </header>
        {this.state.movies.map((movie, i) => {
          return (
            <section className="nowPlaying" key={i}>
              <header>{movie.original_title}</header>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster"/>
            </section>
          );
        })}
      </div>
    );
  }
}

export default App;