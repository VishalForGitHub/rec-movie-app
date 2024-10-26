import React, { useEffect, useState } from 'react';
import '../styles/home.css'
import { options } from '../services/movieService';
import MovieCard from '../components/MovieCard';  // Assuming you have a MovieCard component
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.request(options)
      .then(response => {
        let dummy = [];
        // dummy.push(response.data.data.mainSearch.edges[0].node.entity.id);
        // dummy.push(response.data.data.mainSearch.edges[0].node.entity.originalTitleText.text);
        // dummy.push(response.data.data.mainSearch.edges[0].node.entity.primaryImage.url);
        // dummy.push(response.data.data.mainSearch.edges[0].node.entity.id);
        setMovies(response.data.data.movies.edges);
 
        //  console.log(response.data.data.movies.edges);

      })
      .catch(error => {
        console.error("Error fetching popular movies:", error);

      });
  }, []);

  return (
    <div>

      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.node.id} movie={movie} />
        ))}
      </div>

    </div>
  );
};

export default Home;