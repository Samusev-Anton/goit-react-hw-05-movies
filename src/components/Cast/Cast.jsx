import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'TakeApi';
import { CastBox } from './Cast.styled';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const [casts, setCast] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setError(false);
    setIsloading(false);
    const getCast = async () => {
      try {
        const responce = await fetchCast(movieId);
        setCast(responce.cast);
        setIsloading(true);
        // console.log(responce.cast);
      } catch (error) {
        setError(true);
      }
    };
    getCast();
  }, [movieId]);

  // if (casts.length === 0) {
  //   return;
  // }

  return (
    <>
      {error && <p>Ups! Something went wrong, try reloading the page</p>}
      {casts.length > 0 && isLoading ? (
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
      ) : (
        <p>Sorry. There is no information about actors</p>
      )}
    </>
  );
};

export default Cast;
