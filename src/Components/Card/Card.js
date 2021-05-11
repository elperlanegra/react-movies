import React from 'react';

const Card = ({ movies }) => {
    return (

        <div className="cardlist__movies">
            {movies.filter(movie => movie.Poster).map((movie, index) => (
                <div className="card" key={index}>
                    <img
                        className="movie__image"
                        src={movie.Poster}
                        alt="poster"
                    />
                    <div className="flex__card">
                        <p className="heading">Title: {movie.Title}</p>
                        <p className="paragraph">Year: {movie.Year}</p>
                        <p className="">Year: {movie.Plot}</p>

                        <br />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;