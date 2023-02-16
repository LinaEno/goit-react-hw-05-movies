import React, { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import SearchBar from 'components/SearchBar';
import { getSearchFilms } from 'Services/MovieApi';
import TrendingLink from 'components/TrendingLink';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        setLoading(true);
        const movies = await getSearchFilms(query);
        setMovies(prevMovies => [...prevMovies, ...movies]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  const setQueryFunc = fetchQuery => {
    if (query === fetchQuery) {
      console.log('Enter new request');
    }
  };

  return (
    <div>
      <SearchBar onSubmit={setQueryFunc} />
      <ul>
        {movies.map(({ id, original_title }) => {
          return <TrendingLink key={id} name={original_title} id={id} />;
        })}
      </ul>
      {loading && <InfinitySpin width="200" color="#4fa94d" />}
    </div>
  );
};

export default Movies;
