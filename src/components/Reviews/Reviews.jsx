import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'TakeApi';
import { ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const responce = await fetchReviews(movieId);
        setReviews(responce.results);
        setIsLoading(true);
        // console.log(responce.results);
      } catch (error) {
        setError(true);
      }
    };
    getReviews();
  }, [movieId]);

  //   if (reviews.length === 0) {
  //     return;
  //   }

  return (
    <>
      {error && <p>Ups! Something went wrong, try reloading the page</p>}
      {reviews.length > 0 && isLoading && !error ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <ReviewsItem key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ul>
      ) : (
        <p>'this film has not reviews'</p>
      )}
    </>
  );
};

export default Reviews;
