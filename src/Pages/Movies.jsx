import React, { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import SearchBar from 'components/Form/SearchBar';
import { getSearchFilms } from 'Services/MovieApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        setLoading(true);
        const movies = await getSearchFilms(query);

        if (!movies.length) {
          setError('Sorry. There are no movies ... 😭');
          return;
        }
        setMovies(movies);
        setError('');
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // const setQueryFunc = fetchQuery => {
  //   if (query === fetchQuery) {
  //     console.log('Enter new request');
  //   }
  // };
  //

  return (
    <div>
      <SearchBar />
      {!loading && !error && movies && <MoviesList movies={movies} />}

      {loading && !error && <InfinitySpin width="200" color="#4fa94d" />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </div>
  );
};

export default Movies;
