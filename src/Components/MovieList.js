import React, { Component } from 'react';

class MovieList extends Component {
    render() {
        return (
            <section>
                {this.props.movies.map((movie, i) => {
                    return (
                        <section className="nowPlaying" key={i}>
                            <header>{movie.original_title}</header>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
                        </section>
                    );
                })}
            </section>
        );
    }
}

export default MovieList;