import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/movieCard.css';

const MovieCard = ({ id, title, poster_path, rating ,rank=false }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img
          src={poster_path}
          alt={title}
          className="movie-poster"
        />
        <div className="movie-details">
          <h3 className="movie-title">{title}</h3>
          {rank ? <p className='movie-rating'>Rank {rank}</p> : <p className="movie-rating">⭐ {rating}/10</p>}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
