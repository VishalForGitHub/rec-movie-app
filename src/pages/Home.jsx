import React, { useEffect, useState } from 'react';
import '../styles/common.css'
import { popular } from '../services/movieService';
import MovieCard from '../components/MovieCard';  
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.request(popular)
      .then(response => {
        setMovies(response.data.data.movies.edges);
      })
      .catch(error => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);


  if (movies.length == 0) {
    return <div style={{ textAlign: 'center' }}><h2>Loading...</h2></div>;
  }

  return (
    <div>

      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.node.id} id={movie.node.id} title={movie.node.originalTitleText.text} poster_path={movie.node.primaryImage.url} rating={movie.node.ratingsSummary.aggregateRating} />
        ))}
      </div>

    </div>
  );
};

export default Home;