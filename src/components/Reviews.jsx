import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'Services/MovieApi';
import { InfinitySpin } from 'react-loader-spinner';
import { Author, Content, Notification } from './Reviews.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async movieId => {
      try {
        setLoading(true);
        const reviews = await getReviewsById(movieId);
        setReviews(reviews);
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setLoading(false);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return (
    <>
      {reviews.length === 0 && (
        <Notification>We don't have reviews about this movie</Notification>
      )}
      {!loading && !error && reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </li>
            );
          })}
        </ul>
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

export default Reviews;
