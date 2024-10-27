import React, { useEffect, useState } from 'react';
import '../styles/common.css'
import { upcoming } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const Upcoming = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.request(upcoming)
            .then(response => {
                setMovies(response.data.data.topMeterTitles.edges);
                // console.log(response.data.data.topMeterTitles.edges);
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
                    <MovieCard key={movie.node.id}
                        id={movie.node.id}
                        title={movie.node.originalTitleText.text}
                        poster_path={movie.node.primaryImage.url}
                        rating={false}
                        rank={movie.node.meterRanking.currentRank}
                    />
                ))}
            </div>

        </div>
    );
};

export default Upcoming;