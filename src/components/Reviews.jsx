import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'TakeApi';

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
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'this film has not reviews'
      )}
    </>
  );
};
