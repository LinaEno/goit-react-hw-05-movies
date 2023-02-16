import { useEffect, useState } from 'react';

import { getPopularFilms } from 'Services/MovieApi';

import TrendingLink from 'components/TrendingLink';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      const movies = await getPopularFilms();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!movies) return;
    getMovies();
  }, []);

  return (
    <>
      {!loading && (
        <div>
          <h1>Trending today</h1>
          <ul>
            {movies.map(({ id, original_title }) => {
              return <TrendingLink key={id} name={original_title} id={id} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
