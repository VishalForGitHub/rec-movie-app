import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/movieDetail.css';
import Casts from '../components/Casts';
import { fetchMovieDetailsById } from '../services/movieService';
import { getCastDetails } from '../services/movieService';
const MovieDetail = () => {
    const { rating,id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [castDetails, setCastDetails] = useState(null);
    useEffect(() => {

        const fetchData1 = async () => {
            try {
                const res = await fetchMovieDetailsById(id);
                setMovieDetails(res.data);
            } catch (error) {
                console.error("Error fetching data1:", error);
            }
        };


        const fetchData2 = async () => {
            try {
                const res = await getCastDetails(id);
                setCastDetails(res.slice(0, 6));
            } catch (error) {
                console.error("Error fetching data1:", error);
            }
        };

        fetchData1();
        fetchData2();
    }, []);


    if (!movieDetails) {
        return <div style={{ textAlign: 'center' }}><h2>Loading...</h2></div>;
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
                    <p id='rating'>⭐{rating}/10</p>
                    <p>Duration: {movieDetails.data.title.runtime.seconds} Sec</p>
                    <p id='release-year'>Release Year: {movieDetails.data.title.releaseYear.year}</p>
                    <p><h3>Overview:</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis eius libero ea molestiae suscipit ipsa incidunt odio praesentium at.</p>
                </div>
            </div>

            <div className="movie-cast">
                <h3 style={{marginLeft:'50px',marginBottom:'10px'}}>Cast's</h3>
                <div className="cast-grid">
                    {  castDetails!=null?
                    

                        castDetails.map((cast) => (
                            <Casts cast={cast}/>
                        ))
                        : <p>Loding.../Error</p>
                    
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
