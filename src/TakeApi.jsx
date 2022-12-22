import axios from 'axios';

const API_KEY = '27a76f0869afd59eafccef7d6d986c20';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `trending/movie/week`;
const SEARCH_URL = `search/movie`;
const ID_URL = `movie`;

axios.defaults.baseURL = `${BASE_URL}`;
export const fetchMovies = async () => {
  const responce = await axios.get(`/${TREND_URL}?api_key=${API_KEY}`);
  return responce.data;
};

export const fetchSearchedMovie = async searchName => {
  const responce = await axios.get(
    `/${SEARCH_URL}?api_key=${API_KEY}&query=${searchName}}`
  );
  return responce.data;
};

export const fetchId = async movieId => {
  const response = await axios.get(`/${ID_URL}/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchCast = async movieId => {
  const responce = await axios.get(
    `${ID_URL}/${movieId}/credits?api_key=${API_KEY}`
  );
  return responce.data;
};

export const fetchReviews = async movieId => {
  const responce = await axios.get(
    `${ID_URL}/${movieId}/reviews?api_key=${API_KEY}`
  );
  return responce.data;
};
