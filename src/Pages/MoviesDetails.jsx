import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getFilmsById } from 'Services/MovieApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Details } from 'components/Details/Details';
import {
  ButtonBack,
  DetailsTitle,
  InfoLink,
} from 'components/Details/MovieDetails.styled';
import { InfinitySpin } from 'react-loader-spinner';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const [error, setError] = useState('');

  const backLink = location.state?.from;

  useEffect(() => {
    if (!movieId) return;
    const getMovieById = async movieId => {
      try {
        setLoading(true);
        const movieDetails = await getFilmsById(movieId);

        setMovieDetails(movieDetails);
        setError('');
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setLoading(false);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      {movieDetails && !loading && !error && (
        <div>
          <ButtonBack to={backLink}>Go back</ButtonBack>
          <Details movieDetails={movieDetails} />
          <div>
            <DetailsTitle>Additional information</DetailsTitle>

            <InfoLink to="cast" state={{ from: backLink }}>
              Cast
            </InfoLink>
            <InfoLink to="reviews" state={{ from: backLink }}>
              Reviews
            </InfoLink>

            <Outlet />
          </div>
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

export default MoviesDetails;
