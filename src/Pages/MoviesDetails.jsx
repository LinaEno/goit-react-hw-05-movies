import { useEffect, useState } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { getFilmsById } from 'Services/MovieApi';
import {
  ButtonBack,
  DetailsBox,
  DetailsText,
  DetailsTitle,
  InfoLink,
} from 'components/MovieDetails.styled';

const defaultImg = new URL('../img/zaglushka.jpg', import.meta.url);

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const getMovieById = async movieId => {
      try {
        setLoading(true);
        const movieDetails = await getFilmsById(movieId);

        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  return (
    <>
      {movieDetails && !loading && (
        <div>
          <ButtonBack to={location?.state?.from}>Go back</ButtonBack>
          <DetailsBox>
            <img
              src={
                movieDetails.poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path
                  : defaultImg
              }
              alt={movieDetails.original_title}
            />
            <div>
              <DetailsTitle>
                {movieDetails.original_title}(
                {movieDetails.release_date.slice(0, 4)})
              </DetailsTitle>
              <DetailsText>
                User score: {movieDetails.vote_average.toFixed(1)}
              </DetailsText>
              <DetailsText>Overview</DetailsText>
              <p>{movieDetails.overview}</p>
              <DetailsText>Genres</DetailsText>
              <p>{movieDetails.genres.map(({ name }) => name).join(' ,')}</p>
            </div>
          </DetailsBox>
          <div>
            <DetailsTitle>Additional information</DetailsTitle>

            <InfoLink to="cast" state={{ from: location?.state?.from }}>
              Cast
            </InfoLink>
            <InfoLink to="reviews" state={{ from: location?.state?.from }}>
              Reviews
            </InfoLink>

            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
