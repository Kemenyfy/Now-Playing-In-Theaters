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
                    <section>
                        Featured Movie!
                    </section>
                    <section>
                        <Link to={{
                            pathname: `/Movie/${randomMovieIndex}`,
                            state: {
                                movies: this.props.movies
                            }
                        }}>
                            <MovieItem movie={randomMovies} imageWidth={150} />
                        </Link>
                    </section>
                </section>
            );
        }
        else {
            return (
                <section className="movie">
                    Waiting for the featured movie to load...
                </section>
            )
        }
    }
}

export default RandomMovie;