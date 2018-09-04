import React, { Component } from 'react';
import RandomMovie from './RandomMovie'
import MovieList from './MovieList'

class Main extends Component {

    render() {
        return (
            <div>
                <RandomMovie movies={this.props.movies} randomMovie={this.props.randomMovie} />
                <MovieList movies={this.props.movies} />
            </div>
        );
    }
}

export default Main;