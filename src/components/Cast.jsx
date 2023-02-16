import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'Services/MovieApi';
import { InfinitySpin } from 'react-loader-spinner';
import { CastList, CastItem } from './Cast.styled';

const defaultImg = new URL('../img/zaglushka.jpg', import.meta.url);

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
        <CastList>
          {credits.map(({ id, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w500' + profile_path
                      : defaultImg
                  }
                  alt={name}
                  width="300"
                />
                <p>{name}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
      {loading && <InfinitySpin width="200" color="#4fa94d" />}
    </>
  );
};

export default Cast;
