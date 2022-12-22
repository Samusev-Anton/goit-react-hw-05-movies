import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchId } from 'TakeApi';

const imgBaceUrl = 'https://image.tmdb.org/t/p/w400';

export const MovieDetails = () => {
  const [infoFilm, setInfoFilm] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getInfoFilm = async () => {
      try {
        const responce = await fetchId(movieId);
        setInfoFilm(responce);
      } catch (error) {}
    };
    getInfoFilm();
  }, [movieId]);

  if (infoFilm === '') {
    return;
  }

  const { poster_path, original_title, overview, release_date, genres } =
    infoFilm;

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <img src={`${imgBaceUrl}${poster_path}`} alt={original_title} />
        <div>
          <h2>
            {original_title}
            {release_date}
          </h2>
          <p>Owervies{overview}</p>
          <p>Genres</p>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
