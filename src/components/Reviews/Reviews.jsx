import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'TakeApi';
import { ReviewsItem } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const responce = await fetchReviews(movieId);
        setReviews(responce.results);
        console.log(responce.results);
      } catch (error) {}
    };
    getReviews();
  }, [movieId]);

  //   if (reviews.length === 0) {
  //     return;
  //   }

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <ReviewsItem key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ul>
      ) : (
        'this film has not reviews'
      )}
    </>
  );
};
