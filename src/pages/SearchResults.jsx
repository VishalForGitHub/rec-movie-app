import React, { useEffect, useState } from 'react';
import '../styles/common.css'
import { searchMovieByName } from '../services/movieService';
import MovieCard from '../components/MovieCard'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const {query}=useParams();

  useEffect(() => {
          searchMovieByName(query).
           then(response=>{
                setMovies(response.data.results.slice(0,4));
           }).
           catch(err=>err)
  }, []);


  if (movies.length == 0) {
    return <div style={{ textAlign: 'center' }}><h2>Loading...</h2></div>;
  }

  return (
    <div>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id.match(/tt\d+/)[0]} 
          id={movie.id.match(/tt\d+/)[0]} 
          title={movie.title} 
          poster_path={movie.image.url} 
          rating={8.2} />
        ))}
      </div>

    </div>
  );
};

export default SearchResults;