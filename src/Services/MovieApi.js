import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '2963fc82afd3cb57f64d050a1ba5935c';

export async function getPopularFilms() {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get('/trending/movie/day', { params });
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
}

export async function getSearchFilms(query) {
  const params = {
    query,
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get('/search/movie', { params });
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
}

export async function getFilmsById(id) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get(`/movie/${id}`, { params });
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;
  return {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  };
}

export async function getCreditsById(id) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get(`/movie/${id}/credits`, { params });
  const credits = data.cast.map(({ id, name, profile_path }) => ({
    id,
    name,
    profile_path,
  }));
  return credits;
}

export async function getReviewsById(id) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get(`/movie/${id}/reviews`, { params });
  const reviews = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  return reviews;
}
