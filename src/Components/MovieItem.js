import React, { Component } from 'react';

const imageURL = 'https://image.tmdb.org/t/p/w500'

class MovieItem extends Component {
    render() {
        const image_width = this.props.imageWidth
        let movie = this.props.movie
        return (
            <section>
                <section>{movie.title}</section>
                <img className="image"
                src={imageURL + movie.poster_path} 
                alt={movie.title} 
                width={image_width}
                />
            </section>
        );
    }
}

export default MovieItem;