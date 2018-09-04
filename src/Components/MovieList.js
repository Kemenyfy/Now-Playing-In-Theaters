import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MovieItem from './MovieItem'

class MovieList extends Component {
    render() {
        return (
            <section>
                {this.props.movies.map((movie, i) => {
                    return (
                        <section className="nowPlaying" key={i}>
                            <Link

                                to={{
                                    pathname: `/Movie/${i}`,
                                    state: {
                                        movies: this.props.movies
                                    }
                                }}
                                key={i}>
                                <MovieItem key={i} movie={movie} imageWidth={250} />
                            </Link>
                        </section>
                    );
                })}
            </section>
        );
    }
}

export default MovieList;