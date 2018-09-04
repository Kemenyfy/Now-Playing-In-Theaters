import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieCast: {
                cast: [{}]
            }
        };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId
        let _movies = this.props.location.state.movies
        let castURL = `https://api.themoviedb.org/3/movie/${_movies[movieId].id}/credits?api_key=9fe2614f2b9d0f56b7e758ac2b8ef828&language=en-US&page=1`;

        fetch(castURL)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                }
            })
            .then(json => {
                this.setState({
                    movieCast: json
                });
            });
    }

    render() {
        let movieId = this.props.match.params.movieId
        let _movies = this.props.location.state.movies
        return (
            <div>
                <span>{_movies[movieId].title}</span>
                <p>Release Date: {_movies[movieId].release_date}</p>
                <p>{_movies[movieId].overview}</p>
                <p>{this.state.movieCast.cast[0].name} as{" "}{this.state.movieCast.cast[0].character}</p>
            </div>
        );
    }
}

export default MovieDetail;