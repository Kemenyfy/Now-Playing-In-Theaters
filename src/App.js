import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9fe2614f2b9d0f56b7e758ac2b8ef828")
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Now Playing in a Theater Near You</h1>
        </header>
        <p>hjfkyxckj
        </p>
      </div>
    );
  }
}

export default App;
