import { useEffect, useState } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { getFilmsById } from 'Services/MovieApi';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const getMovieById = async movieId => {
      try {
        const movieDetails = await getFilmsById(movieId);

        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <div>
            <NavLink to={location.state.from}>Go back</NavLink>
            <img
              src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path}
              alt={movieDetails.original_title}
            />
            <h2>
              {movieDetails.original_title}(
              {movieDetails.release_date.slice(0, 4)})
            </h2>
            <p>User score: {movieDetails.vote_average.toFixed(1)}</p>
            <p>Overview</p>
            <p>{movieDetails.overview}</p>
            <p>Genres</p>
            <p>{movieDetails.genres.map(({ name }) => name).join(' ,')}</p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
