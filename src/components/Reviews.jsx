import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'Services/MovieApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const getReviews = async movieId => {
      try {
        const reviews = await getReviewsById(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getReviews(movieId);
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 && <p>We don't have reviews about this movie</p>}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
