import axios from 'axios';

//   async getFilmsByGenres() {
//     try {
//       const response = await axios2.get(
//         `/genre/movie/list?api_key=${KEY}&language=en-US`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getFilmsByName() {
//     try {
//       const response = await axios2.get(
//         `/search/movie?query=${this.searchQuery}&api_key=${KEY}&language=en-US&page=${this.page}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getFilmDetails(id) {
//     try {
//       const response = await axios2.get(
//         `/movie/${id}?api_key=${KEY}&language=en-US`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getFilmVideo(id) {
//     try {
//       const response = await axios2.get(
//         `/movie/${id}/videos?api_key=${KEY}&language=en-US`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getFilteredMovies() {
//     try {
//       const searchParams = new URLSearchParams({
//         api_key: KEY,
//         sort_by: 'popularity.desc',
//         page: this.page,
//         include_adult: false,
//         with_genres: this.genre,
//         primary_release_year: this.year,
//       });
//       const response = await axios2.get(
//         `/discover/movie?${searchParams}&vote_average.gte=${this.vote}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
// }

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

  return data;
}

export async function getCreditsById(id) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get(`/movie/${id}/credits`, { params });

  return data.cast;
}

export async function getReviewsById(id) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get(`/movie/${id}/reviews`, { params });

  return data.results;
}
