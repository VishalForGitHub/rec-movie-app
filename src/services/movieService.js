import axios from 'axios';

const API_KEY = '8d6f75e5c3msh26855937d514038p1793a5jsna4e21d4df0da';
const BASE_URL = 'https://imdb8.p.rapidapi.com/v2/search';



// import axios from 'axios

// import axios from 'axios';

export const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/v2/get-popular',
  params: {
    first: '10',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': '8d6f75e5c3msh26855937d514038p1793a5jsna4e21d4df0da',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// export const getPopularMovies = (page = 1) =>{

//   axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
// }

// export const getTopRatedMovies = (page = 1) =>
//   axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);

// export const getUpcomingMovies = (page = 1) =>
//   axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);

// export const getMovieDetails = (movieId) =>
//   axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

// export const getMovieCast = (movieId) =>
//   axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

// export const searchMovies = (query, page = 1) =>
//   axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
