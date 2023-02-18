import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'Services/MovieApi';
import { InfinitySpin } from 'react-loader-spinner';
import { CastList, CastItem } from './Cast.styled';
import { Notification } from '../Reviews/Reviews.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const getCredits = async movieId => {
      try {
        setLoading(true);
        const credits = await getCreditsById(movieId);
        setCredits(credits);
        setError('');
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setLoading(false);
      }
    };
    getCredits(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      {credits.length === 0 && !loading && !error && (
        <Notification>We don't have info about casts</Notification>
      )}
      {credits && !loading && !error && (
        <CastList>
          {credits.map(({ id, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <img src={profile_path} alt={name} width="300" />
                <p>{name}</p>
              </CastItem>
            );
          })}
        </CastList>
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

export default Cast;
