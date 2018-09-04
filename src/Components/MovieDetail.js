import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        let movieId = this.props.match.params.movieId
        let _movies = this.props.location.state.movies
        return (
            <div>
                <span>{_movies[movieId].title}</span>
                <p>Release Date: {_movies[movieId].release_date}</p>
                <p>{_movies[movieId].overview}</p>
            </div>
        );
    }
}

export default MovieDetail;