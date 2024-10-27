import axios from 'axios';

const API_KEY = '2c7a43366dmshbc53fb5cc708817p1a18c5jsn1cc24a6755ee';
//tani: '2c7a43366dmshbc53fb5cc708817p1a18c5jsn1cc24a6755ee';
//my: '8d6f75e5c3msh26855937d514038p1793a5jsna4e21d4df0da';
//shu: 843a6ee35amsh7dd72dd57a3f986p111526jsn01dce883
// export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export const popular = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular',
  params: {
    first: '15',
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
  url: 'https://online-movie-database.p.rapidapi.com/v2/search',
  params: {
    searchTerm: 'top rated',
    type: 'NAME',
    first: '15',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};



export const upcoming = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-top-meter',
  params: {
    topMeterTitlesType: 'ALL',
    first: '15',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};


export const fetchMovieDetailsById = async (movieId) => {
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-details',
    params: {
      tconst: movieId,
      country: 'US',
      language: 'en-US'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
    }
  };

  try {
    return await axios.request(options);
  } catch (error) {
    throw error;
  }
};




export async function searchMovieByName(movieName) {

  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/find',
    params: { q: movieName },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
    }
  };

  try {
    return await axios.request(options);
  } catch (error) {
    return error;
  }
}


export async function getCastDetails(movieId) {
  try {
    const response = await axios.get('https://online-movie-database.p.rapidapi.com/title/get-full-credits', {
      params: { tconst: movieId },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
      }
    });


    const castDetails = response.data?.cast?.map(member => ({
      name: member.name,
      character: member.characters ? member.characters.join(', ') : "N/A",
      image: member.image?.url || "No Image Available"
    }));


    return castDetails;
  } catch (error) {
    console.error("Error fetching cast details:", error);
  }
}
