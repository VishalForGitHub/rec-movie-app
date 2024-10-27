import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/movieDetail.css';
import axios from 'axios';
import { fetchMovieDetailsById } from '../services/movieService';
const MovieDetail = () => {
    const { id } = useParams();
    // id= id.match(/ttd+/)[0];

    // const str = "/title/tt16366836/";
    console.log(id); // Output: "tt16366836"

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {


        fetchMovieDetailsById(id).
            then((res) => {
                setMovieDetails(res.data);
            }).
            catch(err => console.log(err));


    }, []);


    if (!movieDetails) {
        return <div style={{textAlign:'center'}}><h2>Loading...</h2></div>;
    }

    return (
        <div className="movie-detail-container">

            <div className="movie-detail-header">
                <img
                    className="movie-poster"
                    src={movieDetails.data.title.primaryImage.url}
                    alt={movieDetails.data.title.primaryImage.id}
                />
                <div className="movie-info">
                    <h2>{movieDetails.data.title.originalTitleText.text}</h2>
                    <p>Rating: {8.8}</p>
                    <p>Duration: {movieDetails.data.title.runtime.seconds} Sec</p>
                    <p>Release Year: {movieDetails.data.title.releaseYear.year}</p>
                    <p>Overview: Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis eius libero ea molestiae suscipit ipsa incidunt odio praesentium at.</p>
                </div>
            </div>

            <div className="movie-cast">
                <h3>Cast</h3>
                <div className="cast-grid">
                    <h4>Currently Unavailable</h4>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
