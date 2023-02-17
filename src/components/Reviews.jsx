import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'Services/MovieApi';
import { InfinitySpin } from 'react-loader-spinner';
import { Author, Content, Notification } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const getReviews = async movieId => {
      try {
        setLoading(true);
        const reviews = await getReviewsById(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getReviews(movieId);
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 && (
        <Notification>We don't have reviews about this movie</Notification>
      )}
      {reviews && (
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
      {loading && <InfinitySpin width="200" color="#4fa94d" />}
    </>
  );
};

export default Reviews;
