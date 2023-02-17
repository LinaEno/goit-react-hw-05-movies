import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { getPopularFilms } from 'Services/MovieApi';

import TrendingLink from 'components/TrendingLink';
import { Title } from 'components/Home.styled';

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
          <Title>Trending today</Title>
          <ul>
            {movies.map(({ id, original_title }) => {
              return <TrendingLink key={id} name={original_title} id={id} />;
            })}
          </ul>
        </div>
      )}
      {loading && <InfinitySpin width="200" color="#4fa94d" />}
    </>
  );
};

export default Home;
