import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MovieItem from './MovieItem'

class RandomMovie extends Component {
    render() {
        if (this.props.movies && this.props.randomMovie) {
            let movies = this.props.movies
            let randomMovieIndex = this.props.randomMovie
            let randomMovies = movies[randomMovieIndex]
            return (
                <section>
                    <h1>Featured Movie!</h1>
                    <section className="randomMovie">
                        <Link to={{
                            pathname: `/Movie/${randomMovieIndex}`,
                            state: {
                                movies: this.props.movies
                            }
                        }}>
                            <MovieItem movie={randomMovies} />
                        </Link>
                    </section>
                </section>
            );
        }
        else {
            return (
                <section />
            )
        }
    }
}

export default RandomMovie;