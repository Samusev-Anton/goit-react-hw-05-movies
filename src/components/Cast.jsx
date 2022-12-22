import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'TakeApi';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w200';

export const Cast = () => {
  const [casts, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const responce = await fetchCast(movieId);
        setCast(responce.cast);
        console.log(responce.cast);
      } catch (error) {}
    };
    getCast();
  }, [movieId]);

  if (casts.length === 0) {
    return;
  }

  return (
    <ul>
      {casts.map(({ name, profile_path, id }) => (
        <li key={id}>
          {profile_path ? (
            <img src={`${imgBaceUrl}${profile_path}`} alt={name} />
          ) : (
            <p>'no foto'</p>
          )}
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};
