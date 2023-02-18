import axios from 'axios';
import defaultImg from '../img/zaglushka.jpg';

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
    poster_path: getPoster(poster_path),
    original_title,
    release_date: release_date.slice(0, 4),
    vote_average: vote_average.toFixed(1),
    overview,
    genres: genres.map(({ name }) => name).join(', '),
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
    profile_path: getPoster(profile_path),
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

const getPoster = url =>
  url ? 'https://image.tmdb.org/t/p/w500' + url : defaultImg;
