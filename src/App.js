import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import MovieList from './Components/MovieList';
import RandomMovie from './Components/RandomMovie'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      randomMovie: 0
    }
  }


  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9fe2614f2b9d0f56b7e758ac2b8ef828")
      .then(resp => resp.json())
      .then(moviesData => {
        console.log(moviesData.results)
        const randomMovie = Math.floor(Math.random() * moviesData.results.length)
        this.setState({
          movies: moviesData.results,
          randomMovie: randomMovie
        });
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Now Playing in a Theater Near You</h1>
          </header>
          <RandomMovie movies={this.props.movies} randomMovie={this.props.randomMovie} />
          <MovieList movies={this.state.movies} />
        </div>
      </Router>
    );
  }
}

export default App;