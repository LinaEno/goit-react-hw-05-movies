import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { getPopularFilms } from 'Services/MovieApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/Home/Home.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await getPopularFilms();
        setMovies(data);
        setError('');
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
          <MoviesList movies={movies} />
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
