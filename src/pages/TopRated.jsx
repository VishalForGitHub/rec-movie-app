import React, { useEffect, useState } from 'react';
import '../styles/common.css'
import { topRated } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 7;

    const totalPages = Math.ceil(movies.length / moviesPerPage);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    useEffect(() => {
        axios.request(topRated)
            .then(response => {
                setMovies(response.data.data.movies.edges.slice(40,99));
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
                {currentMovies.map(movie => (
                    <MovieCard key={movie.node.id}
                        id={movie.node.id}
                        title={movie.node.originalTitleText.text}
                        poster_path={movie.node.primaryImage.url}
                        rating={movie.node.ratingsSummary.aggregateRating} />
                ))}
            </div>

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>

        </div>
    );
};

export default TopRated;
