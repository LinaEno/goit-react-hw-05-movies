import React, { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import { getSearchFilms } from 'Services/MovieApi';
import TrendingLink from 'components/TrendingLink';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState('');

  useEffect(() => {
    if (query === '') return;
    const getMovies = async () => {
      try {
        const movies = await getSearchFilms(query);
        setMovies(prevMovies => [...prevMovies, ...movies]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getMovies();
  }, [query]);

  const setQueryFunc = fetchQuery => {
    if (query === fetchQuery) {
      console.log('Enter new request');
    }
    setQuery(fetchQuery);
  };

  return (
    <div>
      <SearchBar onSubmit={setQueryFunc} />
      <ul>
        {movies.map(({ id, original_title }) => {
          return <TrendingLink key={id} name={original_title} id={id} />;
        })}
      </ul>
    </div>
  );
};

export default Movies;
