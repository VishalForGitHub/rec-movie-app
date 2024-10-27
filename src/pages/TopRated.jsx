import React, { useEffect, useState } from 'react';
import '../styles/common.css'
import { topRated } from '../services/movieService';
import MovieCard from '../components/MovieCard'; 
import axios from 'axios';

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.request(topRated)
            .then(response => {
                setMovies(response.data.data.mainSearch.edges);
                // console.log(response.data.data.mainSearch.edges);
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
                    <MovieCard key={movie.node.entity.knownFor.edges[0].node.title.id} 
                    id={movie.node.entity.knownFor.edges[0].node.title.id}  
                    title={movie.node.entity.knownFor.edges[0].node.title.originalTitleText.text} 
                    poster_path={movie.node.entity.knownFor.edges[0].node.title.primaryImage.url}  
                    rating={movie.node.entity.knownFor.edges[0].node.title.ratingsSummary.aggregateRating}
                    />
                ))}
            </div>

        </div>
    );
};

export default TopRated;
