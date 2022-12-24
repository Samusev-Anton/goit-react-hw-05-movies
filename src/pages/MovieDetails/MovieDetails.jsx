import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchId } from 'TakeApi';
import {
  Details,
  InfoFilm,
  MoreInfoFilm,
  MoreLink,
} from './MovieDetails.styled';

const imgBaceUrl = 'https://image.tmdb.org/t/p/w400';

export const MovieDetails = () => {
  const [infoFilm, setInfoFilm] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getInfoFilm = async () => {
      try {
        const responce = await fetchId(movieId);
        setInfoFilm(responce);
        console.log(responce);
      } catch (error) {}
    };
    getInfoFilm();
  }, [movieId]);

  if (infoFilm === '') {
    return;
  }

  const {
    poster_path,
    original_title,
    overview,
    release_date,
    genres,
    vote_average,
  } = infoFilm;

  const userScore = Math.ceil(vote_average * 10);
  const yearRelease = release_date.split('-')[0];

  return (
    <>
      <Details>
        <img src={`${imgBaceUrl}${poster_path}`} alt={original_title} />
        <InfoFilm>
          <h2>
            {original_title}({yearRelease})
          </h2>
          <p>User score: {userScore}%</p>
          <p>Owervies{overview}</p>
          <b>Genres</b>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </InfoFilm>
      </Details>
      <MoreInfoFilm>
        <MoreLink to="cast">Cast</MoreLink>
        <MoreLink to="reviews">Reviews</MoreLink>
      </MoreInfoFilm>
      <Outlet />
    </>
  );
};
