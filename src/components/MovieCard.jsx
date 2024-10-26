// src/components/MovieCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/movieCard.css';

const MovieCard = ({ movie }) => {
  const id=movie.node.id;
  const title=movie.node.originalTitleText.text;
  const poster_path=movie.node.primaryImage.url;
  const rating=movie.node.ratingsSummary.aggregateRating;
  
  

  //  console.log(id,title);
  // Base URL for images
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
          <p className="movie-rating">⭐ {rating}/10</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
