import React, { useEffect, useState } from 'react';
import '../styles/common.css'
import { topRated } from '../services/movieService';
// import { fetchMovieDetailsById } from '../services/movieService';
// import { delay } from '../services/movieService';
import MovieCard from '../components/MovieCard';  // Assuming you have a MovieCard component
import axios from 'axios';

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.request(topRated)
            .then(response => {
                setMovies(response.data.data.title.interests.edges);
                // console.log(response.data.data.title.interests.edges[0].node.id);
            })
            .catch(error => {
                console.error("Error fetching popular movies:", error);

            });
    }, []);

    return (
        <div>
            <h1>top rated</h1>
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.node.id} id={movie.node.id}  title={movie.node.primaryText.text} poster_path={movie.node.primaryImage.url}  />
                   
                ))}
            </div>

        </div>
    );
};

export default TopRated;



