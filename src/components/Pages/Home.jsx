import { useEffect, useState } from 'react';
import TrendingLink from 'components/TrendingLink';
import { getPopularFilms } from 'Services/MovieApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const movies = await getPopularFilms();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    if (!movies) return;
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, original_title }) => {
          return <TrendingLink key={id} name={original_title} id={id} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
