import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { getPopularFilms } from 'Services/MovieApi';

import TrendingLink from 'components/TrendingLink';
import { Title } from 'components/Home.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movies) return;
    const getMovies = async () => {
      try {
        setLoading(true);
        const movies = await getPopularFilms();
        setMovies(movies);
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      {!loading && !error && movies && (
        <div>
          <Title>Trending today</Title>
          <ul>
            {movies.map(({ id, original_title }) => {
              return <TrendingLink key={id} name={original_title} id={id} />;
            })}
          </ul>
        </div>
      )}
      {loading && !error && <InfinitySpin width="200" color="#4fa94d" />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </>
  );
};

export default Home;
