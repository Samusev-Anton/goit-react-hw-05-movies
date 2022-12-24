import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'TakeApi';
import { CastBox } from './Cast.styled';
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
    <CastBox>
      {casts.map(({ name, profile_path, id }) => (
        <li key={id}>
          {profile_path ? (
            <img src={`${imgBaceUrl}${profile_path}`} alt={name} />
          ) : (
            <img
              src="https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
              alt="poster not found"
            />
          )}
          <p>{name}</p>
        </li>
      ))}
    </CastBox>
  );
};
