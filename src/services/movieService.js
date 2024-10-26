import axios from 'axios';

const API_KEY = '8d6f75e5c3msh26855937d514038p1793a5jsna4e21d4df0da';


// export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export const popular = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular',
  params: {
    first: '10',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};




export const topRated = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-interests',
  params: {
    tconst: 'tt0120338',
    first: '10',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': '8d6f75e5c3msh26855937d514038p1793a5jsna4e21d4df0da',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};








// // Function to clean up the ID (remove "/title/" and "/")
// const cleanMovieId = (rawId) => {
//   return rawId.replace("/title/", "").replace("/", "");
// };

// // Function to fetch details for a movie ID
// export const fetchMovieDetailsById = async (rawId) => {
//   const movieId = cleanMovieId(rawId);  // Clean the raw IMDb ID

//   const options = {
//     method: 'GET',
//     url: `https://imdb8.p.rapidapi.com/title/get-details`,
//     params: { tconst: movieId },  // Use cleaned IMDb ID
//     headers: {
//       'x-rapidapi-key': '8d6f75e5c3msh26855937d514038p1793a5jsna4e21d4df0da',  // Your API key
//       'x-rapidapi-host': 'imdb8.p.rapidapi.com'
//     }
//   };

//   try {
//     // const response = 
//     return await axios.request(options);
//     // console.log(response.data);
//   } catch (error) {
//     // console.error(`Error fetching details for movie ID ${movieId}:`, error);
//     throw error;
//   }
// };

// Example usage: Fetching details for a raw IMDb movie ID
// const rawMovieId = '/title/tt0111161/';  // Example of an ID with "/title/" and "/"
// fetchMovieDetailsById(rawMovieId).
// then((res)=>{
//    console.log(res.data);
// }).
// catch((err)=>console.log(err))
// ;

