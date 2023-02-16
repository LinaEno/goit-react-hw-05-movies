import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'Services/MovieApi';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCredits = async movieId => {
      try {
        setLoading(true);
        const credits = await getCreditsById(movieId);
        setCredits(credits);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCredits(movieId);
  }, [movieId]);

  return (
    <>
      {credits.length === 0 && !loading && (
        <p>We don't have info about casts</p>
      )}
      {credits && !loading && (
        <ul>
          {credits.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={'https://image.tmdb.org/t/p/w500' + profile_path}
                  alt={name}
                />
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
